import { Container } from 'inversify'
import 'reflect-metadata'
import getDecorators from 'inversify-inject-decorators'
import { ZonaSitecRespository } from '../../home/zonasSitec/domain/ZonaSitecRepository'
import { AxiosZonasSitecRepository } from '../../home/zonasSitec/infrastructure/AxiosZonasSitecRepository'
import { ListZonaSitec } from '../../home/zonasSitec/application/listZonaSitec/ListZonaSitec'
import { ListZonasSitecs } from '../../home/zonasSitec/application/listZonasSitecs/ListZonasSitecs'
import { StateManager } from '../../home/zonasSitec/application/StateManager'
import { InMemoryStateManager } from '../../home/zonasSitec/infrastructure/InMemoryStateManager'
import { SYMBOLS } from './Types'

export const container = new Container({ skipBaseClassChecks: true })

container
  .bind<ZonaSitecRespository>(SYMBOLS.ZONAS_SITEC_REPOSITORY)
  .to(AxiosZonasSitecRepository)
  .inSingletonScope()

container
  .bind<ListZonaSitec>(SYMBOLS.GET_ZONA_SITEC)
  .to(ListZonaSitec)
  .inSingletonScope()

container
  .bind<ListZonasSitecs>(SYMBOLS.GET_ALL_ZONAS_SITECS)
  .to(ListZonasSitecs)
  .inSingletonScope()

container
  .bind<StateManager>(SYMBOLS.STATE_MANAGER)
  .to(InMemoryStateManager)
  .inSingletonScope()

export const { lazyInject } = getDecorators(container)
