import React from 'react';
import { Link } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showStuff: false
        }

    }

    handleClick = () => {
        this.setState({
            showStuff: !this.state.showStuff
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-fixed-top navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand-xs d-none d-sm-block pt-0">
                
                <div className="collapse navbar-collapse">
                <Link to="/" className="navbar-brand"><h3 className="text-light mr-2" >A Logo Here</h3></Link>
                    <ul className="navbar-nav mr-2">
                        <li className="navbar-item">
                        <Link to="/" className="nav-link">{this.props.first}</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to={this.props.secTo} className="nav-link">{this.props.sec}</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to={this.props.thirdTo} className="nav-link">{this.props.third}</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to={this.props.fourthTo} className="nav-link">{this.props.fourth}</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to={this.props.fifthTo} className="nav-link">{this.props.fifth}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="bg-dark navbar-fixed-top d-block d-sm-none p-2" onClick={this.handleClick}>
                <div className="d-flex" style={{textAlign: "center", justifyContent: "center", alignItems: "center"}}>
                <FontAwesomeIcon icon={['fas', 'bars']} size="lg" style={{color: "white"}} />
                <Link to="/" className="navbar-brand"><h3 className="text-light mr-2" style={{marginLeft: "10px", marginTop: "7px"}}>A Logo Here</h3></Link>
                </div>
                {
                    this.state.showStuff ? <ul className="menu-list-parent">
                    <li >
                    <Link to="/" className="link">{this.props.first}</Link>
                    </li>
                    <li >
                    <Link to={this.props.secTo} className="link">{this.props.sec}</Link>
                    </li>
                    <li >
                    <Link to={this.props.thirdTo} className="link">{this.props.third}</Link>
                    </li>
                    <li >
                    <Link to={this.props.fourthTo} className="link">{this.props.fourth}</Link>
                    </li>
                    <li >
                    <Link to={this.props.fifthTo} className="link">{this.props.fifth}</Link>
                    </li>
                </ul> : <div></div>
                }
            </nav>
            </div>
        );
    }
}