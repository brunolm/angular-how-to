import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import camelcaseKeys from 'camelcase-keys';
import { map } from 'rxjs/operators';

export interface Apod {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  static baseUrl = 'https://api.nasa.gov';

  static params = {
    params: {
      api_key: 'DEMO_KEY',
    },
  };

  constructor(private http: HttpClient) {}

  async getApod() {
    return await this.http
      .get(`${NasaService.baseUrl}/planetary/apod`, NasaService.params)
      .pipe(map((response) => camelcaseKeys(response, { deep: true })))
      .toPromise<Apod>();
  }
}
