# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetCurrentUserMealPlans*](#getcurrentusermealplans)
  - [*ListAllTrainers*](#listalltrainers)
- [**Mutations**](#mutations)
  - [*CreateNewUser*](#createnewuser)
  - [*CreateNewMealPlan*](#createnewmealplan)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetCurrentUserMealPlans
You can execute the `GetCurrentUserMealPlans` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCurrentUserMealPlans(): QueryPromise<GetCurrentUserMealPlansData, undefined>;

interface GetCurrentUserMealPlansRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCurrentUserMealPlansData, undefined>;
}
export const getCurrentUserMealPlansRef: GetCurrentUserMealPlansRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCurrentUserMealPlans(dc: DataConnect): QueryPromise<GetCurrentUserMealPlansData, undefined>;

interface GetCurrentUserMealPlansRef {
  ...
  (dc: DataConnect): QueryRef<GetCurrentUserMealPlansData, undefined>;
}
export const getCurrentUserMealPlansRef: GetCurrentUserMealPlansRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCurrentUserMealPlansRef:
```typescript
const name = getCurrentUserMealPlansRef.operationName;
console.log(name);
```

### Variables
The `GetCurrentUserMealPlans` query has no variables.
### Return Type
Recall that executing the `GetCurrentUserMealPlans` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCurrentUserMealPlansData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCurrentUserMealPlansData {
  mealPlans: ({
    id: UUIDString;
    name: string;
    startDate: DateString;
    endDate: DateString;
  } & MealPlan_Key)[];
}
```
### Using `GetCurrentUserMealPlans`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCurrentUserMealPlans } from '@dataconnect/generated';


// Call the `getCurrentUserMealPlans()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCurrentUserMealPlans();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCurrentUserMealPlans(dataConnect);

console.log(data.mealPlans);

// Or, you can use the `Promise` API.
getCurrentUserMealPlans().then((response) => {
  const data = response.data;
  console.log(data.mealPlans);
});
```

### Using `GetCurrentUserMealPlans`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCurrentUserMealPlansRef } from '@dataconnect/generated';


// Call the `getCurrentUserMealPlansRef()` function to get a reference to the query.
const ref = getCurrentUserMealPlansRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCurrentUserMealPlansRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.mealPlans);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.mealPlans);
});
```

## ListAllTrainers
You can execute the `ListAllTrainers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAllTrainers(): QueryPromise<ListAllTrainersData, undefined>;

interface ListAllTrainersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllTrainersData, undefined>;
}
export const listAllTrainersRef: ListAllTrainersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAllTrainers(dc: DataConnect): QueryPromise<ListAllTrainersData, undefined>;

interface ListAllTrainersRef {
  ...
  (dc: DataConnect): QueryRef<ListAllTrainersData, undefined>;
}
export const listAllTrainersRef: ListAllTrainersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAllTrainersRef:
```typescript
const name = listAllTrainersRef.operationName;
console.log(name);
```

### Variables
The `ListAllTrainers` query has no variables.
### Return Type
Recall that executing the `ListAllTrainers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAllTrainersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAllTrainersData {
  trainers: ({
    id: UUIDString;
    displayName: string;
    specialization?: string | null;
    photoUrl?: string | null;
  } & Trainer_Key)[];
}
```
### Using `ListAllTrainers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAllTrainers } from '@dataconnect/generated';


// Call the `listAllTrainers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAllTrainers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAllTrainers(dataConnect);

console.log(data.trainers);

// Or, you can use the `Promise` API.
listAllTrainers().then((response) => {
  const data = response.data;
  console.log(data.trainers);
});
```

### Using `ListAllTrainers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAllTrainersRef } from '@dataconnect/generated';


// Call the `listAllTrainersRef()` function to get a reference to the query.
const ref = listAllTrainersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAllTrainersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.trainers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.trainers);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateNewUser
You can execute the `CreateNewUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewUser(vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;

interface CreateNewUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
}
export const createNewUserRef: CreateNewUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewUser(dc: DataConnect, vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;

interface CreateNewUserRef {
  ...
  (dc: DataConnect, vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
}
export const createNewUserRef: CreateNewUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewUserRef:
```typescript
const name = createNewUserRef.operationName;
console.log(name);
```

### Variables
The `CreateNewUser` mutation requires an argument of type `CreateNewUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewUserVariables {
  displayName: string;
  email: string;
}
```
### Return Type
Recall that executing the `CreateNewUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewUserData {
  user_insert: User_Key;
}
```
### Using `CreateNewUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewUser, CreateNewUserVariables } from '@dataconnect/generated';

// The `CreateNewUser` mutation requires an argument of type `CreateNewUserVariables`:
const createNewUserVars: CreateNewUserVariables = {
  displayName: ..., 
  email: ..., 
};

// Call the `createNewUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewUser(createNewUserVars);
// Variables can be defined inline as well.
const { data } = await createNewUser({ displayName: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewUser(dataConnect, createNewUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createNewUser(createNewUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateNewUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewUserRef, CreateNewUserVariables } from '@dataconnect/generated';

// The `CreateNewUser` mutation requires an argument of type `CreateNewUserVariables`:
const createNewUserVars: CreateNewUserVariables = {
  displayName: ..., 
  email: ..., 
};

// Call the `createNewUserRef()` function to get a reference to the mutation.
const ref = createNewUserRef(createNewUserVars);
// Variables can be defined inline as well.
const ref = createNewUserRef({ displayName: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewUserRef(dataConnect, createNewUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## CreateNewMealPlan
You can execute the `CreateNewMealPlan` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewMealPlan(vars: CreateNewMealPlanVariables): MutationPromise<CreateNewMealPlanData, CreateNewMealPlanVariables>;

interface CreateNewMealPlanRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewMealPlanVariables): MutationRef<CreateNewMealPlanData, CreateNewMealPlanVariables>;
}
export const createNewMealPlanRef: CreateNewMealPlanRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewMealPlan(dc: DataConnect, vars: CreateNewMealPlanVariables): MutationPromise<CreateNewMealPlanData, CreateNewMealPlanVariables>;

interface CreateNewMealPlanRef {
  ...
  (dc: DataConnect, vars: CreateNewMealPlanVariables): MutationRef<CreateNewMealPlanData, CreateNewMealPlanVariables>;
}
export const createNewMealPlanRef: CreateNewMealPlanRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewMealPlanRef:
```typescript
const name = createNewMealPlanRef.operationName;
console.log(name);
```

### Variables
The `CreateNewMealPlan` mutation requires an argument of type `CreateNewMealPlanVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewMealPlanVariables {
  name: string;
  startDate: DateString;
  endDate: DateString;
}
```
### Return Type
Recall that executing the `CreateNewMealPlan` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewMealPlanData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewMealPlanData {
  mealPlan_insert: MealPlan_Key;
}
```
### Using `CreateNewMealPlan`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewMealPlan, CreateNewMealPlanVariables } from '@dataconnect/generated';

// The `CreateNewMealPlan` mutation requires an argument of type `CreateNewMealPlanVariables`:
const createNewMealPlanVars: CreateNewMealPlanVariables = {
  name: ..., 
  startDate: ..., 
  endDate: ..., 
};

// Call the `createNewMealPlan()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewMealPlan(createNewMealPlanVars);
// Variables can be defined inline as well.
const { data } = await createNewMealPlan({ name: ..., startDate: ..., endDate: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewMealPlan(dataConnect, createNewMealPlanVars);

console.log(data.mealPlan_insert);

// Or, you can use the `Promise` API.
createNewMealPlan(createNewMealPlanVars).then((response) => {
  const data = response.data;
  console.log(data.mealPlan_insert);
});
```

### Using `CreateNewMealPlan`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewMealPlanRef, CreateNewMealPlanVariables } from '@dataconnect/generated';

// The `CreateNewMealPlan` mutation requires an argument of type `CreateNewMealPlanVariables`:
const createNewMealPlanVars: CreateNewMealPlanVariables = {
  name: ..., 
  startDate: ..., 
  endDate: ..., 
};

// Call the `createNewMealPlanRef()` function to get a reference to the mutation.
const ref = createNewMealPlanRef(createNewMealPlanVars);
// Variables can be defined inline as well.
const ref = createNewMealPlanRef({ name: ..., startDate: ..., endDate: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewMealPlanRef(dataConnect, createNewMealPlanVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.mealPlan_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.mealPlan_insert);
});
```

