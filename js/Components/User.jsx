import React from 'react';
import ReactDOM from 'react-dom';

import UserInfo from './UserInfo.jsx';
import UserStatistic from './UserStatistic.jsx';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes : 0,
        };
    }

    // increase number of likes
    handleAddLikes = (e) => {
        this.setState({
            likes : this.state.likes + 1,
        })
    }

    // take from JSON file statistics (no of likes)
    componentDidMount() {
        fetch('http://localhost:3000/user')
        .then(r => r.json())
        .then( response =>{
            this.setState({
                likes : response[0].likes,
            })
        })
    }

    render(){
        return  <section className="profile">
                    <UserInfo onLikes={this.handleAddLikes} />
                    <UserStatistic likes={this.state.likes} />
                </section>
    }
}

module.exports = User;
