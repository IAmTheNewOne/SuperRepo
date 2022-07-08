<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary sticky-top">
      <router-link class="navbar-brand" to="/">
        <img class="police-brand-svg" src="./assets/polizeistern_nrw.svg" alt="">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link class="nav-item" tag="li" to="/tagebuch" active-class="active">
            <a class="nav-link">Tagebuch</a>
          </router-link>
          <router-link class="nav-item" tag="li" to="/imprint" active-class="active">
            <a class="nav-link">Imprint</a>
          </router-link>
          <router-link class="nav-item" tag="li" to="/test" active-class="active">
            <a class="nav-link">Test</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <div class="container-main">
      <router-view />
    </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
.container-main {
  padding: 1em;
}
.police-brand-svg {
  height:fit-content;
  width: 2.5em;
}
</style>