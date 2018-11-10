// Async Action Type Generators
export const generateStartType = actionName => `${actionName}_START`
export const generateEndtType = actionName => `${actionName}_END`
export const generateSuccessType = actionName => `${actionName}_SUCCESS`
export const generateErrorType = actionName => `${actionName}_ERROR`