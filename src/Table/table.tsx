import * as React from "react";
import cls from 'classnames';

import {TableProvider} from "./provider";
import {THead} from "./Header";
import TBody from "./Body";
import {TFoot} from "./Footer";

import './table.pcss';
import {ITableProps} from './table.d';

export class Table extends React.Component<ITableProps, {}> {



    render() {
        const {className, caption, headers, options = {}} = this.props;

        let cssClass = cls('react-table', className);
        return (
            <TableProvider {...this.props} >
                <table className={cssClass}>
                    {caption && <caption>{caption}</caption>}
                    <THead headers={headers} options={options} />
                    <TBody options={options}/>
                    {options.paged && <TFoot icons={options.icons} pageOptions={options.pageOptions}/>}
                </table>
            </TableProvider>
        )
    }
}

