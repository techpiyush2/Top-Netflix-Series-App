import React from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';
import Data from './components/data';

const ndata = (value) =>{
 return( <Card
      poster = {value.poster}
      title = {value.title}
      source = {value.source}
      link = {value.link}
  />
 )
}


function App() {

  return (
    <>
    
      <Navbar/>
      {Data.map(ndata)}
    </>
  );
}

export default App;
