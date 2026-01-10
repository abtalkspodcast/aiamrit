const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: '5jan',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createNewUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewUser', inputVars);
}
createNewUserRef.operationName = 'CreateNewUser';
exports.createNewUserRef = createNewUserRef;

exports.createNewUser = function createNewUser(dcOrVars, vars) {
  return executeMutation(createNewUserRef(dcOrVars, vars));
};

const getCurrentUserMealPlansRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCurrentUserMealPlans');
}
getCurrentUserMealPlansRef.operationName = 'GetCurrentUserMealPlans';
exports.getCurrentUserMealPlansRef = getCurrentUserMealPlansRef;

exports.getCurrentUserMealPlans = function getCurrentUserMealPlans(dc) {
  return executeQuery(getCurrentUserMealPlansRef(dc));
};

const createNewMealPlanRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewMealPlan', inputVars);
}
createNewMealPlanRef.operationName = 'CreateNewMealPlan';
exports.createNewMealPlanRef = createNewMealPlanRef;

exports.createNewMealPlan = function createNewMealPlan(dcOrVars, vars) {
  return executeMutation(createNewMealPlanRef(dcOrVars, vars));
};

const listAllTrainersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAllTrainers');
}
listAllTrainersRef.operationName = 'ListAllTrainers';
exports.listAllTrainersRef = listAllTrainersRef;

exports.listAllTrainers = function listAllTrainers(dc) {
  return executeQuery(listAllTrainersRef(dc));
};
