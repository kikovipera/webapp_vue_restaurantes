<template>
	<h2>Esto es {{texto}} : {{id_restaurante}}</h2>
</template>

<script type="text/javascript">
	export default {
	  name: 'restaurantes-top',
	  mounted(){
	    this.id_restaurante = this.$route.params.id;
    },
	  data () {
	    return {
	      texto: 'Página Restaurante Destacado',
        id_restaurante: null
	    }
	  }
	}
</script>
