import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundary';
import {robots} from '../robots'; //only needed because the API is not working
import './App.css';



class App extends Component {
    constructor(){
        super();

        this.state = {
            robots: robots, //would be empty if the API worked
            searchfield: ''
        };
    }

    //Doesn't work with GH Pages for whatever reason
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response=> response.json())
    //         .then(users =>  this.setState({robots: users}))
    // }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const {robots, searchfield} = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots.length ? //if robots array is empty
            <h1>Loading</h1> :
            (
                <div className = 'tc'>
                    <h1 className ='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                    <CardList robots = {filteredRobots}/>
                </div>
            );
    }
};

export default App;