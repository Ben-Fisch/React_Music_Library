import React from 'react';
import './MusicTable.css';

function MusicTable(props) {
    return (
            <div className="container" >
                <table className="table table-bordered">
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
                                    <button onClick={() => props.deleteSong(song.id)}>Delete</button>
                                </tr>
                            </tbody>
                        )
                    })}
                    
                </table>
            </div>
    )
}
export default MusicTable;