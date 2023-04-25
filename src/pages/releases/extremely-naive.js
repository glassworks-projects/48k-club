import React from "react"
import {ExtLink, ImgAbout} from "../../components/export"
import extremelynaive from "../../media/album-artwork/extremelynaive.jpg"
import releasetext from "../../text/release-about.json"

/*
 include: title, img, artistName, releaseName, text, href
*/

function Press() {
  return(
    <div style={{paddingLeft: `2vw`}}>
      <p>
        <ExtLink href="https://beta.catalog.works/adder/extremely-na-ve">
          View on Catalog
        </ExtLink>
      </p>
    </div>
  )
}

export default class ExtremelyNaive extends React.Component {
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
        artistLink="https://soundcloud.com/adder48k/"
        gf={false}
        title="48KS003 - Adder - Extremely Naïve"
        img={extremelynaive}
        heading = "ADDER"
        subheading = "EXTREMELY NAIVE"
        text={releasetext.extremelynaive_about}
        href="https://48ksps.bandcamp.com/track/extremely-na-ve"
        anythingElse={Press()}
      />
    )
  }
}
