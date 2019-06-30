import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import { IntlProvider} from 'react-intl';

import { defaultStartPath } from 'Constants/defaultValues'

import { connect } from "react-redux";

import AppLocale from '../lang';
import MainRoute from 'Routes';
import login from 'Routes/layouts/login'
import register from 'Routes/layouts/register'
import error from 'Routes/layouts/error'
import forgotPassword from 'Routes/layouts/forgot-password'

import AuthLogin from "Routes/landing-pages/auth-login";
import AuthRegister from "Routes/landing-pages/auth-register";
import Home from "Routes/landing-pages/home";
import Docs from "Routes/landing-pages/docs";
import MeaningLogo from "Routes/landing-pages/meaning-logo";
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
						<Switch>
							<InitialPath
							path={`${match.url}app`}
							authUser={user}
							component={MainRoute}
						/>
        					<Route path={`/auth-login`} component={AuthLogin} />
        					<Route path={`/auth-register`} component={AuthRegister} />
        					<Route path={`/home`} component={Home} />
							<Route path={`/y-nghia-logo`} component={MeaningLogo} />
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

