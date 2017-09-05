import React from 'react';
import ReactDOM from 'react-dom';

class ListOfComments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTimeCounter : Date.now(),
        };
    }

    // calculate time from publication
    timeFromPublication(timeNow, timeThen) {
        const timeDifference = timeNow - timeThen;
        if ( timeDifference > 31536000000 ) {
            return Math.floor(timeDifference/31536000000) + "y";
        } else if ( timeDifference > 2592000000 ) {
            return Math.floor(timeDifference/2592000000) + "m";
        } else if ( timeDifference > 86400000 ) {
            return Math.floor(timeDifference/86400000) + "d";
        } else if ( timeDifference > 3600000 ) {
            return Math.floor(timeDifference/3600000) + "h";
        } else if ( timeDifference > 60000 ) {
            return Math.floor(timeDifference/60000) + " min";
        } else if ( timeDifference < 0) {
            return "0s";
        } else {
            return Math.floor(timeDifference/1000) + " sec";
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
    }

    componentWillUnmount() {
        clearInterval( this.intervalId );
    }

    render(){

        if ((this.props.listOfComments.length === 0) || (!this.props.showComments)) {
            return null;
        } else {
            const allComments = this.props.listOfComments.map( (element, index) => {

                // call the function and calculate time from publication
                const published = this.timeFromPublication(this.state.currentTimeCounter, element.timeCounter);

                return  <div className="singleComment" key={element.id}>
                            <img className="commentPhoto" src={element.photo}/>
                            <div>
                                <span className="commentAuthor"> {element.author} </span>
                                <span className="commentDate"> {published} </span>
                                <span className="commentContent"> {element.comment} </span>
                            </div>
                        </div>
            })
            return  <article className="CommentsList">
                          {allComments}
                    </article>
        }
    }
}

module.exports = ListOfComments;
