import React  from 'react';
import Code from '../components/Skills/Code/Code';
import Explorer from '../components/Skills/Explorer/Explorer';
import './Skill.css'

function Skill(){
    return(
        <div className="Skill">

                <Code></Code>
                <Explorer></Explorer>

        </div>
    )
}
export default Skill;