import React from "react"
import {Wrapper, ImgAbout, ExtLink} from "../components/export"
import styled from "styled-components"
import {Link} from "gatsby"

export default class GF01 extends React.Component {
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

  render () {
    return (
      <ImgAbout
        gf={true}
        title="GeoFront-01"
        heading="GEOFRONT"
        subheading="01"
        images={[
          <div><img src={require("../media/gf01/gf01-01.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf01/gf01-02.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf01/gf01-03.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf01/gf01-04.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf01/gf01-05.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf01/gf01-06.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf01/gf01-07.jpg")} alt="event"/></div>
          ]
        }
        text={[
          <p>Second installment<br />August 25, 2018</p>,
          <p>Lineup: <br /> <br />
            <ExtLink href="https://soundcloud.com/gila-monsta" target="_blank">
              GILA (Lex Records / Denver)<br />
            </ExtLink>
            <ExtLink href="https://soundcloud.com/freeeatlasttt" target="_blank">
              Free At Last
            </ExtLink> w/ special guest <ExtLink href="https://soundcloud.com/crackstevens" target="_blank">
              Crackstevens<br />
            </ExtLink>
            <ExtLink href="https://soundcloud.com/red_daughter" target="_blank">
              Reddaughter <br />
            </ExtLink>

            <ExtLink href="https://soundcloud.com/copout" target="_blank">
              Copout (PTP, 48k) <br />
            </ExtLink>

            <ExtLink href="https://soundcloud.com/wild_kid" target="_blank">
              Wild Kid (48k) <br />
            </ExtLink>

            <ExtLink href="https://soundcloud.com/mmontepiedra" target="_blank">
              Montepiedra (48k) <br />
            </ExtLink>

            <ExtLink href="https://soundcloud.com/jukebouncewerk" target="_blank">
              Juke Bounce Werk
            </ExtLink> <span>presents: </span> <br />
            <ExtLink href="https://soundcloud.com/kush_jones" target="_blank">Kush Jones, </ExtLink>
            <ExtLink href="https://soundcloud.com/dj-swisha" target="_blank">DJ Swisha, </ExtLink>
            <ExtLink href="https://soundcloud.com/losjbw" target="_blank">
            Los, </ExtLink>
            <ExtLink href="https://soundcloud.com/scatta_jbw" target="_blank">
              Scatta
            </ExtLink>
          </p>,
          <p>Location: H0L0 (Ridgewood, Queens)</p>
            ]
        }
      />
    )
  }
}
//
// export default class GF01 extends React.Component {
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
//   render () {
//     return (
//       <GFAbout
//         title="GeoFront-01"
//         images={[
//           <div><img src={require("../media/gf01/gf01-01.jpg")} alt="event"/></div>,
//           <div><img src={require("../media/gf01/gf01-02.jpg")} alt="event"/></div>,
//           <div><img src={require("../media/gf01/gf01-03.jpg")} alt="event"/></div>,
//           <div><img src={require("../media/gf01/gf01-04.jpg")} alt="event"/></div>,
//           <div><img src={require("../media/gf01/gf01-05.jpg")} alt="event"/></div>,
//           <div><img src={require("../media/gf01/gf01-06.jpg")} alt="event"/></div>,
//           <div><img src={require("../media/gf01/gf01-07.jpg")} alt="event"/></div>
//           ]
//         }
//         bodytext={[
//           <p>Second installment<br />August 25, 2018</p>,
//           <p>Lineup: <br /> <br />
//             <ExtLink href="https://soundcloud.com/gila-monsta" target="_blank">
//               GILA (Lex Records / Denver)<br />
//             </ExtLink>
//             <ExtLink href="https://soundcloud.com/freeeatlasttt" target="_blank">
//               Free At Last
//             </ExtLink> w/ special guest <ExtLink href="https://soundcloud.com/crackstevens" target="_blank">
//               Crackstevens<br />
//             </ExtLink>
//             <ExtLink href="https://soundcloud.com/red_daughter" target="_blank">
//               Reddaughter <br />
//             </ExtLink>
//
//             <ExtLink href="https://soundcloud.com/copout" target="_blank">
//               Copout (PTP, 48k) <br />
//             </ExtLink>
//
//             <ExtLink href="https://soundcloud.com/wild_kid" target="_blank">
//               Wild Kid (48k) <br />
//             </ExtLink>
//
//             <ExtLink href="https://soundcloud.com/mmontepiedra" target="_blank">
//               Montepiedra (48k) <br />
//             </ExtLink>
//
//             <ExtLink href="https://soundcloud.com/jukebouncewerk" target="_blank">
//               Juke Bounce Werk
//             </ExtLink> <span>presents: </span>
//             <ExtLink href="https://soundcloud.com/kush_jones" target="_blank">Kush Jones, </ExtLink>
//             <ExtLink href="https://soundcloud.com/dj-swisha" target="_blank">DJ Swisha, </ExtLink>
//             <ExtLink href="https://soundcloud.com/losjbw" target="_blank">
//             Los, </ExtLink>
//             <ExtLink href="https://soundcloud.com/scatta_jbw" target="_blank">
//               Scatta
//             </ExtLink>
//           </p>,
//           <p>Location: H0L0 (Ridgewood, Queens)</p>
//             ]
//         }
//         number="01"
//       />
//     )
//   }
// }
