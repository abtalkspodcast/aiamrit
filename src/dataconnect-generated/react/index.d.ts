import { CreateNewUserData, CreateNewUserVariables, GetCurrentUserMealPlansData, CreateNewMealPlanData, CreateNewMealPlanVariables, ListAllTrainersData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateNewUser(options?: useDataConnectMutationOptions<CreateNewUserData, FirebaseError, CreateNewUserVariables>): UseDataConnectMutationResult<CreateNewUserData, CreateNewUserVariables>;
export function useCreateNewUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewUserData, FirebaseError, CreateNewUserVariables>): UseDataConnectMutationResult<CreateNewUserData, CreateNewUserVariables>;

export function useGetCurrentUserMealPlans(options?: useDataConnectQueryOptions<GetCurrentUserMealPlansData>): UseDataConnectQueryResult<GetCurrentUserMealPlansData, undefined>;
export function useGetCurrentUserMealPlans(dc: DataConnect, options?: useDataConnectQueryOptions<GetCurrentUserMealPlansData>): UseDataConnectQueryResult<GetCurrentUserMealPlansData, undefined>;

export function useCreateNewMealPlan(options?: useDataConnectMutationOptions<CreateNewMealPlanData, FirebaseError, CreateNewMealPlanVariables>): UseDataConnectMutationResult<CreateNewMealPlanData, CreateNewMealPlanVariables>;
export function useCreateNewMealPlan(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewMealPlanData, FirebaseError, CreateNewMealPlanVariables>): UseDataConnectMutationResult<CreateNewMealPlanData, CreateNewMealPlanVariables>;

export function useListAllTrainers(options?: useDataConnectQueryOptions<ListAllTrainersData>): UseDataConnectQueryResult<ListAllTrainersData, undefined>;
export function useListAllTrainers(dc: DataConnect, options?: useDataConnectQueryOptions<ListAllTrainersData>): UseDataConnectQueryResult<ListAllTrainersData, undefined>;
