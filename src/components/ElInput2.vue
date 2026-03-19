<template>
  <el-input v-bind="inputProps" v-on="$listeners" :value="value" @input="$emit('input', $event)">
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
      default: 4000
    }
  },
  computed: {
    effectiveMaxlength() {
      // null/0/"" disables maxlength; anything else (including default 4000) is used as-is
      if (this.maxlength === null || this.maxlength === 0 || this.maxlength === '') {
        return undefined
      }
      return this.maxlength
    },
    inputProps() {
      return {
        ...this.$attrs,
        maxlength: this.effectiveMaxlength
      }
    }
  }
}
</script>
