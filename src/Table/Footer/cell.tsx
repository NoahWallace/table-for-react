import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faAngleLeft,
    faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import {PagerSelect} from "./pagerSelect";
import classNames from 'classnames';
import {TableContext} from "../provider";

class Cell extends React.Component<any, any> {
    render() {
        const {setPageSize, pageSize, pageCount, currentPage, pageNext, pagePrev, pageEnd, pageStart,headerLength} = this.props;
        const pgPrevDsbl = currentPage === 1,
            pgPrevCls = classNames("paging_button",{"paging_button--disabled":pgPrevDsbl}),
            pgNextDsbl = currentPage === pageCount,
            pgNextCls=classNames("paging_button",{"paging_button--disabled":pgNextDsbl})
        return (
            <td colSpan={headerLength} className="cell">
                <div className={"content pager"}>
                    <PagerSelect setPageSize={setPageSize}
                                 pageSize={pageSize}
                                 currentPage={currentPage}
                                 totalPages={pageCount}/>
                    <button type="button"
                            className={pgPrevCls}
                            onClick={pageStart}
                            disabled={pgPrevDsbl}
                    >
                        <FontAwesomeIcon icon={faAngleDoubleLeft}/>
                    </button>
                    <button type="button"
                            className={pgPrevCls}
                            onClick={pagePrev}
                            disabled={pgPrevDsbl}
                    >
                        <FontAwesomeIcon icon={faAngleLeft}/></button>
                    <div className={'pager_position'}>{currentPage} of {pageCount}</div>
                    <button type="button"
                            className={pgNextCls}
                            onClick={pageNext}
                            disabled={pgNextDsbl}
                    >
                        <FontAwesomeIcon icon={faAngleRight}/>
                    </button>
                    <button type="button"
                            className={pgNextCls}
                            onClick={pageEnd}
                            disabled={pgNextDsbl}
                    >
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
            const {setPageSize, pageSize, pageCount, currentPage, pageNext, pagePrev, pageEnd, pageStart,headers} = state;
            const headerLength=headers[headers.length-1].length
            return (
                <Cell {...{setPageSize, pageSize, pageCount, currentPage, pageNext, pagePrev, pageEnd, pageStart,headerLength}} />)
        }}
    </TableContext.Consumer>
)