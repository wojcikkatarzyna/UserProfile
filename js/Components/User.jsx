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

    handleAddLikes = (e) => {
        this.setState({
            likes : this.state.likes + 1,
        })
    }

    render(){
        return  <div>
                    <UserInfo onLikes={this.handleAddLikes}/>
                    <UserStatistic likes={this.state.likes}/>
                </div>
    }
}

module.exports = User;
