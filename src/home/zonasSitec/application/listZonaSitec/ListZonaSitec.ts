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

  async listZona(zonaId:number): Promise<any> {
    const data = await this.zonaSitecRepository.getZona(zonaId)
    return data
  }
}
