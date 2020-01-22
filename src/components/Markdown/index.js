import React from 'react'
import "./style.css";
import snarkdown from 'snarkdown';


class Markdown extends React.Component {
    

  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
     
    };
  }


  render() {
    
    return <div dangerouslySetInnerHTML= {{__html: snarkdown(this.props.text)}}>
   
   </div>

  }
}

export default Markdown
