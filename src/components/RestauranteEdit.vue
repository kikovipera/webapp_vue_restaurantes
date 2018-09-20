<template>
  <div>
    <h2>Editar restaurante</h2>
    <div id="restaurante-edit">
      <form class="vue-form" v-on:submit.prevent="guardarRestaurante">
        <p>
          <label>Nombre</label>
          <input type="text" v-model="restaurante.nombre" placeholder="Nombre"/>
        </p>
        <p>
          <label>Dirección</label>
          <input type="text" v-model="restaurante.direccion" placeholder="Dirección"/>
        </p>
        <p>
          <label>Descripción</label>
          <textarea v-model="restaurante.descripcion" placeholder="Descripción"></textarea>
        </p>
        <p>
          <label>Imagen</label>
          <input type="text" v-model="restaurante.imagen" placeholder="Imagen"/>
        </p>
        <p>
          <label>Precio</label>
          <select v-model="restaurante.precio">
            <option value="nada" selected="true">Seleciona una opción</option>
            <option value="bajo">Bajo</option>
            <option value="normal">Normal</option>
            <option value="alto">Alto</option>
          </select>
        </p>
        <input type="submit" value="Guardar Restaurante"/>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name:'restaurante-edit',
    mounted(){
      this.id = this.$route.params.id;
      const URL_KEY = 'http://localhost/slim/restaurantes-api.php/restaurante/'+this.id;
      axios.get(URL_KEY)
        .then((respuesta) =>{
            this.restaurante = respuesta.data.data;
        });
    },
    data(){
      return {
        restaurante: {
          nombre: '',
          direccion: '',
          descripcion: '',
          imagen: 'https://via.placeholder.com/300x200',
          precio: ''
        }
      }
    },
    methods: {
      guardarRestaurante(){
        console.log(this.restaurante);
        var router = this.$router;
        var params = "json="+JSON.stringify(this.restaurante)
        var id = this.id;
        //console.log(params);
        axios.post('http://localhost/slim/restaurantes-api.php/update-restaurante/'+id, params)
          .then((respuesta)=>{
            console.log(respuesta);
            if(respuesta.data.status == 'success'){
              //redirigir
              router.push('/restaurante/'+id)
            }
          })
          .catch((error)=>{
            console.error(error);
          })
      }
    }
  }

</script>
