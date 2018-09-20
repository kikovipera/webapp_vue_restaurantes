<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/restaurantes">Restaurantes</router-link>
      </li>
      <li>
        <router-link :to="{name: 'restaurante-destacado', params: {id: 16}}">Restaurante destacado</router-link>
      </li>
      <li>
        <router-link to="/contacto">Contacto</router-link>
      </li>
      <li>
        <router-link to="/crear-restaurante">Crear restaurante</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Restaurante'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
