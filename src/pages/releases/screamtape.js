import React from "react"
import {ExtLink, ImgAbout} from "../../components/export"
import st from "../../media/album-artwork/st.jpg"
import releasetext from "../../text/release-about.json"

/*
 include: title, img, artistName, releaseName, text, href
*/


function Press() {
  return(
    <div style={{paddingLeft: `2vw`}}>
      <p>
        <h3 style={{fontWeight: `300`}}>Press: </h3>
        8/10 in Mixmag <br />
        <ExtLink href="https://djmag.com/music/bass/scream-tape">
          9.5/10 in DJ Mag
        </ExtLink> <br />
        <ExtLink href="https://www.xlr8r.com/news/premiere-hear-a-menacing-cut-from-wild-kid">
          "Part I (Dec-Jan)" premiered at XLR8R
        </ExtLink> <br />
        <ExtLink href="https://www.residentadvisor.net/tracks/900681">
          "OD-2 (Blood) (Single Edit)" premiered at Resident Advisor
        </ExtLink> <br />
        <ExtLink href="https://www.clashmusic.com/news/premiere-wild-kid-blocked-range-savannah">
          "Savannah (Blocked Range) (Single Edit)" premiered at Clash Magazine
        </ExtLink>
      </p>
    </div>
  )
}

export default class ScreamTape extends React.Component {
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
        artistLink="https://soundcloud.com/adder48k"
        title="48K002 - Wild Kid - Scream Tape"
        img={st}
        heading = "WILD KID"
        subheading = "SCREAM TAPE"
        text={releasetext.st_about}
        href="https://smarturl.it/screamtape"
        anythingElse={Press()}
      />
    )
  }
}
