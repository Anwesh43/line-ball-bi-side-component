import React from 'react'
import {useStyle} from './hooks'

const CurrDiv = ({style}) => {
    return <div style = {style}></div>
}

const LBBSPComponent = ({w, h, scale, onClick}) => {
    const {getLineStyle, getCircleStyle, getButtonStyle} = useStyle(w, h, scale)
    return (<div>
        {[0, 1].map(i => <CurrDiv key = {`circle_${i}`} style = {getCircleStyle(i)}/>)}
        {[0, 1].map(i => <CurrDiv key = {`line_${i}`} style = {getLineStyle(i)}/>)}
        <button style = {getButtonStyle()} onClick = {onClick}>start</button>
    </div>)
}

export default LBBSPComponent
