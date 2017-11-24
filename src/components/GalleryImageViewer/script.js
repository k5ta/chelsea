import close from '@/assets/vector/generic/close.svg'
import arrow from '@/assets/vector/generic/arrow.svg'

export default {
  data() {
    return {
      name: 'ShopInfo',
      assets: { close, arrow },
    }
  },
  methods: {
    hide() {
      this.$emit('hide')
    },
    prevPhoto() {
      this.$emit('prev')
    },
    nextPhoto() {
      this.$emit('next')
    },
    imageViewerEnterAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline
        .fromTo(el,0.25,{ autoAlpha: 0},{  autoAlpha: 1},0)
        .fromTo(`.${s.imageViewer}`,0.5,{ scale: 0 },{ scale: 1 },0)
    },
    imageViewerLeaveAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline
        .fromTo(`.${s.imageViewer}`,0.5,{ scale: 1 },{ scale: 0 },0)
        .fromTo(el,0.5,{ autoAlpha: 1},{  autoAlpha: 0, onComplete: done},0)
    },
  }
}