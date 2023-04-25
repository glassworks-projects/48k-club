import React from "react"
import {ImgAbout, ExtLink} from "../components/export"

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
        title="GeoFront-03"
        gf={true}
        images={[
          <div><img src={require("../media/gf03/gf03-01.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-02.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-03.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-04.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-05.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-06.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-07.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-08.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-09.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-10.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-11.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-12.jpg").default} alt="event"/></div>,
          <div><img src={require("../media/gf03/gf03-13.jpg").default} alt="event"/></div>
          ]
        }
        text={[
          <p>Fourth installment <br /> May 10, 2019</p>,
          <p>Lineup: <br /> <br />
            <ExtLink href="https://soundcloud.com/mobilegirl">
              Mobilegirl (Discwoman / Berlin)<br />
            </ExtLink>
            <ExtLink href="https://soundcloud.com/nkc">
              NKC (Her Records, Even The Strong / UK) <br />
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
          <p>Location: The Deep End (Ridgewood, Queens)</p>
            ]
        }
        heading="GEOFRONT"
        subheading="03"
      />
    )
  }
}