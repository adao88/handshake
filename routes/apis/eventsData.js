const express = require('express')
const {db} = require('../../db')
const bodyParser = require('body-parser');
const router = express.Router();
const app = express()

app.use(bodyParser.json());

//gets all registered events for a company
router.get('/get-companyEvents', (req, res) => {
    let co_id = req.session.userId
    console.log('inside of this route')
    db.query('SELECT * FROM events_students WHERE co_id = ?', [`${co_id}`], (error, results, fields) => {
        if (error) throw error

        console.log('Events results: ', results)
        res.send({
            events: results
        })
    })

    }
)

//get  all events for a company

router.get('/get-all-company-events', (req, res) => {
    let co_id = req.session.userId

    db.query('SELECT * FROM events_company WHERE co_id = ?', [`${co_id}`], (error, results, fields) => {
        if (error) throw error

        console.log('Events results: ', results)
        res.send({
            events: results
        })
    })


})


//gets all events for a student
router.get('/get-all-events', (req,res) => {
    db.query('SELECT * FROM events_company', (error, results, fields) => {
        if (error) throw error 
        console.log('events results: ', results)
        res.send({
            events: results
        })
    })

})


//get registered events for a user
router.get('/get-registered-events', (req, res) => {
    let student_id = req.session.userId

    db.query('SELECT * FROM events_students WHERE student_id = ?', [`${student_id}`], (error, results, fields) => {
        if (error) throw error
        console.log('registered events results: ', results)
        res.send({
            events: results
        })
    })
})

//apply to event, but checks eligibility first
router.post('/apply-to-event', (req, res) => {
    let student_id = req.session.userId
    let student_name = req.session.studentName
    let student_degree = req.session.degree

    let {
        co_name,
        eligibility,
        event_id,
        event_name,
        co_id,
        date,
        time
    } = req.body

    console.log('degree: ', student_degree)
    console.log('req body: ', req.body)

    let alreadyRegisteredResults

    if(!student_degree) {
        student_degree = ""
    }

    if (!eligibility || eligibility === 'All' || eligibility === 'all'){
        eligibility = student_degree.toLowerCase()
    }

    //check  eligibility
    db.query('SELECT * FROM events_company WHERE id = ?', 
    [`${event_id}`], (error, results, fields) => {
        console.log('event application query result: ', results)

        if(eligibility.toLowerCase() !== student_degree.toLowerCase()){
            console.log('eligibility do not match')
            res.send({
                message: "Sorry, you are not eligibile for this event"
            })

        }

        //check if already registered
        db.query('SELECT * FROM events_students WHERE student_id = ? AND event_id =?', [`${student_id}`, `${event_id}`],
            async (error, results, fields) => {
                if (error) throw error

                alreadyRegisteredResults = await results
                console.log('reg check: ', alreadyRegisteredResults)

            if(alreadyRegisteredResults.length >= 1){

                res.send({
                    message: 'You\'ve already registered for this'
                })
            } else if(alreadyRegisteredResults.length === undefined || alreadyRegisteredResults.length < 1 ) {
                console.log('eligibility match each other')
                
                db.query(`INSERT INTO events_students (co_name, event_id, event_name, co_id, date, time, student_name, student_id) 
                VALUES('${co_name}', '${event_id}', '${event_name}', '${co_id}', '${date}', '${time}', '${student_name}', '${student_id}')`,
                    (error, result) => {
                        if (error) throw error
                        console.log('result of regestering: ', result)
                        res.send({
                            message: 'Registered for Event'
                        })
                    }
                )
            } 
        })
    })
})

router.post('/create-event', (req,res) => {

    let co_id = req.session.userId

    let {name, 
        time,
        location,
        date,
        description,
        eligibility} = req.body

    let eventObj = {
        name, 
        time,
        location,
        date,
        description,
        eligibility
    }

    db.query(`INSERT INTO events_company (co_id, name, time, location, date, description, eligibility)
    VALUES('${co_id}', '${name}', '${time}', '${location}', '${date}', '${description}', '${eligibility}')`,
    (error, result) => {
        if (error) throw error
        res.send({
            message: "Event Created",
            event: eventObj 
        })
    })
})

module.exports = {
    eventsApiRouter: router
}