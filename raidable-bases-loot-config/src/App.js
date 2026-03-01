import { useState } from 'react';

import data from "../src/RustLootList.json";
import './App.css';
import RustItemCard from './RustItemCard';
import RaidableBasesLootItemCard from './RaidableBasesLootItemCard';

function App() {

  const [rustLootList, setRustLootList] = useState(data);
  const [raidableBasesLootTable, setRaidableBasesLootTable] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const addItemToLootTable = (item) => {
    console.log(item)
    const newArray = [...raidableBasesLootTable, item];
    setRaidableBasesLootTable(newArray);
  }

  const removeItemFromLootTable = (index) => {
    const newArray = [...raidableBasesLootTable];
    newArray.splice(index, 1);
    setRaidableBasesLootTable(newArray);
  }

  const updateItemInLootTable = (index, updatedItem) => {
    console.log(updatedItem)
    const newArray = [...raidableBasesLootTable];
    newArray[index] = updatedItem;
    setRaidableBasesLootTable(newArray);
  }

  const exportLootTable = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(raidableBasesLootTable)
    )}`;
    console.log(jsonString)
    navigator.clipboard.writeText(JSON.stringify(raidableBasesLootTable));
    alert('Loot table copied to clipboard! Paste into your config file or wherever you need it :)');
  }

  return (
    <div className="App">
      
      <div className="App-header">
        <h1>Raidable Bases Loot Config</h1>
        <div>
          <button onClick={() => exportLootTable()}>Export Table</button>
          <button onClick={() => setRaidableBasesLootTable([])}>Reset Loot Table</button>
        </div>
      </div>  

      <div className="App-body">
        
        <div className="Raidable-Bases-Loot-Table">
          <h2>Raidable Bases Loot Table</h2>
          <input className='Rust-Loot-List-Search' type="text" placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <div className="Raidable-Bases-Loot-Table-Items arrayCard_List-Container">
            {raidableBasesLootTable.map((item, index) => {
              if(searchTerm === '' || item.shortname.toLowerCase().includes(searchTerm.toLowerCase())) {
                return <RaidableBasesLootItemCard key={index} cardItem={item} removeItem={() => removeItemFromLootTable(index)} itemUpdate={(updatedItem) => updateItemInLootTable(index, updatedItem)}/>
              }
              return null;
            })}
          </div>
        </div>

         <div className="Rust-Loot-List">
          <h2>Rust Loot List</h2>
          <input className='Rust-Loot-List-Search' type="text" placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <div className="Rust-Loot-List-Items arrayCard_List-Container" >
            {rustLootList.map((item) => {
              if(searchTerm === '' || item.shortname.toLowerCase().includes(searchTerm.toLowerCase())) {
                return <RustItemCard key={item.shortname} itemName={item.shortname} additem={(newItem) => addItemToLootTable(newItem)}/>
              }
              return null;
            })}
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
