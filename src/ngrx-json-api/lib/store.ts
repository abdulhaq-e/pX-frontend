import _ = require('lodash');

import { JsonApiStoreDefinition,
  JsonApiResourceDefinition,
  JsonApiResourcesDefinition
} from './interfaces';

// export interface JsonApiEntity {
//   type: string;
//   id: string;
//   attributes: {[key: string]: string};
//   relationsship
// }

export class JsonApiStore implements JsonApiStoreDefinition {

  public isCreating = false;
  public isReading = false;
  public isUpdating = false;
  public isDeleting = false;
  public data = {};

  constructor (public resourcesDefinition: JsonApiResourcesDefinition) {
    this.resourcesDefinition = resourcesDefinition;
    _.forEach(this.resourcesDefinition, (definition) => {
      this.data[definition.path] = {
        'data': []
      }
    })

  }

  getResourcePath(resourceType: string) {
    let definition: JsonApiResourceDefinition = _.find(
      this.resourcesDefinition, ['type', resourceType]);

      if (typeof definition === 'undefined') {
        throw new Error('Definition not found');
      }
      else {
        return definition.path;
      }
  }
}
