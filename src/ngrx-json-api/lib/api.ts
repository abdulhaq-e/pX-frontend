import _ = require('lodash');

import { Injectable, Inject } from '@angular/core';

import { API_URL, ENTITIES_DEFINTION } from './ng2';

import {
  Headers,
  Http,
  Request,
  RequestOptions,
  RequestMethod,
  URLSearchParams
} from '@angular/http';


interface Options {
  model?: string;
  id?: string;
}

export interface JsonApiOptions {
  entityType: string;
  id?: string;
  params?: string;
}

@Injectable()
export class JsonApi {

  public headers: Headers = new Headers({
    'Content-Type': 'application/vnd.api+json',
    'Accept': 'application/vnd.api+json'
  });
  public builderStack = [];
  public models: { [key: string]: any };

  constructor(
    private http: Http,
    @Inject(API_URL) private apiUrl,
    @Inject(ENTITIES_DEFINTION) private definition
  ) {
  }
  one(entityType: string, id: string) {
    this.builderStack.push({
      path: this.resourcePathFor(entityType, id)
    });
    return this;
  }

  all(entityType: string) {
    this.builderStack.push({
      path: this.collectionPathFor(entityType)
    });
    return this;
  }

  resetBuilder() {
    this.builderStack = [];
  }

  buildPath() {
    return _.map(this.builderStack, 'path').join('/');
  }

  buildUrl() {
    return `${this.apiUrl}/${this.buildPath()}`;
  }

  get(params = {}) {

    let requestParams = new URLSearchParams();

    // TODO: implement param conversion.

    let requestOptionsArgs = {
      method: RequestMethod.Get,
      url: this.urlFor(),
      search: requestParams
    };

    this.resetBuilder();

    return this.request(requestOptionsArgs);
  }

  post(payload) {
    let lastRequest = _.chain(this.builderStack).last();
    // console.log(lastRequest);

    let requestOptionsArgs = {
      method: RequestMethod.Post,
      url: this.urlFor(),
      // model: lastRequest.get('model').value(),
      body: JSON.stringify(payload)
    };

    this.resetBuilder();

    return this.request(requestOptionsArgs);
  }

  patch(payload) {
    let lastRequest = _.chain(this.builderStack).last();

    let requestOptionsArgs = {
      method: RequestMethod.Patch,
      url: this.urlFor(),
      body: JSON.stringify(payload)
    };

    this.resetBuilder();

    return this.request(requestOptionsArgs);
  }

  destroy() {
    let lastRequest = _.chain(this.builderStack).last();

    let requestOptions = {
      method: RequestMethod.Delete,
      url: this.urlFor()
    };

    this.resetBuilder();

    return this.request(requestOptions);
  }

  request(requestOptionsArgs) {

    let requestOptions = new RequestOptions(requestOptionsArgs);

    let request = new Request(requestOptions.merge({
      headers: this.headers
    }));

    return this.http.request(request).map(res => res.json());
  }

  find(options: JsonApiOptions) {
    if (typeof options.id === 'undefined') {
      return this.findAll(options);
    }
    return this.one(options.entityType, options.id).get(options.params);
  }

  findAll(options) {
    return this.all(options.entityType).get(options.params);
  }

  create(entityType, payload) {
    return this.all(entityType).post(payload);
  }

  update(entityType, payload) {
    return this.one(entityType, payload.id).patch(payload);
  }

  delete(options: JsonApiOptions) {
    return this.one(options.entityType, options.id).destroy();
  }

  collectionPathFor(entityType: string) {
    let collectionPath = _.find(this.definition,
      ['entityType', entityType]).collectionPath;
    return `${collectionPath}`;
  }

  resourcePathFor(entityType: string, id: string) {
    let collectionPath = this.collectionPathFor(entityType);
    return `${collectionPath}/${encodeURIComponent(id)}`;
  }

  collectionUrlFor(entityType: string) {
    let collectionPath = this.collectionPathFor(entityType);
    return `${this.apiUrl}/${collectionPath}`;
  }

  resourceUrlFor(entityType: string, id) {
    let resourcePath = this.resourcePathFor(entityType, id);
    return `${this.apiUrl}/${resourcePath}`;
  }

  urlFor(options: Options = {}) {
    if (!_.isUndefined(options.model) && !_.isUndefined(options.id)) {
      return this.resourceUrlFor(options.model, options.id);
    } else if (!_.isUndefined(options.model)) {
      return this.collectionUrlFor(options.model);
    } else {
      return this.buildUrl();
    }
  }

  pathFor(options: Options = {}) {
    if (!_.isUndefined(options.model) && !_.isUndefined(options.id)) {
      return this.resourcePathFor(options.model, options.id);
    } else if (!_.isUndefined(options.model)) {
      return this.collectionPathFor(options.model);
    } else {
      return this.buildPath();
    }
  }
}
