import { AxiosZonasSitecRepository } from '../AxiosZonasSitecRepository'

describe('ListZonaSitec', () => {
  const { axiosZonasSitecRepository } = setup()
  it('base url exists', () => {
    expect(axiosZonasSitecRepository.baseURL).toBe('http://200.21.4.69:8081')
  })
})

function setup() {
  return {
    axiosZonasSitecRepository: new AxiosZonasSitecRepository(),
  }
}
