import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from "react-router";
import ProductList from './containers/ProductList/ProductList'
import {connect} from "react-redux";
import Layout from './components/Layout/Layout';
import ProductDetail from "./containers/ProductDetail/ProductDetail";
import Login from "./containers/Login/Login";
import Logout from "./containers/Logout/Logout";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/products/:id" component={ProductDetail} exact/>
                        <Route path="/login" component={Login}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/" component={ProductList} exact/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}


const mapStateToProps = state => state.app;
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);