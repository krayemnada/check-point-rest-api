import axios from "axios";
import { EDIT, GET, GETBYID } from "./actionTypes";

export const getUser = () => async (dispatch) => {
    try {
        const res = await axios.get("/users/get");
        dispatch({
            type: GET,
            payload: res.data,
        });
    } catch (error) {
        alert("get error");
    }
};

export const deleteUser = (_id) => async (dispatch) => {
    try {
        axios.delete(`/user/delete/${_id}`);

        dispatch(getUser());
    } catch (error) {
        if (error) {
            alert("get error");
            console.log(error);
        }
    }
};
export const addNewUser = (newUser) => async (dispatch) => {
    try {
        axios.post("/user/add", newUser);
        dispatch(getUser());
    } catch (error) {
        if (error) {
            alert("add error");
        }
    }
};
export const editUser = (editedUser) => async (dispatch) => {
    try {
        const res = await axios.put(`/user/put/${editedUser._id}`, editedUser);
        dispatch({
            type: EDIT,
            payload: res.data,
        });
    } catch (error) {
        if (error) {
            alert("edit error");
        }
    }
};
export const getbyid = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/user/get/${id}`);
        dispatch({
            type: GETBYID,
            payload: res.data,
        });
    } catch (error) {
        if (error) console.log(error);
        alert("get one user error");
    }
};
