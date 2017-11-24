<template>
  <div id="app">
    <!-- <screens-nav></screens-nav> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
};

(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter41753289 = new Ya.Metrika2({ id:41753289, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true, ecommerce:"dataLayer" }); } catch(e) { } }); var s = d.createElement("script"), f = function () { document.head.appendChild(s); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/tag.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks2");

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.head;a.async=1;a.src=g;m.appendChild(a)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-105829782-1', 'auto');
ga('send', 'pageview');

let s = document.createElement('script')
s.type = "text/javascript"
s.src = "https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCWV4CqXfA2HhlLxpp4s64yLdgBovatglg"
s.async = 1;
document.head.appendChild(s)

</script>

<style src="./styles/base.styl" lang="styl"></style>
