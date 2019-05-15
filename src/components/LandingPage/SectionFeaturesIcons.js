import React, { Fragment } from "react";
import { Row, Container, Card, CardBody } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";
import { injectIntl } from 'react-intl';
    
class SectionFeaturesIcons extends React.Component {
    render() {
        const { messages } = this.props.intl;
        return (
            <Fragment>
                <Row>
                    <Colxx xxs={{ size: "12", offset: 0 }} lg={{ size: 8, offset: 2 }} className="text-left">
                        <div className="section" ref={(x) => { this.content = x; }}>
                            <Container>
                                <Row>
                                    <Colxx xxs="12" lg="12">
                                        <Card>
                                            <CardBody className="p-0">
                                                <img alt="subpage" src="/assets/img/logo.jpg" className="img-fluid card-img-fluid" />
                                            </CardBody>
                                        </Card>

                                        <p className="mt-5 mb-0" dangerouslySetInnerHTML={{ __html: messages["lp.icons.detail"] }}>
                                        </p>
                                        <br></br>
                                        <h3>Kim Danh</h3>
                                    </Colxx>
                                </Row>
                            </Container>
                        </div>
                    </Colxx>
                </Row>
            </Fragment>
        );
    }
}

export default (injectIntl(SectionFeaturesIcons))
