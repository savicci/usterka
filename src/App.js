import React from 'react';
import './App.css';
import {NavigationBar} from "./components/navbar/NavigationBar";
import {Layout} from "./components/Layout";
import {BrowserRouter} from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <NavigationBar/>
                    <Layout>
                        <MainRoutes/>
                    </Layout>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
