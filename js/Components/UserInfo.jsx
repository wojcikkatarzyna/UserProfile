import React from 'react';
import ReactDOM from 'react-dom';

import Alert from './Alert.jsx';

class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName : "Harvey ",
            userSurname : "Specter",
            userCity : "New York",
            userCountry : "USA",
            displayAlert : false,
        };
    }

    // display url of website
    handleShareClick = (e) => {
        e.preventDefault();
        this.setState({
            displayAlert : true,
        })
    }

    //close alert with url of website
    hadleAlertClose = () => {
        this.setState({
            displayAlert : false,
        })
    }

    //call a function which increase number of likess
    handleHeartClick = (e) => {
        e.preventDefault();
        if ( typeof this.props.onLikes === 'function' ){
            this.props.onLikes();
        }
    }

    render(){
        return  <header>
                    <img src="images/Harvey.jpg" alt="User Photo"/>
                    <div className="material-icons" onClick={this.handleShareClick}> share </div>
                    <Alert displayAlert={this.state.displayAlert} onClose={this.hadleAlertClose}/>
                    <h1 className="name">
                        {this.state.userName}
                        {this.state.userSurname}
                        <span className="heart" onClick={this.handleHeartClick}> &#9825; </span>
                    </h1>
                    <h2 className="city"> {this.state.userCity}, {this.state.userCountry} </h2>
                </header>
    }
}

module.exports = UserInfo;
