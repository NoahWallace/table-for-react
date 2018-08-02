import React from 'react';
import {Table} from '../../../src'
import {simplePagingTableConfig} from "./SimplePagingTableConfig";
import {ArrayData} from "../ArrayData";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandPointUp, faHandPointDown, faCaretSquareLeft, faCaretSquareRight, faArrowCircleLeft, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

import {Grid, Row, Col, Nav, NavItem, PageHeader, Panel, Checkbox} from 'react-bootstrap'


export class SimplePagingTable extends React.Component<any, any> {
    state={
        icons:false
    }
    toggleIcons = ()=>{
        this.setState(state=>{return{...state,icons:!state.icons}})
    }

    render() {
        let {headers, options = {}} = simplePagingTableConfig as any;
        let data=ArrayData.map((item)=><code key={item[0]}><span/>{JSON.stringify(item)}</code>)
        let headerString= headers.map( (item)=>JSON.stringify(item,null,2));
        if(this.state.icons){
            options["icons"] = {
                pageNext:<FontAwesomeIcon icon={faArrowCircleRight}/>,
                pageEnd:<FontAwesomeIcon icon={faArrowCircleRight}/>,
                pagePrev:<FontAwesomeIcon icon={faCaretSquareLeft}/>,
                pageFirst:<FontAwesomeIcon icon={faArrowCircleLeft}/>,

            }
        }
        else { delete options["icons"]}
        return (
                <Row>
                    <Panel>
                        <Panel.Heading>Features</Panel.Heading>
                        <Panel.Body>
                            <dl>
                                <dt>Multi Sort</dt>
                                <dd>Use "&#8984;"+click or ctrl+click to multi Sort</dd>
                                <dd>By using options.initialSortIdx and options.initialSort in header configuration, a developer can control how the rows are sorted when the component mounts</dd>
                                <dt>Custom Paging Icons</dt>
                                <dd>By clicking on the checkbox below, you will see that the paging icons can be replace with a custom icon.</dd>
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
                    <Checkbox onChange={this.toggleIcons}  >Custom Icons</Checkbox>
                    <Table headers={headers} rows={ArrayData} caption={"Simple Paging Table"} options={options}/>
                </Row>


        )
    }
}