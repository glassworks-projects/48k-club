import React from "react"
import {Release} from "../components/export"
import cathedral from "../media/album-artwork/cathedral.jpg"
import {releasetext} from "../text/release-about.json"

/*
 include: title, img, artistName, releaseName, text, href
*/

export default class Cathedral extends React.Component {
  render() {
    return(
      <Release
        title="48K001 - Wild Kid - Cathdedral"
        img={cathedral}
        artistName= "WILD KID"
        releaseName= "CATHEDRAL"
        text={releasetext.cath_about}
        href="https://smarturl.it/cathedral"
      />
    )
  }
}
