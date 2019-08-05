import React from "react"
import {Release} from "../components/export"
import cathedral from "../media/album-artwork/cathedral.jpg"
import {releasetext} from "../text/release-about.json"

/*
 include: title, img, artistName, releaseName, text, href
*/

export default class Cathedral extends React.Component {
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
        title="48K001 - Wild Kid - Cathdedral"
        img={cathedral}
        artistName= "WILD KID"
        releaseName= "CATHEDRAL"
        text={releasetext.cath_about}
        href="https://smarturl.it/cathedral"
      />
    )
  }
}
