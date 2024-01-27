import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card';

import emoji from './emoji.json'
const App = () => {
  const[search,setSearch]=useState("");
  const[data,setData]=useState([]);
  useEffect(()=>{
    const filter=emoji.filter(em=>em.title.toLowerCase().includes(search.toLowerCase()));
    setData(filter);
  },[search])
  return (
    <div>
      <center>
        <h1>Search Emoji</h1>
        <input type='text' placeholder='search' value={search}  onChange={(e)=>setSearch(e.target.value)}></input>
      </center>
      {data.map(emoji=><div>
    <Card onClick={()=>{navigator.clipboard.writeText(emoji.symbol);alert("copied")}}>
      <Card.Body>{emoji.symbol} {emoji.title}</Card.Body>
    </Card>
      </div>)}
    </div>
  )
}

export default App
