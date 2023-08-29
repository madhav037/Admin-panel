const database = [
    {
        emailNumber : "m@gmail.com",
        password : "123123123"
    },
    {
        emailNumber : "",
        password : "12121212"
    }
]

module.exports = function checkLoginDetails(emailNumber, password) {
    if (emailNumber === database[0].emailNumber && password === database[0].password) {
        return true
    }
    return false
}

