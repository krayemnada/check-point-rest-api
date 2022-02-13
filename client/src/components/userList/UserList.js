import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions";
import UserCard from "../userCard/UserCard";
import AddNewUser from "../addNewUser/AddNewUser";
import axios from "axios";
import Navbar from "../navbar/Navbar";
const UserList = () => {
    const { loading, users } = useSelector((state) => state);
    const dispatch = useDispatch();
    // const [users, setUsers] = useState([]);
    useEffect(() => {
        dispatch(getUser());
        // axios
        //     .get("/users/get")
        //     .then((res) => setUsers(res.data))
        //     .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            <Navbar />
            <AddNewUser />
            {loading ? (
                <h1>Loading ...</h1>
            ) : (
                React.Children.toArray(
                    users.map((el) => <UserCard user={el} />)
                )
            )}
        </div>
    );
};

export default UserList;
