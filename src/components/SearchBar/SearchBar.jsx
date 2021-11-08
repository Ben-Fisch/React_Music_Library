import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filterSongs(this.props.searchTerm)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>Search for a Song </label>
                    <input type="text" name="search" onChange={this.handleChange} placeholder="Search.." />
                    <span>
                        <button type="submit" className="btn btn-primary">Search</button>
                    </span>
                </form>
                <br />
            </div>
            
        )
    }
}

export default SearchBar