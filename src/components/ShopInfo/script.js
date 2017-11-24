import close from '@/assets/vector/generic/close.svg'
import address from "@/assets/vector/generic/address.svg"
import vector from "@/assets/vector/generic/vector.svg"

export default {
  data() {
    return {
      name: 'ShopInfo',
      assets: { close, address, vector },
      mapLink: null
    }
  },
  created () {
    let obj = this
    fetch('/static/data/contact-data.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.mapLink = parsedData.map
    })
  },
  methods: {
    hide() {
      this.$emit('hide')
    },
    showMap() {
      window.open(this.mapLink, '_blank')
    },
    infoFormEnterAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline
        .fromTo(el,0.5,{ autoAlpha: 0},{  autoAlpha: 1},0)
        .fromTo(`.${s.infoForm}`,0.5,{ autoAlpha: 0, scale: 0 },{  autoAlpha: 1, scale: 1 },0)
    },
    infoFormLeaveAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline
        .fromTo(`.${s.infoForm}`,0.5,{ autoAlpha: 1, scale: 1 },{  autoAlpha: 0, scale: 0 },0)
        .fromTo(el,0.5,{ autoAlpha: 1},{  autoAlpha: 0, onComplete: done},0)
    },
  }
}