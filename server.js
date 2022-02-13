const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const connectDb = require("./config/connectDb");
connectDb();
const User = require("./model/user");

app.use(express.json());

//CRUD

//to add a new user
app.post("/user/add", async (req, res) => {
    const { name, email, phone, image } = req.body;
    const newUser = new User({ name, email, phone, image });

    try {
        await newUser.save();
        res.send(newUser);
    } catch (error) {
        res.send(error.message);
    }
});

//to get all users

app.get("/users/get", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.send(error.message);
    }
});
//to  get one   user

app.get("/user/get/:id", async (req, res) => {
    try {
        const oneUser = await User.findById(req.params.id);
        res.send(oneUser);
    } catch (error) {
        res.send(error.message);
    }
});

app.delete("/user/delete/:id", async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.send("bye bye ");
    } catch (error) {
        res.send(error.message);
    }
});
//to edit a user
app.put("/user/put/:id", async (req, res) => {
    try {
        const editUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
            },
            { new: true }
        );
        res.send(editUser);
    } catch (error) {
        res.send(error.message);
    }
});

PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
    err ? console.log(err) : console.log(`server is running on PORT ${PORT}`)
);
