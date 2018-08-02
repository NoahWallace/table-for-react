import React from "react";
import {Cell} from "./cell"

export const Row = (props) => {
    const getCells = ():any => {
        const headerLastIndex = props.headers.length - 1,
            headers=props.headers[headerLastIndex],
            keys=headers.map((item)=>item.id);

        if (Array.isArray(props.cells)) {
            return props.cells.map((v,idx) =>{
                if(idx > headers.length -1){return null}
                return( <Cell key={`Cell_${idx}`} value={v}/>)
            })
        }

        let entries:any[] = Object.entries(props.cells)
            .map((cell,idx) => {

                props.headers[headerLastIndex].map((item, idx) => {
                    const sortId = item.id;
                    if (sortId === cell[0]) {
                        cell.push(idx)
                    }
                })
                return cell;
            })
            .filter(c => c[2] !== undefined)
            .sort((a, b) => a[2] > b[2] ? 1 : -1)

        keys.map((_,idx)=>{
            let hasItem=entries.find((b)=>b[0]===_)
            if(!hasItem){entries.splice(idx,0,[_,"",idx])}
        })

        return entries.map((_,idx) => <Cell key={`body_${idx}_row`} value={_[1]}/>)
    }

    return (
        <tr>
            {getCells()}
        </tr>
    )
}
