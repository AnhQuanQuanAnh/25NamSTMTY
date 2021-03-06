import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import badges from './badges';
import cards from './cards';
import carousel from './carousel';
import collapse from './collapse';
import dropdowns from './dropdowns';
import editors from './editors';
import forms from './forms';
import formComponents from './form-components';
import icons from './icons';
import inputGroups from './input-groups';
import jumbotron from './jumbotron';
import modal from './modal';
import navigation from './navigation';
import sortable from './sortable';


export default class Ui extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { match } = this.props;

        return (
            <Switch>
                <Redirect exact from={`${match.url}/`} to={`${match.url}/alerts`} />
                <Route path={`${match.url}/badges`} component={badges} />
                <Route path={`${match.url}/cards`} component={cards} />
                <Route path={`${match.url}/carousel`} component={carousel} />
                <Route path={`${match.url}/collapse`} component={collapse} />
                <Route path={`${match.url}/dropdowns`} component={dropdowns} />
                <Route path={`${match.url}/editors`} component={editors} />
                <Route path={`${match.url}/forms`} component={forms} />
                <Route path={`${match.url}/form-components`} component={formComponents} />
                <Route path={`${match.url}/icons`} component={icons} />
                <Route path={`${match.url}/input-groups`} component={inputGroups} />
                <Route path={`${match.url}/jumbotron`} component={jumbotron} />
                <Route path={`${match.url}/modal`} component={modal} />
                <Route path={`${match.url}/navigation`} component={navigation} />
                <Route path={`${match.url}/sortable`} component={sortable} />
                <Redirect to="/error" />

            </Switch>
        )
    };
}