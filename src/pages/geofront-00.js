import React from "react"
import {Wrapper, ImgCarousel, GFAbout} from "../components/export"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'
import styled from "styled-components"
import {Link} from "gatsby"

export default class GF00 extends React.Component {
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
        title="GeoFront-00"
        images={[
          <div><img src={require("../media/gf00/gf00-01.jpg")}/></div>,
          <div><img src={require("../media/gf00/gf00-02.jpg")}/></div>,
          <div><img src={require("../media/gf00/gf00-03.jpg")}/></div>,
          <div><img src={require("../media/gf00/gf00-04.jpg")}/></div>,
          <div><img src={require("../media/gf00/gf00-05.jpg")}/></div>,
          <div><img src={require("../media/gf00/gf00-06.jpg")}/></div>,
          <div><img src={require("../media/gf00/gf00-07.jpg")}/></div>
          ]
        }
        bodytext={[
          <p>Installment: one</p>,
          <p>Date: May 19, 2018</p>,
          <p>Lineup: <br /> <br />
            Inkke (LuckyMe / Glasgow)<br />
            DJ Delish (Sweat Equity / Philadelphia)<br />
            Copout (PTP, 48k) <br />
            Wild Kid (48k) <br />
            Montepiedra (48k)
          </p>,
          <p>Location: HECK (Bushwick, Brooklyn)</p>
            ]
        }
        number="00"
      />
    )
  }
}
