import React, { Component } from "react"
import { Card } from "react-bootstrap"
import ToDoCards from "../../components/ToDoCards"
import './style.css'

class GroupCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Group Task 1',
            groupTitle: {
                "width": "86px",
                "font-size": "12px",
                "height": "20px",
                "background-color" : `rgba(${this.props.color},.2)`,
                "color": `rgba(${this.props.color},1)`
            },
            groupCards: {
                "background-color" : `rgba(${this.props.color},.1`,
                "border-color" : `rgba(${this.props.color},1)`
            },
            isNull: true
        };
    }

    render() {
        return (
            <div>
                {this.state.isNull ? 
                <Card className='groupCards' style={this.state.groupCards}>
                    <Card.Title className="cardTitle">
                        <Card id="cardTitleHeader" style={this.state.groupTitle}> { this.state.title } </Card>
                        January - March
                    </Card.Title>
                    <ToDoCards title= {this.props.tilteItems} />
                </Card> : 
                <Card className='groupCards' style={this.state.groupCards}>
                    <Card.Title className="cardTitle">
                    <Card id="cardTitleHeader" style={this.state.groupTitle}> { this.state.title } </Card>
                    January - March
                    </Card.Title>
                </Card>}
            </div>
        )
    }
}

export default GroupCards