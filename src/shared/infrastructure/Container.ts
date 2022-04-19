import { Container } from 'inversify'
import 'reflect-metadata'
import getDecorators from 'inversify-inject-decorators'
import { ZonaSitecRespository } from '../../home/zonas-sitec/domain/ZonaSitecRepository'
import { AxiosZonasSitecRepository } from '../../home/zonas-sitec/infrastructure/AxiosZonasSitecRepository'
import { ListZonaSitec } from '../../home/zonas-sitec/application/listZonaSitec/ListZonaSitec'
import { ListZonasSitecs } from '../../home/zonas-sitec/application/listZonasSitecs/ListZonasSitecs'
import { StateManager } from '../../home/zonas-sitec/application/StateManager'
import { InMemoryStateManager } from '../../home/zonas-sitec/infrastructure/InMemoryStateManager'
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
