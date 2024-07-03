<template>
  <div>virtual-scroll</div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/user-link/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [...props],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
