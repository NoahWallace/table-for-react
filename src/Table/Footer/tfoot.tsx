import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faAngleLeft,
    faAngleRight,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import {IProviderState, TableContext} from "../provider";

export class TFoot extends React.Component<any, any> {

    render() {
        const {currentPage = 1, totalPages = 10, options = {}} = this.props;

        return (
            <tfoot>

            <tr>
                <td colSpan={6}>
                    <div className={"pager"}>
                        <Pager/>
                        <button type="button" className={"paging-button"}><FontAwesomeIcon icon={faAngleDoubleLeft}/>
                        </button>
                        <button type="button" className={"paging-button"}><FontAwesomeIcon icon={faAngleLeft}/></button>
                        <div className={'pager-position'}>{currentPage} of {totalPages}</div>
                        <button type="button" className={"paging-button"}><FontAwesomeIcon icon={faAngleRight}/>
                        </button>
                        <button type="button" className={"paging-button"}><FontAwesomeIcon icon={faAngleDoubleRight}/>
                        </button>
                    </div>
                </td>
            </tr>

            </tfoot>
        )
    }
}

export class Rows extends React.Component<any, any> {

}

export class PagerSelect extends React.Component<any, any> {
    state = {
        options: [10, 15, 25, 50],
        open: false
    }

    setValue = (value) => {
        this.props.setPageSize(value);
        this.setState((state) => {
            return {...state, open: false}
        })
    }
    toggleDropdown = () => {
        this.setState((state) => {
            return {...state, open: !this.state.open}
        })
    }


    render() {
        const {pageSize} = this.props;
        let options = this.state.options.map((item) => <li key={`dropdown_${item}`}
                                                           className={`${item === pageSize ? "selected" : ''}`}
                                                           onClick={() => this.setValue(item)}>{item}</li>);
        let hidden = this.state.open ? '' : 'hidden';
        return (
            <div className="pager-select">
                <span className='pager-select-value'>{pageSize}</span>
                <div className='pager-select-button' onClick={this.toggleDropdown}><FontAwesomeIcon icon={faAngleDown}/>
                </div>
                <div className={`pager-select-dropdown ${hidden}`}>
                    <ol>
                        {options}
                    </ol>
                </div>
            </div>
        )
    }
}

export const Pager = props => (
    <TableContext.Consumer>
        {state => {
            const {setPageSize, pageSize, totalPages, currentPage} = state;
            return (<PagerSelect setPageSize={setPageSize} pageSize={pageSize} currentPage={currentPage}
                                 totalPages={totalPages}/>)
        }}
    </TableContext.Consumer>
)