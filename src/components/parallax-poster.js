import React from "react"
import { useSpring, animated } from 'react-spring'
import styled from "styled-components"

const Card = styled(animated.div)`
  position: absolute;
  border-radius: 5px;
  width: auto;
  height: auto;
  min-height: 550px;
  min-width: 418px;
  max-width: 100%;
  max-height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
`

const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8}px,${y / 8}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

function Height() {
  return (typeof window !== `undefined`) ? (window.innerHeight / 2) : 800;
}

export default function Poster({first, second, third, top, left}) {

  var divStyle = {
    cursor: `crosshair`,
    width: `600px`,
    height: `600px`,
    position: `absolute`,
    top: `${top}px`,
    left: `${left}px`,
  }

  var calc = (x, y) => [x - 300 - left, y - (Height() / 2)]

  const [props, set] = useSpring(() => (
    { xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } })
  )

  return (
    <div style={divStyle} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <Card style={{
        transform: props.xy.interpolate(trans1),
        backgroundImage: `url(${first})`
      }} />
      <Card style={{
        transform: props.xy.interpolate(trans2),
        backgroundImage: `url(${second})`
      }} />
      <Card style={{
        transform: props.xy.interpolate(trans3),
        backgroundImage: `url(${third})`}}
      />
    </div>
  )
}
