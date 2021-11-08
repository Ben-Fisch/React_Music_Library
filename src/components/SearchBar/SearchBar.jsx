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
        this.props.filterSongs(this.state.searchTerm)
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="col-sm-3" name="searchTerm" onChange={this.handleChange} placeholder="Search.." />
                        <button type="submit" className="btn btn-primary btn-sm">Search</button>
                    </div>
                </form>
                <br />
            </div>
            
        )
    }
}

export default SearchBar