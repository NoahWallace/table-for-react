import React from "react";
import classNames from 'classnames'
// TODO: add classnames to cell
export const Cell = (props) => {
    const {className} = props;
    const cls = classNames("cell", className);
    return (
        <td className={cls}>{props.value}</td>
    )
}
