import vector from '@/assets/vector/generic/vector.svg'
import address from "@/assets/vector/generic/address.svg"
import appStore from '@/assets/raster/appstore.png'
import googlePlay from '@/assets/raster/googleplay.png'
import animation from './animation'
import smoke_webm from '@/assets/letter-smoke.webm'
import smoke_mp4 from '@/assets/letter-smoke.mp4'
import barber from '@/assets/raster/first-page-man.png'
import EnrollSite from '@/components/EnrollSite'

export default {
  components: {
    'enroll-site-block': EnrollSite
  },
  data() {
    return {
      enroll: false,
      name: 'ScreenWelcome',
      assets: { vector, address, appStore, googlePlay, smoke_webm, smoke_mp4, barber },
      appsLinks: null,
      contactData: null,
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
    enterAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline
        .set(el, {position: 'absolute', top: 0, left: 0})
        .fromTo(el, 1.5, {x: '100%'}, {x: '0%'})
        .set(el, {clearProps: 'all'})        
        .add(animation.enter(s))
    },
    leaveAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline
        .fromTo(document.getElementsByTagName('header'), 0.5, { autoAlpha: 1 }, { autoAlpha: 0 }, 0)
        .fromTo(`.${s.content}`, 0.5, { autoAlpha: 1,  y: 0 }, { autoAlpha: 0, y: -150 }, 0)
        .fromTo(`.${s.button}`, 0.5, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: 50 }, 0)
        .fromTo(`.${s.apps}`, 0.5, { autoAlpha: 1}, { autoAlpha: 0, ease: Expo.easeOut}, 0)
        .set(el, {position: 'absolute', top: 0, left: 0})
        .fromTo(el, 1, {x: '0%'}, {x: '-100%', onComplete: done})
        .set(el, {clearProps: 'all'})
    },
    appearAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline.add(animation.enter(s), 0.5)
    }
  },
  created() {
    let obj = this
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
    if (document.documentMode || /Edge/.test(navigator.userAgent))
      document.getElementById("barberImg").style.display = 'none'
  }
}
