import './App.css';
import EmojiList from './EmojiList.json';
import React, {useState} from 'react';


function App() {
  const [search, setSearch]=useState('');

  const filteredEmojis=  EmojiList.filter((emoji)=>
   emoji.title.toLowerCase().includes(search.toLowerCase()) ||
   emoji.keywords.toLowerCase().includes(search.toLowerCase())
  );
  const handleCopy=(symbol)=>{
   navigator.clipboard.writeText(symbol);
   alert(`copied ${symbol} to clipboard`);
 }

  return (
    <div className="App">
      <h1>Emoji Search</h1>
      <input type='text' placeholder='search for an emoji by title or keyword' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
      <div className='emoji-container'>
          {filteredEmojis.map((emoji,index)=>(
            <div key={index} className='emoji-card' onClick={()=>handleCopy(emoji.symbol)}>
              <span className='emoji-symbol'>{emoji.symbol}</span>
              <span className='emoji-title'>{emoji.title}</span>
            </div>
          ))}
          </div>
      </div>
  );
}

export default App;
 