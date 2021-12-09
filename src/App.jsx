import React from "react";
import Header from "./components/Header";
import Bottom from "./components/Bottom";
import HomePage from "./components/HomePage";
import'./App.css'
class App extends React.Component{

    render(){

        return(
            <div id='container'>
                <Header/>
                <HomePage/>
                <Bottom/>
            </div>
        )
    }
}

export default App