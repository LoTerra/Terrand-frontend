import React from 'react'
import Hero from '../components/Hero'
import { useSpring, animated as a } from "react-spring";
 
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';


export default () => {

  const animatedStyle =  useSpring({
    delay: 1000,
    from:{opacity:0, marginTop:'-50px'},
    to:{opacity:1, marginTop:'0px'},
  })
  


  return (
    <div className="container py-5">
    <div className="row mb-5">
      <div className="col-md-8 text-center mx-auto intro">
        <Hero/>
        <a.div style={animatedStyle}>
        <p>Terrand is an <strong>oracle</strong> smart contract on Terra Luna to get distributed randomness beacon. <strong>Verifiable, unpredictable and unbiased random numbers</strong> as a service.</p>
        </a.div>
        <a.a style={animatedStyle} className="btn btn-primary">Learn more</a.a>
      </div>      
    </div>
    <div className="row info-block">
      <div className="col-md-6 d-flex">
          <div className="align-self-center w-100">
          <h2>Add randomness</h2>
        <p>{'You can get latest randomness from https://drand.cloudflare.com/public/latest or by round https://drand.cloudflare.com/public/{round}'}</p>
        <CodeMirror
      value={`{
        "drand":{
            "round": u64,
            "previous_signature": Binary,
            "signature": Binary
        }
    }`}
      height="200px"
      options={{
        theme: 'monokai',
        keyMap: 'sublime',
        mode: 'javascript',
      }}
    />
          </div>
      </div>
      <div className="col-md-6 text-center">
        <img src="/thumb.svg" className="img-fluid"/>
      </div>
    </div>
    <div className="row info-block">      
      <div className="col-md-6">
        
      </div>
      <div className="col-md-6">
        <h2>Get last randomness</h2>
        <p>Query:</p>
       
       
    
  <p>Result example:</p>

      </div>
    </div>
  </div>
  )
  }
