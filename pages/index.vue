<template>
  <div class="mt-5">
    <h3>Zonas Sitecs</h3>
    <v-data-table
      :headers="headers"
      :items="zonas"
      :items-per-page="10"
      class="elevation-1 mt-5"
    >
      <template #[`item.actions`]="{ item }">
        <v-icon @click="seeItem(item)"> mdi-eye </v-icon>
      </template></v-data-table
    >
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { container } from '../src/shared/infrastructure/Container'
import { ListZonasSitecs } from '~/src/home/zonasSitec/application/listZonasSitecs/ListZonasSitecs'
import { SYMBOLS } from '~/src/shared/infrastructure/Types'
import { ZonaSitec } from '~/src/home/zonasSitec/domain/ZonaSitec'
@Component({})
export default class Index extends Vue {
  zonas: ZonaSitec[] = []
  headers: any = [
    { text: 'Id', value: 'id' },
    { text: 'Descripcion', value: 'descripcion' },
    { text: 'Estado', value: 'estado' },
    { text: 'Opciones', value: 'actions', sortable: false },
  ]

  mounted() {
    this.loadZonas()
  }

  async loadZonas() {
    this.zonas = await container
      .get<ListZonasSitecs>(SYMBOLS.GET_ALL_ZONAS_SITECS)
      .listZonas()
  }

  seeItem(item: ZonaSitec) {
    this.$router.push(`/zonaSitec/${item.id}`)
  }
}
</script>
