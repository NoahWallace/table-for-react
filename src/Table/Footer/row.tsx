import React from 'react'
import Cell from "./cell";

export class Row extends React.Component<any, any> {
    render(){
        return(
            <tr className="footer_row">
                <Cell/>
            </tr>
        )
    }
}