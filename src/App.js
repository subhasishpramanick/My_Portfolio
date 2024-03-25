import React  from "react";
import Navbar from './components/Navbar';
import Body from './components/Body';
import Body2 from './components/Ability';

class App extends  React.Component{
  render(){


  return (
    <>
      <Navbar name="Subhasish Pramanick"/>
      <Body/>
      <Body2/>
    </>
  );
}
}
export default App;
