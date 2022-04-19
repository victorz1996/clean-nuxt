<template src="./table.html"></template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  props: {
    items: Array,
    headers: Array,
  },
})
export default class Table extends Vue {
  seeDetail(item: any): void {
    this.$emit('seeItem', item)
  }
}
</script>
<style src="./table.css" scoped></style>
