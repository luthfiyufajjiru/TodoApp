import React from "react"
import { Card, ProgressBar } from 'react-bootstrap'
import "./style.css"

function ToDoCards (props) {
    return (
        <div>
            <Card className="ToDoCards">
                <Card.Body>
                    <Card.Title id="ToDoCardsText">{ props.title }</Card.Title>
                </Card.Body>
                <ProgressBar className="loadingBar" variant="" now={20} />
            </Card>
        </div>
    )
}

export default ToDoCards