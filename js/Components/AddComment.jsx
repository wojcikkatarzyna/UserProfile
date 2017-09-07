import React from 'react';
import ReactDOM from 'react-dom';

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

    handleEnterPress = (e) => {
        if ((e.keyCode === 13) && (this.state.currentComment !== "")) {
            //create object from current comment
            const comment = {
                author : this.state.currentUserName,
                photo : this.state.currentUserImage,
                comment : this.state.currentComment,
                date : new Date(),
                timeCounter : Date.now()
            }

            //post current comment to JSON file
            fetch('http://localhost:3000/comments', {
                method : 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(comment)
            })

            // call function which update list without reloading the page
            if ( typeof this.props.onUpdate === 'function' ){
                this.props.onUpdate(comment);
            }

            // reset add comment input
            this.setState({
                currentComment : "",
            })
        }
    }

    render(){
        return  <footer className="newComment">
                    <textarea placeholder="Add a comment" onChange={this.handleCommentChange} onKeyDown={this.handleEnterPress} value={this.state.currentComment}/>
                </footer>
    }
}

module.exports = AddComment;
