import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'

// import MobileTemplate from './mobile.vue'
// 基本配置和属性
const $constants = {}
// template是对于不同模板的传入进行选择模式
const template = (mode) => {
  return (process.env.TINY_MODE || mode) === 'mobile-first' ? null : PCTemplate
}

export default defineComponent({
  name: $prefix + 'VirtualScroll',
  // 定义虚拟滚动的外部接口
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: String
  },
  // 初始化组件，传入props和context以及模板内容，props传给pc.vue
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
