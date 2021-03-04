import React from "react";
import Feedback from "./Feedback";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/feedback" exact component={Feedback} />
        </BrowserRouter>
    );
};

export default App;
