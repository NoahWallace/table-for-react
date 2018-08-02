import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';

interface ISortArrowProps {
    direction: number;
    sortAsc: JSX.Element | undefined;
    sortDesc: JSX.Element | undefined;
}

export const SortArrows = ({direction, sortAsc = null, sortDesc = null}: ISortArrowProps): JSX.Element => {
    const arrowUp = sortAsc || <FontAwesomeIcon icon={faAngleUp}/>,
        arrowDown = sortDesc || <FontAwesomeIcon icon={faAngleDown}/>;
    return (
        <div className="sort">
            {(direction === 1 || direction === 0) && <span className="sort--up">{arrowUp}</span>}
            {(direction === -1 || direction === 0) && <span className="sort--down">{arrowDown}</span>}
        </div>
    )
}