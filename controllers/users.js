
let users = []; 
const { uuid } = require('uuidv4');

const getUsers = (req, res) => {
    res.send(users || 'couldnt fetch'); 
}

const createUser = (req, res) => {
    const user = req.body; 
    const userId = uuid(); 
    const userWithID = {...user, id : userId}; 

    users.push(userWithID); 
    
    res.status(200).json({
        msg : 'successful'
    })
}

const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id); 
    res.send(foundUser)
}


const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id); 
    res.send('deleted')
}

const updateUser = (req, res) => {
    const { id } = req.params;
    const {firstName, lastName, age} = req.body
    const user = users.find((user) => user.id == id); 

    if(firstName){
        user.firstName = firstName
    }

    if(lastName){
        user.lastName = lastName; 
    }

    if(age){
        user.age = age; 
    }

    res.send('user has been updated');
}

module.exports = {
    getUsers, 
    updateUser, 
    deleteUser, 
    createUser, 
    getUser
}