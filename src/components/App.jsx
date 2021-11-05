import React, { Component } from 'react';
import MusicTable from './MusicTable/MusicTable';
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        this.getAllSongs();
    }

    getAllSongs = async () => {
        let response = await axios.get('http://127.0.0.1:8000/songs/');
        this.setState({
            songs: response.data
        });
    }

    render() {
        return (
            <MusicTable songs={this.state.songs}/>
        )
    }
}

export default App;