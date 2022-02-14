import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../../redux/actions";
import EditUser from "../editUser/EditUser";
import "./UserCard.css";

const UserCard = ({ user }) => {
    const dispatch = useDispatch();
    return (
        <div className="users">
            <div className="card">
                <div>
                    <img src={user.image} alt="image" className="img" />
                    <Link to={`/detail/${user._id}`}>
                        {" "}
                        <h5 className="user1">{user.name}</h5>
                    </Link>
                    <p className="user2">
                        <i class="fa-solid fa-circle-envelope"></i> {user.email}{" "}
                    </p>
                    <p className="user3">
                        {" "}
                        <i class="fa-solid fa-circle-phone"></i> {user.phone}{" "}
                    </p>
                    <button
                        className="btn1"
                        onClick={() => dispatch(deleteUser(user._id))}
                    >
                        {" "}
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
                <EditUser user={user} />
            </div>
        </div>
    );
};

export default UserCard;
