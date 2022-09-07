import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="App h-100 w-100">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/list" element={<TodoList />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
