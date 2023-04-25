import React from "react"
import {ExtLink, ImgAbout} from "../../components/export"
import tellyou from "../../media/album-artwork/tellyou.jpg"
import {releasetext} from "../../text/release-about.json"

/*
 include: title, img, artistName, releaseName, text, href
*/

function Press() {
  return(
    <div style={{paddingLeft: `2vw`}}>
      <p>
        <ExtLink href="https://couvrexchefs.com/en/callosum-awake-w-porter-brook-48k/">
          "Awake (ft. Porter Brook) premiered at Couvre x Chefs"
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
        artistLink="https://soundcloud.com/callosum-1/"
        gf={false}
        title="48K006 - Callosum - Tell You"
        img={tellyou}
        heading = "CALLOSUM"
        subheading = "TELL YOU"
        text={releasetext.tellyou_about}
        href="https://48ksps.bandcamp.com/album/tell-you"
        anythingElse={Press()}
      />
    )
  }
}
