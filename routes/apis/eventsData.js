const express = require('express')
const {db} = require('../../db')
const bodyParser = require('body-parser');
const router = express.Router();
const app = express()

app.use(bodyParser.json());


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

router.post('/create-event', (req,res) => {

    let co_id = req.session.userId

    let {name, 
        time,
        location,
        date,
        description,
        eligibility} = req.body

    db.query(`INSERT INTO events_company (co_id, name, time, location, date, description, eligibility)
    VALUES('${co_id}', '${name}', '${time}', '${location}', '${date}', '${description}', '${eligibility}')`,
    (error, result) => {
        if (error) throw error
        res.send({
            message: "Event Created"
        })
    })
})

module.exports = {
    eventsApiRouter: router
}