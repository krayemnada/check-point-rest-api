import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions";
import UserCard from "../userCard/UserCard";
import AddNewUser from "../addNewUser/AddNewUser";

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
            <h1 className="title">
                This all students of groupe F1 in GoMyCode{" "}
            </h1>
            {loading ? (
                <h1>Loading ...</h1>
            ) : (
                React.Children.toArray(
                    users.map((el) => <UserCard user={el} />)
                )
            )}
            <AddNewUser />
        </div>
    );
};

export default UserList;
