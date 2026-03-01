import React from 'react'
 
function RustItemCard(props){
    const [minAmount, setMinAmount] = React.useState(1);
    const [maxAmount, setMaxAmount] = React.useState(1);
    const [probability, setProbability] = React.useState(1.0);
    
    var cardItem = {
        "shortname": props.itemName,
        "name": null,
        "text": null,
        "amount": maxAmount,
        "skin": 0,
        "amountMin": minAmount,
        "probability": probability,
        "stacksize": -1
    };

    return(
        <div className='Rust-Item-Card arrayCard'>
            <div>
                <h3>{props.itemName}</h3>
                <label>Minimum Amount of the item that will spawn</label>
                <input type="number"min={1} max={999} onChange={(e) => setMinAmount(parseInt(e.target.value) || 1)}/>
                <label>Maximum Amount of the item that will spawn</label>
                <input type="number" placeholder='Max Amount' min={1} max={999} onChange={(e) => setMaxAmount(parseInt(e.target.value) || 1)}/>
                <label>Chance of the item spawning (0-100%)</label>
                <input type="percentage" placeholder='Spawn Chance %' min={0} max={100} step={0.1} onChange={(e) => setProbability((parseFloat(e.target.value) / 100) || 1.0)}/>
            </div>
            <button onClick={() => props.additem(cardItem)}>Add Item</button>
        </div>
    )
}

export default RustItemCard;
