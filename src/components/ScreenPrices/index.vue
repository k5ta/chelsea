<template>
  <transition @enter="enterAnimation" @leave="leaveAnimation" @appear="appearAnimation">
    <div :class="s.section3" :data-name="name">
      <div :class="s.row">
        <div :class="s.prices">
          <h1 :class="s.upper">Услуги и цены</h1>
          <div :class="s.tableBlock">
            <table :class="s.pricesTable" v-if="services">
              <tr v-for="service in services" :key="service.className" :class="s[service.className]">
                <th :class="s.rows__white" v-html="`${assets.hair}<span class='${sh.srOnly}'>${service.name}</span>`" scope="row"></th>
                <td>
                  <table :class="s.insideTable">
                    <tr v-for="price in service.prices" :key="price.for">
                      <th :class="s.serviceType">{{ price.for }}</th>
                      <td :class="s.price">{{ price.regular }}</td>
                      <td :class="[s.price, s.sale]">{{ price.discount }}</td>
                    </tr>
                  </table>
                </td>
               <td :class="s.rows__pink">{{ service.discount }}</td>
              </tr>
            </table>
            <table :class="[s.pricesTable, s.complexService]" v-if="complexServices">
              <tr v-for="complexService in complexServices" :key="complexService.name">
                <td :class="s.rows__pink">{{ complexService.discount }}</td>
                <th :class="s.serviceType"><span :class="s.complex">Комплекс: </span>{{ complexService.name }}</th>
                <td :class="s.price">{{ complexService.price.regular }}</td>
                <td :class="[s.price, s.sale]">{{ complexService.price.discount }}</td>
                <td :class="s.row__empty"></td>
              </tr>
            </table>

            <div :class="s.phoneSvg" v-html="`${assets.phone}`">
            </div>
          </div>

        </div>
        <div :class="s.app">
          <h1 :class="s.upper">Записывайся через приложение и получай скидки</h1>
          <p :class="s.text" v-if="appsInfo">{{ appsInfo }}</p>
          <div :class="s.apps" v-if="appsLinks">
            <a :href="appsLinks.appStore" target="_blank">
              <img :src="assets.appStore" alt="App Store">
            </a>
            <a :href="appsLinks.googlePlay" target="_blank">
              <img :src="assets.googlePlay" alt="Google Play">
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./script.js"></script>
<style src="./styles.styl" lang="styl" module="s"></style>
<style src="@/styles/helpers.styl" lang="styl" module="sh"></style>