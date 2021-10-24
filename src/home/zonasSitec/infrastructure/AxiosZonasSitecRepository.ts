import { injectable } from 'inversify-props'
import axios from 'axios'
import { ZonaSitecRespository } from '../domain/ZonaSitecRepository'

@injectable()
export class AxiosZonasSitecRepository implements ZonaSitecRespository {
  baseURL: string = 'http://200.21.4.69:8081'
  token: string = localStorage.getItem('auth._token.local') || ''

  config: any = {
    headers: {
      Authorization: this.token,
    },
  }

  async getAllZonas(): Promise<any> {
    const res = await axios.get(
      `${this.baseURL}/services/simdcp/api/zona-sitecs`,
      this.config
    )
    return res.data
  }

  async getZona(zonaId: number): Promise<any> {
    const res = await axios.get(
      `${this.baseURL}/services/simdcp/api/zona-sitecs/${zonaId}`,
      this.config
    )
    return res.data
  }
}
