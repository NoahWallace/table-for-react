import * as React from "react";
import cls from 'classnames';

import {TableProvider} from "./provider";
import {THead} from "./Header";
import TBody from "./Body";
import {Pager} from "./Footer";
import {ITableProps} from './table.d';

import './table.pcss';

export class Table extends React.Component<ITableProps, {}> {


    render() {
        const {className, caption, headers, options = {}} = this.props;

        let cssClass = cls('react-table', className);
        return (
            <TableProvider {...this.props} >
                <div className={"react-table-container"}>
                    <table className={cssClass}>
                        {caption && <caption>{caption}</caption>}
                        <THead headers={headers} options={options}/>
                        <TBody options={options}/>
                    </table>
                    {options.paged && <Pager icons={options.icons} pageOptions={options.pageOptions}/>}
                </div>
            </TableProvider>
        )
    }
}

