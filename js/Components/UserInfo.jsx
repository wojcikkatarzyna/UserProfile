import React from 'react';
import ReactDOM from 'react-dom';

class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName : "Harvey ",
            userSurname : "Specter",
            userCity : "New York",
            userCountry : "USA",
        };
    }

    // display url of website
    handleShareClick = (e) => {
        e.preventDefault();
        alert("Url : "+document.location);
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
