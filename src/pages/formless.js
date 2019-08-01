import React from "react"
import {Release} from "../components/export"
import formless from "../media/album-artwork/formless.jpg"
import {releasetext} from "../text/release-about.json"

export default class Formless extends React.Component {
  render() {
    return(
      <Release
        title="48K003 - Wild Kid - Formless"
        img={formless}
        artistName= "WILD KID"
        releaseName= "FORMLESS"
        text={releasetext.formless_about}
        href="http://smarturl.it/formless-ep"
      />
    )
  }
}
