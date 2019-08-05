import React from "react"
import styled from "styled-components"
import {Carousel} from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

const Crs = styled(Carousel)`
  ${'' /* position: absolute;
  bottom: 5vw;
  right: 5vw; */}
  z-index: 0;
`

export default function ImgCarousel (props) {
  return (
    <Crs showStatus={false}
      showThumbs={false}
      autoPlay={true}
      showIndicators={false}
      width={(window.innerWidth > 600) ? "60vw" : "90vw"}
      useKeyboardArrows={true}
    >
      {props.children}
    </Crs>
  )
}
