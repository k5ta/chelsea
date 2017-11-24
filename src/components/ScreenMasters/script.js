import vk from '@/assets/vector/generic/vk.svg'
import instagram from '@/assets/vector/generic/instagram.svg'
import facebook from '@/assets/vector/generic/facebook.svg'
import arrow from '@/assets/vector/generic/arrow.svg'
import vector from '@/assets/vector/generic/vector.svg'
import animation from './animation'
import smoke_webm from '@/assets/letter-smoke.webm'
import smoke_mp4 from '@/assets/letter-smoke.mp4'
import EnrollSite from '@/components/EnrollSite'

export default {
  components: {
    'enroll-site-block': EnrollSite
  },
  data() {
    return {
      showFooter: false,
      assets: { arrow, vector, vk, instagram, facebook, smoke_webm, smoke_mp4 },
      name: 'ScreenMasters',
      masters: [],
      page: 1,
      leftTransition: false,
      enroll: false,
      previous: null
    }
  },
  methods: {
    showSiteBlock(enrollSite) {
      if (window.innerWidth < 1025) {
        window.open(enrollSite, '_blank')
      }
      else if (!this.enroll) {
        this.enroll = true
        let obj = this
        setTimeout(function() {
          obj.previous = document.getElementsByTagName('object')[0].data
          document.getElementsByTagName('object')[0].data = enrollSite
        }, 100);
      }
    },
    hideSiteBlock() {
      if (this.enroll)
        this.enroll = false 
    }, 
    barbersEnterAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      this.leftTransition
        ? timeline.fromTo(`.${s.column}`, 0.5, {autoAlpha: 0, x: '-25%'}, {autoAlpha: 1, x: '0%', ease: Circ.easeOut}, 0)
        : timeline.fromTo(`.${s.column}`, 0.5, {autoAlpha: 0, x: '25%'}, {autoAlpha: 1, x: '0%', ease: Circ.easeOut}, 0)
    },
    barbersLeaveAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      this.leftTransition
        ? timeline.fromTo(`.${s.column}`, 0.5, {autoAlpha: 1, x: '0%'}, {autoAlpha: 0, x: '25%', ease: Circ.easeOut, onComplete: done}, 0)
        : timeline.fromTo(`.${s.column}`, 0.5, {autoAlpha: 1, x: '0%'}, {autoAlpha: 0, x: '-25%', ease: Circ.easeOut, onComplete: done}, 0)
    },
    enterAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline
        .set(el, {position: 'absolute', width: '100%', top: 0, left: 0})
        .fromTo(el, 1.5, {x: '100%'}, {x: '0%'})
        .set(el, {clearProps: 'all'})  
        .add(animation.enter(s))
      },
    leaveAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline
        .fromTo(document.getElementsByTagName('header'), 0.5, { autoAlpha: 1 }, { autoAlpha: 0 }, 0)
        .fromTo(`.${s.row}`,0.5,{ autoAlpha: 1,  y: 0},{ autoAlpha: 0, ease: Expo.easeOut,  y: -100},0)
        .set(el, {position: 'absolute', top: 0, left: 0})
        .fromTo(el, 1, {x: '0%'}, {x: '-100%', onComplete: done})
        .set(el, {clearProps: 'all'})
    },
    appearAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline.add(animation.enter(s), 0.5)
    },
    prevPage() {
      this.page--
      if (this.page < 1) {
        this.page = this.itemsPerRow === 1 ? this.masters.length
          : Math.trunc(this.masters.length / this.itemsPerRow) + 1
      }
      this.leftTransition = true
    },
    nextPage() {
      this.page++
      if (this.page > ( this.itemsPerRow === 1 ? this.masters.length
           : Math.trunc(this.masters.length / this.itemsPerRow) + 1)) {
        this.page = 1
      }
      this.leftTransition = false
    }
  },
  props: {
    itemsPerRow: { required: true }
  },
  computed: {
    begin() {
      const {page, itemsPerRow} = this
      const begin = (page - 1) * itemsPerRow
      return begin
    },
    end() {
      const {page, itemsPerRow, masters} = this
      let end = page * itemsPerRow
      if (end > masters.length) end = masters.length 
      return end
    },
    currentRow() {
      return this.masters.slice(this.begin, this.end)
    },
    moreBarbers() {
      return this.masters.length > this.itemsPerRow
    }
  },
  created() {
    let obj = this
    fetch('/static/data/masters.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.masters = parsedData
    })
  },
  mounted() {
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {    
      setTimeout(function() {
        let obj = document.getElementsByTagName("video")
        for (let i = 0; i < obj.length; ++i) {
          obj[i].style.display = 'none'
        }
        obj = document.getElementsByName("barber")
        for (let i = 0; i < obj.length; ++i) {
          obj[i].style.background = 'transparent'
        }
        obj = document.getElementsByName("photo")
        for (let i = 0; i < obj.length; ++i) {
          obj[i].style.background = 'transparent'
        }
      }, 500)
    }
  }
}
