import React from 'react';
import './MusicTable.css';

function MusicTable(props) {
    return (
        <div className="container" >
            <h4>Your Music</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th>Genre</th>
                            <th>Release Date</th>
                        </tr>
                    </thead>
                    
                    {props.songs.map((song) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{song.title}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.album}</td>
                                    <td>{song.genre}</td>
                                    <td>{song.release_date}</td>
                                    <td><button type="button" className="btn btn-danger" onClick={() => props.deleteSong(song.id)}>Delete</button></td>
                                </tr>
                            </tbody>
                        )
                    })}
                    
                </table>
        </div>
    )
}
export default MusicTable;