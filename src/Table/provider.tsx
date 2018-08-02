import React, {Component} from "react";
import {getSortDirection, setSortedRows} from "./Utils";
import {ITableProps, IHeaderProps, TInitialSort} from './table.d';

export interface IProviderState extends ITableProps {
    sortState: [string, number][],
    setSortState: Function;
    pageSize: number;
    paged?:boolean;
    setPageSize:Function;
    pageCount:number;
    currentPage:number;
    pageEnd:Function;
    pageStart:Function;
    pageNext:Function;
    pagePrev:Function;
    currentPosition:number;
}

export const TableContext = React.createContext<IProviderState | any>({});


export class TableProvider extends Component<ITableProps, IProviderState> {
    state: IProviderState = {
        sortState: [],
        headers: [],
        rows: [],
        pageSize:10,
        pageCount:0,
        currentPage:1,
        currentPosition:0,
        pageEnd:()=>{
            this.setState((state)=>{
                const nextPosition = state.rows.length % state.pageSize === 0 ? 0 : state.rows.length - state.rows.length % state.pageSize
                return {
                    ...state,
                    currentPage:state.pageCount,
                    currentPosition:nextPosition
                }
            })
        },
        pageStart:()=>{
            this.setState((state)=>{
                return {
                    ...state,
                    currentPage:1,
                    currentPosition:0
                }
            })
        },
        pageNext:()=>{
            this.setState((state)=>{
                const {currentPage} = state;
                    let nextPage =currentPage+1;
                return {
                    ...state,
                    currentPage:nextPage,
                    currentPosition:state.currentPosition + state.pageSize
                }
            })
        },
        pagePrev:()=>{
            this.setState((state)=>{
                const {currentPage} = state;
                let nextPage =currentPage - 1;
                let nextPosition = state.currentPosition - state.pageSize < 0 ? 0 : state.currentPosition - state.pageSize
                return {
                    ...state,
                    currentPage:nextPage,
                    currentPosition:nextPosition
                }
            })
        },
        setPageSize:(value)=>{

            this.setState((state)=>{
                const pageCount=Math.ceil(state.rows.length/value)
                return {...state,pageSize:value,pageCount}})
        },
        setSortState: (event, id): void => {

            const {sortState} = this.state,
                {onSort} = this.props,
                multi = event.ctrlKey || event.metaKey,
                sort = sortState.find((item) => item[0] === id),
                direction = sort === undefined || sort[1] === 0 ? 1 : sort[1] === 1 ? -1 : 1;

            this.setState((state) => {
                let {sortState, rows, headers} = state;
                /*
                 * Set the Header sort State if multi sets more than one
                 */
                if (!multi) {
                    sortState = [[id, direction]]
                }
                else {
                    const idx = sortState.findIndex((i) => i[0] === id);
                    if (idx !== -1) {
                        sortState.splice(idx, 1)
                    }
                    sortState.push([id, direction])

                }
                /*
                 * If onSort function is available return the existing sort state for server side calls
                 * if not, sort rows and reset state
                 */
                if (!onSort) {
                    let setRows = setSortedRows(rows, headers, sortState);
                    return {...state, sortState: sortState, rows: setRows}
                }
                return {...state, sortState: sortState}

            }, () => {
                const {sortState} = this.state;
                const {onSort} = this.props;
                if (onSort) {
                    onSort(sortState);
                    return;
                }

            })
        },

    };


    constructor(props) {
        super(props);
        const {headers, rows, onSort} = this.props;
        if (headers) {
            this.state.headers = headers;
            headers[headers.length - 1].map((headerCell: IHeaderProps) => {
                const {options, id} = headerCell;
                if (options && options.initialSort) {
                    const sortValue = getSortDirection(options.initialSort);
                    const sortId =  id;
                    if (options.initialSortIdx !== undefined &&
                        options.initialSortIdx !== null &&
                        !isNaN(options.initialSortIdx)) {
                        this.state.sortState.splice(options.initialSortIdx, 0, [sortId, sortValue])
                    }
                    else {
                        this.state.sortState.push([sortId, sortValue])
                    }

                }
            })
        }
        if (rows) {
            const {headers} = this.props,
                {sortState} = this.state;

            this.state.pageCount=Math.ceil(rows.length/10);

            if (!onSort) {
                const sortedRows = setSortedRows(rows, headers, sortState);
                this.state.rows = sortedRows;
            }
            else {
                this.state.rows = rows;
            }
        }
    }
    setPageCount = () =>{
        this.setState((state)=>{return {...state,pageCount:state.rows.length}})
    }
    render() {
        return (
            <TableContext.Provider value={this.state}>
                {this.props.children}
            </TableContext.Provider>
        )
    }
}

