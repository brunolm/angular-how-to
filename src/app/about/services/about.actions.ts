import { dispatch } from '@angular-redux/store';
import { Injectable } from '@angular/core';

const wait = (ms) => {
  return new Promise((r) => setTimeout(r, ms));
};

@Injectable()
export class AboutActions {
  static readonly getApiValueType = 'getApiValueType';
  static readonly apiSuccessType = 'apiSuccessType';

  @dispatch()
  getApiValue() {
    console.log('ACTION: getApiValue');

    const testTimeout = 1000;

    return async (dispatcher) => {
      await wait(testTimeout);
      console.log('after 1s');
      dispatcher(this.apiSuccess());
    };
  }

  @dispatch()
  apiSuccess() {
    console.log('ACTION: apiSuccess');

    return {
      type: AboutActions.apiSuccessType,
    };
  }
}
