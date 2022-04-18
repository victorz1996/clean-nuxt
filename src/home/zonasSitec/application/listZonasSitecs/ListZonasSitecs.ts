import { inject, injectable } from 'inversify-props'
import { SYMBOLS } from '../../../../shared/infrastructure/Types'
import { ZonaSitecRespository } from '../../domain/ZonaSitecRepository'
import { StateManager } from '../StateManager'
import { ZonaSitec } from '../../domain/ZonaSitec'

@injectable()
export class ListZonasSitecs {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject(SYMBOLS.ZONAS_SITEC_REPOSITORY)
    private readonly zonaSitecRepository: ZonaSitecRespository,
    @inject(SYMBOLS.STATE_MANAGER) private readonly stateManager: StateManager
  ) {}

  async listZonas(): Promise<ZonaSitec[]> {
    const zonas = await this.zonaSitecRepository.getAllZonas()
    this.stateManager.updateZonas(zonas)
    return this.stateManager.zonas
  }
}
