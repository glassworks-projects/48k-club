import React from "react"
import {Release} from "../components/export"
import lapse from "../media/album-artwork/lapse.jpg"
import {releasetext} from "../text/release-about.json"

export default class Lapse extends React.Component {
  render() {
    return(
      <Release
        title="48KS001 - Wild Kid - Lapse (Miracles Remix)"
        img={lapse}
        artistName= "WILD KID"
        releaseName= "LAPSE (MIRACLES REMIX)"
        text={releasetext.lapse_about}
        href="http://hyperurl.co/48ks001"
      />
    )
  }
}
