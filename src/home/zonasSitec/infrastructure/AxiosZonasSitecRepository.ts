import { injectable } from 'inversify-props'
import axios from 'axios'
import { ZonaSitecRespository } from '../domain/ZonaSitecRepository'

@injectable()
export class AxiosZonasSitecRepository implements ZonaSitecRespository {
  baseURL: string = 'http://200.21.4.69:8081'
  token: string =
    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5OTkiLCJhdXRoIjoiQURNSU5fQ0lDTE9TX0ZBQyxESVNUUklCVUNJT05fQ09NUE9ORU5UX0NSRUFURV9SRUNPUkQsRElTVFJJQlVDSU9OX0NPTVBPTkVOVF9ERUxFVEVfUkVDT1JELERJU1RSSUJVQ0lPTl9DT01QT05FTlRfUFJJTlQsUEVSRElEQVNfQ1JFQVRFX1JFQ09SRCxST0xFX0FETUlOLFJPTEVfVVNFUixWRVIiLCJSYW5kb20iOiIxMjM0IiwiZXhwIjoxOTQ3NzE5MzI4fQ._eDe9M-1lbIOUoMoCjb_rjGXXgA-lY6nJUvRvIOcsx9rl_3Tidd8mfgHKZzsnLx2yVJfbVfZS0ClPZsWutsMng'

  headers: any = {
    Authorization: this.token,
  }

  async getAllZonas(): Promise<any> {
    const headers = this.headers
    const res = await axios.get(
      `${this.baseURL}/services/simdcp/api/zona-sitecs`,
      { headers }
    )
    return res.data
  }

  getZona(zonaId: number): any {
    console.log('zona por id', zonaId)
  }
}
