import React from "react"
import {Release} from "../components/export"
import lapse from "../media/album-artwork/lapse.jpg"
import {releasetext} from "../text/release-about.json"

export default class Lapse extends React.Component {
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
        title="48KS001 - Wild Kid - Lapse (Miracles Remix)"
        img={lapse}
        artistName= "WILD KID"
        releaseName= "LAPSE (MIRACLES REMIX)"
        text={releasetext.lapse_about}
        href="http://hyperurl.co/48ks001"
      />
    )
  }
}
