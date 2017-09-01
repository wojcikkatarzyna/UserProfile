import React from 'react';
import ReactDOM from 'react-dom';
// import { Router,
//     Route,
//     Link,
//     IndexLink,
//     IndexRoute,
//     hashHistory
// } from 'react-router';

import User from './Components/User.jsx';
import Comments from './Components/Comments.jsx';

document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component{
        render(){
            return  <div>
                        <User />
                        <Comments />
                    </div>
        }
    }

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );

});
