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
    jobPostsApiRouter: router
};