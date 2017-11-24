import video from '@/assets/background-video_.mp4'
import videoWebm from '@/assets/background-video_.webm'
import smallVector from '@/assets/vector/generic/small_vector.svg'
import vector from '@/assets/vector/generic/vector.svg'
import arrow from '@/assets/vector/generic/arrow.svg'
import abonement5 from '@/assets/raster/abonement-5.png'
import abonement10 from '@/assets/raster/abonement-10.png'
import sertificate from '@/assets/raster/sertificate.png'
import shop from '@/assets/raster/shop.png'
import animation from './animation'
import Ordering from '@/components/Ordering'
import ShopInfo from '@/components/ShopInfo'

export default {
  components: {
    'ordering-block': Ordering,
    'shop-info-block': ShopInfo
  },
  data() {
    return {
      name: 'ScreenAbonements',
      assets: { 
        video,
        videoWebm,
        smallVector,
        vector,
        arrow,
        abonement5,
        abonement10,
        sertificate,
        shop
      },
      ordering: false,
      shopInfo: false,
      abonements: null
    }
  },
  created() {
    let obj = this
    fetch('/static/data/abonements.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.abonements = parsedData
    })
  },
  methods: {
    prevAbonement() {
      let currentIndex = Math.round(document.getElementById("sectionRow").scrollLeft / this.$el.clientWidth) - 1
      if (currentIndex < 0)
        currentIndex = 2
      document.getElementById("sectionRow").scrollLeft = currentIndex * this.$el.clientWidth
      this.leftTransition = true
    },
    nextAbonement() {
      let currentIndex = Math.round(document.getElementById("sectionRow").scrollLeft / this.$el.clientWidth) + 1
      if (currentIndex > 2)
        currentIndex = 0
      document.getElementById("sectionRow").scrollLeft = currentIndex * this.$el.clientWidth
      this.leftTransition = false
    },
    enterAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })

      timeline
        .set(el, {position: 'absolute', top: 0, left: 0})
        .fromTo(el, 1.5, {x: '100%'}, {x: '0%'})
        .set(el, {clearProps: 'all'}) 
        .add(animation.enter(this))
    },
    leaveAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })

      timeline
        .fromTo(document.getElementsByTagName('header'), 0.5, { autoAlpha: 1 }, { autoAlpha: 0 }, 0)
        .fromTo(this.$refs.first, 0.5, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, ease: Circ.easeIn, y: -100 }, 0)
        .fromTo(this.$refs.second, 0.5, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, ease: Circ.easeIn, y: -100 }, 0.25)
        .fromTo(this.$refs.third, 0.5, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, ease: Circ.easeIn, y: -100 }, 0.5)
        .fromTo(`.${this.s.shop}`, 1, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, ease: Circ.easeIn, y: 100 }, 0)
        .set(el, {position: 'absolute', width: '100%', top: 0, left: 0})
        .fromTo(el, 0.5, {x: '0%'}, {x: '-100%', onComplete: done})
        .set(el, {clearProps: 'all'})
    },
    appearAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })

      timeline.add(animation.enter(this), 0.5)
    },
    orderingFormOpen() {
      if (!this.ordering) {
        this.ordering = true;
      }
    },
    orderingFormClose() {
      if (this.ordering) {
        this.ordering = false;
      }
    },
    shopInfoOpen() {
      if (!this.shopInfo) {
        this.shopInfo = true;
      }
    },
    shopInfoClose() {
      if (this.shopInfo) {
        this.shopInfo = false;
      }
    }
  }
}
