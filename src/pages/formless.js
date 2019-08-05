import React from "react"
import {Release} from "../components/export"
import formless from "../media/album-artwork/formless.jpg"
import {releasetext} from "../text/release-about.json"

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
      />
    )
  }
}
