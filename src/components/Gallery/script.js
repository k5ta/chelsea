import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contacts from '@/components/Contacts'
import animation from './animation'
import GalleryImageViewer from '@/components/GalleryImageViewer'

export default {
  data() {
    return {
      name: 'Gallery',
      imageView: false,
      currentView: -1,
      photosNumber: null,
      photosPerPage: 28,
      xStart: 0
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-contacts': Contacts,
    'image-viewer': GalleryImageViewer
  },
  computed: {
    contacts() {
      return this.$route.hash === '#contacts'
    },
    pages() {
      let photoArray = []
      for (let i = 1; i <= this.photosNumber; i++)
        photoArray.push(`/static/raster/gallery/photo${i}.png`)
      let pages = Math.ceil(this.photosNumber / this.photosPerPage)
      let pagesArray = []
      let end = 0
      for (let i = 0; i < pages; i++) {
        end = (i + 1) * this.photosPerPage
        if (end > photoArray.length)
          end = photoArray.length
        pagesArray.push(photoArray.slice(i * this.photosPerPage, end))
      }
      return pagesArray
    },
  },
  methods: {
    enterAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      this.previousOverflowY = document.body.style.overflowY
      timeline
        .set(document.body, {overflowY: 'auto'})
        .add(animation.enter(s))
    },
    appearAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      this.previousOverflowY = document.body.style.overflowY
      timeline
        .set(document.body, {overflowY: 'auto'})
        .add(animation.enter(s))
    },
    showImageView(event) {
      var photoRegExp = event.target.style.backgroundImage.match( /photo(\d+)/i )
      if (photoRegExp && !this.imageView)
        this.imageView = true
      else return
      const component = this
      this.currentView = photoRegExp[1]
      const url = `/static/raster/gallery/photo${this.currentView}.png`
      window.setTimeout(function() {
        document.getElementById("for-image").style.backgroundImage = `url(${url})`
      }, 100)
    },
    closeImageView() {
      if (this.imageView)
        this.imageView = false
      this.currentView = -1;
    },
    prevImageView() {
      if (this.imageView) {
        this.currentView--;
        if (this.currentView <= 0)
          this.currentView = this.photosNumber
        const url = `/static/raster/gallery/photo${this.currentView}.png`
        document.getElementById("for-image").style.backgroundImage = `url(${url})`
      }
    },
    nextImageView() {
      if (this.imageView) {
        this.currentView++;
        if (this.currentView > this.photosNumber)
          this.currentView = 1
        const url = `/static/raster/gallery/photo${this.currentView}.png`
        document.getElementById("for-image").style.backgroundImage = `url(${url})`
      }
    },
    keyDown(event) {
      event.preventDefault()
      if (event.keyCode == '37')
        this.prevImageView()
      if (event.keyCode == '39')
        this.nextImageView()
    },
    touchStart(event) {
      this.xStart = event.touches[0].clientX
    },
    touchMove(event) {
      if (event.changedTouches[0].clientX == this.xStart)
        return
      event.changedTouches[0].clientX - this.xStart < 0
        ? this.nextImageView()
        : this.prevImageView()
    }
  },
  created() {
    let obj = this
    fetch('/static/data/photos-number.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.photosNumber = parsedData
    })
  },
  mounted() {
    const elements = document.getElementsByTagName("img")
    const component = this
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", function() {
        component.showImageView(this, i)
      })
    }
    window.addEventListener('keydown', this.keyDown, true)
    window.addEventListener('touchstart', this.touchStart, true)
    window.addEventListener('touchend', this.touchMove, true)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyDown, true)
    window.removeEventListener('touchstart', this.touchStart, true)
    window.removeEventListener('touchend', this.touchMove, true)
    if (this.previousOverflowY == 'hidden')
      document.body.style.overflowY = 'hidden'
  }
}