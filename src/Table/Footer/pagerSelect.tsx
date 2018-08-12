import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import cls from 'classnames'

export class PagerSelect extends React.Component<any, any> {
    state = {
        options: [10, 25, 50],
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
        const {pageSize, pageOptions} = this.props;

        let options = (pageOptions || this.state.options).map((item) => <li key={`dropdown_${item}`}
                                                                            className={cls("dropdown_item", {"selected": item === pageSize})}
                                                                            onClick={() => this.setValue(item)}>{item}</li>);
        let hidden = this.state.open ? '' : 'hidden';
        return (
            <div className="pager_select">
                <span className='pager_select_value'>{pageSize}</span>
                <div className='pager_select_button' onClick={this.toggleDropdown}>
                    <FontAwesomeIcon icon={faAngleDown}/>
                </div>
                <div className={`pager_select_dropdown ${hidden}`}>
                    <ol className={"dropdown_valuegroup"}>
                        {options}
                    </ol>
                </div>
            </div>
        )
    }
}
