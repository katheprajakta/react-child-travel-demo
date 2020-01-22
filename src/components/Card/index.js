import React from 'react'
import "./style.css";
import { getData } from '../../App';


class Card extends React.Component {
  

  render() {
    
    return   <div >
        <div>
          {this.props.title}
        </div>
        <a href={this.props.link}>
          {this.props.text}
        </a>
        
        {getData(this.props.children)}
  </div>
  }
}

export default Card
