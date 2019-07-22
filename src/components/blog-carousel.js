import React from "react"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'
import styled from "styled-components"
import {text, date} from "../text/lorem-ipsum.json"
import sample from "../media/sample.jpg"
import {BlogPost} from "../components/export"
import {Carousel} from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

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
          useKeyboardArrows={true}
        >
          <div>
            <BlogPost date={date} img={sample}>{str(text)}</BlogPost>
          </div>
          <div>
            <BlogPost> testing part two </BlogPost>
          </div>
        </Carousel>
      )
  }
