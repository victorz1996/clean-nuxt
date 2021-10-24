import { mock, instance } from 'ts-mockito'
import { ListZonaSitec } from '../ListZonaSitec'
import { ZonaSitecRespository } from '../../../domain/ZonaSitecRepository'

describe('ListZonaSitec', () => {
  it('comprueba si se optiene una zonaSitec por id', async () => {
    const { listZonaSitec } = setup()
    const zona = await listZonaSitec
    expect(zona).toEqual([{ id: 140 }])
  })
})

function setup() {
  const zonaSitecRespository = mock<ZonaSitecRespository>()
  return {
    listZonaSitec: new ListZonaSitec(instance(zonaSitecRespository)),
  }
}
