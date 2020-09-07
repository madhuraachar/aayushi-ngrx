const express = require('express');
const bodyParse = require('body-parser');
const courses = require('./courses');
const user = require('./user');


const app =  express();
app.use(bodyParse.json({extended: true}))

app.get('/api/courses', (req, res) => {
    console.log('----------Courses--------------')
    res.send(courses.getCourses())
})

app.post('/api/courseUpdate', (req, res) => {
    console.log("---------------update-------------")
    res.send(courses.updateCourse(req.body))
})

app.post('/api/deleteCourse/:id', (req, res) => {
    console.log('-----------delete------------')
    const id = parseInt(req.params.id, 10)
    res.send(courses.deleteCourseById(id))
})
app.post('/api/addNewCourse', (req, res) => {
    console.log('------------New Coures----------')
    res.send(courses.addNewCourse(req.body))
})

//login
app.post('/api/login', (req, res) => {
    console.log('-----------login----------')
    res.send(user.authenticate(req.body.email, req.body.password))
})

app.listen(3000, () => {
    console.log("server started at 3000")
})