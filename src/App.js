import React  from "react";
import Navbar from './components/Navbar';
import Body from './components/Body';
import Body2 from './components/Ability';
import Project from './components/Projects';

class App extends  React.Component{
  render(){


  return (
    <>
      <Navbar name="Subhasish Pramanick"/>
      <Body/>
      <Body2/>
      <Project/>
    </>
  );
}
}
export default App;
