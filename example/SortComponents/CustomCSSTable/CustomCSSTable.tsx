import React from 'react';
import {Table} from '../../../src'
import {customCSSTableConfig} from "./CustomCSSTableConfig";
import {JsonData} from "../JsonData";


import {Grid, Row, Col, Nav, NavItem, PageHeader, Panel, Checkbox} from 'react-bootstrap'

import './customcss.pcss'

export class CustomCSSTable extends React.Component<any, any> {


    render() {
        let {headers, options = {}} = customCSSTableConfig as any;
        let data=JsonData.map((item,i)=><code key={`data_item_${i}`}><span/>{JSON.stringify(item)}</code>)
        let headerString= headers.map( (item)=>JSON.stringify(item,null,2));
        const RowData=JsonData.map((item,i)=>{
            item["lst_name_cmp"] = <Cmp key={`lst_name_cmp_${i}`} item={item}/>
            return item
        });
        return (
                <Row>
                    <Panel>
                        <Panel.Heading>Features</Panel.Heading>
                        <Panel.Body>
                            <dl>
                                <dt>Features</dt>
                                <dd>Multi Sort</dd>
                                <dd>Adding a component in the last name column. Sorting by another column id</dd>
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
                    <Table className="myCustomTable" headers={headers} rows={RowData} caption={"Custom CSS Table"} options={options}/>
                </Row>


        )
    }
}

export const Cmp:React.StatelessComponent<any> = ({item}) =>(<div  onClick={(e)=>{e.preventDefault();alert(item.lst_name)}}>{item.lst_name} (Click Me)</div>)