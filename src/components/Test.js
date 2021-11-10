import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addNewUser } from "../actions/user";


function TestPage (props){

    const UserList = useSelector(state => state.user.list)
    console.log(UserList)
    const dispatch = useDispatch()

    const handleAddUserClick =  () => {

        const newUser = {
            username: 'hello',
            password: 1
        }
        const action = addNewUser(newUser)
        dispatch(action)
        
    }
    


    return (
        <div className="container">
            <h1>JAHGKJHAGJKHAGKJHAKJGH</h1>
            <button onClick={handleAddUserClick}>Click</button>
    </div>
    )
}

export default TestPage;
