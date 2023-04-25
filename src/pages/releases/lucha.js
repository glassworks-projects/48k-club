import React from "react"
import {ExtLink, ImgAbout} from "../../components/export"
import lucha from "../../media/album-artwork/lucha.jpg"
import releasetext from "../../text/release-about.json"

/*
 include: title, img, artistName, releaseName, text, href
*/

function Press() {
  return(
    <div style={{paddingLeft: `2vw`}}>
      <p>
        <ExtLink href="https://beta.catalog.works/adder/-lucha-">
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
        title="48KS005 - Adder - ¡Lucha!"
        img={lucha}
        heading = "ADDER"
        subheading = "LUCHA"
        text={releasetext.lucha_about}
        href="https://48ksps.bandcamp.com/track/lucha"
        anythingElse={Press()}
      />
    )
  }
}
