import React from "react"
import {Release, ExtLink} from "../components/export"
import cathedral from "../media/album-artwork/cathedral.jpg"
import {releasetext} from "../text/release-about.json"

/*
 include: title, img, artistName, releaseName, text, href
*/
function Press() {
  return (
    <div style={{paddingLeft: `2vw`}}>
      <p>
        <h3>Press: </h3>
        <ExtLink href="https://www.tinymixtapes.com/chocolate-grinder/premiere-wild-kid-lapse" target="_blank">
          "Lapse" premiered at Tiny Mix Tapes
        </ExtLink> <br />
        <ExtLink href="https://weareinsert.com/audio/premiere-wild-kid-cc-48k/" target="_blank">
          "Cc" premiered at Insert
        </ExtLink>
      </p>
    </div>
  )
}

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
      <Release
        title="48K001 - Wild Kid - Cathdedral"
        img={cathedral}
        artistName= "WILD KID"
        releaseName= "CATHEDRAL"
        text={releasetext.cath_about}
        href="https://smarturl.it/cathedral"
        anythingElse={Press()}
      />
    )
  }
}
