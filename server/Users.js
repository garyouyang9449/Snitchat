/**
 * This file contains helper functions that work with users in the chat room
 */

const users = [];

/**
 * Add to existing users when a new user joins the school-spcific chat room
 * @param id A unique socket id
 * @param user The randomly assigned user name
 * @param school A school-specific school-specific chat room
 * 
 * @return void if successfully added a new user, else error
 */
const addUser = ({id, name, school}) => {
    // check if a user with the same name exists in a school-specific chat room
    const existingUser = users.find((user) => user.name === name && user.school === school);
    
    if(existingUser) {
        return {error: 'Uesr name already exists'};
    }

    const user = {id, name, school};

    users.push(user);

    return {user};
}

/**
 * Remove an existing user in the room when that user leaves
 * @param {*} id The unique id that identifies the user
 */
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

/**
 * Finds an existing user
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