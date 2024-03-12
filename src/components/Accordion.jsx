import React, { useState } from 'react'
import data  from '../assets/data';
//single selection
//multiple selection 

const Accordion = () => {
  
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);


  const handleSingleSelection = (id) =>{
    setSelected(id=== selected ? null : id);
  }

  const handleMultipleSelection = (id) => {
    let tempMultiple = [ ... multiple];
    const findIndexOfCurrentId = tempMultiple.indexOf(id);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) tempMultiple.push(id);
    else tempMultiple.splice(findIndexOfCurrentId,1);

    setMultiple(tempMultiple);
  }

  console.log(selected, multiple);
  return (
    <div className="wrapper">
      <button onClick={()=>{setEnableMultiSelection(!enableMultiSelection); }}>Enable Multi Selection</button>
      <div className="accordion">
        {
            data && data.length > 0 ?
            data.map(dataItem=> <div className="item">
                <div onClick={()=>{
                  enableMultiSelection
                  ? handleMultipleSelection(dataItem.id)
                  : handleSingleSelection(dataItem.id)
                  }} className="title">
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                </div>
                {
                  enableMultiSelection ?
                  (multiple.includes(dataItem.id)  && <div className="content">{dataItem.answer}</div>) 
                  : (selected === dataItem.id && <div className="content">{dataItem.answer}</div>)
                }
            </div>)
            : <div>No data found!</div>
        }
      </div>
    </div>
  )
}

export default Accordion
