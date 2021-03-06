import React, { Component, Fragment } from 'react'
import { Badge, Button, Row, Card, CardBody, CardTitle } from 'reactstrap';

import IntlMessages from 'Util/IntlMessages';

import { Colxx } from 'Components/CustomBootstrap'

export default class BadgesUi extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <Card className="mb-4">
                            <CardBody>
                                <CardTitle><IntlMessages id="badge.sizes" /></CardTitle>
                                <h1>Example Heading <Badge color="secondary">New</Badge></h1>
                                <h2>Example Heading <Badge color="secondary">New</Badge></h2>
                                <h3>Example Heading <Badge color="secondary">New</Badge></h3>
                                <h4>Example Heading <Badge color="secondary">New</Badge></h4>
                                <h5>Example Heading <Badge color="secondary">New</Badge></h5>
                                <h6>Example Heading <Badge color="secondary">New</Badge></h6>
                            </CardBody>
                        </Card>

                        <Card className="mb-4">
                            <CardBody>
                                <CardTitle><IntlMessages id="badge.colors" /></CardTitle>
                                <Badge color="primary" pill className="mb-1">
                                    <IntlMessages id="badge.primary" />
                                </Badge>{' '}
                                <Badge color="secondary" pill className="mb-1">
                                    <IntlMessages id="badge.secondary" />
                                </Badge>{' '}
                                <Badge color="success" pill className="mb-1">
                                    <IntlMessages id="badge.success" />
                                </Badge>{' '}
                                <Badge color="danger" pill className="mb-1">
                                    <IntlMessages id="badge.danger" />
                                </Badge>{' '}
                                <Badge color="warning" pill className="mb-1">
                                    <IntlMessages id="badge.warning" />
                                </Badge>{' '}
                                <Badge color="info" pill className="mb-1">
                                    <IntlMessages id="badge.info" />
                                </Badge>{' '}
                                <Badge color="light" pill className="mb-1">
                                    <IntlMessages id="badge.light" />
                                </Badge>{' '}
                                <Badge color="dark" pill className="mb-1">
                                    <IntlMessages id="badge.dark" />
                                </Badge>
                            </CardBody>
                        </Card>
                        <Card className="mb-4">
                            <CardBody>
                                <CardTitle><IntlMessages id="badge.outline" /></CardTitle>
                                <Badge color="outline-primary" pill className="mb-1">
                                    <IntlMessages id="badge.primary" />
                                </Badge>{' '}
                                <Badge color="outline-secondary" pill className="mb-1">
                                    <IntlMessages id="badge.secondary" />
                                </Badge>{' '}
                                <Badge color="outline-success" pill className="mb-1">
                                    <IntlMessages id="badge.success" />
                                </Badge>{' '}
                                <Badge color="outline-danger" pill className="mb-1">
                                    <IntlMessages id="badge.danger" />
                                </Badge>{' '}
                                <Badge color="outline-warning" pill className="mb-1">
                                    <IntlMessages id="badge.warning" />
                                </Badge>{' '}
                                <Badge color="outline-info" pill className="mb-1">
                                    <IntlMessages id="badge.info" />
                                </Badge>{' '}
                                <Badge color="outline-light" pill className="mb-1">
                                    <IntlMessages id="badge.light" />
                                </Badge>{' '}
                                <Badge color="outline-dark" pill className="mb-1">
                                    <IntlMessages id="badge.dark" />
                                </Badge>
                            </CardBody>
                        </Card>
                        <Card className="mb-4">
                            <CardBody>
                                <CardTitle><IntlMessages id="badge.links" /></CardTitle>
                                <Badge href="#" color="primary" className="mb-1">
                                    <IntlMessages id="badge.primary" />
                                </Badge>{' '}
                                <Badge href="#" color="secondary" className="mb-1">
                                    <IntlMessages id="badge.secondary" />
                                </Badge>{' '}
                                <Badge href="#" color="success" className="mb-1">
                                    <IntlMessages id="badge.success" />
                                </Badge>{' '}
                                <Badge href="#" color="danger" className="mb-1">
                                    <IntlMessages id="badge.danger" />
                                </Badge>{' '}
                                <Badge href="#" color="warning" className="mb-1">
                                    <IntlMessages id="badge.warning" />
                                </Badge>{' '}
                                <Badge href="#" color="info" className="mb-1">
                                    <IntlMessages id="badge.info" />
                                </Badge>{' '}
                                <Badge href="#" color="light" className="mb-1">
                                    <IntlMessages id="badge.light" />
                                </Badge>{' '}
                                <Badge href="#" color="dark" className="mb-1">
                                    <IntlMessages id="badge.dark" />
                                </Badge>
                            </CardBody>
                        </Card>
                        <Card className="mb-4">
                            <CardBody>
                                <CardTitle>
                                    <IntlMessages id="badge.bootstrap-default" />
                                </CardTitle>
                                <Badge color="primary" className="mb-1">
                                    <IntlMessages id="badge.primary" />
                                </Badge>{' '}
                                <Badge color="secondary" className="mb-1">
                                    <IntlMessages id="badge.secondary" />
                                </Badge>{' '}
                                <Badge color="success" className="mb-1">
                                    <IntlMessages id="badge.success" />
                                </Badge>{' '}
                                <Badge color="danger" className="mb-1">
                                    <IntlMessages id="badge.danger" />
                                </Badge>{' '}
                                <Badge color="warning" className="mb-1">
                                    <IntlMessages id="badge.warning" />
                                </Badge>{' '}
                                <Badge color="info" className="mb-1">
                                    <IntlMessages id="badge.info" />
                                </Badge>{' '}
                                <Badge color="light" className="mb-1">
                                    <IntlMessages id="badge.light" />
                                </Badge>{' '}
                                <Badge color="dark" className="mb-1">
                                    <IntlMessages id="badge.dark" />
                                </Badge>{' '}
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>
            </Fragment>
        )
    }
}
