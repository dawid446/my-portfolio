import React from 'react';
import Highlight from 'react-highlight';
import './Code.css'

function Code() {
    return (

        <div className="Code">
            <Highlight className="highlight" language="javascript">{`
fetch('http://skills.com/DawidMajewski.json')
  .then(function(response) {
    return response.json();
    })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    });`
            }
            </Highlight>
        </div>

    )
}
export default Code;