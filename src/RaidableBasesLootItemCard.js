import React from 'react'

export default function RaidableBasesLootItemCard(props) {

    const cardItem = props.cardItem;

    



  return (
    <div className="Raidable-Bases-Loot-Item-Card arrayCard">
            <div>
                <h3>{cardItem.shortname}</h3>
                <label>Minimum Amount of the item that will spawn</label>
                <input type="number" placeholder={cardItem.amountMin} min={1} max={999} value={cardItem.amountMin} onChange={(e) => props.itemUpdate({...cardItem, amountMin: parseInt(e.target.value)})} />
                <label>Maximum Amount of the item that will spawn</label>
                <input type="number" placeholder={cardItem.amount} min={1} max={999} value={cardItem.amount} onChange={(e) => props.itemUpdate({...cardItem, amount: parseInt(e.target.value)})} />
                <label>Chance of the item spawning (0 - 1)</label>
                <input type="number" placeholder={cardItem.probability} min={0} max={1} step={0.01} value={cardItem.probability} onChange={(e) => props.itemUpdate({...cardItem, probability: parseFloat(e.target.value)})}  />
                <label>Stack Size || -1 = default</label>
                <input type="number" placeholder={cardItem.stacksize} min={-1} max={999} value={cardItem.stacksize} onChange={(e) => props.itemUpdate({...cardItem, stacksize: parseInt(e.target.value)})} />
            </div>
            <button onClick={() => {props.removeItem()}}>Remove Item</button>
        </div>
  )
}
    