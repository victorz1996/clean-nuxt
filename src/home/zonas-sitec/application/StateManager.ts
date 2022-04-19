import { ZonaSitec } from '../domain/ZonaSitec'
export interface StateManager {
  zonas: ZonaSitec[]
  zona: ZonaSitec
  updateZonas(zonas: ZonaSitec[]): void
  updateZona(zona: ZonaSitec): void
}
