import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateNewMealPlanData {
  mealPlan_insert: MealPlan_Key;
}

export interface CreateNewMealPlanVariables {
  name: string;
  startDate: DateString;
  endDate: DateString;
}

export interface CreateNewUserData {
  user_insert: User_Key;
}

export interface CreateNewUserVariables {
  displayName: string;
  email: string;
}

export interface Exercise_Key {
  id: UUIDString;
  __typename?: 'Exercise_Key';
}

export interface GetCurrentUserMealPlansData {
  mealPlans: ({
    id: UUIDString;
    name: string;
    startDate: DateString;
    endDate: DateString;
  } & MealPlan_Key)[];
}

export interface ListAllTrainersData {
  trainers: ({
    id: UUIDString;
    displayName: string;
    specialization?: string | null;
    photoUrl?: string | null;
  } & Trainer_Key)[];
}

export interface MealPlan_Key {
  id: UUIDString;
  __typename?: 'MealPlan_Key';
}

export interface Meal_Key {
  id: UUIDString;
  __typename?: 'Meal_Key';
}

export interface Trainer_Key {
  id: UUIDString;
  __typename?: 'Trainer_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface WorkoutPlan_Key {
  id: UUIDString;
  __typename?: 'WorkoutPlan_Key';
}

interface CreateNewUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
  operationName: string;
}
export const createNewUserRef: CreateNewUserRef;

export function createNewUser(vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;
export function createNewUser(dc: DataConnect, vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;

interface GetCurrentUserMealPlansRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCurrentUserMealPlansData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetCurrentUserMealPlansData, undefined>;
  operationName: string;
}
export const getCurrentUserMealPlansRef: GetCurrentUserMealPlansRef;

export function getCurrentUserMealPlans(): QueryPromise<GetCurrentUserMealPlansData, undefined>;
export function getCurrentUserMealPlans(dc: DataConnect): QueryPromise<GetCurrentUserMealPlansData, undefined>;

interface CreateNewMealPlanRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewMealPlanVariables): MutationRef<CreateNewMealPlanData, CreateNewMealPlanVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewMealPlanVariables): MutationRef<CreateNewMealPlanData, CreateNewMealPlanVariables>;
  operationName: string;
}
export const createNewMealPlanRef: CreateNewMealPlanRef;

export function createNewMealPlan(vars: CreateNewMealPlanVariables): MutationPromise<CreateNewMealPlanData, CreateNewMealPlanVariables>;
export function createNewMealPlan(dc: DataConnect, vars: CreateNewMealPlanVariables): MutationPromise<CreateNewMealPlanData, CreateNewMealPlanVariables>;

interface ListAllTrainersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllTrainersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAllTrainersData, undefined>;
  operationName: string;
}
export const listAllTrainersRef: ListAllTrainersRef;

export function listAllTrainers(): QueryPromise<ListAllTrainersData, undefined>;
export function listAllTrainers(dc: DataConnect): QueryPromise<ListAllTrainersData, undefined>;

