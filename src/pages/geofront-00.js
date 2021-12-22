import React from "react"
import {ImgAbout, ExtLink} from "../components/export"

export default class GF00 extends React.Component {
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
        title="GeoFront-00"
        images={[
          <div><img src={require("../media/gf00/gf00-01.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf00/gf00-02.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf00/gf00-03.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf00/gf00-04.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf00/gf00-05.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf00/gf00-06.jpg")} alt="event"/></div>,
          <div><img src={require("../media/gf00/gf00-07.jpg")} alt="event"/></div>
          ]
        }
        text={[
          <p>First installment<br />May 19, 2018</p>,
          <p>Lineup: <br /> <br />
            <ExtLink href="https://soundcloud.com/inkke">
              Inkke (LuckyMe / Glasgow)<br />
            </ExtLink>
            <ExtLink href="https://soundcloud.com/djdelish">
              DJ Delish (Sweat Equity / Philadelphia)<br />
            </ExtLink>
            <ExtLink href="https://soundcloud.com/copout">
              Copout (PTP, 48k) <br />
            </ExtLink>
            <ExtLink href="https://soundcloud.com/adder48k">
              Wild Kid (48k) <br />
            </ExtLink>
            <ExtLink href="https://soundcloud.com/mmontepiedra">
              Montepiedra (48k)
            </ExtLink>
          </p>,
          <p>Location: HECK (Bushwick, Brooklyn)</p>
            ]
        }
        heading="GEOFRONT"
        subheading="00"
      />
    )
  }
}
//
// export default class GF00 extends React.Component {
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
//         title="GeoFront-00"
//         images={[
//           <div><img src={require("../media/gf00/gf00-01.jpg")} alt="event"/></div>,
//           <div><img src={require("../media/gf00/gf00-02.jpg")} alt="event"/></div>,
//           <div><img src={require("../media/gf00/gf00-03.jpg")} alt="event"/></div>,
//           <div><img src={require("../media/gf00/gf00-04.jpg")} alt="event"/></div>,
//           <div><img src={require("../media/gf00/gf00-05.jpg")} alt="event"/></div>,
//           <div><img src={require("../media/gf00/gf00-06.jpg")} alt="event"/></div>,
//           <div><img src={require("../media/gf00/gf00-07.jpg")} alt="event"/></div>
//           ]
//         }
//         bodytext={[
//           <p>First installment<br />May 19, 2018</p>,
//           <p>Lineup: <br /> <br />
//             <ExtLink href="https://soundcloud.com/inkke">
//               Inkke (LuckyMe / Glasgow)<br />
//             </ExtLink>
//             <ExtLink href="https://soundcloud.com/djdelish">
//               DJ Delish (Sweat Equity / Philadelphia)<br />
//             </ExtLink>
//             <ExtLink href="https://soundcloud.com/copout">
//               Copout (PTP, 48k) <br />
//             </ExtLink>
//             <ExtLink href="https://soundcloud.com/adder48k">
//               Wild Kid (48k) <br />
//             </ExtLink>
//             <ExtLink href="https://soundcloud.com/mmontepiedra">
//               Montepiedra (48k)
//             </ExtLink>
//           </p>,
//           <p>Location: HECK (Bushwick, Brooklyn)</p>
//             ]
//         }
//         number="00"
//       />
//     )
//   }
// }
