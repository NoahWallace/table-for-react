import React from 'react'

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

            </tr>
        )
    }
}