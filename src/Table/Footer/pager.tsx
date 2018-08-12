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

class Pager extends React.Component<any, any> {
    render() {
        const {
            setPageSize,
            pageSize,
            pageCount,
            currentPage,
            pageNext,
            pagePrev,
            pageEnd,
            pageStart,
            headerLength,
            icons,
            pageOptions
        } = this.props;
        const pgPrevDsbl = currentPage === 1,
            pgPrevCls = classNames("paging_button", {"paging_button--disabled": pgPrevDsbl}),
            pgNextDsbl = currentPage === pageCount,
            pgNextCls = classNames("paging_button", {"paging_button--disabled": pgNextDsbl})
        return (
            <div className="pager_container">
                <div className="pager_grid">
                    <div/>
                <PagerSelect setPageSize={setPageSize}
                             pageSize={pageSize}
                             currentPage={currentPage}
                             totalPages={pageCount}
                             pageOptions={pageOptions}
                />
                <button type="button"
                        className={pgPrevCls}
                        onClick={pageStart}
                        disabled={pgPrevDsbl}
                >
                    {icons && icons.pageStart || <FontAwesomeIcon icon={faAngleDoubleLeft}/>}
                </button>
                <button type="button"
                        className={pgPrevCls}
                        onClick={pagePrev}
                        disabled={pgPrevDsbl}
                >
                    {icons && icons.pagePrev || <FontAwesomeIcon icon={faAngleLeft}/>}
                </button>
                <div className={'pager_position'}>{currentPage} of {pageCount}</div>
                <button type="button"
                        className={pgNextCls}
                        onClick={pageNext}
                        disabled={pgNextDsbl}
                >
                    {icons && icons.pageNext || <FontAwesomeIcon icon={faAngleRight}/>}
                </button>
                <button type="button"
                        className={pgNextCls}
                        onClick={pageEnd}
                        disabled={pgNextDsbl}
                >
                    {icons && icons.pageEnd || <FontAwesomeIcon icon={faAngleDoubleRight}/>}
                </button>
            </div>
            </div>
        )
    }
}

export default props => (
    <TableContext.Consumer>
        {state => {
            const {setPageSize, pageSize, pageCount, currentPage, pageNext, pagePrev, pageEnd, pageStart, headers} = state;
            const headerLength = headers[headers.length - 1].length;
            return (
                <Pager {...{
                    setPageSize,
                    pageSize,
                    pageCount,
                    currentPage,
                    pageNext,
                    pagePrev,
                    pageEnd,
                    pageStart,
                    headerLength,
                    ...props
                }} />)
        }}
    </TableContext.Consumer>
)