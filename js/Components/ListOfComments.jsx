import React from 'react';
import ReactDOM from 'react-dom';

class ListOfComments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTimeCounter : Date.now(),
            listOfComments : [],
        };
    }

    // calculate time from publication
    timeFromPublication(timeNow, timeThen) {
        const timeDifference = timeNow - timeThen;
        if ( timeDifference > 31536000000 ) {
            return Math.floor(timeDifference/31536000000) + " years ago";
        } else if ( timeDifference > 2592000000 ) {
            return Math.floor(timeDifference/2592000000) + " months ago";
        } else if ( timeDifference > 86400000 ) {
            return Math.floor(timeDifference/86400000) + " days ago";
        } else if ( timeDifference > 3600000 ) {
            return Math.floor(timeDifference/3600000) + " hours ago";
        } else if ( timeDifference > 60000 ) {
            return Math.floor(timeDifference/60000) + " minutes ago";
        } else {
            return Math.floor(timeDifference/1000) + " seconds ago";
        }
    }

    componentDidMount() {
        // update currentTimeCounter every minute
        // currentTimeCounter - returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC
        this.intervalId = setInterval( () => {
            this.setState({
                currentTimeCounter : Date.now(),
            });
        }, 60000);

        // save comments from JSON file to array in state
        fetch('http://localhost:3000/comments')
        .then(r => r.json())
        .then( response =>{
            this.setState({
                listOfComments : response,
            })
        })
    }

    componentWillUnmount() {
        clearInterval( this.intervalId );
    }

    render(){

        if (this.state.listOfComments.length === 0) {
            return null;
        } else {
            const allComments = this.state.listOfComments.map( (element, index) => {

                // call the function and calculate time from publication
                const published = this.timeFromPublication(this.state.currentTimeCounter, element.timeCounter);

                return  <div className="singleComment" key={element.id}>
                            <img className="commentPhoto" src={element.photo}/>
                            <div className="commentDate"> {published} </div>
                            <div className="commentAuthor"> {element.author} </div>
                            <div className="commentContent"> {element.comment} </div>
                        </div>
            })
            return  <div className="CommentsList">
                          {allComments}
                    </div>
        }
    }
}

module.exports = ListOfComments;
