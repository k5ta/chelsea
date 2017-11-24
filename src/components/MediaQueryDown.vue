<script>
import MediaQuery from '@/components/MediaQuery'
import mediaBreakpoints from '@/data/media-breakpoints'

export default {
  render() {
    const {$slots, query, component} = this
    const data = {props: {query, component}}
    return <MediaQuery {...data}>{$slots.default}</MediaQuery>
  },
  props: {
    name: {required: true},
    dimension: {
      type: String,
      default: 'width'
    },
    component: null
  },
  computed: {
    query() {
      const {dimension, name} = this
      const breakpoints = mediaBreakpoints[dimension]
      const constraintNext = breakpoints.constraints[breakpoints.indices[name] + 1]
      return `(max-${dimension}: ${parseInt(constraintNext, 10) - 1}px)`
    }
  }
}
</script>
