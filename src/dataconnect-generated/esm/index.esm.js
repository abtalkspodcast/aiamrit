import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: '5jan',
  location: 'us-east4'
};

export const createNewUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewUser', inputVars);
}
createNewUserRef.operationName = 'CreateNewUser';

export function createNewUser(dcOrVars, vars) {
  return executeMutation(createNewUserRef(dcOrVars, vars));
}

export const getCurrentUserMealPlansRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCurrentUserMealPlans');
}
getCurrentUserMealPlansRef.operationName = 'GetCurrentUserMealPlans';

export function getCurrentUserMealPlans(dc) {
  return executeQuery(getCurrentUserMealPlansRef(dc));
}

export const createNewMealPlanRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewMealPlan', inputVars);
}
createNewMealPlanRef.operationName = 'CreateNewMealPlan';

export function createNewMealPlan(dcOrVars, vars) {
  return executeMutation(createNewMealPlanRef(dcOrVars, vars));
}

export const listAllTrainersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAllTrainers');
}
listAllTrainersRef.operationName = 'ListAllTrainers';

export function listAllTrainers(dc) {
  return executeQuery(listAllTrainersRef(dc));
}

