import React from "react"
import {Release, ExtLink} from "../components/export"
import formless from "../media/album-artwork/formless.jpg"
import {releasetext} from "../text/release-about.json"

function Press() {
  return(
    <div style={{paddingLeft: `2vw`}}>
      <p>
        <h3>Press: </h3>
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
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return(
      <Release
        title="48K003 - Wild Kid - Formless"
        img={formless}
        artistName= "WILD KID"
        releaseName= "FORMLESS"
        text={releasetext.formless_about}
        href="http://smarturl.it/formless-ep"
        anythingElse={Press()}
      />
    )
  }
}
