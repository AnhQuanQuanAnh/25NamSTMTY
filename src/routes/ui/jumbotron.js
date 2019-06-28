import React, { Component, Fragment } from "react";
import { Colxx } from "Components/CustomBootstrap";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, Button, Jumbotron } from "reactstrap";
export default class JumbotronUi extends Component {

  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12" className="mb-4">
            <Card>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-4">
                    <IntlMessages id="jumbotron.hello-world" />
                  </h1>
                  <p className="lead">
                    <IntlMessages id="jumbotron.lead" />
                  </p>
                  <hr className="my-4" />
                  <p>
                    <IntlMessages id="jumbotron.lead-detail" />
                  </p>
                  <p className="lead mb-0">
                    <Button color="primary" size="lg">
                      <IntlMessages id="jumbotron.learn-more" />
                    </Button>
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
