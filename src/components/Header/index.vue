<template>
  <header :class="[s.header, theme]">
    <button type="button" :class="s.buttonMenu" @click="headerCollapseOpened = !headerCollapseOpened">
      <svg height="20" width="20">
        <use :xlink:href="assets.menu"></use>
      </svg>
    </button>
    <header-collapse v-if="headerCollapseOpened" @closeMenu="headerCollapseOpened = false"></header-collapse>
    <nav :class="s.headerNavigation">
      <router-link :class="[s.navigationAnchor,
        s.anchor,
        {[s.active]: screensSchema.home.fullPaths.indexOf($route.path) !== -1}]" 
        to="/">Главная<div :class="[s.highlighting, s.firstHighlighting]"></div>
        <div :class="[s.highlighting, s.secondHighlighting]"></div>
        <div :class="[s.highlighting, s.thirdHighlighting]"></div>
        <div :class="[s.highlighting, s.fourthHighlighting]"></div>
      </router-link>
      <router-link :class="[s.navigationAnchor, s.anchor]"
        :active-class="s.active"
        v-for="link in navLinks" 
        :to="link.href"
        :key="link.title">
        <div :class="[s.highlighting, s.firstHighlighting]"></div>
        <div :class="[s.highlighting, s.secondHighlighting]"></div>
        <div :class="[s.highlighting, s.thirdHighlighting]"></div>
        <div :class="[s.highlighting, s.fourthHighlighting]"></div>{{ link.title }}
      </router-link>
    </nav>
    <router-link to="/" id="header_logo">
      <svg role="img" :class="s.logo" height="80" width="140">
        <title>Chelsea</title>
        <use :xlink:href="assets.logo"></use>
      </svg>
    </router-link>
    <div :class="s.contacts">
      <div :class="s.phoneAndTime" v-if="contactData">
        <a :href="contactData.phoneRef" :class="[s.phone, s.anchor]">{{ contactData.phone }}</a>
        <div :class="s.time">
          <svg aria-hidden="true" height="12" width="17">
            <use :xlink:href="assets.clock"></use>
          </svg>
          <p :class="[s.workingTime, s.text]">{{ contactData.time }}</p>
        </div>
      </div>
      <enroll-site-block v-if="enroll" @hide="hideSiteBlock"></enroll-site-block>
      <button type="button" 
      :class="[s.buttonGetBarbered, buttonTheme]" 
      @click="showSiteBlock">Записаться онлайн<svg aria-hidden="true" height="5" width="40">
          <use :xlink:href="assets.vector"></use>
        </svg>
      </button>
      <div v-if="socialLinks">
        <a :class="s.anchor" v-for="link in socialLinks" :href="link.href" :key="link.href" target="_blank">
          <span :class="sh.srOnly">{{ link.title }}</span>
          <svg aria-hidden="true" height="24" width="18" :class="s.social">
            <use :xlink:href="link.icon"></use>
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script src="./script.js"></script>
<style src="./styles.styl" lang="styl" module="s"></style>
<style src="@/styles/helpers.styl" lang="styl" module="sh"></style>
