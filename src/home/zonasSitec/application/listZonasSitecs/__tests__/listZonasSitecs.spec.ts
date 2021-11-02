import { instance, mock, when } from 'ts-mockito'
import { ListZonasSitecs } from '../ListZonasSitecs'
import { ZonaSitecRespository } from '../../../domain/ZonaSitecRepository'
import { StateManager } from '../../StateManager'

describe('ListZonasSitecs', () => {
  it('comprueba si se obtienen todas las zonas sitecs', () => {
    const { stateManager, listZonasSitecs } = setup()
    const zonasMock = [
      {
        createdBy: 'string1',
        createdDate: 'string1',
        lastModifiedBy: 'string1',
        lastModifiedDate: 'string1',
        id: 12345,
        descripcion: 'string1',
        estado: 'string1',
        tieneStore: 'string1',
        usuariosAsignados: 'string1',
        aprobacion: 'string1',
        aprobacion1: 'string1',
      },
      {
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
      },
    ]
    when(stateManager.zonas).thenReturn(zonasMock)
    const zona = listZonasSitecs.listZonas()
    expect(zona).toEqual(zonasMock)
  })
})

function setup() {
  const zonaSitecRespository = mock<ZonaSitecRespository>()
  const stateManager = mock<StateManager>()
  return {
    stateManager,
    listZonasSitecs: new ListZonasSitecs(
      instance(zonaSitecRespository),
      instance(stateManager)
    ),
  }
}
