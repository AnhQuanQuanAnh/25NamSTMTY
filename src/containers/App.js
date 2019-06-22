import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import { IntlProvider} from 'react-intl';

import {  NotificationContainer} from "Components/ReactNotifications";

import { defaultStartPath } from 'Constants/defaultValues'

import { connect } from "react-redux";

import AppLocale from '../lang';
import MainRoute from 'Routes';
import login from 'Routes/layouts/login'
import register from 'Routes/layouts/register'
import error from 'Routes/layouts/error'
import forgotPassword from 'Routes/layouts/forgot-password'

import About from "Routes/landing-pages/about";
import AuthLogin from "Routes/landing-pages/auth-login";
import AuthRegister from "Routes/landing-pages/auth-register";
import Blog from "Routes/landing-pages/blog";
import BlogDetail from "Routes/landing-pages/blog-detail";
import Confirmation from "Routes/landing-pages/confirmation";
import Contact from "Routes/landing-pages/contact";
import Content from "Routes/landing-pages/content";
import Docs from "Routes/landing-pages/docs";
import MeaningLogo from "Routes/landing-pages/meaning-logo";
import Prices from "Routes/landing-pages/prices";
import Videos from "Routes/landing-pages/videos";
import VideoDetail from "Routes/landing-pages/video-detail";
import DocsDetails from "Routes/landing-pages/docs-details";
import TinTucDetails from "Routes/landing-pages/tintuc-details";
import KyYeu from "Routes/landing-pages/ky-yeu";
import TinTuc from "Routes/landing-pages/tin-tuc";


import 'Assets/css/vendor/bootstrap.min.css'
import 'react-perfect-scrollbar/dist/css/styles.css';


const InitialPath = ({ component: Component, ...rest, authUser }) =>
	<Route
		{...rest}
		render={props =>
			authUser
				? <Component {...props} />
				: <Redirect
					to={{
						pathname: '/login',
						state: { from: props.location }
					}}
				/>}
	/>;

class App extends Component {
	render() {
		const { location, match, user, locale } = this.props;
		const currentAppLocale = AppLocale[locale];
		if (location.pathname === '/'  || location.pathname==='/app'|| location.pathname==='/app/') {
			return (<Redirect to={defaultStartPath} />);
		}
		return (
			<Fragment>
				<IntlProvider
					locale={currentAppLocale.locale}
					messages={currentAppLocale.messages}
				>

					<Fragment>
  						<NotificationContainer />
						<Switch>
							<InitialPath
							path={`${match.url}app`}
							authUser={user}
							component={MainRoute}
						/>
        					<Route path={`/about`} component={About} />
        					<Route path={`/auth-login`} component={AuthLogin} />
        					<Route path={`/auth-register`} component={AuthRegister} />
        					<Route path={`/blog`} component={Blog} />
        					<Route path={`/home`} component={BlogDetail} />
        					<Route path={`/confirmation`} component={Confirmation} />
        					<Route path={`/contact`} component={Contact} />
        					<Route path={`/content`} component={Content} />
        					<Route path={`/docs`} component={Docs} />
							<Route path={`/y-nghia-logo`} component={MeaningLogo} />
							<Route path={`/tin-tuc-test`} component={Blog} />
							<Route path={`/gioi-thieu`} component={Blog} />
							<Route path={`/ky-yeu-cong-doan`} component={Docs} />
							<Route path={`/ky-yeu-nhom-duc-diem`} component={KyYeu} />
							<Route path={`/ky-yeu-nhom-khoa-phuong`} component={KyYeu} />
							<Route path={`/ky-yeu-nhom-quan-uyen`} component={KyYeu} />
							<Route path={`/ky-yeu-nhom-chin-bich`} component={KyYeu} />
							<Route path={`/ky-yeu-nhom-hung-quynh`} component={KyYeu} />
							<Route path={`/ky-yeu-nhom-linh-giang`} component={KyYeu} />
							<Route path={`/ky-yeu-nhom-daonguyen`} component={KyYeu} />
							<Route path={`/ky-yeu-nhom-diemanh`} component={KyYeu} />
							<Route path={`/ky-yeu-nhom-anhtuan`} component={KyYeu} />
							<Route path={`/tu-lieu-phim-anh`} component={Videos} />
        					<Route path={`/prices`} component={Prices} />
        					<Route path={`/videos`} component={Videos} />
        					<Route path={`/video-detail`} component={VideoDetail} />
        					<Route path={`/docs-details`} component={DocsDetails} />
        					<Route path={`/tin-tuc/:id`} component={TinTucDetails} />
        					<Route path={`/tin-tuc`} component={TinTuc} />

							<Route path={`/login`} component={login} />
							<Route path={`/register`} component={register} />
							<Route path={`/forgot-password`} component={forgotPassword} />
							<Route path={`/error`} component={error} />
							<Redirect to="/error" />
						</Switch>
					</Fragment>
				</IntlProvider>
			</Fragment>
		);
	}
}

const mapStateToProps = ({ authUser, settings }) => {
	const { user } = authUser;
	const { locale } = settings;
	return { user, locale };
};

export default connect(mapStateToProps, { })(App);

