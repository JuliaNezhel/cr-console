import { useState } from "react"


type OnOffPropsType = {
    on: boolean
    onChange: (value: boolean)=> void
}

export const OnOff = (props: OnOffPropsType) => {



    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid red',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'rgb(60, 226, 101)': 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid red',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: !props.on ? 'rgb(240, 95, 95)':'white',
    }
    const indicatiorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50px',
        border: '1px solid red',
        marginLeft: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'rgb(60, 226, 101)' : 'rgb(240, 95, 95)',

    }

    return (
        <div>
            <div style={onStyle} onClick={()=>(props.onChange(true))}>on</div>
            <div style={offStyle} onClick={()=>(props.onChange(false))}>off</div>
            <div style={indicatiorStyle}></div>
        </div>
    )
}