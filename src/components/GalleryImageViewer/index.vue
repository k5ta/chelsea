<template>
  <transition @enter="imageViewerEnterAnimation" @leave="imageViewerLeaveAnimation">
    <div :class="s.infoBlock">
      <button :class="s.buttonCloseUnvisible" @click="hide"></button>
      <div :class="s.imageViewer" id="for-image">
        <button type="button" :class="s.buttonClose" @click="hide">
          <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
            <use :xlink:href="assets.close"></use>
          </svg>
        </button>
        <button type="button"
          :class="[s.buttonNextPhoto, s.leftButton]" 
          @click="prevPhoto">
          <svg height="30" width="45" :class="s.leftSvg" xmlns="http://www.w3.org/2000/svg"> 
            <use :xlink:href="assets.arrow"></use> 
          </svg>
        </button>
        <button type="button"
          :class="[s.buttonNextPhoto, s.rightButton]" 
          @click="nextPhoto">
          <svg height="30" width="45" :class="s.rightSvg" xmlns="http://www.w3.org/2000/svg"> 
            <use :xlink:href="assets.arrow"></use> 
          </svg>
        </button>
      </div>
    </div>
  </transition>
</template>

<script src="./script.js"></script>
<style src="./styles.styl" lang="styl" module="s"></style>