import fetch from 'node-fetch';
import React, { Component } from 'react';

export default class AlbumList extends Component {

    state = { ListOfAlbums: [] }

    componentDidMount() {
        fetch('/album')
        .then(res => res.json())
        .then(ListOfAlbums => this.setState({ ListOfAlbums }))
    }

    render(){
        return(
            <div>
                <h1>List of Albums</h1>
                <ul>
                    {this.state.ListOfAlbums.map((item, i) => {
                        return (
                            <li key={i} value={item}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
                    
            
            </div>
        );
    }
}