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

const height = (typeof window !== `undefined`) ? (window.innerHeight / 2) : 800;

export default function Poster({first, second, third, top, left}) {
  const Container = styled.div`
    cursor: crosshair;
    width: 600px;
    height: 600px;
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const calc = (x, y) => [x - 300 - left, y - (height / 2)]

  const [props, set] = useSpring(() => (
    { xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } })
  )

  const Card1 = styled(Card)`
    background-image: url(${first});
  `

  const Card2 = styled(Card)`
    background-image: url(${second});
  `

  const Card3 = styled(Card)`
    background-image: url(${third});
  `
  return (
    <Container onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <Card1 style={{ transform: props.xy.interpolate(trans1) }} />
      <Card2 style={{ transform: props.xy.interpolate(trans2) }} />
      <Card3 style={{ transform: props.xy.interpolate(trans3) }} />
    </Container>
  )
}
