import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./components/userList/UserList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserFile from "./components/userFile/UserFile";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/detail/:id" element={<UserFile />} />
                    <Route path="/" element={<UserList />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
