import { dispatch } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { NasaService } from '../../shared/nasa.service';

const wait = (ms) => {
  return new Promise((r) => setTimeout(r, ms));
};

@Injectable()
export class AboutActions {
  static readonly apiSuccessType = 'apiSuccessType';

  constructor(private nasa: NasaService) {}

  @dispatch()
  apiSuccess(data) {
    console.log('ACTION: apiSuccess');

    return {
      type: AboutActions.apiSuccessType,
      data,
    };
  }

  // thunks

  @dispatch()
  getApiValue() {
    console.log('ACTION: getApiValue');

    const testTimeout = 1000;

    return async (dispatcher) => {
      await wait(testTimeout);
      console.log('after 1s');
      dispatcher(this.apiSuccess({ mock: 1 }));
    };
  }

  @dispatch()
  getNasaApod() {
    console.log('ACTION: getNasaApod');

    return async (dispatcher) => {
      const apod = await this.nasa.getApod();
      dispatcher(this.apiSuccess(apod));
    };
  }
}
