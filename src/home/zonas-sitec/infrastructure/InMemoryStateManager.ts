import { injectable } from 'inversify-props'
import { StateManager } from '../application/StateManager'
import { ZonaSitec } from '../domain/ZonaSitec'

@injectable()
export class InMemoryStateManager implements StateManager {
  zonas: ZonaSitec[] = []
  zona: ZonaSitec = {}

  updateZonas(zonas: ZonaSitec[]): void {
    this.zonas = zonas
  }

  updateZona(zona: ZonaSitec): void {
    this.zona = zona
  }
}
