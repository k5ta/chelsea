import HeaderCollapse from '@/components/HeaderCollapse'
import EnrollSite from '@/components/EnrollSite'
import clock from '@/assets/vector/generic/clock.svg'
import vector from '@/assets/vector/generic/vector.svg'
import vk from '@/assets/vector/generic/vk.svg'
import facebook from '@/assets/vector/generic/facebook.svg'
import instagram from '@/assets/vector/generic/instagram.svg'
import logo from '@/assets/vector/generic/logo2.svg'
import menu from '@/assets/vector/generic/menu.svg'
import highlighting from '@/assets/vector/highlighting.svg'
import screensSchema from '@/screensSchema'
import scrollToTop from '@/utils/scrollToTop'

export default {
  components: {
    'header-collapse': HeaderCollapse,
    'enroll-site-block': EnrollSite
  },
  data() {
    return {
      enroll: false,
      screensSchema,
      assets: { clock, vector, logo, menu, highlighting },
      headerCollapseOpened: false,
      contactData: null,
      socialLinks: null,
      navLinks: [
      //  { title: "Магазин", href: "/shop"},
        { title: "Галерея", href: "/gallery"},
        { title: "Контакты", href: "#contacts"}
      ],
      previousOverflow: null
    }
  },
  computed: {
    theme() {
      const theme = this.$store.getters.theme
      return this.s[`header_theme_${theme}`]
    },
    buttonTheme() {
      const theme = this.$store.getters.theme
      return this.s[`button_${theme}`]
    }
  },
  methods: {
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
    fetch('/static/data/social-links.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.socialLinks = [
        { icon: vk, title: 'VK', href: parsedData.vk },
        { icon: facebook, title: 'Facebook', href: parsedData.facebook },
        { icon: instagram, title: 'Instagram', href: parsedData.instagram }
      ]
    })
    fetch('/static/data/contact-data.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.contactData = parsedData
    })
  },
  mounted() {
    document.getElementById("header_logo").addEventListener("click", this.scrollToTop)    
  }
}
