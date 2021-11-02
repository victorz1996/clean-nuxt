import { instance, mock, when } from 'ts-mockito'
import { ListZonaSitec } from '../ListZonaSitec'
import { ZonaSitecRespository } from '../../../domain/ZonaSitecRepository'
import { StateManager } from '../../StateManager'

describe('ListZonaSitec', () => {
  it('comprueba si se obtiene una zonaSitec por id', () => {
    const { stateManager, listZonaSitec } = setup()
    const zonaMock = {
      createdBy: 'string',
      createdDate: 'string',
      lastModifiedBy: 'string',
      lastModifiedDate: 'string',
      id: 1234,
      descripcion: 'string',
      estado: 'string',
      tieneStore: 'string',
      usuariosAsignados: 'string',
      aprobacion: 'string',
      aprobacion1: 'string',
    }
    when(stateManager.zona).thenReturn(zonaMock)
    const zona = listZonaSitec.listZona(1234)
    expect(zona).toEqual(zonaMock)
  })
})

function setup() {
  const zonaSitecRespository = mock<ZonaSitecRespository>()
  const stateManager = mock<StateManager>()
  return {
    stateManager,
    listZonaSitec: new ListZonaSitec(
      instance(zonaSitecRespository),
      instance(stateManager)
    ),
  }
}
