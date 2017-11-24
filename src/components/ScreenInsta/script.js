import vector from '@/assets/vector/generic/vector.svg'
import smallVector from '@/assets/vector/generic/small_vector.svg'
import inst from '@/assets/vector/generic/inst.svg'
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
      socLinks: null,
      discount: null,
      assets: { vector, smallVector, inst },
    }
  },
  methods: {
    goInsta() {
      window.open(this.socLinks.instagram, '_blank')
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
        .add(animation.enter(this))
    },
    leaveAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline
        .fromTo(document.getElementsByTagName('header'), 0.5, { autoAlpha: 1 }, { autoAlpha: 0 }, 0)
        .fromTo(`.${s.saleInfo}`,0.5,{  autoAlpha: 1,  y: 0},{  autoAlpha: 0,  ease: Expo.EaseOut,  y: -200},0)
        .fromTo(`.${s.followUs}`,0.5,{  autoAlpha: 1,  y: 0},{  autoAlpha: 0,  ease: Expo.EaseOut,  y: 200},0)
        .fromTo(this.$refs.ph1,0.5,{  autoAlpha: 1},{  autoAlpha: 0,  ease: Expo.EaseOut },0.1 + 0.5*Math.random())
        .fromTo(this.$refs.ph2,0.5,{  autoAlpha: 1},{  autoAlpha: 0,  ease: Expo.EaseOut },0.1 + 0.5*Math.random())
        .fromTo(this.$refs.ph3,0.5,{  autoAlpha: 1},{  autoAlpha: 0,  ease: Expo.EaseOut },0.1 + 0.5*Math.random())
        .fromTo(this.$refs.ph4,0.5,{  autoAlpha: 1},{  autoAlpha: 0,  ease: Expo.EaseOut },0.1 + 0.5*Math.random())
        .fromTo(this.$refs.ph5,0.5,{  autoAlpha: 1},{  autoAlpha: 0,  ease: Expo.EaseOut },0.1 + 0.5*Math.random())
        .fromTo(this.$refs.ph6,0.5,{  autoAlpha: 1},{  autoAlpha: 0,  ease: Expo.EaseOut },0.1 + 0.5*Math.random())
        .fromTo(this.$refs.ph7,0.5,{  autoAlpha: 1},{  autoAlpha: 0,  ease: Expo.EaseOut },0.1 + 0.5*Math.random())
        .set(el, {position: 'absolute', top: 0, left: 0})
        .fromTo(el, 1, {x: '0%'}, {x: '-100%', onComplete: done})
        .set(el, {clearProps: 'all'})
    },
    appearAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline.add(animation.enter(this), 0.5)
    }
  },
  created() {
    let obj = this
    fetch('/static/data/social-links.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.socLinks = parsedData
    })
    fetch('/static/data/discount.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.discount = parsedData
    })
  }
}
