
const UserList = {
    list: [],
    username: 'Hello',
    password: ''

}

const userReducer = (state = UserList, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            const newUserList = [...state.list];
            newUserList.push(action.payload)
            return {
                ...state,
                list: newUserList,
                
            }
            
        }
        default:
            return state;
    }
}

export default userReducer