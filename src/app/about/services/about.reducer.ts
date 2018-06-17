import { AboutActions } from './about.actions';

export class AboutReducer {
  [AboutActions.getApiValueType](state = {}, action) {
    console.log('REDUCER: getApiValueType');

    return {
      ...state,
      somethingFromReducer: 'foobar',
      action,
    };
  }

  [AboutActions.apiSuccessType](state = {}, action) {
    console.log('REDUCER: apiSuccessType');
    const offset = 32;

    return {
      ...state,
      somethingFromReducer: 'foobar',
      type: action.type,
      action: Math.random().toString(offset),
    };
  }
}
