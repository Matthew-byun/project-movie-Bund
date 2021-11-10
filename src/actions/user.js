export const addNewUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}