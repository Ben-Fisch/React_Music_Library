import React, { Component } from 'react';
import MusicTable from './MusicTable/MusicTable';
import SongForm from './SongForm/SongForm';
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
        this.deleteSong();
        this.addSong();
    }

    getAllSongs = async () => {
        let response = await axios.get('http://127.0.0.1:8000/songs/');
        this.setState({
            songs: response.data
        });
    }


    deleteSong = async (id) => {
        let response = await axios.delete('http://127.0.0.1:8000/songs/' + id + '/');
        this.getAllSongs()
    }

    addSong = async () => {
        let response = await axios.post('http://127.0.0.1:8000/songs/');
        this.getAllSongs()
    }

    render() {
        return (
            <div>
                <MusicTable deleteSong={this.deleteSong} songs={this.state.songs} />
                <SongForm createNewSong={this.addSong}/>
            </div>
        )
    }
}

export default App;