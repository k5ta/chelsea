import vk from '@/assets/vector/generic/vk.svg'
import facebook from '@/assets/vector/generic/facebook.svg'
import instagram from '@/assets/vector/generic/instagram.svg'
import logo from '@/assets/vector/generic/logo.svg'
import spacety from '@/assets/vector/generic/spacety.svg'
import googlePlay from '@/assets/raster/googleplay.png'
import appStore from '@/assets/raster/appstore.png'
import scrollToTop from '@/utils/scrollToTop'

export default {
  data() {
    return {
      assets: { vk, facebook, instagram, logo, spacety, googlePlay, appStore},
      contactData: null,
      appsLinks: null,
      navLinks: [
          {name: "Главная", ref: "/"},
      //    {name: "Магазин", ref: "/shop"},
          {name: "Галерея", ref: "/gallery"},
          {name: "Контакты", ref: "#contacts"}
      ],
      socLinks: null,
    }
  },
  methods: {
    enterAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })

      timeline
        .fromTo(el, 0.5, {y: '0%'}, {y: '-100%', ease: 'Circ.easeOut'})
    },
    leaveAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })

      timeline
        .fromTo(el, 0.5, {y: '-100%'}, {y: '0%', ease: 'Circ.easeIn', onComplete: done})
    },
    scrollToTop
  },
  created () {
    let obj = this
    fetch('/static/data/social-links.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.socLinks = [
        { icon: vk, title: 'VK', ref: parsedData.vk },
        { icon: facebook, title: 'Facebook', ref: parsedData.facebook },
        { icon: instagram, title: 'Instagram', ref: parsedData.instagram }
      ]
    })
    fetch('/static/data/apps-links.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.appsLinks = parsedData
    })
    fetch('/static/data/contact-data.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.contactData = parsedData
    })
  },
  mounted() {
    document.getElementById("footer_/").addEventListener("click", this.scrollToTop)
    document.getElementById("footer_/gallery").addEventListener("click", this.scrollToTop)
    document.getElementById("footer_logo").addEventListener("click", this.scrollToTop)
  }
}
