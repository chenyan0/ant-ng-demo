import {NormApi} from './norm.api';
import {UserApi} from './user.api';
import {PlanCheckApi} from './plancheck.api';
import {ReportFillApi} from './report-fill.api';
export const API_SERVICE=[
    NormApi,UserApi,PlanCheckApi,ReportFillApi
];
export * from './norm.api';
export * from './user.api';
export * from './plancheck.api';
export * from './report-fill.api';