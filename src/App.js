import React from 'react';
import './App.css';
import { data,Row, Col} from "../src/resources/data";
import Section from './components/Section';
import Card from './components/Card';
import Tag from './components/Tag';
import Markdown from './components/Markdown';


class App extends React.Component {
  
  
    render() {
    return (
      <div className="App">
        {getData(data)}
      </div>
    );
  }

  
}

export default App;


export const getData=(data)=>{  
  if(data instanceof Array)
  return data.map((component,key)=>{
     switch(component.component){
       case "Section":{
         return <Section {...component.props} key={key} ></Section>          
       }        
       case "Row":{
         return <Row {...component.props}key={key} ></Row>
        
       }
       case "Col":{
         return <Col {...component.props} key={key} ></Col>   
       }        
       
       case "Markdown":{
         return <Markdown {...component.props}key={key} ></Markdown>
        
       }
       case "Tag":{
         return <Tag {...component.props}key={key} ></Tag>
        
       }
       case "Card":{
         return <Card {...component.props}key={key} ></Card>
        
       } 
        default:
          break;
     }
     return true
   });
   else if(typeof(data)==="string"){
    return <div>{data}</div>
   }   
 }
