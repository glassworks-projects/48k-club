import React from "react"
import {Wrapper, ImgCarousel, GFAbout, ExtLink} from "../components/export"
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
    if (typeof window !== `undefined`) {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }

  componentWillUnmount() {
    if (typeof window !== `undefined`) {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }

  updateWindowDimensions() {
    if (typeof window !== `undefined`) {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
  }

  render () {
    return (
      <GFAbout
        title="GeoFront-02"
        images={[
          <div><img src={require("../media/gf02/gf02-01.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-02.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-03.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-04.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-05.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-06.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-07.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-08.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-09.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-10.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-11.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-12.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-13.jpg")} alt="event"/></div>
          ]
        }
        bodytext={[
          <p>Third installment<br />December 07, 2018</p>,
          <p>Lineup: <br /> <br />
            <ExtLink href="https://soundcloud.com/coucouchloe" target="_blank">
              coucou chloe (live) (NUXXE / London)<br />
            </ExtLink>
            <ExtLink href="https://soundcloud.com/dis_fig" target="_blank">
              Dis Fig (PTP / Berlin) <br />
            </ExtLink>
            <ExtLink href="https://soundcloud.com/xglare" target="_blank">
              XGLARE (live) (Blueberry Records) <br />
            </ExtLink>

            <ExtLink href="https://soundcloud.com/copout" target="_blank">
              Copout (PTP, 48k) <br />
            </ExtLink>

            <ExtLink href="https://soundcloud.com/wild_kid" target="_blank">
              Wild Kid (live) (48k) <br />
            </ExtLink>

            <ExtLink href="https://soundcloud.com/mmontepiedra" target="_blank">
              Montepiedra (48k) <br />
            </ExtLink>

            <ExtLink href="https://soundcloud.com/miraclesdj" target="_blank">
              Miracles
            </ExtLink> <br />
            <ExtLink href="https://soundcloud.com/besharammusic" target="_blank">
              Besharam
            </ExtLink> <br />
          </p>,
          <p>Location: Secret Project Robot (Bushwick, Brooklyn)</p>
            ]
        }
        number="02"
      />
    )
  }
}
