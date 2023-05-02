import { useUserContext } from "../context/UserContext";
import {logout} from '../config/firebase.js'

const Dashboard = () => {

    const {user} = useUserContext();

    const handleLogout =async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error)
        }
      
    }


    return (
        <>
        <h1>DashBoard</h1>
        <h2>Welcome {user.email}</h2>
        <button onClick={handleLogout}>Logout</button>
        </>
    );
};

export default Dashboard;
