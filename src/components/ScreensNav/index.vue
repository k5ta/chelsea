<template>
  <nav :class="[s.navigation, theme]">
    <router-link :class="s.navigationLink"
      v-for="(path, i) in screensSchema[scope].fullPaths" 
      :to="path"
      :key="path">{{ prefixZero(i+1) }}</router-link>
      <div :class="s.forScroll">
        <svg height="30" width="18">
          <use :xlink:href="assets.scrollSingle"></use>
        </svg>
        <div :class="s.pinkPoint">
          <svg height="20" width="18">
            <use :xlink:href="assets.scrollPoint"></use>
          </svg>
        </div>
      </div>
  </nav> 
</template>

<script src="./script.js"></script>
<style src="./styles.styl" lang="styl" module="s"></style>
