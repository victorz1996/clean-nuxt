import { inject, injectable } from 'inversify-props'
import { SYMBOLS } from '../../../../shared/infrastructure/Types'
import { ZonaSitecRespository } from '../../domain/ZonaSitecRepository'

@injectable()
export class ListZonasSitecs {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject(SYMBOLS.ZONAS_SITEC_REPOSITORY)
    private readonly zonaSitecRepository: ZonaSitecRespository
  ) {}

  async listZonas(): Promise<any> {
    const data = await this.zonaSitecRepository.getAllZonas()
    return data
  }
}
