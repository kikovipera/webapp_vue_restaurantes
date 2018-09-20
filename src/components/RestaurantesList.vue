<template>
  <div>
    <h2>{{texto}}</h2>
    <div>
      <ul id="restaurantes-list" v-if="restaurantes != null">
          <li v-for="restaurante in restaurantes">
            <div>
              <img class="restaurante-image" :src="restaurante.imagen"/>
            </div>
            <b>{{restaurante.nombre}}</b>
            <p class="restaurantes-actions">
              <router-link :to="{name: 'restaurante', params:{id: restaurante.id}}">Ver</router-link>
              <router-link :to="{name: 'editar-restaurante', params:{id: restaurante.id}}">Editar</router-link>
              <span v-if="showBorrar != restaurante.id">
                <a @click="borrarRestaurante(restaurante.id)">Eliminar</a>
              </span>
              <span v-else>
                  <p>¿Estas seguro de borrar elemento?</p>
                  <button @click="cancelarBorrado()">Cancerlar</button>
                  <button @click="confirmarBorrado(restaurante.id)">Borrar</button>
            </span>
            </p>
          </li>
      </ul>
      <div class="loading" v-else>
        <span>Cargando Restaurantes ...</span>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios';
	export default {
	  name: 'restaurantes-list',
    mounted(){
	    this.getRestaurantes();
    },
	  data () {
	    return {
	      texto: 'Restaurantes',
        restaurantes: null,
        showBorrar: null
	    }
	  },
    methods: {
	    getRestaurantes(){
	      axios.get('http://localhost/slim/restaurantes-api.php/restaurantes')
          .then((respuesta) =>{
            this.restaurantes = respuesta.data.data;
            console.log(this.restaurantes)
          });
      },
      borrarRestaurante(id){
	      this.showBorrar = id;
      },
      cancelarBorrado(){
	      this.showBorrar = null;
      },
      confirmarBorrado(id){
	      const URL_DELETED = 'http://localhost/slim/restaurantes-api.php/delete-restaurante/'+id
        axios.get(URL_DELETED)
          .then((respuesta)=>{
            this.showBorrar = null;
            this.getRestaurantes()
          })
      }
    }
	}
</script>
<style lang="scss">
  #restaurantes-list {
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    list-style: none;

    li {
      margin: 5px;
      width: 30%;
      min-height: 120px;
      border: 3px solid #42b983;
      padding: 20px;
      overflow: hidden;
      color: #777;
      &:hover {
        border: 3px solid #42b98387;
      }
      .restaurantes-actions {
        a {
          color: #42b983;
        }
      }
    }
  }
  img.restaurante-image {
    width: 50%;
  }
  .loading {
    background: url("https://thomas.vanhoutte.be/miniblog/wp-content/uploads/light_blue_material_design_loading.gif");
    height: 190px;
    background: url(https://thomas.vanhoutte.be/miniblog/wp-content/uploads/light_blue_material_design_loading.gif);
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
