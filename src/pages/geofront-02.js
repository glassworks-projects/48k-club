import React from "react"
import {ImgAbout, ExtLink} from "../components/export"

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
      <ImgAbout
        gf={true}
        title="GeoFront-02"
        heading="GEOFRONT"
        subheading="02"
        images={[
          <div><img src={require("../media/gf02/gf02-01.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-02.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-03.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-04.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-05.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-06.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-07.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-08.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-09.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-10.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-11.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-12.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf02/gf02-13.jpg").default} alt="event"/></div>
          ]
        }
        text={[
          <p>Third installment<br />December 07, 2018</p>,
          <p>Lineup: <br /> <br />
            <ExtLink href="https://soundcloud.com/coucouchloe">
              coucou chloe (live) (NUXXE / London)<br />
            </ExtLink>
            <ExtLink href="https://soundcloud.com/dis_fig">
              Dis Fig (PTP / Berlin) <br />
            </ExtLink>
            <ExtLink href="https://soundcloud.com/xglare">
              XGLARE (live) (Blueberry Records) <br />
            </ExtLink>

            <ExtLink href="https://soundcloud.com/copout">
              Copout (PTP, 48k) <br />
            </ExtLink>

            <ExtLink href="https://soundcloud.com/adder48k">
              Wild Kid (live) (48k) <br />
            </ExtLink>

            <ExtLink href="https://soundcloud.com/mmontepiedra">
              Montepiedra (48k) <br />
            </ExtLink>

            <ExtLink href="https://soundcloud.com/miraclestew">
              Miracles
            </ExtLink> <br />
            <ExtLink href="https://soundcloud.com/besharammusic">
              Besharam
            </ExtLink> <br />
          </p>,
          <p>Location: Secret Project Robot (Bushwick, Brooklyn)</p>
            ]
        }
      />
    )
  }
}