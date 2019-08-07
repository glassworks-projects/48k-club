import React from "react"
import {Wrapper, ImgCarousel, GFAbout} from "../components/export"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'
import styled from "styled-components"
import {Link} from "gatsby"

export default class GF03 extends React.Component {
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
        title="GeoFront-03"
        images={[
          <div><img src={require("../media/gf03/gf03-01.jpg")}/></div>,
          <div><img src={require("../media/gf03/gf03-02.jpg")}/></div>,
          <div><img src={require("../media/gf03/gf03-03.jpg")}/></div>,
          <div><img src={require("../media/gf03/gf03-04.jpg")}/></div>,
          <div><img src={require("../media/gf03/gf03-05.jpg")}/></div>,
          <div><img src={require("../media/gf03/gf03-06.jpg")}/></div>,
          <div><img src={require("../media/gf03/gf03-07.jpg")}/></div>,
          <div><img src={require("../media/gf03/gf03-08.jpg")}/></div>,
          <div><img src={require("../media/gf03/gf03-09.jpg")}/></div>,
          <div><img src={require("../media/gf03/gf03-10.jpg")}/></div>,
          <div><img src={require("../media/gf03/gf03-11.jpg")}/></div>,
          <div><img src={require("../media/gf03/gf03-12.jpg")}/></div>,
          <div><img src={require("../media/gf03/gf03-13.jpg")}/></div>
          ]
        }
        bodytext={[
          <p>Fourth installment <br /> May 10, 2019</p>,
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
