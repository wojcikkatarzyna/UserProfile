import React from 'react';
import ReactDOM from 'react-dom';

class UserStatistic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            followers : 0,
        };
    }

    handleFollowClick = (e) => {
        e.preventDefault();
        this.setState({
            followers : this.state.followers + 1,
        })
    }
    render(){
        return  <section className="statistic">
                    <div className="likes">
                        <h3> {this.props.likes} </h3>
                        <h4> Likes </h4>
                    </div>
                    <div className="following">
                        <h3> 0 </h3>
                        <h4> Following </h4>
                    </div>
                    <div className="followers">
                        <h3> {this.state.followers} </h3>
                        <h4> Followers </h4>
                    </div>
                    <button onClick={this.handleFollowClick}> FOLLOW </button>
                </section>
    }
}

module.exports = UserStatistic;
