import clock from '@/assets/vector/generic/clock.svg'
import vector from '@/assets/vector/generic/vector.svg'
import close from '@/assets/vector/generic/close.svg'
import EnrollSite from '@/components/EnrollSite'
import scrollToTop from '@/utils/scrollToTop'

export default {
  components: {
    'enroll-site-block': EnrollSite
  },
  data() {
    return {
      assets: { clock, vector, close },
      showMenu: true,
      enroll: false,
      contactData: null,
      navLinks: [
        {name: "Главная", ref: "/"},
      //  {name: "Магазин", ref: "/shop"},
        {name: "Галерея", ref: "/gallery"},
        {name: "Контакты", ref: "#contacts"}
    ],
    }
  },
  methods: {
    closeMenu() {
      this.showMenu = false
      this.$emit('closeMenu')
    },
    showSiteBlock() {
      if (window.innerWidth < 1025) {
        window.open("https://n19278.yclients.com/company:37601?o=", '_blank')
      }
      else if (!this.enroll)
        this.enroll = true
    },
    hideSiteBlock() {
      if (this.enroll)
        this.enroll = false
    },
    scrollToTop
  },
  created () {
    let obj = this
    fetch('/static/data/contact-data.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.contactData = parsedData
    })
  },
  mounted() {
    document.getElementById("collapse_/").addEventListener("click", this.scrollToTop)
    document.getElementById("collapse_/gallery").addEventListener("click", this.scrollToTop)
  } 
}
