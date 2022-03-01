import React from 'react'

export default function Input(props) {
    return (
        <div>
             <input placeholder={props.placeholder} onChange={props.onChange} value={props.value} required={props.required} type={props.type} ></input>
        </div>
    )
}
