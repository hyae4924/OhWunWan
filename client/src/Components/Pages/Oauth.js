import styled from "styled-components";
import Loding from "../Atoms/Loding";
import { useEffect } from 'react';
import axios from 'axios';
import STYLE from '../../config.js';

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
`  

function Oauth() {
  function redirect() {
    window.location.replace(`${STYLE.CLIENT}/ohwunwan`);
  }

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code')
    // console.log(code)
    axios.post(`${STYLE.SERVER}/auth/kakao`,{code})
      .then((result)=>console.log(result))
      .then(redirect)
  }, [])

  return(
    <Div>
      <Loding />
    </Div>
  )
}

export default Oauth