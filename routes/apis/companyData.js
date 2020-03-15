const express = require('express')
const {db} = require('../../db')
const bodyParser = require('body-parser');
const router = express.Router();
const app = express()

app.use(bodyParser.json());

router.post('/get-company-profile', (req, res)=> {
    let id = req.session.userId

    console.log('Current user_id (from api): ', id)

    let companyInfo = {
        Basic: {},
        Contact: {}
    }

    db.query('SELECT * FROM company WHERE id = ?', [`${id}`], (error, results, fields) => {
        if (error) throw error

        let result = results[0]
        console.log('Company Profile results: ', result)

        companyInfo.Basic.name = result.name
        companyInfo.Basic.location = result.location
        companyInfo.Basic.description = result.description

        companyInfo.Contact.email = result.email_profile
        companyInfo.Contact.phone = result.phone
        companyInfo.Id = result.id

        res.send({
            ...companyInfo
        })

    })
})



router.post('/change-company-contact-info', (req,res) => {
    let id = req.session.userId

    let {email, phone} = req.body

    db.query("UPDATE company SET email_profile = ?, phone = ? WHERE id = ?",
    [email, phone, id], 
    (error, result) => {
        if(error) throw error
        console.log('result of updating basic company info in DB: ', result)
    })

    console.log('basic info change data: ', req.body)
    res.send({
        ...req.body
    })

})

router.post('/change-company-basic-info', (req, res) => {

    let id = req.session.userId

    let {name, location, description} = req.body

    db.query("UPDATE company SET name = ?, location = ?, description = ? WHERE id = ?",
    [name, location, description, id], 
    (error, result) => {
        if(error) throw error
        console.log('result of updating basic company info in DB: ', result)
    })

    console.log('basic info change data: ', req.body)
    res.send({
        ...req.body
    })

})


module.exports = {
    companyApiRouter: router
}