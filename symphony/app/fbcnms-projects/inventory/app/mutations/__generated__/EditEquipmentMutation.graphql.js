/**
 * @generated
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 **/

 /**
 * @flow
 * @relayHash b802626d7e6506c543b8baed2e8be162
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EquipmentTable_equipments$ref = any;
export type EditEquipmentInput = {|
  id: string,
  name: string,
  properties?: ?$ReadOnlyArray<PropertyInput>,
  deviceID?: ?string,
  externalId?: ?string,
|};
export type PropertyInput = {|
  id?: ?string,
  propertyTypeID: string,
  stringValue?: ?string,
  intValue?: ?number,
  booleanValue?: ?boolean,
  floatValue?: ?number,
  latitudeValue?: ?number,
  longitudeValue?: ?number,
  rangeFromValue?: ?number,
  rangeToValue?: ?number,
  nodeIDValue?: ?string,
  isEditable?: ?boolean,
  isInstanceProperty?: ?boolean,
|};
export type EditEquipmentMutationVariables = {|
  input: EditEquipmentInput
|};
export type EditEquipmentMutationResponse = {|
  +editEquipment: {|
    +$fragmentRefs: EquipmentTable_equipments$ref
  |}
|};
export type EditEquipmentMutation = {|
  variables: EditEquipmentMutationVariables,
  response: EditEquipmentMutationResponse,
|};
*/


/*
mutation EditEquipmentMutation(
  $input: EditEquipmentInput!
) {
  editEquipment(input: $input) {
    ...EquipmentTable_equipments
    id
  }
}

fragment EquipmentTable_equipments on Equipment {
  id
  name
  futureState
  equipmentType {
    id
    name
  }
  workOrder {
    id
    status
  }
  device {
    up
  }
  services {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditEquipmentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditEquipmentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editEquipment",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Equipment",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "EquipmentTable_equipments",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditEquipmentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editEquipment",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Equipment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "futureState",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "equipmentType",
            "storageKey": null,
            "args": null,
            "concreteType": "EquipmentType",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "workOrder",
            "storageKey": null,
            "args": null,
            "concreteType": "WorkOrder",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "status",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "device",
            "storageKey": null,
            "args": null,
            "concreteType": "Device",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "up",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "services",
            "storageKey": null,
            "args": null,
            "concreteType": "Service",
            "plural": true,
            "selections": [
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditEquipmentMutation",
    "id": null,
    "text": "mutation EditEquipmentMutation(\n  $input: EditEquipmentInput!\n) {\n  editEquipment(input: $input) {\n    ...EquipmentTable_equipments\n    id\n  }\n}\n\nfragment EquipmentTable_equipments on Equipment {\n  id\n  name\n  futureState\n  equipmentType {\n    id\n    name\n  }\n  workOrder {\n    id\n    status\n  }\n  device {\n    up\n  }\n  services {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ada7d8e59770e9396458e1647916ae79';
module.exports = node;
