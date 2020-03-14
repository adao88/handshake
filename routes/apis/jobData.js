const express = require('express')
const {db} = require('../../db')
const bodyParser = require('body-parser');
const router = express.Router();
const app = express()

app.use(bodyParser.json());



router.get('/get-job-post-page', (req, res) => {

    let jobPageInfo = {
        JobsPosted: [],
        JobsApplied: []
    }

    let co_id = req.session.userId
    console.log('session id check: ', co_id)

    db.query('SELECT * FROM jobs WHERE co_id = ?', [`${co_id}`], (error, results, fields) => {
        if (error) throw error
        
        jobPageInfo.JobsPosted = results
        console.log('job results: ', results)

        db.query('SELECT * FROM jobs_students WHERE co_id = ?', [`${co_id}`], (error, results, fields) => {
            if (error) throw error

            jobPageInfo.JobsApplied = results

            res.send({
                ...jobPageInfo
            })
        })
    })
})

router.post('/post-new-job', async (req, res) => {
    console.log('inside job post route')
    let co_id = req.session.userId
    
    let {title, deadline, date, location, salary, description, category} = req.body

    db.query(`INSERT INTO jobs (title, deadline, date, location, salary, description, category, co_id)
    VALUES ('${title}', '${deadline}', '${date}', '${location}', '${salary}', '${description}', '${category}', '${co_id}')`,
    (error, result) => {
        console.log('result from inserting (outer loop): ', result)
        if (error) throw error
        console.log('Posting New Job with co_id: ', co_id)
        db.query('SELECT * FROM jobs WHERE co_id = ?', [`${co_id}`], (error, results, fields) => {
            if (error) throw error
            console.log('results from selecting (inner loop): ', results)
            res.send({
                JobsPosted: results
            })
        })
        
    })
    
})

router.post('/update-job-status', (req, res) => {

    let co_id = req.session.userId

    let {job_id, newStatus} = req.body

    db.query("UPDATE jobs_students SET status = ? WHERE id = ?", 
    [`${newStatus}`,`${job_id}`],
    (error, result) => {
        if (error) throw error
        console.log('Updated Job Status')

        db.query(`SELECT * FROM jobs_students WHERE co_id = ?`, [`${co_id}`],
        (error, results, fields) => {
            if (error) throw error
            console.log('Updated Applied Jobs list: ', results)
            res.send({
                JobsApplied: results
            })
        })
    })
})

router.post('/apply-to-job', (req, res) => {

    let {co_id, title, job_id} = req.body
    let student_id = req.session.userId
    let student_name = req.session.studentName
    let data = {
        co_id, title, job_id, student_id, student_name
    }

    console.log('data: ', data)
    console.log('session data: ', req.session)


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
            db.query(`INSERT INTO jobs_students (student_id, co_id, status, student_name, title, job_id) VALUES('${student_id}', '${co_id}', 'Pending', '${student_name}', '${title}', '${job_id}')`,
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

router.get('/get-job-list', (req, res) => {

    console.log('session id check: ', req.session.userId)

    db.query('SELECT * FROM jobs', (error, results, fields) => {
        if (error) throw error 
        res.send({
            Jobs: results
        })
    })
})

module.exports = {
    jobPostsRouter: router
};