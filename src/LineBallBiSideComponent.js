import React from 'react'
import {useDimension, useAnimatedScale} from './hooks'
import LBBSPComponent from './LBBSPComponent'

const LineBallBiSideComponent = (props) => {
    const {w, h} = useDimension()
    const {scale, start} = useAnimatedScale(0.02, 30)
    return <div>
        <LBBSPComponent w = {w} h = {h} scale = {scale} onClick = {start}/>
    </div>
}

export default LineBallBiSideComponent
