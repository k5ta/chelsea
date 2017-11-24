import vector from '@/assets/vector/generic/vector.svg'
import animation from './animation'
import EnrollSite from '@/components/EnrollSite'

export default {
  components: {
    'enroll-site-block': EnrollSite
  },
  data() {
    return {
      enroll: false,
      name: 'ScreenAbout',
      about: null,
      video: null,
      socLinks: null,
      assets: { vector },
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
        .set(el, {position: 'absolute', height: '100%', top: 0, left: 0})
        .fromTo(el, 1.5, {x: '100%'}, {x: '0%'})
        .set(el, {clearProps: 'all'})
        .add(animation.enter(s))
    },
    leaveAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline
        .fromTo(document.getElementsByTagName('header'), 0.5, { autoAlpha: 1 }, { autoAlpha: 0 }, 0)
        .fromTo(`.${s.info}`,0.5,{  autoAlpha: 1,  x: 0},{  autoAlpha: 0,  ease: Expo.EaseOut,  x: 200},0)
        .fromTo(`.${s.vid}`,0.5,{  autoAlpha: 1,  y: 0},{  autoAlpha: 0,  ease: Expo.EaseOut,  y: 200},0)
        .fromTo(`.${s.section2} .${s.buttonGetBarbered}`,0.5,{  autoAlpha: 1,  y: 0},{  autoAlpha: 0,  ease: Expo.EaseOut,  y: -200},0)
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
    fetch('/static/data/about.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.about = parsedData
    })
    fetch('/static/data/video.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.video = parsedData
    })
  }
}
