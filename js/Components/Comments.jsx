import React from 'react';
import ReactDOM from 'react-dom';

import AddComment from './AddComment.jsx';

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfComments : 0,
            showComments : true,
        };
    }

    // Show or hide comments
    handleShowHideClick = (e) => {
        e.preventDefault();
        this.setState({
            showComments : !this.state.showComments,
        })
    }

    render(){
        return  <section className="comments">
                    <div onClick={this.handleShowHideClick}> {this.state.showComments ? "Hide comments" : "Show comments"}  ( {this.state.numberOfComments} ) </div>
                    <AddComment />
                </section>
    }
}

module.exports = Comments;
