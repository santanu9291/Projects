import React from "react";
import NewsPaper from "./NewsPaper";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Navbar";

function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <NavBar/>
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <Routes>
                                    <Route
                                        path="/"
                                        element={
                                            <NewsPaper key="general"
                                            category="general" />}
                                    />
                                    <Route
                                        path="/Entertainment"
                                        element={
                                            <NewsPaper key="entertainment"
                                            category="entertainment" />
                                        }
                                    />
                                    <Route
                                        path="/Technology"
                                        element={
                                            <NewsPaper key="technology"
                                            category="technology" />}
                                    />
                                    <Route
                                        path="/Sports"
                                        element={
                                            <NewsPaper key="sports"
                                            category="sports" />}
                                    />
                                    <Route
                                        path="/Business"
                                        element={
                                            <NewsPaper key="business"
                                            category="business" />}
                                    />
                                    <Route
                                        path="/Health"
                                        element={
                                            <NewsPaper key="health"
                                            category="health" />}
                                    />
                                    <Route
                                        path="/Science"
                                        element={
                                            <NewsPaper key="science"
                                            category="science" />}
                                    />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
