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
            <div className="container">
                <h4>Add a Song!</h4>
            
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title </label>
                        <input type="text" className="form-control" name="title" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Artist:</label>
                        <input type="text" className="form-control" name="artist" onChange={this.handleChange}  />
                    </div>
                    <div className="form-group">
                        <label>Album:</label>
                        <input type="text" className="form-control" name="album" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Release Date:</label>
                        <input type="text" className="form-control" name="release_date" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Genre:</label>
                        <input type="text" className="form-control" name="genre" onChange={this.handleChange} />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Add Song</button>
                </form>
            </div>
        );
    }
}
 
export default SongForm;