import React from "react"

export default function Card(props) {
    return (
        <div>
            <img src={props.image} alt="" style={{height: '100px'}}/>
            <h2>{props.title}</h2>
            <div>Cost: {props.cost}</div>
        </div>
    )
}
