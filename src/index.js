import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import NavBar from "./components/NavBar"
import CardsContainer from "./components/CardsContainer"

function App() {
    return (
        <div>
            <NavBar />
            <div className="container">
                <h1 id="titleApp">Product Roadmap</h1>
                <div className="cardsContainer">
                    <CardsContainer></CardsContainer>
                </div>
                
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))