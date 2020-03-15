const bcrypt = require('bcryptjs')
const express = require('express')
const {db} = require('../db')
const bodyParser = require('body-parser');


const router = express.Router();
const app = express()


app.use(bodyParser.json());



router.post('/register', (req, res) => {
    console.log('req is', req.body)
    let email = req.body.email
    let password = req.body.password
    let name = req.body.name
    let schoolName = req.body.schoolName
    let degree = req.body.degree

    db.query('SELECT * FROM Users WHERE email = ?', [email], (error, results, fields) => {
        if (error) {
            console.log(error)
        }
        else if (results.length > 0){
            res.send({
                message: "email already taken"
            })
        } else {
            console.log('inserting into DB...')
            bcrypt.hash(password, 10, function(err, hash) {
                let stringHash = hash.toString()
                db.query(`INSERT INTO Users (email, password, name, schoolname, email_profile, degree) VALUES ('${email}', '${stringHash}', '${name}', '${schoolName}', '${email}', '${degree}')`, (err, result) => {
                    if (err) {
                        console.log(err)
                    } 
                    db.query('SELECT * FROM Users WHERE email = ?', [email], (error, results, fields) => {
                        if (err) console.log(err)

                        console.log('results: ', results[0])
                        
                        let user_id = results[0].id
                        let user_email = results[0].email

                        res.cookie('cookie',"Student", {maxAge: 900000, httpOnly: false, path : '/'})
                        req.session.userId = user_id
                        if(!req.session.user){
                            console.log('no user session')
                        } else {
                            console.log(`Session with ${user_email} with ${req.session.user}`)
                        }
                        res.send({
                            message: 'registered student',
                            results: results
                        })
                    })
                })
            })
        }
    })
})

router.post('/company-register', (req, res) => {
    console.log('req is: ', req.body)
    let email = req.body.email
    let password = req.body.password
    let name = req.body.name

    db.query('SELECT * FROM Company WHERE email = ?', [email], (error, results, fields) => {
        if (error) {
            console.log(error)
        }
        else if (results.length > 0){
            res.send({
                message: "email already taken"
            })
        } else {
            console.log('inserting into DB...')
            bcrypt.hash(password, 10, function(err, hash) {
                let stringHash = hash.toString()
                db.query(`INSERT INTO Company (email, password, name) VALUES ('${email}', '${stringHash}', '${name}')`, (err, result) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.send({
                            message: "Registered Company!"
                        })
                    }
                })
            })
        }
    })
})

router.post('/login', (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let queryResults

    db.query('SELECT * FROM Users WHERE email = ?', [email], async (error, results, fields) => {
        if (error) throw err
        
            queryResults = await results

            console.log('test query results: ', queryResults)

            console.log('email check result: ', results)
            if(queryResults.length === 0) {
                res.send({
                    message: "Login failed. Email not Found"
                })
            }
            if(queryResults.length > 0) {
                let user_id = results[0].id
                let hash = results[0].password
                console.log('query results: ', results[0])



                bcrypt.compare(password, hash, (err, result) => {
                    console.log('Bcrypt result: ', result)
                    if (result){
                        

                        req.session.userId = user_id
                        req.session.studentName = results[0].name
                        req.session.degree = results[0].degree

                        console.log(req.session.userId)
                        res.cookie('Student-Logged',"user", {maxAge: 900000, httpOnly: false, path : '/'})
                        res.send({
                            login: 'Success',
                            message: `Session with ${email} with ${req.session.userId}`,
                            id: req.session.userId
                        })
                    } else {
                        res.send({
                            login: 'Failed',
                            message: 'Login Failed. Incorrect Password'
                        })
                    }
                })
            }
        
    })
})

router.post('/company-login',  (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let queryResults

    db.query('SELECT * FROM Company WHERE email = ?', [email], async (error, results, fields) => {
        if (error) throw err


        queryResults = await results 

        console.log('email check result: ', results)
        if(queryResults.length === 0)
            res.send({
                message: "Login Failed. Unable to find email."
            })

        if(queryResults.length > 0) {
            let user_id = results[0].id
            let hash = results[0].password
            console.log('query results: ', results[0])

            bcrypt.compare(password, hash, (err, result) => {
                console.log('Bcrypt result: ', result)
                if (result){

                    req.session.userId = user_id
                    req.session.company_name = results[0].name
                    
                    res.cookie('Company-Logged',"Company", {maxAge: 900000, httpOnly: false, path : '/'})
                    res.send({
                        message: `Session with ${email} with ${req.session.userId}`,
                        id: req.session.userId
                    })
                } else {
                    res.send({
                        message: 'Login Failed. Incorrect Password'
                    })
                }
            })
        }
    })
})

router.post('/logout', (req, res) => {
    res.clearCookie('cookie')
    res.clearCookie('Student-Logged')
    res.clearCookie('Company-Logged')
    let id = req.session.userId
    res.clearCookie('connect.sid')
    req.session.destroy((err) =>{
        res.send({
            message: "logging out",
            sessionCheck: id
        })
    })
})

module.exports = {
    userRouter: router
}


