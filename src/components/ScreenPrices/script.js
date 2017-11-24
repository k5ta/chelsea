import phone from '@/assets/vector/phone.svg'
import hair from '@/assets/vector/hair.svg'
import googlePlay from '@/assets/raster/googleplay.png'
import appStore from '@/assets/raster/appstore.png'
import animation from './animation'

export default {
  data() {
    return {
      name: 'ScreenPrices',
      assets: { phone, googlePlay, appStore, hair },
      services: null,
      complexServices: null,
      appsInfo: null,
      appsLinks: null
    }
  },
  methods: {
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
        .fromTo(`.${s.prices}`, 0.5, { autoAlpha: 1, x: 0 }, { autoAlpha: 0, ease: Circ.easeOut, x: 200 }, 0.5)
        .fromTo(`.${s.phoneSvg}`, 0.5, { autoAlpha: 1, x: 0 }, { autoAlpha: 0, ease: Circ.easeOut, x: 200}, 0.5)
        .fromTo(`.${s.app}`, 0.5, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, ease: Circ.easeOut, y: 300, }, 0)
        .set(el, {position: 'absolute', top: 0, left: 0})
        .fromTo(el, 0.5, {x: '0%'}, {x: '-100%', onComplete: done})
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
    fetch('/static/data/services-and-prices.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.services = parsedData
    })
    fetch('/static/data/complex-services-and-prices.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.complexServices = parsedData
    })
    fetch('/static/data/apps-info.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.appsInfo = parsedData
    })
    fetch('/static/data/apps-links.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.appsLinks = parsedData
    })
  }
}
