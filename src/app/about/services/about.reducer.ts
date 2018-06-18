import { AboutActions } from './about.actions';

export class AboutReducer {
  [AboutActions.apiSuccessType](state = {}, action) {
    console.log('REDUCER: apiSuccessType');
    const offset = 32;

    return {
      ...state,
      type: action.type,
      number: Math.random().toString(offset),
      action,
    };
  }
}
