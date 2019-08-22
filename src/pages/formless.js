import React from "react"
import {ImgAbout, ExtLink} from "../components/export"
import formless from "../media/album-artwork/formless.jpg"
import {releasetext} from "../text/release-about.json"

function Press() {
  return(
    <div style={{paddingLeft: `2vw`}}>
      <p>
        <h3 style={{fontWeight: `300`}}>Press: </h3>
        <ExtLink href="https://djmag.com/music/bass/formless" target="_blank">
          7.5/10 in DJ Mag
        </ExtLink>
      </p>
    </div>
  )
}

export default class Formless extends React.Component {
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

  render() {
    return(
      <ImgAbout
        gf={false}
        title="48K003 - Wild Kid - Formless"
        img={formless}
        heading= "WILD KID"
        subheading= "FORMLESS"
        text={releasetext.formless_about}
        href="http://smarturl.it/formless-ep"
        anythingElse={Press()}
      />
    )
  }
}
