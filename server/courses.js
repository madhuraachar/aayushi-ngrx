const courses = [
    { 
        id: 1, 
        name: 'Complete python bootcamp 2020', 
        img:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/online-3412473_1920_1.jpeg?tz.RfsTe_UTLHiDqxmpG7PY_nTIBjwF7', 
        duration: '30 hours'
    },
    { 
        id: 2, 
        name: 'Angular from scratch', 
        img:'https://rangleio.ghost.io/content/images/2018/05/Angular_6_and_Beyond-1.png', 
        duration: '20 hours'
    },
    { 
        id: 3, 
        name: 'Angular Rxjs', 
        img:'https://rangleio.ghost.io/content/images/2018/05/Angular_6_and_Beyond-1.png',
        duration: '7 hours'
    },
    { 
        id: 4, 
        name: 'React Js', 
        img:'https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png', 
        duration: '34 hours'
    },
    { 
        id: 5, 
        name: 'Ngrx', 
        img:'https://miro.medium.com/max/1007/1*hj71wy_fVD1qIG8q9mnPjg.png', 
        duration: '6.5 hours'
    },
    { 
        id: 6, 
        name: 'Redux', 
        img:'https://i1.wp.com/cdn-images-1.medium.com/max/1600/1*Vo5RDpNkOsfDn8sx06mthA.png?ssl=1', duration: '3 hours'
    },
    { 
        id: 7, 
        name: 'SASS', 
        img:'https://cdn.mos.cms.futurecdn.net/kTHdjDARSF9AcHpWn68sTc.jpg', 
        duration: '12 hours'
    }
]

//get all courses
getCourses = () => {
    return courses;
}

//get course by id
getCourseById = (id) => {
    let course = courses.find(el => el.id === id);
    if(course) {
        return course;
    }else {
        return {error: 'not found'}
    }
}

//update course
updateCourse = (course) => {
   const index = courses.findIndex(el => el.id === course.id);
   if(index != -1) {
       courses[index] = course;
       return courses;
   }else {
       return {error: 'not found'}
   }
}


//delete course
deleteCourseById = (id) => {
    const index = courses.findIndex(el => el.id === id);
    console.log(index)
    if(index != -1) {
        courses.splice(courses.findIndex(el => el.id === id), 1);
        return courses;
    }else {
        return {error: 'not found'}
    }
}

const addNewCourse = (course) => {
    let lastId = Math.max.apply(null, courses.map(el => el.id))
    course.id = lastId + 1;
    courses.unshift(course); //insert at the start
    console.log(courses)
    return courses;
}
module.exports = {
    getCourses: getCourses,
    updateCourse: updateCourse,
    deleteCourseById: deleteCourseById,
    addNewCourse: addNewCourse
}