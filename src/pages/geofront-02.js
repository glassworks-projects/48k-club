import React from "react"
import {Wrapper, ImgCarousel, GFAbout} from "../components/export"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'
import styled from "styled-components"
import {Link} from "gatsby"

export default class GF02 extends React.Component {
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
        title="GeoFront-02"
        images={[
          <div><img src={require("../media/gf02/gf02-01.jpg")}/></div>,
          <div><img src={require("../media/gf02/gf02-02.jpg")}/></div>,
          <div><img src={require("../media/gf02/gf02-03.jpg")}/></div>,
          <div><img src={require("../media/gf02/gf02-04.jpg")}/></div>,
          <div><img src={require("../media/gf02/gf02-05.jpg")}/></div>,
          <div><img src={require("../media/gf02/gf02-06.jpg")}/></div>,
          <div><img src={require("../media/gf02/gf02-07.jpg")}/></div>,
          <div><img src={require("../media/gf02/gf02-08.jpg")}/></div>,
          <div><img src={require("../media/gf02/gf02-09.jpg")}/></div>,
          <div><img src={require("../media/gf02/gf02-10.jpg")}/></div>,
          <div><img src={require("../media/gf02/gf02-11.jpg")}/></div>,
          <div><img src={require("../media/gf02/gf02-12.jpg")}/></div>,
          <div><img src={require("../media/gf02/gf02-13.jpg")}/></div>
          ]
        }
        bodytext={[
          <p>Installment: three</p>,
          <p>Date: December 07, 2018</p>,
          <p>Lineup: <br /> <br />
            coucou chloe (live) (NUXXE / London)<br />
            Dis Fig (PTP / Berlin) <br />
            XGLARE (live) (Blueberry Records) <br />
            Copout (PTP, 48k) <br />
            Wild Kid (live) (48k) <br />
            Montepiedra (48k)
          </p>,
          <p>Location: Secret Project Robot (Bushwick, Brooklyn)</p>
            ]
        }
        number="02"
      />
    )
  }
}
