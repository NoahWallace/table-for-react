import React from 'react'
import Cell from "./cell";
import {ITableIcons, ITableOptions} from '../table.d'

export interface IFooterCellProps {
    icons:ITableIcons;
    pageOptions:ITableOptions["pageOptions"]
}

export class Row extends React.Component<IFooterCellProps, any> {
    render(){
        const {icons, pageOptions} = this.props;
        return(
            <tr className="footer_row">
                <Cell {...{icons,pageOptions}}/>
            </tr>
        )
    }
}