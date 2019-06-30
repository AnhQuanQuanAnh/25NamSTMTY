import React, { Fragment } from "react";
import {
  Container, Row, Card, CardBody
} from "reactstrap";
import { MenuMultipage, MenuMultipageMobile } from "Components/LandingPage/SectionMenu";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from "react-router-dom";
import Footer from "Components/LandingPage/SectionFooter";
import { injectIntl } from 'react-intl';
import { Colxx } from "Components/CustomBootstrap";
import FeaturesIcons from "Components/LandingPage/SectionFeaturesIcons";

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
    image: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      news: this.emptyObject
    }
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onMobileMenuToggle() {
    this.props.landingPageMobileMenuToggle()
  }
  onUnmountingMobileMenu() {
    this.props.landingPageMobileMenuClose()
    return true;
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

  componentDidMount() {
    scrollToComponent(this["home"], { align: 'top', duration: 10 });
    const urlProps = this.props.match.url;
    const url = `http://localhost:8089/post${urlProps}`;
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          news: json.data
        });
      })
      .catch(error => {
        console.log('Fetch Error :-S', error);
      })
  }

  onNewsClick(id) {
    console.log("click news", id);
    console.log("object");
    // var id = this.props.match.params.id;
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
    const { news } = this.state;
    const des = news.description;
    return (
      <Fragment>
        <div className={this.props.isMobileMenuOpen ? "landing-page show-mobile-menu" : "landing-page"}>
          <MenuMultipageMobile onUnmountingMenu={() => this.onUnmountingMobileMenu()}></MenuMultipageMobile>
          <div className="main-container">

            <Headroom className="landing-page-nav" ref={(x) => { this.headroom = x; }}>
              <MenuMultipage onMobileMenuToggle={() => this.onMobileMenuToggle()}></MenuMultipage>
            </Headroom>
            <Row>
              <Colxx xxs={{ size: "12", offset: 0 }} lg={{ size: 8, offset: 2 }} className="text-left">
                <div className="section" ref={(x) => { this.content = x; }}>
                  <Container>
                    <Row>
                      <Colxx xxs="12" lg="12">
                        <Card>
                          <CardBody className="p-0">
                            <img alt="subpage" className="img-fluid card-img-fluid" src={`data:image/jpeg;base64,${news.image}`} />
                          </CardBody>
                        </Card>

                        <p className="mt-5 mb-0" dangerouslySetInnerHTML={{ __html: `${des}` }}>
                        </p>
                      </Colxx>
                    </Row>
                  </Container>
                </div>
              </Colxx>
            </Row>

            <div className="section footer mb-0">
              <Footer onClick={this.onMenuClick} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default connect(mapStateToProps, { landingPageMobileMenuToggle, landingPageMobileMenuClose })(injectIntl(TinTucDetails))
