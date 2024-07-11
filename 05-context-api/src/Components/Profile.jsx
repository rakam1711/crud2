import {useContext} from 'react'
import UserContext from "../Context/UserContext"

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <div> user not exist </div>

    return <div> welcome : {user.username}</div>
}

export default Profile