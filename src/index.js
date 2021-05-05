import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import NavBar from "./components/NavBar"
import GroupCards from "./components/GroupCards"

function App() {
    return (
        <div>
            <NavBar />
            <div className="container">
                <h1 id="titleApp">Product Roadmap</h1>
                <div className="cardsContainer">
                    <GroupCards color="0, 140, 255"></GroupCards>
                </div>
                
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))