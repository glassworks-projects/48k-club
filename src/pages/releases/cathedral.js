import React from "react"
import {ImgAbout, ExtLink} from "../../components/export"
import cathedral from "../../media/album-artwork/cathedral.jpg"

const releaseText = require("../../text/release-about.json").releasetext.cath_about

/*
 include: title, img, artistName, releaseName, text, href
*/
function Press() {
  return (
    <div style={{paddingLeft: `2vw`}}>
      <p>
        <h3 style={{fontWeight: `300`}}>Press: </h3>
        <ExtLink href="https://www.tinymixtapes.com/chocolate-grinder/premiere-wild-kid-lapse">
          "Lapse" premiered at Tiny Mix Tapes
        </ExtLink> <br />
        <ExtLink href="https://weareinsert.com/audio/premiere-wild-kid-cc-48k/">
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
      <ImgAbout
        artistLink="https://soundcloud.com/adder48k"
        gf={false}
        title="48K001 - Wild Kid - Cathdedral"
        img={cathedral}
        heading= "WILD KID"
        subheading= "CATHEDRAL"
        text={releaseText}
        href="https://smarturl.it/cathedral"
        anythingElse={Press()}
      />
    )
  }
}

// export default class Cathedral extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       width: 0,
//       height: 0
//     }
//     this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
//   }
//
//   componentDidMount() {
//     if (typeof window !== `undefined`) {
//       this.updateWindowDimensions();
//       window.addEventListener('resize', this.updateWindowDimensions);
//     }
//   }
//
//   componentWillUnmount() {
//     if (typeof window !== `undefined`) {
//       window.removeEventListener('resize', this.updateWindowDimensions);
//     }
//   }
//
//   updateWindowDimensions() {
//     if (typeof window !== `undefined`) {
//       this.setState({ width: window.innerWidth, height: window.innerHeight });
//     }
//   }
//
//   render() {
//     return(
//       <Release
//         title="48K001 - Wild Kid - Cathdedral"
//         img={cathedral}
//         artistName= "WILD KID"
//         releaseName= "CATHEDRAL"
//         text={releasetext.cath_about}
//         href="https://smarturl.it/cathedral"
//         anythingElse={Press()}
//       />
//     )
//   }
// }
