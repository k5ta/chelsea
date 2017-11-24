import scrollSingle from '@/assets/vector/generic/scroll_single.svg'
import scrollPoint from '@/assets/vector/generic/scroll_point.svg'
import screensSchema from '@/screensSchema'
import prefixZero from '@/utils/prefixZeroIfOneSign'

export default {
  data() {
    return {
      assets: { scrollSingle, scrollPoint },
      screensSchema
    }
  },
  methods: {
    prefixZero
  },
  props: [ 'scope' ],
  computed: {
    theme() {
      const theme = this.$store.getters.theme
      return this.s[`navigation_${theme}`]
    }
  }
}
