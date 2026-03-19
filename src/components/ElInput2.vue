<template>
  <el-input v-bind="mergedAttrs" v-on="listeners" :value="value" @input="$emit('input', $event)">
    <template v-for="(_, name) in $slots" v-slot:[name]>
      <slot :name="name" />
    </template>
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </el-input>
</template>

<script>
export default {
  name: 'ElInput2',
  inheritAttrs: false,
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
  }
}
</script>
