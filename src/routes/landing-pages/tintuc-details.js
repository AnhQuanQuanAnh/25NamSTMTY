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
import TinLienQuan from "Components/LandingPage/TinLienQuan";

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
    // this.onNewsClick = this.onNewsClick.bind(this);
    this.handleOnclickEvent = this.handleOnclickEvent.bind(this);
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
          news: json.data
        });
        this.forceUpdate();
        console.log("data in event onClickNew", this.state.data);
      })
      .catch(error => {
        console.log('Fetch Error :-S', error);
      })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (!nextProps) {
  //     console.log("nextProps", nextProps);
  //     console.log("nextState", nextState);
  //     var id = nextProps.match.params.id;
  //     this.onNewsClick(id);
  //     const url = `http://localhost:8089/post/tin-tuc/${id}`;
  //   }
    
  //   //  return fetch(url)
  //   //   .then(response => {
  //   //     if (response.status !== 200) {
  //   //       throw Error(response.statusText);
  //   //     }
  //   //     return response.json();
  //   //   })
  //   //   .then(json => {
  //   //     this.setState({
  //   //       data: json.data
  //   //     });
  //   //     console.log("data", this.state.data);
  //   //   })
  //   //   .catch(error => {
  //   //     console.log('Fetch Error :-S', error);
  //   //   })
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log("nextProps", nextProps);
  //   console.log("nextState", nextState);
  //   var id = nextProps.match.params.id;
  //   // this.onNewsClick();
  //   const url = `http://localhost:8089/post/tin-tuc/${id}`;
  //   // return fetch(url)
  //   //   .then(response => {
  //   //     if (response.status !== 200) {
  //   //       throw Error(response.statusText);
  //   //     }
  //   //     return response.json();
  //   //   })
  //   //   .then(json => {
  //   //     this.setState({
  //   //       data: json.data
  //   //     });
  //   //     console.log("data", this.state.data);
  //   //   })
  //   //   .catch(error => {
  //   //     console.log('Fetch Error :-S', error);
  //   //   })
  // }

  handleOnclickEvent(event) {
    console.log("vo day chua");
    event.preventDefault();
    console.log("vo day chua");
    const { dataCallback } = this.props;
    dataCallback("ahihi");
  }

  render() {
    const { news } = this.state;
    const des = news.description;
    console.log("news", news);
    const title = news.title;
    return (
      <Fragment>
        <div className={this.props.isMobileMenuOpen ? "landing-page show-mobile-menu" : "landing-page"}>
          <MenuMultipageMobile onUnmountingMenu={() => this.onUnmountingMobileMenu()}></MenuMultipageMobile>
          <div className="main-container">

            <Headroom className="landing-page-nav" ref={(x) => { this.headroom = x; }}>
              <MenuMultipage onMobileMenuToggle={() => this.onMobileMenuToggle()}></MenuMultipage>
            </Headroom>

            <div className="section" ref={(x) => { this.content = x; }}>
              <div>
                <Container>
                  <Row className="mt-5">
                    <Colxx xxs="12">
                      <h3>{title} {console.log('data', this.state.news)}</h3>
                    </Colxx>
                    <Colxx xxs="12">
                      <Card>
                        <CardBody className="p-0">
                          <img alt="subpage" className="card-img-top" src={`data:image/jpeg;base64,${news.image}`} />
                        </CardBody>
                      </Card>
                    </Colxx>

                  </Row>
                  <Row className="mt-5">
                    <Colxx xxs="12">
                      <h4>{des}</h4>
                    </Colxx>
                  </Row>
                </Container>
              </div>
            </div>

            <div className="section background">
              <Container>
                <TinLienQuan onClick={() => this.onNewsClick(this.props.match.params.id) }/>
              </Container>
            </div>

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
