import {useState, useEffect} from 'react'
import {divideScale, sinify} from './util'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                var currScale = scale
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (scale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w,
        h
    }
}

export const useStyle = (w, h, scale) => {
    const radius = Math.min(w, h) / 8
    const position = 'absolute'
    const background = '#3F51B5'
    const sf = sinify(scale)
    const sf1 = divideScale(sf, 0, 2)
    const sf2 = divideScale(sf, 1, 2)
    const xf = (w / 2 - radius) * sf2
    const fixedX = w / 2
    const fixedY = h / 2
    return {
        getLineStyle(i) {
            const sj = 1 - 2 * i
            const width = `${xf - radius * sf2 * sj}px`
            const height = `${Math.min(w, h) / 90}px`
            const left = `${fixedX + (xf - radius * sf2) * i * sj}px`
            const top = `${h / 2 - parseInt(height) / 2}px`
            return {position, background, width, height, left, top}
        },
        getCircleStyle(i) {
            const sj = 1 - 2 * i
            const width = `${2 * radius * sf1}px`
            const height = `${2 * radius * sf1}px`
            const left = `${fixedX - radius * sf1 - xf * sj}px`
            const top = `${fixedY - radius * sf1}px`
            const borderRadius = `50%`
            return {position, left, top, width, height, borderRadius, background}
        },
        getButtonStyle() {
            const top = `${h * 0.8}px`
            const left = `${w * 0.48}px`
            return {position, top, left}
        }
    }
}
