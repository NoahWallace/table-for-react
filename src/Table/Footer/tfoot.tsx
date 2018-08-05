import React from 'react';

import {Row} from './row'
import {ITableOptions} from '../table.d'

export const TFoot: React.StatelessComponent<ITableOptions> = ({icons, pageOptions}) => (
    <tfoot className="footer">
        <Row {...{icons,pageOptions}}/>
    </tfoot>
)


