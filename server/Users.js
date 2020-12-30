/**
 * This file contains helper functions that work with users in the chat room
 */

const users = [];

/**
 * Add to existing users when a new user joins the chat room
 * @param id A unique socket id
 * @param user The randomly assigned user name
 * @param school A school-specific chat room
 * 
 * @return void if successfully added a new user, else false
 */
const addUser = ({id, name, school}) => {
    // check if a user with the same name exists in a school-specific chat room
    const existingUser = users.find((user) => user.name === name && user.school === school);
    
    if(existingUser) {
        return false;
    }

    const user = {id, name, school};

    users.push(user);
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

module.exports = {addUser, removeUser};