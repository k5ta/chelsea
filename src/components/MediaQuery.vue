<script>
export default {
  name: 'media-query',
  data() {
    return {
      matches: false
    }
  },
  render() {
    const {$slots, matches, component: Component} = this
    if (!matches) return null

    const content = $slots.default.length === 1 ?
      $slots.default[0] :
      <Component>{$slots.default}</Component>

    return content
  },
  props: {
    query: {required: true},
    component: {
      default: 'div'
    }
  },
  methods: {
    updateMatch(e) {
      this.matches = e.matches
    }
  },
  created() {
    this.mediaQuery = matchMedia(this.query)
    this.matches = this.mediaQuery.matches
    this.mediaQuery.addListener(this.updateMatch)
  },
  beforeDestroy() {
    this.mediaQuery.removeListener(this.updateMatch)
  }
}
</script>
