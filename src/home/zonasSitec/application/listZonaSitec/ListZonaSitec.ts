import { inject, injectable } from 'inversify-props'
import { SYMBOLS } from '../../../../shared/infrastructure/Types'
import { ZonaSitecRespository } from '../../domain/ZonaSitecRepository'

@injectable()
export class ListZonaSitec {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject(SYMBOLS.ZONAS_SITEC_REPOSITORY)
    private readonly zonaSitecRepository: ZonaSitecRespository
  ) {}

  listZona(zonaId: number): Promise<any> {
    return this.zonaSitecRepository.getZona(zonaId)
  }
}
