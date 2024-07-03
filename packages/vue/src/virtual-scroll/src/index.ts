import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'VirtualScroll',
  props: {
    ...$props
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
