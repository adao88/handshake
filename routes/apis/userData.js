const express = require('express')
const {db} = require('../../db')
const bodyParser = require('body-parser');
const router = express.Router();
const app = express()

app.use(bodyParser.json());


//query DB with  user_id
router.post('/get-user-profile/', (req, res) => {

    let id = req.session.userId
    
    console.log('Current user_id (from api): ', id)

    let userInfo = {
        Basic: {},
        Education: [],
        Skillset: {},
        Experience: [],
        Id: ''
    }

    db.query('SELECT * FROM Users WHERE id = ?', [`${id}`], (error, results, fields) => {
        
        if(error) {
            console.log('error: ', error)
            res.send({
                message: 'query failed'
            })
        }

        let result = results[0]
        console.log('results: ', result)
        userInfo.Basic.name = result.name
        userInfo.Basic.birthdate = result.birthdate
        userInfo.Basic.location = result.location
        userInfo.Basic.email = result.email_profile
        userInfo.Basic.phone = result.phone
        userInfo.Basic.objective = result.objective
        userInfo.Basic.degree = result.degree
        userInfo.Skillset.skills = result.skillset
        userInfo.Id = result.id

        //console.log('results: ', result)

        db.query(`SELECT * FROM Education WHERE user_id = ?`, [`${id}`], (error, results, fields) => {
            userInfo.Education = results
            console.log('education results (from get-user-profile): ', results)
            
        
            
            db.query("SELECT * FROM experience WHERE user_id = ?", [`${id}`], (error, results, fields) => {

                userInfo.Experience = results
                console.log('experience results (from get-user-profile): ', results)
                console.log('new user info: ', userInfo)
            
                res.send({
                    ...userInfo
                })

            })
        })
    })
})

router.post('/change-basic-info', (req, res) => {
    let id = req.session.userId

    let {birthdate, location, objective, email, phone, degree} = req.body

    db.query("UPDATE Users SET birthdate = ?, location = ?, email_profile = ?, objective = ?, phone = ?, degree = ? WHERE id = ?",
    [birthdate, location, email, objective, phone, degree, id ],
    (error, result) => {
            if (error) throw error
            console.log('result of updating basic info in db:', result)
        })


    console.log('basic info change data: ', req.body)
    res.send({
        ...req.body
    })
})

router.post('/change-skills-info', (req, res) => {
    let id = req.session.userId

    let {skillset} = req.body

    console.log('skillset body: ', req.body)
    

    db.query("UPDATE users SET skillset = ? WHERE id = ?",
    [skillset, id],
    (error, result) => {
        if (error) throw error
            res.send({
                skills: skillset
            })
    })
})

router.post('/add-experience', (req,res) => {
    let {company, title, location, dates, description, user_id} = req.body
    
    db.query(`INSERT INTO experience (company, title, location, dates, description, user_id) 
    VALUES ('${company}', '${title}', '${location}', '${dates}', '${description}', '${user_id}')`, (error, result) => {
        if (error) throw error
        console.log('Added Experience info')

        db.query(`SELECT * FROM experience WHERE user_id = ?`, [`${user_id}`], (error, results, fields) => {
            if(error) throw error
            console.log('Updated Experience List: ', results)
            res.send({
                Experience: results
            })
        }) 
    })
})

router.post('/add-education', (req,res) => {
    let {schoolname, degree, location, dates, gpa, user_id} = req.body
    
    db.query(`INSERT INTO Education (schoolname, degree, location, dates, gpa, user_id) VALUES ('${schoolname}', '${degree}', '${location}', '${dates}', '${gpa}', '${user_id}')`, (error, result)=> {
        if(error) throw error
        console.log('Added Education info')
    
        db.query(`SELECT * FROM Education WHERE user_id = ?`, [`${user_id}`], (error, results, fields) => {
            if(error) throw error
            console.log('Updated Education List: ', results)
            res.send({
                Education: results
            })
        })   
    })
})

router.post('/edit-experience', (req, res) => {
    let {company, title, location, dates, description, id} = req.body
    let user_id = req.session.userId
    console.log('Editing Experience id: ', id)

    db.query("UPDATE experience SET company = ?, title = ?, location = ?, dates = ?, description = ? WHERE id = ?",
    [company, title, location, dates, description, id],
    (error, result) => {
        if(error) throw error
        console.log('Edited Experience Info')

        db.query(`SELECT * FROM experience WHERE user_id = ?`, [`${user_id}`], (error, results, fields) => {
            if (error) throw error
            console.log('Newly Edited Experience List: ', results)
            res.send({
                Experience: results
            })
        })
    })

})

router.post('/edit-education', (req, res) => {
    let {schoolname, degree, location, dates, gpa, id} = req.body
    let user_id = req.session.userId
    console.log('Editting education id: ', id)

    db.query("UPDATE Education SET schoolname = ?, degree = ?, location = ?, dates = ?, gpa = ? WHERE id = ?",
    [schoolname, degree, location, dates, gpa, id],
    (error, result) => {
        if (error) throw error
        console.log('Edited Education Info')

        db.query(`SELECT * FROM Education WHERE user_id = ?`, [`${user_id}`], (error, results, fields) => {
            if(error) throw error
            console.log('Edited Education List: ', results)
            res.send({
                Education: results
            })
        })   
    
    })
})

router.post('/delete-experience', (req, res) => {
    let id = req.body.id
    let user_id = req.session.userId

    db.query('DELETE FROM experience WHERE id = ?', id, (error, results, fields) => {
        if (error) throw error
        console.log(`Deleting Experience with id: ${id}`)
        
        db.query(`SELECT * FROM experience WHERE user_id = ?`, [`${user_id}`], (error, results, fields) => {
            if(error) throw error
            console.log('Updated Experience List: ', results)
            res.send({
                Experience: results
            })
        }) 
    })
})

router.post('/delete-education', (req, res) => {
    let id = req.body.id
    let user_id = req.session.userId

    db.query('DELETE FROM Education WHERE id = ?', id, (error, results, fields) => {
        if (error) throw error
        console.log(`Deleting Education with id: ${id}`)
        
        db.query(`SELECT * FROM Education WHERE user_id = ?`, [`${user_id}`], (error, results, fields) => {
            if(error) throw error
            console.log('Updated Education List: ', results)
            res.send({
                Education: results
            })
        }) 
    })
})

router.get('/get-student-list', (req,res) => {

    db.query('SELECT * FROM users', (error, results, fields) => {
        if (error) throw error
        console.log('Fetched student list: ', results)

        res.send({
            Students: results
        })
    })
})

router.post('/get-student-page', (req, res) => {
    let {id} = req.body

    db.query('SELECT * FROM users WHERE id = ?', [`${id}`], (error, results, fields) => {
        let result = results[0]
        res.send({...result})

    })
})




module.exports = {
    userApiRouter: router
}
