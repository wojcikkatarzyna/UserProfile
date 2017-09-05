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
            loading : true,
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
                loading : false,
                listOfComments : response,
                numberOfComments : response.length,
            })
        })
    }

    //update list without reloading the page
    handleUpDateList = (comment) => {
        this.setState({
            listOfComments : this.state.listOfComments.concat(comment),
            numberOfComments : this.state.numberOfComments + 1,
        })
        console.log("This is temporary warning, because of updating the window with comments. After reloading the page the warning will dissapear and time of publishing will be correct");
    }

    render(){
        if (this.state.loading) {
            return  <div className="loading">
                        Please, wait a minute...
                    </div>
        } else {
            return  <section className="comments">
                        <header onClick={this.handleShowHideClick}> {this.state.showComments ? "Hide comments" : "Show comments"}  ( {this.state.numberOfComments} ) </header>
                        <ListOfComments showComments={this.state.showComments} listOfComments={this.state.listOfComments} />
                        <AddComment onUpdate={this.handleUpDateList}/>
                    </section>
        }
    }
}

module.exports = Comments;
