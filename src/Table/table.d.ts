import {ReactText} from "react";


export interface ITableProps {
    className?: string;
    caption?: string | number | React.Component
    headers: IHeaderProps[][];
    rows:any[];
    options?: ITableOptions
    onSort?:(sortState:[string,number][])=>any;
}

export interface ITableOptions {
    icons?: ITableIcons;
    paged?: boolean;
}

export interface ITableIcons {

    sortAsc?: JSX.Element;
    sortDesc?: JSX.Element;
    pageNext?: JSX.Element;
    pageEnd?: JSX.Element;
    pagePrev?: JSX.Element;
    pageFirst?: JSX.Element;

}

export interface IHeaderProps {
    id: string;
    title: any;
    options?: IHeaderOptions;

}
export type TInitialSort = 'ascending' | 'descending' | 'asc' | 'desc';
export interface IHeaderOptions {
    colSpan?: number;
    headerClass?: string;
    columnClass?: string;
    sortable?: boolean;
    initialSort?: string;
    initialSortIdx?:number;
    sortOnId?:string;
}



export interface IActiveSortObject {
    id: string,
    direction: number | boolean,
    sortIdx: number
}

export interface ITableRows {
    id: '',
    index: number,
    value: string | number | JSX.Element,
    sortValue: string | number,
    isComponent: boolean;
}