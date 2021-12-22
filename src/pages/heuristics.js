import React from "react"
import {Link} from "gatsby"
import {Wrapper} from "../components/export"
import styled from "styled-components"
import axios from "axios"
import { saveAs } from 'file-saver';

const serverURL = "68.183.142.128:3000/python-test"

const CodeIn = styled.input`
  align-self: auto;
  text-align: center;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Btn = styled.button`
  align-self: auto;
  margin: 10px;
`

async function dlRequest(code) {
  const resp = await fetch(serverURL, {
    method: 'POST',
    redirect: 'follow',
    body: JSON.stringify({"code":code}),
    headers: {
      "Content-Type": "application/json"
    }
  });
  

}

export default class Heuristics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      value: ''
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async downloadRequest(code) {
    // const resp = await fetch(serverURL, {
    //   method: 'POST',
    //   redirect: 'follow',
    //   body: JSON.stringify({"code":code}),
    //   responseType: 
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });
    
    // const blob = await resp.blob()
    // console.log(resp.blob())

    const config = {
      method: 'get',
      url: serverURL,
      // responseType: 'arraybuffer',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify({"code": code})
    };

    const response = await axios(config);
    console.log(response)

    if (response.status == 200 ) {
     var blob = new Blob([response], {type: "application/zip"});
      saveAs(blob, "assets.zip");
      // const url = window.URL.createObjectURL(new Blob([response.data], {type: "application/octet-stream"}));
      // const link = document.createElement('a');
      // link.href = url;
      // link.setAttribute('download', 'assets.zip');
      // document.body.appendChild(link);
      // link.click();

    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const code = this.state.value.toUpperCase();
    console.log(code);
    this.downloadRequest(code);
    document.getElementById('code').value = '';
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
      <Wrapper blue={true}>
        <Box>
        <CodeIn id="code" type='text' value={this.state.value} onChange={this.handleChange} />
        <Btn type='submit' onClick={this.handleSubmit}>submit</Btn>
        </Box>
      </Wrapper>
    )
  }
}