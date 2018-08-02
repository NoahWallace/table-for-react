import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

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
