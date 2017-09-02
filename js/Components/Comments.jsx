import React from 'react';
import ReactDOM from 'react-dom';

import AddComment from './AddComment.jsx';
import ListOfComments from './ListOfComments.jsx';

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listOfComments : [],
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

    // save comments from JSON file to array in state, update numberOfComments
    componentDidMount() {
        fetch('http://localhost:3000/comments')
        .then(r => r.json())
        .then( response =>{
            this.setState({
                listOfComments : response,
                numberOfComments : response.length,
            })
        })
    }

    render(){
        return  <section className="comments">
                    <div onClick={this.handleShowHideClick}> {this.state.showComments ? "Hide comments" : "Show comments"}  ( {this.state.numberOfComments} ) </div>
                    <ListOfComments showComments={this.state.showComments} listOfComments={this.state.listOfComments} />
                    <AddComment />
                </section>
    }
}

module.exports = Comments;
