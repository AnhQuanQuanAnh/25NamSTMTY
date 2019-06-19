import React, { Fragment } from "react";
import {
  Container, Row, Card, CardBody
} from "reactstrap";
import { MenuMultipage, MenuMultipageMobile } from "Components/LandingPage/SectionMenu";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from "react-router-dom";
import SubHero from "Components/LandingPage/SectionHeroSub";
import Footer from "Components/LandingPage/SectionFooter";
import SectionNewsletter from "Components/LandingPage/SectionNewsletter";
import SectionSidebar from "Components/LandingPage/SectionSidebar";
import { injectIntl } from 'react-intl';
import { Colxx } from "Components/CustomBootstrap";


import { connect } from "react-redux";
import { landingPageMobileMenuToggle, landingPageMobileMenuClose } from "Redux/actions";
const mapStateToProps = ({ landingPage }) => {
  const { isMobileMenuOpen } = landingPage;
  return { isMobileMenuOpen };
}

class TinTucDetails extends React.Component {

  emptyObject = {
    id: '',
    title: '',
    description: '',
    image: '',
  };
  constructor(props) {
    super(props);
    this.state = {
      data: this.emptyObject
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("id", id);
    const url = `http://localhost:8089/post/tin-tuc/${id}`;
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          data: json.data
        });
      })
      .catch(error => {
        console.log('Fetch Error :-S', error);
      })
  }

  render() {
    const { data } = this.state;
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
                  <SubHero title={messages["lp.videodetails.title"]} detail={messages["lp.videodetails.detail"]} >
                  </SubHero>
                  <Row>
                    <NavLink className="btn btn-circle btn-outline-semi-light hero-circle-button" to="#" onClick={(event) => this.onMenuClick("content", event)}>
                      <i className="simple-icon-arrow-down"></i>
                    </NavLink>
                  </Row>
                </Container>
              </div>

              <div className="section" ref={(x) => { this.content = x; }}>
                <Container>
                  <Row>
                    <Colxx xxs="12" lg="7">
                      <Card>
                        <CardBody className="p-0">
                          <img src={`data:image/jpeg;base64,${data.image}`} />
                        </CardBody>
                      </Card>

                      <p className="mt-5 mb-0" dangerouslySetInnerHTML={{ __html: messages["lp.blogdetail.content"] }}>
                      </p>
                    </Colxx>

                    <Colxx xxs="12" lg={{ size: 4, offset: 1 }} className="side-bar">
                      <SectionSidebar />
                    </Colxx>

                  </Row>
                </Container>
              </div>

              <div className="section background background-no-bottom mb-0">
                <Container>
                  <SectionNewsletter />
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
export default connect(mapStateToProps, { landingPageMobileMenuToggle, landingPageMobileMenuClose })(injectIntl(TinTucDetails))
