<template>
  <div class="mt-5">
    <h4>Detalle zona sitec</h4>
    <v-row v-if="zona" class="mt-5">
      <v-col sm="6">
        <v-text-field
          v-model="zona.id"
          label="Id"
          disabled
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          v-model="zona.descripcion"
          label="Descripcion"
          disabled
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col sm="6">
        <v-text-field
          v-model="zona.estado"
          label="Estado"
          disabled
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          v-model="zona.usuariosAsignados"
          label="Usuario"
          disabled
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
    <div class="d-flex justify-content-end mt-5">
      <v-btn color="error" @click="salir">Volver</v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { container } from '@/src/shared/infrastructure/Container'
import { SYMBOLS } from '~/src/shared/infrastructure/Types'
import { ZonaSitec } from '~/src/home/zonas-sitec/domain/ZonaSitec'
import { ListZonaSitec } from '~/src/home/zonas-sitec/application/listZonaSitec/ListZonaSitec'
@Component({
  middleware: 'auth',
})
export default class Index extends Vue {
  zona: ZonaSitec = {}

  mounted() {
    this.loadZona()
  }

  getIdParam(): number {
    return parseInt(this.$route.params.id)
  }

  async loadZona() {
    this.zona = await container
      .get<ListZonaSitec>(SYMBOLS.GET_ZONA_SITEC)
      .listZona(this.getIdParam())
  }

  salir() {
    this.$router.push('/')
  }
}
</script>
