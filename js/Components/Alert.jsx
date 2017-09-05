import React from 'react';
import ReactDOM from 'react-dom';

class Alert extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url : document.location,
        };
    }

    //call function onClose which close alert with url of website
    handleCloseClick = (e) => {
        e.preventDefault();
        if ( typeof this.props.onClose === 'function' ){
            this.props.onClose();
        }
    }

    render(){
        if (this.props.displayAlert) {
            return  <div className="alert">
                        <span> Share: </span>
                        <input value={this.state.url}/>
                        <button onClick={this.handleCloseClick}> X </button>
                    </div>
        } else {
            return null;
        }
    }
}

module.exports = Alert;
