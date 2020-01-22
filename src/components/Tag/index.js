import React from 'react'
import "./style.css";


class Tag extends React.Component {
  
  printTags() {
    if (typeof (this.props.children) === 'string') {
      return <this.props.tag className={this.props.className}>{this.props.children}</this.props.tag>
    } else if (typeof (this.props.children) === "object") {
      return this.props.children.map((child,key)=> {
        return <this.props.tag key={key} className={this.props.className}>{child}</this.props.tag>
      });
    } else {      
      return null;
    }

  }
  render() {
    return <div>{this.printTags()}</div>
  }
}

export default Tag
