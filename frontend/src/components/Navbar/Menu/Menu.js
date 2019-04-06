import React, {Component, Fragment} from 'react'
import MenuItem from "./MenuItem/MenuItem";
import {connect} from "react-redux";


class Menu extends Component {
    state = {
        collapse: true
    };

    toggle = () => {
        this.setState({collapse: !this.state.collapse});
    };

    render() {
        const {username, id} = this.props.auth;
        console.log(this.props.auth);
        return <Fragment className='container'>
            <button onClick={this.toggle}
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className={(this.state.collapse ? "collapse" : "") + " navbar-collapse"}
                 id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <MenuItem to="/">Продукты</MenuItem>
                </ul>
                <ul className="navbar-nav ml-auto">
                    {id ? [
                        <li className="nav-item" key="username">
                            <span className="navbar-text">Привет, {username}!</span>
                        </li>,
                        <MenuItem to="/logout" key="logout">Выйти</MenuItem>
                    ] : [
                        <MenuItem to="/login" key="login">Войти</MenuItem>,
                    ]}
                </ul>
            </div>
        </Fragment>
    }
}

const mapStateToProps = state => ({auth: state.auth});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
