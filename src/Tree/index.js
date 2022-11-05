import { React, useState } from "react";
import "./tree.css"


const Tree = ({data}) => {
    const [expanded, setExpanded] = useState([]);
    
    function toggleExpanded(toggleMe) {
        let nextExpandedState;
        if (expanded.includes(toggleMe)) {
            nextExpandedState = expanded.filter(e=>e!==toggleMe);
        } else {
            nextExpandedState = [...expanded, toggleMe];
        }
        setExpanded(nextExpandedState);
    }

    return renderFolderOrLeaf(data, "root", expanded, toggleExpanded)

}

export default Tree;


function renderFolderOrLeaf(data, current, expanded, toggleExpanded) {
    if (data[current]) { // folder
        if (!expanded.includes(current)) {
            
            // collapsed
            return (<div className="left" onClick={()=>toggleExpanded(current)}>[+] {current}</div>)
        } else {

            //expanded
            return (
                <div key={current}>
                    <div className="left" onClick={()=>toggleExpanded(current)}>[-] {current}</div>
                    <div className="left">
                        {
                            data[current].child.map((childName)=>{
                                return renderFolderOrLeaf(data, childName, expanded, toggleExpanded)
                            })
                        }
                    </div>
                </div>
            )
        }
    }
    return ( //leaf
        <div key={current} style={{paddingLeft: 23}}>{current}</div>
    )
}