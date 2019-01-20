import React, { Component } from 'react';

import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";
import './Explorer.css'

import ScrollAnimation from 'react-animate-on-scroll'

import Load from './Load';
class Explorer extends Component {


    render() {

            return (
                <div className="Explorer">
                <VisibilitySensor>
                  {({isVisible}) =>
                  <div>
                      {/* <div>I am {isVisible ? 'visible' : 'invisible'}</div> */}
                      {isVisible ? <Load/> : 'Loading'}
                  </div>

                  }
                </VisibilitySensor>
                </div>
              );
        }

}
export default Explorer;