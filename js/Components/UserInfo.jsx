import React from 'react';
import ReactDOM from 'react-dom';

class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName : "Harvey",
            userSurname : "Specter",
            userCity : "New York",
            userCountry : "USA",
        };
    }

    handleHeartClick = (e) => {
        e.preventDefault();
        if ( typeof this.props.onLikes === 'function' ){
            this.props.onLikes();
        }
    }

    render(){
        return  <header>
                    <img src="images/Harvey.jpg" alt="User Photo"/>
                    <h1 className="name"> {this.state.userName} {this.state.userSurname} </h1>
                    <span className="heart" onClick={this.handleHeartClick}> &#9825; </span>
                    <h2 className="city"> {this.state.userCity}, {this.state.userCountry} </h2>
                </header>
    }
}

module.exports = UserInfo;
