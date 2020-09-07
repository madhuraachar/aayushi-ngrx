const user = {
    email: 'madhurachar2@gmail.com',
    password: '123456'
}

const authenticate = (email, password) => {
    if(email === user.email && password === user.password) {
        return user;
    }else {
        return {error: 'Please enter valid email and password'}
    }
}

module.exports = {
    authenticate: authenticate
}