import { useUserContext } from "../context/UserContext";

const Dashboard = () => {

    const {user} = useUserContext();


    return (
        <>
        <h1>DashBoard</h1>
        <h2>Welcome {user.email}</h2>
        </>
    );
};

export default Dashboard;
