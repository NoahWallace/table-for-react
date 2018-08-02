import * as React from 'react';
import classNames from 'classnames';
import {IHeaderProps, ITableIcons, IActiveSortObject} from "../table.d";
import {SortArrows} from './sortArrows'
import isEqual from 'lodash.isEqual'

import {IProviderState, TableContext} from "../provider";


interface IHeaderCellProps extends IHeaderProps {
    icons: ITableIcons;
    setSortState: IProviderState["setSortState"];
    sortState: IProviderState["sortState"];
    direction: number;

}


class Cell extends React.Component<IHeaderCellProps, {}> {


    toggleSort = (event) => {
        const {setSortState, id} = this.props;
        event.preventDefault();
        setSortState(event,id)
    }

    shouldComponentUpdate(p) {
        return !isEqual(p, this.props);
    }

    render() {

        const {title, options = {}, icons = {}, direction} = this.props,
            {headerClass = '', colSpan = 1, sortable} = options;

        let ctx = classNames(headerClass, {'sortable': sortable});

        return (

            <th className={ctx}
                colSpan={colSpan}
                onClick={(e) => sortable ? this.toggleSort(e) : null}>
                <div className={'content'}>
                    {title}
                </div>
                {sortable &&
                <SortArrows direction={direction} sortAsc={icons.sortAsc} sortDesc={icons.sortDesc}/>}
            </th>
        )
    }
}

export default props => (
    <TableContext.Consumer>
        {state => {
            const {setSortState, sortState} = state,
                {id} = props,
                sort = sortState.find((item) => item[0] === id),
                currentSortState = sort && sort[1] ? sort[1] : 0;

            return (<Cell {...{...props, setSortState}} direction={currentSortState}/>)
        }}
    </TableContext.Consumer>
)

