import React, { Component } from 'react';
import MusicTable from './MusicTable/MusicTable';
import SongForm from './SongForm/SongForm';
import axios from 'axios';
import TitleBar from './TitleBar/TitleBar';
import Footer from './Footer/Footer';
import SearchBar from './SearchBar/SearchBar';




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
        this.searchForSongs();
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

    addSong = async (song) => {
        let response = await axios.post('http://127.0.0.1:8000/songs/', song);
        this.getAllSongs()
    }

    searchForSongs = async (searchTerm) => {
        let filteredSongs = this.state.songs.filter(function (song) {
            if (song.title.includes(searchTerm) || song.artist.includes(searchTerm) || song.album.includes(searchTerm) || song.genre.includes(searchTerm)) {
                return true
            } else {
                return false;
            }
        })
        this.setState({
            songs: filteredSongs
        });
    }

    render() {
        return (
            <div>
                <TitleBar />
                <SearchBar filterSongs={this.searchForSongs }/>
                <MusicTable deleteSong={this.deleteSong} songs={this.state.songs} /> <br />
                <SongForm createNewSong={this.addSong} />
                <Footer />
            </div>
        )
    }
}

export default App;