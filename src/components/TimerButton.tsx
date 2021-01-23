import React from 'react'

interface buttonProps {
    buttonAction: ()=>void
    buttonValue: string
}


function TimerButton(props:buttonProps) {

    return (
        <div style={{marginLeft: "55px",}}>
            <button onClick={props.buttonAction}> {props.buttonValue} </button>
        </div>
    )
}

export default TimerButton
