<template>
  <div class="mt-5">
    <v-row>
      <v-col sm="10">
        <h3>Zonas Sitecs</h3>
      </v-col>
      <v-col sm="2">
        <v-btn color="error" @click="salir">Salir</v-btn>
      </v-col>
    </v-row>
    <tabla :headers="cabeceras" :items="zonas" @seeItem="seeItem($event)" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { container } from '../src/shared/infrastructure/Container'
import Table from '../components/table/table.vue'
import { ListZonasSitecs } from '~/src/home/zonas-sitec/application/listZonasSitecs/ListZonasSitecs'
import { SYMBOLS } from '~/src/shared/infrastructure/Types'
import { ZonaSitec } from '~/src/home/zonas-sitec/domain/ZonaSitec'
@Component({
  middleware: 'auth',
  components: { tabla: Table },
})
export default class Index extends Vue {
  zonas: ZonaSitec[] = []
  $auth: any
  cabeceras: any = [
    { text: 'Id', value: 'id' },
    { text: 'Descripcion', value: 'descripcion' },
    { text: 'Estado', value: 'estado' },
    { text: 'Opciones', value: 'actions', sortable: false },
  ]

  mounted() {
    this.loadZonas()
  }

  async loadZonas(): Promise<void> {
    this.zonas = await container
      .get<ListZonasSitecs>(SYMBOLS.GET_ALL_ZONAS_SITECS)
      .listZonas()
  }

  async salir() {
    await this.$auth.logout()
    this.$router.push('/login')
  }

  seeItem(item: ZonaSitec) {
    this.$router.push(`/zona-sitec/${item.id}`)
  }
}
</script>
