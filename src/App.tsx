import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {TodoPage} from "./pages/TodoPage";
import {AboutPage} from "./pages/AboutPage";

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path="/" component={TodoPage} exact />
                    <Route path="/about" component={AboutPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
