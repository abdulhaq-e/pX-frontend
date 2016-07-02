import _ = require('lodash');

import { getEntityPath, JsonApiStore } from './store';

export const updateOrInsertEntity = (state: Array<any>, entity: any) => {
  let newState;

  // Check if the entity alread exists in the state
  let foundEntity = _.find(state, {'type': entity.type, 'id': entity.id});

  // If it is not there, we simply add it to the state
  if (_.isUndefined(foundEntity)) {
    newState = [...state, entity];
    return newState;
  }

  let newEntity = {};

  if (typeof entity.attributes !== 'undefined') {
    newEntity['attributes'] = _.cloneDeep(entity.attributes);
  }
  if (typeof entity.relationships !== 'undefined') {
    newEntity['relationships'] = _.cloneDeep(entity.relationships);
  }
  newState = _.map(state, e => {
    // console.log(_.assign({}, {'a': {'aa': 1} }, {'a': {'bb': 2}}));
    if (e.type === entity.type && e.id === entity.id) {
      return _.assign({},
        e,
        newEntity)
    } else {
      return e;
    }
  });
  return newState;
};
//
// export const updateOrInsertEntities = (state: Array<any>, entities: any) => {
//
//   let newState = _.reduce(entities, (result, value) => {
//     // console.log(value);
//     return updateOrInsertEntity(result, value)
//   }, state
//   )
//
//   return newState;
// };


export const updateOrCreateReducer = (state: JsonApiStore, payload) => {
  // a very ugly functions
  let newState;

  let data: Array<any> = _.get(payload, 'data');

  if ( _.isUndefined(data) ) {
    return state;
  }

  data = _.isArray(data) ? data : [data]

  let included: Array<any> = _.get(payload, 'included');

  if ( !_.isUndefined(included) ) {
    data = [...data, ...included];
  }

  // console.log(data);
  newState = _.reduce(data,
    (result, value) => {
      // console.log(value);
      // console.log(_.find(state.storeDefinition, ['entityType', value.type]).entityPath);
      let entityPath = getEntityPath(state.entitiesDefinition, value.type);
      // console.log(result.data[entityPath]);
      let partialState = {};
      partialState[entityPath] = _.assign(
        {},
        result.data[entityPath],
        { 'data': updateOrInsertEntity(result.data[entityPath].data, value)}
      );
      // console.log(updateOrInsertEntity(result.data[entityPath].data, value));
      return _.assign({},
        result,
        {'data': _.assign({}, result.data, partialState)});
    }, state)

  return newState;
};
