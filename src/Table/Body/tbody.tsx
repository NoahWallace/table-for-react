import React from 'react'
import {Row} from './row'
import {TableContext} from "../provider";

class TBody extends React.Component<any, any> {
    getRows = () => {
        const {rows, headers, paged, pageSize,currentPosition, rowKey} = this.props;

        const fetchRowComponent = (cells, idx) => (<Row key={`body_${cells[rowKey] || idx}_row`} cells={cells} headers={headers}/>);

        if (paged) {
            return rows.slice(currentPosition, currentPosition+pageSize).map(fetchRowComponent)
        }
        return rows.map(fetchRowComponent)
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
    const {paged, rowKey}=options;

    return (<TableContext.Consumer>
        {({rows, headers, pageSize,currentPosition}) =>
            <TBody {...{rows,headers,paged,pageSize,currentPosition, rowKey}}/>
        }
    </TableContext.Consumer>)
}

