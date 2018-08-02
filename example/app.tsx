import React from 'react';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Grid, Row, Col, Nav, NavItem, PageHeader} from 'react-bootstrap'
import {Home} from "./home";
import {BasicTable} from "./SortComponents";
import ReactDOM from "react-dom";
import {LinkContainer} from 'react-router-bootstrap'


import "./CSS/example.pcss";
import {SimpleSortTable} from "./SortComponents/SimpleSortTable";
import {SimplePagingTable} from "./SortComponents/SimplePagingTable";


export class Layout extends React.Component {

    render() {

        return (
            <Router>
                <Grid fluid={true}>
                    <Row className="show-grid">
                        <PageHeader>
                            React Table
                        </PageHeader>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={2}>
                            <Nav stacked>
                                <LinkContainer to="/">
                                    <NavItem eventKey={1}>Home</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/basic">
                                    <NavItem eventKey={2}>Basic Table</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/simple">
                                    <NavItem eventKey={3}>Client Side Sorting</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/simple_paging">
                                    <NavItem eventKey={3}>Client Side Paging</NavItem>
                                </LinkContainer>
                            </Nav>
                        </Col>
                        <Col xs={10}>
                            <Grid fluid={true}>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/basic" component={BasicTable}/>
                            <Route exact path="/simple" component={SimpleSortTable}/>
                            <Route exact path="/simple_paging" component={SimplePagingTable}/>
                            </Grid>
                        </Col>
                    </Row>
                </Grid>

            </Router>

        )
    }
}


ReactDOM.render(<Layout/>, document.getElementById("app"))
