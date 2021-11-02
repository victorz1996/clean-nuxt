import { inject, injectable } from 'inversify-props'
import { SYMBOLS } from '../../../../shared/infrastructure/Types'
import { ZonaSitecRespository } from '../../domain/ZonaSitecRepository'
import { StateManager } from '../StateManager'
import { ZonaSitec } from '../../domain/ZonaSitec'

@injectable()
export class ListZonaSitec {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject(SYMBOLS.ZONAS_SITEC_REPOSITORY)
    private readonly zonaSitecRepository: ZonaSitecRespository,
    @inject(SYMBOLS.STATE_MANAGER)
    private readonly stateManager: StateManager
  ) {}

  listZona(zonaId: number): ZonaSitec {
    const zona = this.zonaSitecRepository.getZona(zonaId)
    this.stateManager.updateZona(zona)
    return this.stateManager.zona
  }
}
