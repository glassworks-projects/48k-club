import React from "react"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'
import styled from "styled-components"
import {text, date} from "../text/blog-post-one.json"
import sample from "../media/sample.jpg"
import {BlogPost} from "../components/export"
import {Carousel} from 'react-responsive-carousel'
import '../styles/carousel.css'

function str(t) {
  const items = []
  t.forEach(function(obj) {
    items.push(<p>{obj}</p>)
  });
  return(items)
}

export default function BlogCarousel () {
    // export default function BlogCarousel() {
      return (
        <Carousel showThumbs={false} showStatus={false}
          useKeyboardArrows={true} className="carousel" showIndicators={false}>
          <div>
            <BlogPost date={date} img={sample}>{str(text)}</BlogPost>
          </div>
        </Carousel>
      )
  }
