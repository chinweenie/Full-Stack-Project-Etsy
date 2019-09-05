import React from 'react';
import {connect} from 'react-redux';
import LoggedInNavbar from './logged_in_navbar';
import LoggedOutNavbar from './logged_out_navbar';

class Navbar extends React.Component{
    render() {
        let {navbar} = this.props;
        const component = !navbar ? <LoggedOutNavbar/> : <LoggedInNavbar/>;
        return (
            <div className="navbar">
                {component}
            </div>
        );
    };
} 
    

const mapStateToProps = state => {
    
    return {
        navbar: Boolean(state.session.id)
    }
  
};


export default connect(mapStateToProps, null)(Navbar);