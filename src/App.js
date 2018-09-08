import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import './semantic/dist/semantic.min.css';
import Home from './components/Home';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="App-title">Welcome to dota tech</h1>
                <Home/>
            </div>
        );
    }
}

export default App;
