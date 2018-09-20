<template>
  <div>
    <h2>Esto es {{texto}}</h2>
    <img class="landing-home" src="http://www.theperfectlanding.com/wp-content/uploads/2014/07/perfectLandingSlider4.png"/>
  </div>
</template>

<script type="text/javascript">
	export default {
	  name: 'home',
	  data () {
	    return {
	      texto: 'Pagina Home'
	    }
	  }
	}
</script>

<style>
  .landing-home {
    width: 100%;
  }
</style>
