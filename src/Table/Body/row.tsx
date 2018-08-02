import React from "react";
import {Cell} from "./cell"

export const Row = (props) => {
    const getCells = ():any => {
        const headers=props.headers[props.headers.length - 1],
                keys=headers.map((item)=>item.id);
        /*
         * If Row is an array of strings,numbers or components
         */
        if (Array.isArray(props.cells)) {
            return props.cells.map((v,idx) =>{
                if(idx > headers.length -1){return null}
                return( <Cell key={`Cell_${idx}`} value={v}/>)
            })
        }
        /*
         * If Row is an object
         */
        let cells:any[] = Object.entries(props.cells)
            .map((cell,idx) => {
                headers.map((header, idx) => {
                    const sortId = header.id;
                    if (sortId === cell[0]) {
                        cell.push(idx)
                    }
                });
                return cell;
            })
            .filter(c => c[2] !== undefined)
            .sort((a, b) => a[2] > b[2] ? 1 : -1)

        keys.map((entry,idx)=>{
            let hasItem=cells.find((b)=>b[0]===entry)
            if(!hasItem){cells.splice(idx,0,[entry,"",idx])}
        })

        return cells.map((_,idx) => <Cell key={`body_${idx}_row`} value={_[1]}/>)
    }

    return (
        <tr>
            {getCells()}
        </tr>
    )
}
