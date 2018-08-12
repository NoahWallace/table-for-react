import * as React from 'react';
import {IHeaderProps, ITableOptions} from "../table.d";
import Cell from "./cell";

export interface IHeaderRowProps {
    row: IHeaderProps[];
    options: ITableOptions;
    rowIdx: number;
}

export class Row extends React.Component<IHeaderRowProps, any> {

    getCells = () => {
        const {row,  options, rowIdx } = this.props;
        return row.map((data: IHeaderProps) => {
            return (
                <Cell key={`header_${rowIdx}_row_${data.id}`}
                      icons={options.icons}
                      options={options}
                      {...data}
                />)
        })
    }

    render() {

        return (

            <tr className="header_row" >
                 {this.getCells()}
            </tr>

        )
    }
}



