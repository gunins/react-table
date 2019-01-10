import {lensPath} from './lib/lenses';

export const _idLens = lensPath('_id');
export const isActiveLens = lensPath('isActive');
export const companyLens = lensPath('company');
export const emailLens = lensPath('email');
export const firstNameLens = lensPath('name','first');
export const lastNameLens = lensPath('name','last');
