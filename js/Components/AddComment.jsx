import React from 'react';
import ReactDOM from 'react-dom';

// empty array, place to hold all comments
const allComments = [];

class AddComment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentUserName : "Mike Ross",
            currentUserImage : "images/Mike.jpg",
            currentComment : "",
        };
    }

    // Save comment to state
    handleCommentChange = (e) => {
        e.preventDefault();
        this.setState({
            currentComment : e.target.value,
        })
    }

    // Save current comment to localStorage and reset input value
    handleSendClick = (e) => {
        e.preventDefault();
        allComments.push({
            author : this.state.currentUserName,
            photo : this.state.currentUserImage,
            comment : this.state.currentComment,
            date : new Date(),
            timeCounter : Date.now(),
        })
        let comments = JSON.stringify(allComments);
        localStorage.setItem("allOfComments", comments);
        console.log(localStorage);

        this.setState({
            currentComment : "",
        })
    }

    render(){
        return  <div className="newComment">
                    <input placeholder="Add a comment" onChange={this.handleCommentChange} value={this.state.currentComment}/>
                    <button className="material-icons" onClick={this.handleSendClick}> send </button>
                </div>
    }
}

module.exports = AddComment;
