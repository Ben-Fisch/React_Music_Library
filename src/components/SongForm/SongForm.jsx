import React, { Component } from 'react';

class SongForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: '',
            
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewSong(this.state)
    }

    render() {
        return (
            <div>
                <h4>Add a Song!</h4>
            
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={this.handleChange}/> <br />
                    <label>Artist:</label>
                    <input type="text" name="artist" onChange={this.handleChange}  /> <br />
                    <label>Album:</label>
                    <input type="text" name="album" onChange={this.handleChange} /> <br />
                    <label>Release Date:</label>
                    <input type="text" name="release_date" onChange={this.handleChange} /> <br />
                    <label>Genre:</label>
                    <input type="text" name="genre" onChange={this.handleChange} /> <br />
                    <button type="submit">Add Song</button>
                </form>
            </div>
        );
    }
}
 
export default SongForm;