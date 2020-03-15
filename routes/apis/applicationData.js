const express = require('express')
const {db} = require('../../db')
const bodyParser = require('body-parser');
const router = express.Router();
const app = express()

app.use(bodyParser.json());

router.post('/apply-to-job', (req, res) => {

    let {co_id, title, job_id, company} = req.body
    let student_id = req.session.userId
    let student_name = req.session.studentName
    
    let today = new Date().toLocaleDateString()

    db.query('SELECT * FROM jobs_students WHERE job_id = ? AND student_id = ?', 
    [`${job_id}`, `${student_id}`], (error, results, fields) => {
        if (error) throw error
        console.log('outer loop results: ', results)
        //console.log('results: ', results)
        if(results.length > 0) {
            res.send({
                message: 'You have already applied to this job'
            })
        } else {
            db.query(`INSERT INTO jobs_students (student_id, co_id, status, student_name, title, job_id, company) 
            VALUES('${student_id}', '${co_id}', 'Pending', '${student_name}', '${title}', '${job_id}', '${company}')`,
            (error, result) => {
                if(error) throw error 
                console.log('result inner loop:')
                res.send({
                    message: "Application Submitted"
                })
            })
        }
    })
})

router.get('/get-applications', (req, res) =>{

        let student_id = req.session.userId
        console.log('student_id: ', student_id)

        db.query('SELECT * FROM jobs_students WHERE student_id = ?',
        [`${student_id}`], (error, results, fields) => {
            if (error) throw error
            console.log('results: ', results)

            res.send({
                apps: results
            })
        })
})

module.exports = {
    applicationsApiRouter: router
}