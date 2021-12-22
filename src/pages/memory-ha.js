import React from "react"
import {ExtLink, ImgAbout} from "../components/export"
import memoryha from "../media/album-artwork/memoryha.jpg"
import {releasetext} from "../text/release-about.json"

/*
 include: title, img, artistName, releaseName, text, href
*/

function Press() {
  return(
    <div style={{paddingLeft: `2vw`}}>
      <p>
        <h3 style={{fontWeight: `300`}}>Press: </h3>
        <ExtLink href="https://inverted-audio.com/miracles-game-over-feat-ms-boogie/">
          "Game Over (ft. Ms. Boogie)" premiered at Inverted Audio
        </ExtLink> <br />
        <ExtLink href="https://soundcloud.com/mixmag-1/premiere-miracles-creepy-touch">
          "Creepy Touch" premiered at Mixmag
        </ExtLink> <br />
        <ExtLink href="https://bizaarbazaar.com/2019/11/14/124-miracles/">
          Miracles guest mix for BIZAARBAZAAR podcast #124
        </ExtLink>
      </p>
    </div>
  )
}

export default class MemoryHa extends React.Component {
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
        artistLink="https://soundcloud.com/miraclestew/"
        gf={false}
        title="48K005 - Miracles - Memory Ha"
        img={memoryha}
        heading = "MIRACLES"
        subheading = "MEMORY HA"
        text={releasetext.memoryha_about}
        href="https://48ksps.bandcamp.com/album/memory-ha"
        anythingElse={Press()}
      />
    )
  }
}
