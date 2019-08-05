import React from "react"
import {Wrapper, ImgCarousel, GFAbout} from "../components/export"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'
import styled from "styled-components"
import {Link} from "gatsby"

export default class GF01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render () {
    return (
      <GFAbout
        title="GeoFront-01"
        images={[
          <div><img src={require("../media/gf01/gf01-01.jpg")}/></div>,
          <div><img src={require("../media/gf01/gf01-02.jpg")}/></div>,
          <div><img src={require("../media/gf01/gf01-03.jpg")}/></div>,
          <div><img src={require("../media/gf01/gf01-04.jpg")}/></div>,
          <div><img src={require("../media/gf01/gf01-05.jpg")}/></div>,
          <div><img src={require("../media/gf01/gf01-06.jpg")}/></div>,
          <div><img src={require("../media/gf01/gf01-07.jpg")}/></div>
          ]
        }
        bodytext={[
          <p>Installment: two</p>,
          <p>Date: August 25, 2018</p>,
          <p>Lineup: <br /> <br />
            GILA (Lex Records / Denver)<br />
            Free At Last w/ special guest Crackstevens<br />
            Reddaughter <br />
            Copout (PTP, 48k) <br />
            Wild Kid (48k) <br />
            Montepiedra (48k) <br />
            Juke Bounce Werk presents: Kush Jones, Swisha, Los, Scatta
          </p>,
          <p>Location: H0L0 (Ridgewood, Queens)</p>
            ]
        }
        number="01"
      />
    )
  }
}
