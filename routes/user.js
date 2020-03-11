const bcrypt = require('bcryptjs')
const express = require('express')
const {db} = require('../db')
//const session = require('express-session')
const cookieParser = require('cookie-parser')
//const passport = require('passport')
const bodyParser = require('body-parser');


const router = express.Router();
const app = express()


app.use(bodyParser.json());


router.post('/register', (req, res) => {
    console.log('req is', req.body)
    let email = req.body.email
    let password = req.body.password
    let name = req.body.name

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
                db.query(`INSERT INTO Users (email, password, name) VALUES ('${email}', '${stringHash}', '${name}')`, (err, result) => {
                    if (err) {
                        console.log(err)
                    } 
                    db.query('SELECT * FROM Users WHERE email = ?', [email], (error, results, fields) => {
                        if (err) console.log(err)

                        console.log('results: ', results[0])
                        
                        let user_id = results[0].id
                        let user_email = results[0].email

                        const user = {
                            id: user_id,
                            email: user_email
                        }

                        res.cookie('cookie',"Student", {maxAge: 900000, httpOnly: false, path : '/'})
                        req.session.user = user_email
                        if(!req.session.user){
                            console.log('no user session')
                        } else {
                            console.log(`Session with ${user_email}`)
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

    db.query('SELECT * FROM Users WHERE email = ?', [email], (error, results, fields) => {
        if (error) throw err

        let user_id = results[0].id
        let hash = results[0].password
        console.log('query results: ', results[0])

        bcrypt.compare(password, hash, (err, result) => {
            console.log('Bcrypt result: ', result)
            if (result){
                req.session.user = email
                res.cookie('Logged-In',"user", {maxAge: 900000, httpOnly: false, path : '/'})
                res.send({
                    message: `Session with ${email}`
                })
            } else {
                res.send({
                    message: 'Login Failed'
                })
            }
        })

    })
})

router.post('/company-login', (req, res) => {
    let email = req.body.email
    let password = req.body.password

    db.query('SELECT * FROM Company WHERE email = ?', [email], (error, results, fields) => {
        if (error) throw err

        let user_id = results[0].id
        let hash = results[0].password
        console.log('query results: ', results[0])

        bcrypt.compare(password, hash, (err, result) => {
            console.log('Bcrypt result: ', result)
            if (result){
                req.session.user = email
                res.cookie('Logged-In',"Company", {maxAge: 900000, httpOnly: false, path : '/'})
                res.send({
                    message: `Session with ${email}`
                })
            } else {
                res.send({
                    message: 'Login Failed'
                })
            }
        })

    })
})

router.post('/logout', (req, res) => {
    res.clearCookie('cookie')
    res.clearCookie('Logged-In')
    res.send({
        message: "logging out"
    })
})

module.exports = {
    userRouter: router,
    //passport
}


