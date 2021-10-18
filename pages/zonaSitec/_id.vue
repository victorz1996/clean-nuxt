<template>
  <div>{{ $route.params.id }}</div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { container } from '@/src/shared/infrastructure/Container'
import { SYMBOLS } from '~/src/shared/infrastructure/Types'
import { ZonaSitec } from '~/src/home/zonasSitec/domain/ZonaSitec'
import { ListZonaSitec } from '~/src/home/zonasSitec/application/listZonaSitec/ListZonaSitec'
@Component({})
export default class Index extends Vue {
  zona: ZonaSitec = {}

  mounted() {
    this.loadZona()
  }

  async loadZona() {
    this.zona = await container.get<ListZonaSitec>(SYMBOLS.GET_ZONA_SITEC)
  }
}
</script>
