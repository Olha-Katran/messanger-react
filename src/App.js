import './App.css';
import React from 'react';
import Main from './components/mainComponent';
import LoginForm from "./components/login/Login";

class App extends React.Component {

    render () {
        return (
            <div className="app">
                <Main />
                {/*<LoginForm />*/}
            </div>
        )
    }

}

export default App;
