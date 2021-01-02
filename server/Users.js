/**
 * This file contains helper functions that work with users in the chat room
 */
const users = []; // An array to store existing users, where each user is {socket id, name, school}
const animals = new Map([
    [0, 'Cat'], 
    [1, 'Dog'],
    [2, 'Python'],
    [3, 'Lion'],
    [4, 'Tiger'],
    [5, 'Bat'],
    [6, 'Salmon'],
    [7, 'Bull'],
    [8, 'Eagle'],
    [9, 'Apoorv']
]); // A map of animals that is used to assign to a user

/**
 * Add to existing users when a new user joins the school-spcific chat room
 * @param id A unique socket id
 * @param user The randomly assigned user name
 * @param school A school-specific school-specific chat room
 * 
 * @return void if successfully added a new user, else error
 */
const addUser = ({id, name, school}) => {
    name = animals.get(Math.floor(Math.random() * 10)) + ' ' + Math.floor(Math.random() * 10); // initial user name assgin

    // check if a user with the same name exists in a school-specific chat room
    let existingUser = users.find((user) => user.name === name && user.school === school);
    // reassign a new random user name if user name alredy exists
    while(existingUser) {
        name = animals.get(Math.floor(Math.random() * 10)) + ' ' + Math.floor(Math.random() * 10); 
        existingUser = users.find((user) => user.name === name && user.school === school);
    }

    const user = {id, name, school};

    users.push(user);

    return {user};
}

/**
 * Remove an existing user from the room when that user leaves
 * @param {*} id The unique id that identifies the user
 */
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

/**
 * Find an existing user
 * @param {*} id 
 */
const getUser = (id) => users.find((user) => user.id === id);

/**
 * Get all the existing users in a school-specific chat room
 * @param {*} school a school-specific chat room
 * 
 * @return a array of users in a school chat room
 */
const getUsersInSchool = (school) => users.filter((user) => user.school === school);

module.exports = { addUser, removeUser, getUser, getUsersInSchool };