import React from "react"
import {ExtLink, ImgAbout} from "../../components/export"
import treewav from "../../media/album-artwork/tree-wav.jpg"
import {releasetext} from "../../text/release-about.json"

/*
 include: title, img, artistName, releaseName, text, href
*/

function Press() {
  return(
    <div style={{paddingLeft: `2vw`}}>
      <p>
        <ExtLink href="https://beta.catalog.works/adder/tree-wav">
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
        title="48KS006 - Adder - tree.wav"
        img={treewav}
        heading = "ADDER"
        subheading = "TREE.WAV"
        text={releasetext.tree_wav_about}
        href="https://48ksps.bandcamp.com/track/tree-wav"
        anythingElse={Press()}
      />
    )
  }
}
