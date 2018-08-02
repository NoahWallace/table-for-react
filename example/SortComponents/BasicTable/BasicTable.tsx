import React from 'react';
import {Table} from '../../../src/index'
import {plainTable} from "./BasicTableConfig";
import {ArrayData} from "../ArrayData";


export const BasicTable: React.StatelessComponent<{}> = () => {

    const {headers, caption} = plainTable;
    return (
        <Table headers={headers} rows={ArrayData} caption={caption}/>
    )
}