import {
  async,
  it,
  inject,
  injectAsync,
  ddescribe,
  xdescribe,
  describe,
  beforeEachProviders,
  beforeEach,
  expect,
  fakeAsync,
  iit,
  tick,
  xit
} from '@angular/core/testing';

import _ = require('lodash');

import { JsonApiReducer, JsonApiPayload } from '../lib/reducers';
import { JsonApiActions } from '../lib/actions';
import { initialiseJsonApiStore } from '../lib/store';

let deepFreeze = require('deep-freeze');

describe('Json Api Reducer', () => {
  let actions;

  let entitiesDefinition = [
    {
      entityPath: 'article',
      entityType: 'Article',
      collectionPath: 'articles',
      attributes: ['title', 'subtitle'],
      relationships: {
        'author': { 'type': 'People', 'relationType': 'hasOne' },
        'tags': { 'type': 'Tag', 'relationType': 'hasMany' }
      }
    },
    {
      entityPath: 'person',
      entityType: 'Person',
      collectionPath: 'people',
      attributes: ['name'],
      relationships: {}
    }
  ];
  let state = initialiseJsonApiStore(entitiesDefinition);

  state = _.assign(state, {
    'data': _.assign(state.data, {
      'article': {
        'data': [
          {
            'type': 'Article',
            'id': '1',
            'attributes': {
              'title': 'JSON API paints my bikeshed!'
            }
          },
          {
            'type': 'Article',
            'id': '2',
            'attributes': {
              'title': 'Untitled'
            }
          }]
      },
      'comment': {
        'data': [
          {
            'type': 'Comment',
            'id': '1',
            'attributes': {
              'text': 'Uncommented'
            }
          },
          {
            'type': 'Comment',
            'id': '2',
            'attributes': {
              'text': 'No comment'
            }
          }
        ]
      }
    })
  });
  state = _.assign(state, {
    'data': _.assign(state.data, {
      'article': {
        'data': [
          {
            'type': 'Article',
            'id': '1',
            'attributes': {
              'title': 'JSON API paints my bikeshed!'
            }
          },
          {
            'type': 'Article',
            'id': '2',
            'attributes': {
              'title': 'Untitled'
            }
          }]
      },
      'comment': {
        'data': [
          {
            'type': 'Comment',
            'id': '1',
            'attributes': {
              'text': 'Uncommented'
            }
          },
          {
            'type': 'Comment',
            'id': '2',
            'attributes': {
              'text': 'No comment'
            }
          }
        ]
      }
    })
  });
  deepFreeze(state);
  beforeEachProviders(() => {
    return [
      JsonApiActions
    ];
  });

  beforeEach(inject([JsonApiActions], (api) => {
    actions = api;
  }));

  it('should change isCreating status according to CREATE actions', () => {
    let newState = JsonApiReducer(state, actions.apiCreateInit('x'));
    expect(newState.isCreating).toBe(true);
    let newnewState = JsonApiReducer(newState, actions.apiCreateSuccess('x'));
    expect(newnewState.isCreating).toBe(false);
    let newnewnewState = JsonApiReducer(newState, actions.apiCreateFail('x'));
    expect(newnewnewState.isCreating).toBe(false);
  });

  it('should change isReading status according to READ actions', () => {
    let newState = JsonApiReducer(state, actions.apiReadInit('x'));
    expect(newState.isReading).toBe(true);
    let newnewState = JsonApiReducer(newState, actions.apiReadSuccess('x'));
    expect(newnewState.isReading).toBe(false);
    let newnewnewState = JsonApiReducer(newState, actions.apiReadFail('x'));
    expect(newnewnewState.isReading).toBe(false);
  });

  it('should change isUpdating status when UPDATE actions', () => {
    let newState = JsonApiReducer(state, actions.apiUpdateInit('x'));
    expect(newState.isUpdating).toBe(true);
    let newnewState = JsonApiReducer(newState, actions.apiUpdateSuccess('x'));
    expect(newnewState.isUpdating).toBe(false);
    let newnewnewState = JsonApiReducer(newState, actions.apiUpdateFail('x'));
    expect(newnewnewState.isUpdating).toBe(false);
  });

  it('should change isDeleting status DELETE actions', () => {
    let newState = JsonApiReducer(state, actions.apiDeleteInit('x'));
    expect(newState.isDeleting).toBe(true);
    let newnewState = JsonApiReducer(newState, actions.apiDeleteSuccess('x'));
    expect(newnewState.isDeleting).toBe(false);
    let newnewnewState = JsonApiReducer(newState, actions.apiDeleteFail('x'));
    expect(newnewnewState.isDeleting).toBe(false);
  });

  it('should update or insert entities upson successfull CREATE/UPDATE/READ', () => {
    let payload: JsonApiPayload = {
      data: {
        'data': [
          {
            'type': 'Article',
            'id': '1',
            'attributes': {
              'title': 'Untitled 1'
            }
          },
          {
            'type': 'Article',
            'id': '2',
            'attributes': {
              'title': 'Untitled 2'
            }
          }
        ],
        'included': [
          {
            'type': 'Person',
            'id': '1',
            'attributes': {
              'name': 'Euler'
            }
          },
          {
            'type': 'Person',
            'id': '2',
            'attributes': {
              'name': 'Lagrange'
            }
          }
        ]
      },
      options: {}
    };
    let newState = JsonApiReducer(state, actions.apiCreateSuccess(payload));
    let newnewState = JsonApiReducer(state, actions.apiReadSuccess(payload));
    let newnewnewState = JsonApiReducer(state, actions.apiUpdateSuccess(payload));
    expect(newState.data.article.data[0].attributes.title).toEqual('Untitled 1');
    expect(newState.data.article.data[1].attributes.title).toEqual('Untitled 2');
    expect(newState.data.person.data[0].attributes.name).toEqual('Euler');
    expect(newState.data.person.data[1].attributes.name).toEqual('Lagrange');

    expect(newnewState.data.article.data[0].attributes.title).toEqual('Untitled 1');
    expect(newnewState.data.article.data[1].attributes.title).toEqual('Untitled 2');
    expect(newnewState.data.person.data[0].attributes.name).toEqual('Euler');
    expect(newnewState.data.person.data[1].attributes.name).toEqual('Lagrange');

    expect(newnewnewState.data.article.data[0].attributes.title).toEqual('Untitled 1');
    expect(newnewnewState.data.article.data[1].attributes.title).toEqual('Untitled 2');
    expect(newnewnewState.data.person.data[0].attributes.name).toEqual('Euler');
    expect(newnewnewState.data.person.data[1].attributes.name).toEqual('Lagrange');

  });
});
