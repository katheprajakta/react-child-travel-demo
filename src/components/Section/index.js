import React from 'react'
import "./style.css";
import { getData } from '../../App';


class Section extends React.Component {
 
  
  render() {    
    return  ( <div>
                <h2>{this.props.h2}</h2>
                <p>{this.props.text}</p>
                {getData(this.props.children)}
             </div>
    )
  }
}

export default Section
