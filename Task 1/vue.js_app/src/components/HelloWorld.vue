

<template>
  <div class="hello">
    <h1>Albums</h1>
    <input type="text" v-model="search" placeholder="Search Albums">
    <div class="album-container">
      <div v-for="(album, value) in fileredAlbums" v-bind:key="value.id" class="single-album">
        <img :src= album.ImageUrl>
        <a>{{album.AlbumName}}</a>
      </div>
    </div>

  </div>

</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      albums: [],
      search: '',
    }
  },
  name: 'HelloWorld',
  mounted() {
    axios.get('http://localhost:5000/AlbumNameAndCover')
        .then((response) => {
      this.albums = response.data;
    })
    .catch((error) => {
      console.log(console.log(error));
    })
  },
  computed: {
    fileredAlbums: function(){
      return this.albums.filter((album) => {
        return album.AlbumName.match(this.search)
      });
    }
  }
}


</script>

<style scoped>
.hello{
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
}
img {
  height: 110px;
  width: 110px;

}

.album-container{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.single-album{
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 200px;
  margin: 0 10px;
  margin-top: 30px;

}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
