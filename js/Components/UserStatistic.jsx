import React from 'react';
import ReactDOM from 'react-dom';

class UserStatistic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            followers : 0,
        };
    }

    //increase number of followers
    handleFollowClick = (e) => {
        e.preventDefault();
        this.setState({
            followers : this.state.followers + 1,
        })
    }

    // take from JSON file statistics (no of followers and followings)
    componentDidMount() {
        fetch('http://localhost:3000/user')
        .then(r => r.json())
        .then( response =>{
            this.setState({
                followers : response[0].followers,
                followings : response[0].followings,
            })
        })
    }

    render(){
        return  <main className="statistic">
                    <div className="likes">
                        <h3> {this.props.likes} </h3>
                        <h4> Likes </h4>
                    </div>
                    <div className="following">
                        <h3> {this.state.followings} </h3>
                        <h4> Following </h4>
                    </div>
                    <div className="followers">
                        <h3> {this.state.followers} </h3>
                        <h4> Followers </h4>
                    </div>
                    <button onClick={this.handleFollowClick}> FOLLOW </button>
                </main>
    }
}

module.exports = UserStatistic;
