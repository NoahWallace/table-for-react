import React from 'react'
import {Row} from './row'
import {TableContext} from "../provider";

class TBody extends React.Component<any, any> {
    getRows = () => {
        const {rows, headers, paged, pageSize} = this.props;
        const cb = (cells, idx) => (<Row key={`body_${idx}_row`} cells={cells} headers={headers}/>)

        if (paged) {
            return rows.slice(0, pageSize).map(cb)
        }
        return rows.map(cb)
    }

    render() {

        return (
            <tbody>
            {this.getRows()}
            </tbody>
        )
    }
}

export default props => {
    const {options={}} = props;
    const {paged}=options;

    return (<TableContext.Consumer>
        {({rows, headers, pageSize}) =>
            <TBody rows={rows} headers={headers} paged={paged} pageSize={pageSize}/>
        }
    </TableContext.Consumer>)
}

