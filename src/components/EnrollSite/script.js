import close from '@/assets/vector/generic/close.svg'
import ScrollListener from '@/components/ScrollListener'

export default {
  data() {
    return {
      name: 'EnrollSite',
      scrollListener: null,
      assets: { close },
      previousOverflow: null,
      previousHash: null,
    }
  },
  created() {
    this.previousHash = window.location.hash
  },
  destroyed() {
    if (this.previousHash) {
      window.location.hash = this.previousHash
    }
    else {
      history.pushState("", document.title, window.location.pathname)
    }
  },
  mounted() {
    window.addEventListener('message', function(event) {
      window.location.hash = event.data.action
    });
  },
  methods: {
    hide() {
      this.$emit('hide')
    },
    siteBlockEnterAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      this.previousOverflow = document.body.style.overflowY
      document.body.style.overflowY = 'hidden'

      timeline
        .fromTo(`.${s.enrollBlock}`,0.5,{ autoAlpha: 0},{  autoAlpha: 1},0)
        .fromTo(`.${s.enrollSite}`,0.5,{ autoAlpha: 0},{ autoAlpha: 1},0.5)
    },
    siteBlockLeaveAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      document.body.style.overflowY = this.previousOverflow
      
      timeline
        .fromTo(`.${s.enrollBlock}`,0.5,{ autoAlpha: 1},{  autoAlpha: 0},0)
        .fromTo(`.${s.enrollSite}`,0.5,{ autoAlpha: 1, x: '0%'},{ autoAlpha: 0,  x: '100%', onComplete: done},0)
    },
  }
}
