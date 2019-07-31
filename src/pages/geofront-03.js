import React from "react"
import {Wrapper, ImgCarousel, GFAbout} from "../components/export"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'
import styled from "styled-components"
import {Link} from "gatsby"

export default class GF03 extends React.Component {
  render () {
    return (
      <GFAbout
        title="GeoFront-03"
        images={[
          <div><img src={require("../media/gf03/sample-2.jpg")}/></div>,
          <div><img src={require("../media/gf03/sample-3.jpg")}/></div>
          ]
        }
        bodytext={[
          <p>Installment: four</p>,
          <p>Date: May 10, 2019</p>,
          <p>Lineup: <br /> <br />
            Mobilegirl (Discwoman / Berlin)<br />
            NKC (Her Records, Even The Strong / UK) <br />
            Copout (PTP, 48k) <br />
            Wild Kid (48k) <br />
            Montepiedra (48k)
          </p>,
          <p>Location: The Deep End (Ridgewood, Queens)</p>
            ]
        }
        number="03"
      />
    )
  }
}
