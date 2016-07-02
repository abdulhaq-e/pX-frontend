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

import { JsonApiStore } from '../lib/store';

let resourcesDefinition = [
  {
    path: 'article',
    type: 'Article',
    collectionPath: 'articles',
    attributes: ['title', 'subtitle'],
    relationships: {
      'author': { 'type': 'People', 'relationType': 'hasOne' },
      'tags': { 'type': 'Tag', 'relationType': 'hasMany' }
    }
  },
  {
    path: 'person',
    type: 'Person',
    collectionPath: 'people',
    attributes: ['name'],
    relationships: {}
  }
];

ddescribe('Json Api Store', () => {

  let store = new JsonApiStore(resourcesDefinition);

  it('should initialise the store based on the store definition', () => {

    // console.log(store);
    expect(store.data['article']).toBeDefined();
    expect(store.data['person']).toBeDefined();
    expect(store.data['article']['data']).toEqual([]);
    expect(store.data['person']['data']).toEqual([]);
    expect(store.resourcesDefinition).toEqual(resourcesDefinition);
  });

  iit('should use the getResourcePath to find resources path!', () => {
    // console.log('hi');
    expect(store.getResourcePath('Article')).toBe('article');
    expect(() => store.getResourcePath('Spam')).toThrow();
    expect(() => store.getResourcePath('Spam')).toThrowError(
      'Definition not found');
  });


});
