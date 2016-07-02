export interface JsonApiResourceDefinition {
  type: string;
  path: string;
  collectionPath: string;
  attributes: Array<string>;
  relationships: { [key: string]: { type: string, relationType: string } };
};

export type JsonApiResourcesDefinition = Array<JsonApiResourceDefinition>;


export interface JsonApiStoreDefinition {
  data: {[key: string]: any};
  resourcesDefinition: JsonApiResourcesDefinition;
  isCreating: boolean;
  isReading: boolean;
  isUpdating: boolean;
  isDeleting: boolean;
}
