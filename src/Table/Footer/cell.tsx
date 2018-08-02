import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faAngleLeft,
    faAngleRight,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import {PagerSelect} from "./pagerSelect";

import {IProviderState, TableContext} from "../provider";

class Cell extends React.Component<any, any> {
    render() {
        const {setPageSize, pageSize, pageCount, currentPage, pageNext} = this.props;

        return (
            <td colSpan={6}>
                <div className={"pager"}>
                    <PagerSelect setPageSize={setPageSize}
                                 pageSize={pageSize}
                                 currentPage={currentPage}
                                 totalPages={pageCount}/>
                    <button type="button" className={"paging-button"}>
                        <FontAwesomeIcon icon={faAngleDoubleLeft}/>
                    </button>
                    <button type="button" className={"paging-button"}>
                        <FontAwesomeIcon icon={faAngleLeft}/></button>
                    <div className={'pager-position'}>{currentPage} of {pageCount}</div>
                    <button type="button" className={"paging-button"} onClick={pageNext}>
                        <FontAwesomeIcon icon={faAngleRight}/>
                    </button>
                    <button type="button" className={"paging-button"}>
                        <FontAwesomeIcon icon={faAngleDoubleRight}/>
                    </button>
                </div>
            </td>
        )
    }
}

export default props => (
    <TableContext.Consumer>
        {state => {
            const {setPageSize, pageSize, pageCount, currentPage, pageNext} = state;

            return (<Cell {...{setPageSize, pageSize, pageCount, currentPage, pageNext}} />)
        }}
    </TableContext.Consumer>
)