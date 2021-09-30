import React from 'react'
import { CopyBlock, nord } from 'react-code-blocks'
import Hero from '../components/Hero'




export default () => (
  <div className="container py-5">
    <div className="row mb-5">
      <div className="col-md-8 text-center mx-auto intro">
        <Hero/>
        <p>Terrand is an <strong>oracle</strong> smart contract on Terra Luna to get distributed randomness beacon. <strong>Verifiable, unpredictable and unbiased random numbers</strong> as a service.</p>
        <a className="btn btn-primary">Learn more</a>
      </div>      
    </div>
    <div className="row info-block">
      <div className="col-md-6 d-flex">
          <div className="align-self-center w-100">
          <h2>Add randomness</h2>
        <p>{'You can get latest randomness from https://drand.cloudflare.com/public/latest or by round https://drand.cloudflare.com/public/{round}'}</p>
        <CopyBlock
       text={`{
        "drand":{
            "round": u64,
            "previous_signature": Binary,
            "signature": Binary
        }
      }      
      `}
       language={'javascript'}
       showLineNumbers={true}
      //  startingLineNumber={1}
       theme={nord}
       wrapLines
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
        <CopyBlock
       text={`{
        "latest_drand": {}
    }`}
       language={'javascript'}
       showLineNumbers={true}
      //  startingLineNumber={1}
       theme={nord}
       wrapLines
        />
        <p>Result:</p>
        <CopyBlock
       text={`{
        "height": string,
        "result": {
          "round": u64,
          "randomness": Binary,
          "worker": HumanAddr
        }
      }`}
       language={'javascript'}
       showLineNumbers={true}
      //  startingLineNumber={1}
       theme={nord}
       wrapLines
        />
  <p>Result example:</p>
<CopyBlock
       text={`{
        "height": "2439975",
        "result": {
          "round": 573531,
          "randomness": "yTBW2ubloeFa+ZRh08Jt+4jVQHHGMX4s3j8mTYKc3oQ=", // This is the randomness hash from drand
          "worker": "terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v" // Worker is the address of the account who added this random
        }
      }`
    }
       language={'javascript'}
       showLineNumbers={true}
      //  startingLineNumber={1}
       theme={nord}
       wrapLines
        />
      </div>
    </div>
  </div>
)
