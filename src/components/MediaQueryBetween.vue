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
    nameMin: {required: true},
    nameMax: {required: true},
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
      const constraintMin = breakpoints.constraints[breakpoints.indices[nameMin]]
      const constraintMax = breakpoints.constraints[breakpoints.indices[nameMax]]
      return `(min-${dimension}: ${constraintMin}) and (max-${dimension}: ${parseInt(constraintMax, 10) - 1}px)`
    }
  }
}
</script>
