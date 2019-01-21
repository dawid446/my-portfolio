import React, { Component } from 'react';

import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";
import './Explorer.css'

import ScrollAnimation from 'react-animate-on-scroll'
import { IconContext } from "react-icons";
import { FaWindowMinimize, FaWindowClose, FaWindowMaximize } from 'react-icons/fa';

import Load from './Load';
class Explorer extends Component {


    render() {

        return (
            <div className="Explorer">
                <div className="Bar">
                    <IconContext.Provider value={{style:{margin: '5px', color: 'white'}, size: '20px'}}>
                            <FaWindowMinimize />
                            <FaWindowMaximize />
                            <FaWindowClose />
                    </IconContext.Provider>
                </div>
                <VisibilitySensor>
                    {({ isVisible }) =>
                        <div >
                            {/* <div>I am {isVisible ? 'visible' : 'invisible'}</div> */}
                            {isVisible ? <Load /> : 'Loading'}
                        </div>

                    }
                </VisibilitySensor>
            </div>

        );
    }

}
export default Explorer;