import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getbyid } from "../../redux/actions";
import "./UserFile.css";
const UserFile = () => {
    let { id } = useParams();
    const { UserLoading, userFile } = useSelector((state) => state);
    console.log(userFile);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getbyid(id));
    }, []);
    return (
        <div className="all">
            {UserLoading ? (
                <h1>Loading ...</h1>
            ) : (
                // React.Children.toArray(
                //     user.map((el) => (
                <div className="file">
                    <h1 style={{ color: "red" }}>User Profile</h1>
                    <img src={userFile.image} alt="img" className="im" />
                    <h5>{userFile.name}</h5>
                    <p>{userFile.email}</p>
                    <p> {userFile.phone}</p>
                </div>
                // ))
            )}
        </div>
    );
};

export default UserFile;
