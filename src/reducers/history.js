
const initialState = {
    list: [1,2],
    activeId: null
}

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MOVIE': {
            return state;
        }
        default:
            return state;
    }
}

export default historyReducer