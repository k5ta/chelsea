<script>
import screensSchema from '@/screensSchema'
import debounce from 'lodash/debounce'

export default {
  data() {
    return {
      yStart: 0,
      canMove: true
    }
  },
  render() {
    return <div>{this.$slots.default}</div>
  },
  props: [ 'scope' ],
  methods: {
    onScroll: function(event) {
      if (this.canMove) {
        this.canMove = false
        let obj = this
        setTimeout(function() {
          obj.canMove = true
        }, 2000)
        event.preventDefault()
        const { scope, $router, $route } = this
        const currentIndex = screensSchema[scope].fullPaths.indexOf($route.path)
        const nextIndex = event.deltaY > 0 ? currentIndex + 1 : currentIndex - 1
        const nextPath = window.location.hash 
          ? $route.path
          : screensSchema[scope].fullPaths[nextIndex]
        if (nextPath)
          $router.push(nextPath)
      }
    },
    keyDown: function(event) {
      if (this.canMove) {
        this.canMove = false
        let obj = this
        setTimeout(function() {
          obj.canMove = true
        }, 2000)
        event.preventDefault()
        const { scope, $router, $route } = this
        const currentIndex = screensSchema[scope].fullPaths.indexOf($route.path)
        let nextIndex
        if (event.keyCode == '38')
          nextIndex = currentIndex - 1
        if (event.keyCode == '40')
          nextIndex = currentIndex + 1
        const nextPath = window.location.hash 
          ? $route.path
          : screensSchema[scope].fullPaths[nextIndex]
        if (nextPath)
          $router.push(nextPath)
      }
    },
    touchStart: function(event) {
      this.yStart = event.touches[0].clientY
    },
    touchMove: function(event) {
      if (this.canMove) {
        if (event.changedTouches[0].clientY == this.yStart)
          return
        this.canMove = false
        let obj = this
        setTimeout(function() {
          obj.canMove = true
        }, 2000)
        const { scope, $router, $route } = this
        const currentIndex = screensSchema[scope].fullPaths.indexOf($route.path)
        const nextIndex = event.changedTouches[0].clientY - this.yStart < 0 ? currentIndex + 1 : currentIndex - 1
        const nextPath = window.location.hash 
          ? $route.path
          : screensSchema[scope].fullPaths[nextIndex]
        if (nextPath)
          $router.push(nextPath)
      }
    },
  },
  mounted () {
    window.addEventListener('touchstart', this.touchStart, true)
    window.addEventListener('touchend', this.touchMove, true)
    window.addEventListener('wheel', this.onScroll, true)
    window.addEventListener('keydown', this.keyDown, true)
  },
  beforeDestroy() {
    window.removeEventListener('touchstart', this.touchStart, true)
    window.removeEventListener('touchend', this.touchMove, true)
    window.removeEventListener('wheel', this.onScroll, true)
    window.removeEventListener('keydown', this.keyDown, true)
  }
}

</script>