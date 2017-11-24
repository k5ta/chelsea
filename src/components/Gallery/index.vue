<template>
  <transition @enter="enterAnimation" @appear="appearAnimation">
    <div>
      <app-header></app-header>
      <app-contacts v-if="contacts"></app-contacts>
      <div :class="s.gallery">
        <image-viewer v-if="imageView" @hide="closeImageView" @prev="prevImageView" @next="nextImageView"></image-viewer>
        <div :class="s.under"></div>
        <div :class="s.width100" v-for="page in pages" @click="showImageView">
          <div :class="[s.row, s.width100]">
            <div :class="s.column">
              <div v-if="page[0]" :class="s.baseImg" :style="`background-image: url('${page[0]}'); width: calc(100% - 0.66vw); padding-top: 49%`">
              </div>
              <div :class="[s.row, s.wideWhenSmall]">
                <div v-if="page[1]" :class="s.baseImg" :style="`background-image: url('${page[1]}'); width: 50%; padding-top: 49%`"></div>
                <div v-if="page[2]" :class="s.baseImg" :style="`background-image: url('${page[2]}'); width: 50%; padding-top: 49%`"></div> 
              </div>
            </div>
            <div :class="s.column">
              <div v-if="page[3]" :class="s.baseImg" :style="`background-image: url('${page[3]}'); width: calc(100% - 0.66vw); padding-top: 100%`"></div>
            </div>
            <div :class="s.column">
              <div :class="[s.row, s.wideWhenSmall]">
                <div v-if="page[4]" :class="s.baseImg" :style="`background-image: url('${page[4]}'); width: 50%; padding-top: 49%`"></div>
                <div v-if="page[5]" :class="s.baseImg" :style="`background-image: url('${page[5]}'); width: 50%; padding-top: 49%`"></div>
              </div>
              <div v-if="page[6]" :class="s.baseImg" :style="`background-image: url('${page[6]}'); width: calc(100% - 0.66vw); padding-top: 49%`"></div>
            </div>
          </div>
          <div :class="s.row">
            <div :class="[s.width50, s.row, s.wideWhenSmall]">
              <div v-if="page[7]" :class="s.baseImg" :style="`background-image: url('${page[7]}'); width: 33%; padding-top: 33%`"></div>
              <div v-if="page[8]" :class="s.baseImg" :style="`background-image: url('${page[8]}'); width: 67%; padding-top: 33%`"></div>
            </div>
            <div :class="[s.width50, s.row, s.wideWhenSmall]">
              <div v-if="page[9]" :class="s.baseImg" :style="`background-image: url('${page[9]}'); width: 33%; padding-top: 33%`"></div>
              <div v-if="page[10]" :class="s.baseImg" :style="`background-image: url('${page[10]}'); width: 67%; padding-top: 33%`"></div>
            </div>
          </div>
          <div :class="[s.row, s.width100]">
            <div :class="s.column">
              <div v-if="page[11]" :class="s.baseImg" :style="`background-image: url('${page[11]}'); width: calc(100% - 0.66vw); padding-top: 75%`"></div>
              <div :class="[s.row, s.wideWhenSmall]">
                <div :class="s.width50">
                  <div :class="s.baseImg" 
                    v-if="page[12]"    
                    :style="`background-image: url('${page[12]}'); width: calc(100% - 0.66vw); padding-top: 75%; margin-bottom: 0.66vw`">
                  </div>
                  <div v-if="page[13]" :class="s.baseImg" :style="`background-image: url('${page[13]}'); width: calc(100% - 0.66vw); padding-top: 76%`"></div>
                </div>
                <div v-if="page[14]" :class="s.baseImg" :style="`background-image: url('${page[14]}'); width: 50%; padding-top: 75%`"></div>
              </div>
            </div>
            <div :class="s.column">
              <div :class="s.baseImg" 
                v-if="page[15]" 
                :style="`background-image: url('${page[15]}'); width: calc(100% - 0.66vw); padding-top: 100%; margin-bottom: 0.66vw`">
              </div>
              <div v-if="page[16]" :class="s.baseImg" :style="`background-image: url('${page[16]}'); width: calc(100% - 0.66vw); padding-top: 51%`"></div>
            </div>
            <div :class="s.column">
              <div :class="[s.row, s.wideWhenSmall]">
                <div v-if="page[17]" :class="s.baseImg" :style="`background-image: url('${page[17]}'); width: 50%; padding-top: 75%`"></div>
                <div :class="s.width50">
                  <div :class="s.baseImg" 
                    v-if="page[18]"
                    :style="`background-image: url('${page[18]}'); width: calc(100% - 0.66vw); padding-top: 75%; margin-bottom: 0.66vw`">
                  </div>
                  <div v-if="page[19]" :class="s.baseImg" :style="`background-image: url('${page[19]}'); width: calc(100% - 0.66vw); padding-top: 75%`"></div>
                </div>
              </div>
              <div v-if="page[20]" :class="s.baseImg" :style="`background-image: url('${page[20]}'); width: calc(100% - 0.66vw); padding-top: 75%`"></div>
            </div>
          </div>
          <div :class="s.row">
          <div :class="s.width67">
              <div :class="[s.row, s.wideWhenSmall]">
                <div v-if="page[21]" :class="s.baseImg" :style="`background-image: url('${page[21]}'); width: 51%; padding-top: 33%`"></div>
                <div v-if="page[22]" :class="s.baseImg" :style="`background-image: url('${page[22]}'); width: 25%; padding-top: 33%`"></div>
                <div v-if="page[23]" :class="s.baseImg" :style="`background-image: url('${page[23]}'); width: 25%; padding-top: 33%`"></div>
              </div>
              <div :class="[s.row, s.wideWhenSmall]">
                <div v-if="page[24]" :class="s.baseImg" :style="`background-image: url('${page[24]}'); width: 25%; padding-top: 33%`"></div>
                <div v-if="page[25]" :class="s.baseImg" :style="`background-image: url('${page[25]}'); width: 75%; padding-top: 33%`"></div>
              </div>
            </div>
            <div :class="s.column">
              <div :class="s.baseImg" 
                v-if="page[26]" 
                :style="`background-image: url('${page[26]}'); width: calc(100% - 0.66vw); padding-top: 66%; margin-bottom: 0.66vw`">
              </div>
              <div v-if="page[27]" :class="s.baseImg" :style="`background-image: url('${page[27]}'); width: calc(100% - 0.66vw); padding-top: 66%`"></div>
            </div>
          </div>
        </div>
      </div>
      <app-footer style="position: inherit"></app-footer>
    </div>
  </transition>
</template>

<script src="./script.js"></script>
<style src="./styles.styl" lang="styl" module="s"></style>