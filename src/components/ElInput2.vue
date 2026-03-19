<template>
  <element-input ref="input" v-bind="mergedAttrs" v-on="listeners" :value="value" @input="$emit('input', $event)">
    <template v-for="(_, name) in $slots" v-slot:[name]>
      <slot :name="name" />
    </template>
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </element-input>
</template>

<script>
import { Input as ElementInput } from 'element-ui'

export default {
  name: 'ElInput2',
  inheritAttrs: false,
  components: {
    ElementInput
  },
  props: {
    value: {},
    maxlength: {
      type: [Number, String],
      default: 4000
    }
  },
  computed: {
    mergedAttrs() {
      return {
        ...this.$attrs,
        maxlength: this.maxlength == null ? undefined : this.maxlength
      }
    },
    listeners() {
      const { input, ...rest } = this.$listeners
      return rest
    }
  },
  methods: {
    focus() {
      return this.$refs.input && this.$refs.input.focus()
    },
    blur() {
      return this.$refs.input && this.$refs.input.blur()
    },
    select() {
      return this.$refs.input && this.$refs.input.select()
    },
    clear() {
      return this.$refs.input && this.$refs.input.clear()
    }
  }
}
</script>
