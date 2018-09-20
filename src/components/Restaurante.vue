<template>
  <div>
    <h2>Detalle del restaurante {{id}}</h2>
    <div id="restaurante-detail" v-if="restaurante !=null">
      <div class="info-media">
        <img class="restaurante-image" :src="restaurante.imagen"/>
      </div>
      <div class="info-main">
        <h2 v-text="restaurante.nombre"></h2>
        <p v-text="restaurante.descripcion"></p>
        <p v-text="restaurante.direccion"></p>
        <p v-text="restaurante.precio"></p>
      </div>
    </div>
    <span v-else>Cargando restaurante ...</span>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'restaurante-detail',
    mounted(){
      this.id = this.$route.params.id;
      const URL_KEY = 'http://localhost/slim/restaurantes-api.php/restaurante/'+this.id;
      //es importante usar flecha para acceder a las propiedades de data
      axios.get(URL_KEY)
        .then((respuesta) =>{
          this.restaurante = respuesta.data.data;
        })
    },
    data(){
      return {
        id: null,
        restaurante: null
      }
    }
  }
</script>
<style>
  div#restaurante-detail img.restaurante-image {
    width: auto;
  }

  div#restaurante-detail {
    display: flex;
  }

  .info-media {
    width: 50%;
  }

  .info-main {
    width: 50%;
    text-align: left;
  }
</style>
