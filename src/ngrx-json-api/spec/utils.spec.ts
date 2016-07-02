import _ = require('lodash');

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

import { updateOrInsertEntity, updateOrCreateReducer } from '../lib/utils';
import { initialiseJsonApiStore } from '../lib/store';

let deepFreeze = require('deep-freeze');

describe('Update or Insert Entity function', () => {

  let state = [
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
    }
  ];

  deepFreeze(state);

  it('should add new entities', () => {
    let entity = {
      'type': 'Article',
      'id': '3',
      'attributes': {
        'title': 'Third article',
        'subtitle': 'Subtitle for 3rd article'
      }
    };
    let newState = updateOrInsertEntity(state, entity);
    // console.log(newState);
    // console.log(deepFreeze);
    expect(newState[2].attributes.title).toEqual('Third article');
    expect(newState[2].attributes.subtitle).toEqual('Subtitle for 3rd article');

  })

  it('should update attributes', () => {
    let entity = {
      'type': 'Article',
      'id': '2',
      'attributes': {
        'title': 'It paints my bikeshed too!'
      }
    };
    let newState = updateOrInsertEntity(state, entity);
    expect(newState[1].attributes.title).toEqual('It paints my bikeshed too!');
  });

  it('should add new attributes', () => {
    let entity = {
      'type': 'Article',
      'id': '2',
      'attributes': {
        'title': 'It paints my bikeshed too!',
        'subtitle': 'I have a subtitle'
      }
    }
    let newState = updateOrInsertEntity(state, entity);
    expect(newState[1].attributes.subtitle).toEqual('I have a subtitle');
  });

  it('should update relationships', () => {
    let entity = {
      'type': 'Article',
      'id': '1',
      'relationships': {
        'author': {
          'data': { 'type': 'people', 'id': '9' }
        },
        "comments": {
          "data": [
            { "type": "comments", "id": "5" },
            { "type": "comments", "id": "12" }
          ]
        }
      }
    };
    let newState = updateOrInsertEntity(state, entity);
    // console.log(newState);
    expect(newState[0].relationships.author.data.id).toEqual('9');
    expect(newState[0].relationships.comments.data[0].id).toEqual('5');
    expect(newState[0].relationships.comments.data[1].id).toEqual('12');
  });
});

describe('Update Or create Reducer', () => {

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

  it('should update the state', () => {
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
    // console.log(state);
    deepFreeze(state);
    let entities = {
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
      ]
    };
    let newState = updateOrCreateReducer(state, entities);
    // console.log(newState);
    expect(newState.data.article.data[0].attributes.title).toEqual('Untitled 1');
    expect(newState.data.article.data[1].attributes.title).toEqual('Untitled 2');
    expect(newState.data.comment.data[0].attributes.text).toEqual('Uncommented');
    expect(newState.data.comment.data[1].attributes.text).toEqual('No comment');
  });

  it('should handle included entities', () => {
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
    // console.log(state);
    deepFreeze(state);
    let entities = {
      'data': [],
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
    };
    let newState = updateOrCreateReducer(state, entities);
    // console.log(newState);
    expect(newState.data.person.data[0].attributes.name).toEqual('Euler');
    expect(newState.data.person.data[1].attributes.name).toEqual('Lagrange');
  });
});
