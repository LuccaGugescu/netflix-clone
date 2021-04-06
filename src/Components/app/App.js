import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen from '../../screens/homeScreen/HomeScreen';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Login from '../../screens/loginScreen/Login';
import { auth } from '../../Utils/firebase';
import { login, logout, selectUser } from '../Features/Slices/userSlice';
import ProfileScreen from '../../screens/profileScreen/ProfileScreen';

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if(userAuth) {
                dispatch(login({uid: userAuth.uid, email: userAuth.email}));
            } else {
                dispatch(logout());
            }
        })
        return unsubscribe;
    }, [dispatch]);

    return (
        <div className="app">
            <Router>
                {!user ? (<Login />) : (
                <Switch>
                    <Route exact path="/profile">
                        <ProfileScreen />
                    </Route>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    
                </Switch>
                )}
                
            </Router>
        </div>
    )
}

export default App
