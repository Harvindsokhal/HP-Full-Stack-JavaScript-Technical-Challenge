const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors())

const url = 'https://itunes.apple.com/lookup?id=909253&entity=album';

let filteredAlbumNames = [];

let AlbumCoversAndNames = [];

fetch(url)
.then(res => res.json())
.then(json => {
    for(i = 0; i < json.resultCount; i++){
        if(!filteredAlbumNames.includes(json.results[i].collectionName) && json.results[i].collectionName != null){
            filteredAlbumNames.push(json.results[i].collectionName);
        }
    }
    app.get('/album', (req, res) => {
        res.send(filteredAlbumNames)
    })
})

fetch(url)
.then(res => res.json())
.then(json => {
        for(i = 0; i < json.resultCount; i++){
        if(!AlbumCoversAndNames.includes(json.results[i].collectionName) && json.results[i].collectionName != null){
            AlbumCoversAndNames.push({
                AlbumName: json.results[i].collectionName,
                ImageUrl: json.results[i].artworkUrl100
            });
        }
    }
    app.get('/AlbumNameAndCover', (req, res) => {
        res.send(AlbumCoversAndNames)
    })
})


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})