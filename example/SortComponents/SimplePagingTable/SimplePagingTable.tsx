import React from 'react';
import {Table} from '../../../src'
import {simplePagingTableConfig} from "./SimplePagingTableConfig";
import {ArrayData} from "../ArrayData";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faHandPointUp,
    faHandPointDown,
    faCaretSquareLeft,
    faCaretSquareRight,
    faArrowCircleLeft,
    faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons';

import {Grid, Row, Col, Nav, NavItem, PageHeader, Panel, Checkbox} from 'react-bootstrap'


export class SimplePagingTable extends React.Component<any, any> {
    state = {
        icons: false
    }
    toggleIcons = () => {
        this.setState(state => {
            return {...state, icons: !state.icons}
        })
    }

    render() {
        let {headers, options = {}} = simplePagingTableConfig as any;
        let data = ArrayData.map((item) => <code key={item[0]}><span/>{JSON.stringify(item)}</code>)
        let headerString = headers.map((item) => JSON.stringify(item, null, 2));
        if (this.state.icons) {
            options["icons"] = {
                pageNext: <FontAwesomeIcon icon={faCaretSquareRight}/>,
                pageEnd: <FontAwesomeIcon icon={faArrowCircleRight}/>,
                pagePrev: <FontAwesomeIcon icon={faCaretSquareLeft}/>,
                pageStart: <FontAwesomeIcon icon={faArrowCircleLeft}/>,

            }
        }
        else {
            delete options["icons"]
        }
        return (
            <Row>
                <Panel>
                    <Panel.Heading>Features</Panel.Heading>
                    <Panel.Body>
                        <dl>
                            <dt>Multi Sort</dt>
                            <dd>Use "&#8984;"+click or ctrl+click to multi Sort</dd>
                            <dd>By using <code>options.initialSortIdx</code> and <code>options.initialSort</code> in
                                header configuration, a developer can control how the rows are sorted when the component
                                mounts
                            </dd>
                            <dt>Paging Icons</dt>
                            <dd>By clicking on the checkbox below, you will see that the paging icons can be replace
                                with a custom icon.
                            </dd>
                            <dd>These can be overidden by using<br/><code>options.icons.pagePrev<br/>
                                    options.icons.pageStart<br/>
                                    options.icons.pageNext<br/>
                                    options.icons.pageEnd
                                </code></dd>
                            <dt>Paging Options</dt>
                            <dd>Default Paging Size Options are <code>[10,25,50]</code>. This can overidden as seen
                                below by passing <code>options.pageOptions = [15,30,60]</code></dd>
                            <dd>Default Page size is <b>10</b>. This can be overridden by passing <code>options.pageSize
                                = 15</code></dd>
                        </dl>
                    </Panel.Body>
                </Panel>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title toggle>
                            Data (Array of Arrays)
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                                <pre>
                                {data}
                                </pre>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title toggle>
                            Header Config
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                                <pre>
                                {headerString}
                                </pre>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
                <Checkbox onChange={this.toggleIcons}>Custom Icons</Checkbox>
                <Table headers={headers} rows={ArrayData} caption={"Simple Paging Table"} options={options}/>
            </Row>


        )
    }
}