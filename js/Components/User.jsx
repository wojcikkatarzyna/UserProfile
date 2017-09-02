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

    render(){
        return  <section className="profile">
                    <UserInfo onLikes={this.handleAddLikes}/>
                    <UserStatistic likes={this.state.likes}/>
                </section>
    }
}

module.exports = User;
