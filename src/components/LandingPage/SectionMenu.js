import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import {
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import IntlMessages from "Util/IntlMessages";

export class MenuMultipage extends Component {
  openMobileMenu(event) {
    event.preventDefault();
    this.props.onMobileMenuToggle();
  }
  render() {
    return (
      <Container className="d-flex align-items-center justify-content-between menu">
        <NavLink className="logo-mobile" to="/home">
          <span/>
        </NavLink>
        <Nav className="navbar-nav d-none d-lg-flex flex-row">
          <NavItem className={window.location.pathname === '/tin-tuc' ? 'active' : ''}>
            <NavLink to="/tin-tuc">
              <IntlMessages id="cd.menu.news" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/y-nghia-logo' ? 'active' : ''}>
            <NavLink to="/y-nghia-logo">
              <IntlMessages id="cd.menu.logo" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/contact' || window.location.pathname === '/videos' || window.location.pathname === '/docs' ? 'active' : ''}>
            <UncontrolledDropdown>
              <DropdownToggle tag="a" caret color="empty" href="#">
                <IntlMessages id="cd.menu.department" />
              </DropdownToggle>
              <DropdownMenu>
                <NavLink to="/docs" className="dropdown-item">
                  <IntlMessages id="cd.menu.dp_external" />
                </NavLink>
                <NavLink to="/videos" className="dropdown-item">
                  <IntlMessages id="cd.menu.dp_finance" />
                </NavLink>
                <NavLink to="/contact" className="dropdown-item">
                  <IntlMessages id="cd.menu.dp_art" />
                </NavLink>
                <NavLink to="/contact" className="dropdown-item">
                  <IntlMessages id="cd.menu.dp_communication" />
                </NavLink>
                <NavLink to="/contact" className="dropdown-item">
                  <IntlMessages id="cd.menu.dp_ritual" />
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
          <NavItem className={window.location.pathname === '/ky-yeu-cong-doan' || window.location.pathname === '/ky-yeu-nhom-duc-diem' || window.location.pathname === '/ky-yeu-nhom-khoa-phuong' ? 'active' : ''}>
            <UncontrolledDropdown>
              <DropdownToggle tag="a" caret color="empty" href="#">
                <IntlMessages id="cd.menu.yearbook" />
              </DropdownToggle>
              <DropdownMenu>
                <NavLink to="/ky-yeu-cong-doan" className="dropdown-item">
                  <IntlMessages id="cd.menu.yb_cd" />
                </NavLink>
                <NavLink to="/ky-yeu-nhom-duc-diem" className="dropdown-item">
                  <IntlMessages id="cd.menu.yb_ducdiem" />
                </NavLink>
                <NavLink to="/ky-yeu-nhom-quan-uyen" className="dropdown-item">
                  <IntlMessages id="cd.menu.yb_quanuyen" />
                </NavLink>
                <NavLink to="/ky-yeu-nhom-quan-uyen" className="dropdown-item">
                  <IntlMessages id="cd.menu.yb_trungphuc" />
                </NavLink>
                <NavLink to="/ky-yeu-nhom-khoa-phuong" className="dropdown-item">
                  <IntlMessages id="cd.menu.yb_khoaphuong" />
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
          <NavItem className={window.location.pathname === '/tu-lieu-phim-anh' ? 'active' : ''}>
            <NavLink to="/tu-lieu-phim-anh">
              <IntlMessages id="cd.menu.media" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/hau-truong' ? 'active' : ''}>
            <NavLink to="/hau-truong">
              <IntlMessages id="cd.menu.hautruong" />
            </NavLink>
          </NavItem>
        </Nav>
        <NavLink
          className="mobile-menu-button"
          to="#"
          onClick={(event) => this.openMobileMenu(event)}
        >
          <i className="simple-icon-menu" />
        </NavLink>
      </Container>
    );
  }
}
export class MenuMultipageMobile extends React.Component {
  constructor(props) {
    super(props);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentDidMount() {
    ["click", "touchstart"].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  }
  componentWillUnmount() {
    ["click", "touchstart"].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
    this.props.onUnmountingMenu()
  }

  handleDocumentClick(e) {
    const container = ReactDOM.findDOMNode(this);
    if ((container.contains(e.target) || container === e.target)) {
      return;
    }
    return this.props.onUnmountingMenu()
  }

  render() {
    return (
      <div className="mobile-menu">
        <NavLink className="logo-mobile" to="/home">
          <span />
        </NavLink>
        <Nav className="navbar-nav">
          <NavItem className={window.location.pathname === '/meaning-logo' ? 'active' : ''}>
            <NavLink to="/meaning-logo">
              <IntlMessages id="cd.menu.news" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/meaning-logo' ? 'active' : ''}>
            <NavLink to="/meaning-logo">
              <IntlMessages id="cd.menu.logo" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/contact' || window.location.pathname === '/videos' || window.location.pathname === '/docs' ? 'active' : ''}>
            <UncontrolledDropdown>
              <DropdownToggle tag="a" caret color="empty" href="#">
                <IntlMessages id="cd.menu.department" />
              </DropdownToggle>
              <DropdownMenu>
                <NavLink to="/docs" className="dropdown-item">
                  <IntlMessages id="cd.menu.dp_external" />
                </NavLink>
                <NavLink to="/videos" className="dropdown-item">
                  <IntlMessages id="cd.menu.dp_finance" />
                </NavLink>
                <NavLink to="/contact" className="dropdown-item">
                  <IntlMessages id="cd.menu.dp_art" />
                </NavLink>
                <NavLink to="/contact" className="dropdown-item">
                  <IntlMessages id="cd.menu.dp_communication" />
                </NavLink>
                <NavLink to="/contact" className="dropdown-item">
                  <IntlMessages id="cd.menu.dp_ritual" />
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
          <NavItem className={window.location.pathname === '/ky-yeu-cong-doan' || window.location.pathname === '/ky-yeu-nhom-duc-diem' || window.location.pathname === '/ky-yeu-nhom-khoa-phuong' ? 'active' : ''}>
            <UncontrolledDropdown>
              <DropdownToggle tag="a" caret color="empty" href="#">
                <IntlMessages id="cd.menu.yearbook" />
              </DropdownToggle>
              <DropdownMenu>
                <NavLink to="/ky-yeu-cong-doan" className="dropdown-item">
                  <IntlMessages id="cd.menu.yb_cd" />
                </NavLink>
                <NavLink to="/ky-yeu-nhom-duc-diem" className="dropdown-item">
                  <IntlMessages id="cd.menu.yb_ducdiem" />
                </NavLink>
                <NavLink to="/ky-yeu-nhom-quan-uyen" className="dropdown-item">
                  <IntlMessages id="cd.menu.yb_quanuyen" />
                </NavLink>
                <NavLink to="/ky-yeu-nhom-quan-uyen" className="dropdown-item">
                  <IntlMessages id="cd.menu.yb_trungphuc" />
                </NavLink>
                <NavLink to="/ky-yeu-nhom-khoa-phuong" className="dropdown-item">
                  <IntlMessages id="cd.menu.yb_khoaphuong" />
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
          <NavItem className={window.location.pathname === '/tu-lieu-phim-anh' ? 'active' : ''}>
            <NavLink to="/tu-lieu-phim-anh">
              <IntlMessages id="cd.menu.media" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/hau-truong' ? 'active' : ''}>
            <NavLink to="/hau-truong">
              <IntlMessages id="cd.menu.hautruong" />
            </NavLink>
          </NavItem>
        </Nav>

      </div>
    );
  }
}