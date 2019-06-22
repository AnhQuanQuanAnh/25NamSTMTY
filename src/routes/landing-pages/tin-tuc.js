import React, { Component, Fragment } from "react";
import {
    Container, Row, Card, CardBody, Pagination,
    PaginationItem,
    PaginationLink,
} from "reactstrap";
import { MenuMultipage, MenuMultipageMobile } from "Components/LandingPage/SectionMenu";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from "react-router-dom";
import Footer from "Components/LandingPage/SectionFooter";
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import { injectIntl } from 'react-intl';
import { Colxx } from "Components/CustomBootstrap";
import { connect } from "react-redux";
import { landingPageMobileMenuToggle, landingPageMobileMenuClose } from "Redux/actions";

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

const mapStateToProps = ({ landingPage }) => {
    const { isMobileMenuOpen } = landingPage;
    return { isMobileMenuOpen };
}

class TinTuc extends Component {
    constructor(props) {
        super(props);
        this.onMenuClick = this.onMenuClick.bind(this);
    }

    onMobileMenuToggle() {
        this.props.landingPageMobileMenuToggle()
    }
    onUnmountingMobileMenu() {
        this.props.landingPageMobileMenuClose()
        return true;
    }

    componentDidMount() {
        scrollToComponent(this["home"], { align: 'top', duration: 10 });
    }

    onMenuClick(ref, event) {
        event.preventDefault();
        let scroller;
        if (ref !== "home") {
            scroller = scrollToComponent(this[ref], { align: 'top', offset: 60 });
            scroller.on('end', () => {
                this.headroom.unpin();
                this.props.landingPageMobileMenuClose();
            });
        } else {
            scrollToComponent(this[ref], { align: 'top' });
        }
    }

    render() {
        const { messages } = this.props.intl;
        return (
            <Fragment>
                <div className={this.props.isMobileMenuOpen ? "landing-page show-mobile-menu" : "landing-page"}>
                    <MenuMultipageMobile onUnmountingMenu={() => this.onUnmountingMobileMenu()}></MenuMultipageMobile>
                    <div className="main-container">

                        <Headroom className="landing-page-nav" ref={(x) => { this.headroom = x; }}>
                            <MenuMultipage onMobileMenuToggle={() => this.onMobileMenuToggle()}></MenuMultipage>
                        </Headroom>

                        <div className="content-container" ref={(x) => { this.home = x; }}>
                            <div className="section home subpage">
                                <Container>
                                    <Row>
                                        <NavLink className="btn btn-circle btn-outline-semi-light hero-circle-button" to="#" onClick={(event) => this.onMenuClick("content", event)}>
                                            <i className="simple-icon-arrow-down"></i>
                                        </NavLink>
                                    </Row>
                                </Container>
                            </div>
                            <Colxx xxs={{ size: "12", offset: 0 }} lg={{ size: 8, offset: 2 }} className="text-center">
                                <h1>Kỷ yếu</h1>
                            </Colxx>

                            <div className="section" ref={(x) => { this.content = x; }}>
                                <Container>
                                    <Row className="mt-5">
                                        <Colxx xxs="12" lg="6" className="mb-4">
                                            <Card className="flex-row mb-5 listing-card-container">
                                                <div className="w-40 position-relative">
                                                    <NavLink to="/bao-hiem-oto-tnds">
                                                        <img className="card-img-left" src="/assets/img/detail.jpg" alt="Card cap" />
                                                    </NavLink>
                                                </div>

                                                <div className="w-60 d-flex align-items-center">
                                                    <CardBody>
                                                        <NavLink to="/bao-hiem-oto-tnds">
                                                            <h3 className="mb-4 listing-heading">
                                                                <ResponsiveEllipsis
                                                                    text={messages["bh.product.car"]}
                                                                    maxLine='2'
                                                                    ellipsis='...'
                                                                    trimRight
                                                                    basedOn='letters' />
                                                            </h3>
                                                        </NavLink>
                                                        <div className="listing-desc">
                                                            <ResponsiveEllipsis
                                                                text={messages["bh.product.car.detail"]}
                                                                maxLine='3'
                                                                ellipsis='...'
                                                                trimRight
                                                                basedOn='letters' />
                                                        </div>
                                                        <footer>
                                                            <p className="text-muted text-small mb-0 font-weight-light"><NavLink to="/bao-hiem-oto-tnds">Chi tiết</NavLink></p>
                                                        </footer>
                                                    </CardBody>
                                                </div>
                                            </Card>
                                        </Colxx>

                                        <Colxx xxs="12" lg="6" className="mb-4">
                                            <Card className="flex-row mb-5 listing-card-container">
                                                <div className="w-40 position-relative">
                                                    <NavLink to="/bao-hiem-suc-khoe-doanh-nghiep">
                                                        <img className="card-img-left" src="/assets/img/detail.jpg" alt="Card cap" />
                                                    </NavLink>
                                                </div>

                                                <div className="w-60 d-flex align-items-center">
                                                    <CardBody>
                                                        <NavLink to="/bao-hiem-suc-khoe-doanh-nghiep">
                                                            <h3 className="mb-4 listing-heading">
                                                                <ResponsiveEllipsis
                                                                    text={messages["bh.product.health.company"]}
                                                                    maxLine='2'
                                                                    ellipsis='...'
                                                                    trimRight
                                                                    basedOn='letters' />
                                                            </h3>
                                                        </NavLink>
                                                        <div className="listing-desc ellipsis">
                                                            <ResponsiveEllipsis
                                                                text={messages["bh.product.health.company.detail"]}
                                                                maxLine='3'
                                                                ellipsis='...'
                                                                trimRight
                                                                basedOn='letters' />
                                                        </div>
                                                        <footer>
                                                            <p className="text-muted text-small mb-0 font-weight-light"><NavLink to="/bao-hiem-suc-khoe-doanh-nghiep">Chi tiết</NavLink></p>
                                                        </footer>
                                                    </CardBody>
                                                </div>
                                            </Card>
                                        </Colxx>

                                        <Colxx xxs="12" lg="6" className="mb-4">
                                            <Card className="flex-row mb-5 listing-card-container">
                                                <div className="w-40 position-relative">
                                                    <NavLink to="/bao-hiem-tai-nan">
                                                        <img className="card-img-left" src="/assets/img/detail.jpg" alt="Card cap" />
                                                    </NavLink>
                                                </div>

                                                <div className="w-60 d-flex align-items-center">
                                                    <CardBody>
                                                        <NavLink to="/blog-detail">
                                                            <h3 className="mb-4 listing-heading">
                                                                <ResponsiveEllipsis
                                                                    text={messages["bh.product.tainan"]}
                                                                    maxLine='2'
                                                                    ellipsis='...'
                                                                    trimRight
                                                                    basedOn='letters' />
                                                            </h3>
                                                        </NavLink>
                                                        <div className="listing-desc">
                                                            <ResponsiveEllipsis
                                                                text={messages["lp.blogsection.detail-3"]}
                                                                maxLine='3'
                                                                ellipsis='...'
                                                                trimRight
                                                                basedOn='letters' />
                                                        </div>
                                                        <footer>
                                                            <p className="text-muted text-small mb-0 font-weight-light"><NavLink to="/bao-hiem-tai-nan">Chi tiết</NavLink></p>
                                                        </footer>
                                                    </CardBody>
                                                </div>
                                            </Card>
                                        </Colxx>

                                        <Colxx xxs="12" lg="6" className="mb-4">
                                            <Card className="flex-row mb-5 listing-card-container">
                                                <div className="w-40 position-relative">
                                                    <NavLink to="/bao-hiem-suc-khoe-ca-nhan">
                                                        <img className="card-img-left" src="/assets/img/detail.jpg" alt="Card cap" />
                                                    </NavLink>
                                                </div>

                                                <div className="w-60 d-flex align-items-center">
                                                    <CardBody>
                                                        <NavLink to="/bao-hiem-suc-khoe-ca-nhan">
                                                            <h3 className="mb-4 listing-heading ellipsis">
                                                                <ResponsiveEllipsis
                                                                    text={messages["bh.product.health.family"]}
                                                                    maxLine='2'
                                                                    ellipsis='...'
                                                                    trimRight
                                                                    basedOn='letters' />
                                                            </h3>
                                                        </NavLink>
                                                        <div className="listing-desc ellipsis">
                                                            <ResponsiveEllipsis
                                                                text={messages["bh.product.health.family.detail"]}
                                                                maxLine='3'
                                                                ellipsis='...'
                                                                trimRight
                                                                basedOn='letters' />
                                                        </div>
                                                        <footer>
                                                            <p className="text-muted text-small mb-0 font-weight-light"><NavLink to="/bao-hiem-oto">Chi tiết</NavLink></p>
                                                        </footer>
                                                    </CardBody>
                                                </div>
                                            </Card>
                                        </Colxx>

                                        <Colxx xxs="12" lg="6" className="mb-4">
                                            <Card className="flex-row mb-5 listing-card-container">
                                                <div className="w-40 position-relative">
                                                    <NavLink to="/blog-detail">
                                                        <img className="card-img-left" src="/assets/img/detail.jpg" alt="Card cap" />
                                                    </NavLink>
                                                </div>

                                                <div className="w-60 d-flex align-items-center">
                                                    <CardBody>
                                                        <NavLink to="/blog-detail">
                                                            <h3 className="mb-4 listing-heading">
                                                                <ResponsiveEllipsis
                                                                    text={messages["bh.product.travel"]}
                                                                    maxLine='2'
                                                                    ellipsis='...'
                                                                    trimRight
                                                                    basedOn='letters' />
                                                            </h3>
                                                        </NavLink>
                                                        <div className="listing-desc">
                                                            <ResponsiveEllipsis
                                                                text={messages["bh.product.travel.detail"]}
                                                                maxLine='3'
                                                                ellipsis='...'
                                                                trimRight
                                                                basedOn='letters' />
                                                        </div>
                                                        <footer>
                                                            <p className="text-muted text-small mb-0 font-weight-light"><NavLink to="/bao-hiem-oto">Chi tiết</NavLink></p>
                                                        </footer>
                                                    </CardBody>
                                                </div>
                                            </Card>
                                        </Colxx>

                                        <Colxx xxs="12" lg="6" className="mb-4">
                                            <Card className="flex-row mb-5 listing-card-container">
                                                <div className="w-40 position-relative">
                                                    <NavLink to="/blog-detail">
                                                        <img className="card-img-left" src="/assets/img/detail.jpg" alt="Card cap" />
                                                    </NavLink>
                                                </div>

                                                <div className="w-60 d-flex align-items-center">
                                                    <CardBody>
                                                        <NavLink to="/blog-detail">
                                                            <h3 className="mb-4 listing-heading">
                                                                <ResponsiveEllipsis
                                                                    text={messages["bh.product.motobike"]}
                                                                    maxLine='2'
                                                                    ellipsis='...'
                                                                    trimRight
                                                                    basedOn='letters' />
                                                            </h3>
                                                        </NavLink>
                                                        <div className="listing-desc">
                                                            <ResponsiveEllipsis
                                                                text={messages["bh.product.motobike.detail"]}
                                                                maxLine='3'
                                                                ellipsis='...'
                                                                trimRight
                                                                basedOn='letters' />
                                                        </div>
                                                        <footer>
                                                            <p className="text-muted text-small mb-0 font-weight-light"><NavLink to="/bao-hiem-oto">Chi tiết</NavLink></p>
                                                        </footer>
                                                    </CardBody>
                                                </div>
                                            </Card>
                                        </Colxx>
                                    </Row>

                                    <Row>
                                        <Colxx xxs="12" className="text-center mt-5 mb-5">
                                            <Pagination aria-label="Page navigation example" listClassName="justify-content-center">
                                                <PaginationItem>
                                                    <PaginationLink className="first" href="#">
                                                        <i className="simple-icon-control-start" />
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink className="prev" href="#">
                                                        <i className="simple-icon-arrow-left" />
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">1</PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem active>
                                                    <PaginationLink href="#">2</PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">3</PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink className="next" href="#">
                                                        <i className="simple-icon-arrow-right" />
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink className="last" href="#">
                                                        <i className="simple-icon-control-end" />
                                                    </PaginationLink>
                                                </PaginationItem>
                                            </Pagination>
                                        </Colxx>
                                    </Row>

                                </Container>
                            </div>

                            <div className="section footer mb-0">
                                <Footer onClick={this.onMenuClick} />
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default connect(mapStateToProps, { landingPageMobileMenuToggle, landingPageMobileMenuClose })(injectIntl(TinTuc))