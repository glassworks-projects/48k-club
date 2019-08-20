import React from "react"
import {Wrapper, ImgCarousel, GFAbout, ExtLink} from "../components/export"
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
          <div><img src={require("../media/gf03/gf03-01.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-02.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-03.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-04.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-05.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-06.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-07.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-08.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-09.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-10.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-11.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-12.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-13.jpg")} alt="event"/></div>
          ]
        }
        bodytext={[
          <p>Fourth installment <br /> May 10, 2019</p>,
          <p>Lineup: <br /> <br />
            <ExtLink href="https://soundcloud.com/mobilegirl" target="_blank">
              Mobilegirl (Discwoman / Berlin)<br />
            </ExtLink>
            <ExtLink href="https://soundcloud.com/nkc" target="_blank">
              NKC (Her Records, Even The Strong / UK) <br />
            </ExtLink>
            <ExtLink href="https://soundcloud.com/copout" target="_blank">
              Copout (PTP, 48k) <br />
            </ExtLink>

            <ExtLink href="https://soundcloud.com/wild_kid" target="_blank">
              Wild Kid (48k) <br />
            </ExtLink>

            <ExtLink href="https://soundcloud.com/mmontepiedra" target="_blank">
              Montepiedra (48k) <br />
            </ExtLink>
          </p>,
          <p>Location: The Deep End (Ridgewood, Queens)</p>
            ]
        }
        number="03"
      />
    )
  }
}
