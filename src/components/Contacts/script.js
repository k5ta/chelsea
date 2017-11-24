import mail from "@/assets/vector/generic/mail.svg"
import clock from "@/assets/vector/generic/clock.svg"
import address from "@/assets/vector/generic/address.svg"
import vector from "@/assets/vector/generic/vector.svg"
import close from '@/assets/vector/generic/close.svg'

export default {
  data() {
    return {
      assets: { mail, clock, address, vector, close},
      contactData: null
    }
  },
  methods: {
    showMap() {
      window.open(this.contactData.map, '_blank')
    },
    goBack() {
      this.$router.push(this.$route.path)
    },
    enterAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s
      
      timeline
        .fromTo(el, 0.5, { autoAlpha: 0}, { autoAlpha: 1}, 0)
        .fromTo(`.${s.content}`, 0.5, { autoAlpha: 0, x: '-40%'}, { autoAlpha: 1, x: '0%'}, 0)
    },
    leaveAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline
        .fromTo(el, 0.5, { autoAlpha: 1}, { autoAlpha: 0}, 0)
        .fromTo(`.${s.content}`, 0.5, { autoAlpha: 1, x: '0%'}, { autoAlpha: 0, x: '-40%', onComplete: done}, 0)
    },
  },
  created() {
    let obj = this
    fetch('/static/data/contact-data.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.contactData = parsedData
    })
  }
}