import React from 'react'
import {Row} from './row'
import {TableContext} from "../provider";

class TBody extends React.Component<any, any> {
    getRows = () => {
        const {rows, headers, paged, pageSize,currentPosition} = this.props;
        const cb = (cells, idx) => (<Row key={`body_${idx}_row`} cells={cells} headers={headers}/>);

        if (paged) {
            return rows.slice(currentPosition, currentPosition+pageSize).map(cb)
        }
        return rows.map(cb)
    }

    render() {

        return (
            <tbody className={"body"}>
            {this.getRows()}
            </tbody>
        )
    }
}

export default props => {
    const {options={}} = props;
    const {paged}=options;

    return (<TableContext.Consumer>
        {({rows, headers, pageSize,currentPosition}) =>
            <TBody {...{rows,headers,paged,pageSize,currentPosition}}/>
        }
    </TableContext.Consumer>)
}

