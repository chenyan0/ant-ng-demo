import {NormApi} from './norm.api';
import {UserApi} from './user.api';
import {PlanCheckApi} from './plancheck.api';
export const API_SERVICE=[
    NormApi,UserApi,PlanCheckApi
];
export * from './norm.api';
export * from './user.api';
export * from './plancheck.api';