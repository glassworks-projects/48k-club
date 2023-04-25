import React from "react"
import {ImgAbout, ExtLink} from "../components/export"

export default class GF04 extends React.Component {
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
        title="GeoFront-04"
        gf={true}
        images={[
          <div><img src={require("../media/gf04/gf04-01.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf04/gf04-02.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf04/gf04-03.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf04/gf04-04.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf04/gf04-05.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf04/gf04-06.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf04/gf04-07.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf04/gf04-08.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf04/gf04-09.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf04/gf04-10.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf04/gf04-11.jpg").default} alt="event"/></div>
          ]
        }
        text={[
          <p>Fifth installment <br /> October 26, 2019</p>,
          <p>Lineup: <br /> <br />
            <ExtLink href="https://soundcloud.com/sietecatorce">
              Siete Catorce (SUBREAL / LA)<br />
            </ExtLink>
            <ExtLink href="https://soundcloud.com/yourdebit">
              Debit (NAAFI) <br />
            </ExtLink>
            <ExtLink href="https://soundcloud.com/copout">
              Copout (PTP, 48k) <br />
            </ExtLink>

            <ExtLink href="https://soundcloud.com/adder48k">
              Wild Kid (48k) <br />
            </ExtLink>

            <ExtLink href="https://soundcloud.com/mmontepiedra">
              Montepiedra (48k) <br />
            </ExtLink>
          </p>,
          <p>Location: Future Space (East Williamsburg, Brooklyn)</p>
            ]
        }
        heading="GEOFRONT"
        subheading="04"
      />
    )
  }
}
