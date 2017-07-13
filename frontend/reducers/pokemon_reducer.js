import { merge } from 'lodash';
import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

function pokemonReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({},state, action.pokemon);
    default:
      return state;
  }
}

export default pokemonReducer;
