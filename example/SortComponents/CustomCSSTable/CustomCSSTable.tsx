import React from 'react';
import {Table} from '../../../src'
import {customCSSTableConfig} from "./CustomCSSTableConfig";
import {JsonData} from "../JsonData";
import {Grid, Row, Col, Nav, NavItem, PageHeader, Panel, Checkbox} from 'react-bootstrap';
import Prism from 'prismjs';
import {PrismCode} from 'react-prism'
import Normalizer from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

import 'prismjs/themes/prism-dark.css'
// import 'prismjs/themes/prism.css'
import './customcss.pcss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown, faArrowCircleUp, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import {faStepForward} from "@fortawesome/free-solid-svg-icons/faStepForward";
import {faCaretLeft} from "@fortawesome/free-solid-svg-icons/faCaretLeft";
import {faStepBackward} from "@fortawesome/free-solid-svg-icons/faStepBackward";

export class CustomCSSTable extends React.Component<any, any> {
    mapCodeOutput = (data) => {
        return data.map((item, i) => {
            return JSON.stringify(item, null, 2)
        })
    }

    render() {
        const {headers, options = {}} = customCSSTableConfig as any;

        const headerString = headers.map((item) => JSON.stringify(item, null, 2)),
            headerOptions = JSON.stringify(options, null, 2),
            data = this.mapCodeOutput(JsonData);

        const RowData = JsonData.map((item, i) => {
            let newitem = Object.assign({}, item);
            newitem["lst_name_cmp"] = <Cmp key={`lst_name_cmp_${i}`} item={item}/>
            return newitem
        });
        console.log(JsonData)
        return (
            <Row>
                <Panel>
                    <Panel.Heading>Features</Panel.Heading>
                    <Panel.Body>
                        <dl>
                            <dt><h3>Features</h3></dt>
                            <dt>Multi Sort</dt>
                            <dd>Adding a component in the last name column. Sorting by another column id</dd>
                            <dd>This Table utilizes the <code>options.sortOnId</code> option. We created a secondary
                                column for Last Name and passed in a component to the component while leaving the
                                original in tact. This allows for client side sorting while still passing custom
                                components into the table cells.
                            </dd>
                        </dl>
                    </Panel.Body>
                </Panel>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title toggle>
                            Data (Array of Object)
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <CodeBlock>
                                {JSON.stringify(JsonData, null, 2)}
                            </CodeBlock>
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
                            <CodeBlock>
                                {`
headers: [
            [
                {id: "contact_group", title: "Contact", options: {colSpan: 2}},
                {id: "address_group", title: "Address", options: {colSpan: 4}},
            ],
            [
                {id: "fst_name", title: "First Name",
                    options: {
                        sortable: true,
                        initialSort: 'asc',
                        initialSortIdx: 1
                    }
                },
                {id: "lst_name_cmp", title: "Last Name",
                    options: {
                        sortable: true,
                        initialSort:'asc',
                        initialSortIdx:0,
                        sortOnId:'lst_name'
                    }
                },
                {id: "address", title: "Address" },
                {id: "city", title: "City"},
                {id: "state", title: "State", options:{ columnClass:"center" }},
                {id: "zip", title: "Zip", options:{ columnClass:"center" }},
            ]
],
                               `}
                            </CodeBlock>

                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title toggle>
                            Table Config
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <CodeBlock>
                                {`
options:{
    paged:true,
    icons:{
        sortAsc:<FontAwesomeIcon icon={faArrowCircleUp}/>,
        sortDesc:<FontAwesomeIcon icon={faArrowCircleDown}/>,
        pageNext:<FontAwesomeIcon icon={faCaretRight}/>,
        pageEnd:<FontAwesomeIcon icon={faStepForward}/>,
        pagePrev:<FontAwesomeIcon icon={faCaretLeft}/>,
        pageStart:<FontAwesomeIcon icon={faStepBackward}/>,
    }
}
                                `}
                            </CodeBlock>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
                <Table className="myCustomTable" headers={headers} rows={RowData}
                       caption={"Custom CSS Table With Caption"} options={options}/>
            </Row>


        )
    }
}

export class CodeBlock extends React.Component<any, any> {
    componentDidMount() {
        Prism.highlightAll();

    }

    render() {
        return (

            <PrismCode component="pre" className={"language-javascript"}>
                {this.props.children}
            </PrismCode>

        )
    }
}

export const Cmp: React.StatelessComponent<any> = ({item}) => (
    <div onClick={(e) => {
        e.preventDefault();
        alert(item.lst_name)
    }}>
        {item.lst_name} (Click Me)
    </div>)

