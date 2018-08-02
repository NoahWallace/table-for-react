import * as React from "react";
import ctx from 'classnames';
import {ITableProps, IHeaderProps} from './table.d';

import {getSortDirection} from "./Utils";

import './table.pcss';
import {TableProvider} from "./provider";
import {THead} from "./Header";
import TBody from "./Body";
import {TFoot} from "./Footer";


export class Table extends React.Component<ITableProps, {}> {



    render() {
        const {className, caption, headers, options = {}, rows} = this.props;

        let cssClass = ctx('react-table', className);
        return (
            <TableProvider {...this.props} >
                <table className={cssClass}>
                    {caption && <caption>{caption}</caption>}
                    <THead headers={headers} options={options} />
                    <TBody options={options}/>
                    {options.paged && <TFoot/>}
                </table>
            </TableProvider>
        )
    }
}

