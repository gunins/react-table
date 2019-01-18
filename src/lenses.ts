import {lensPath} from './lib/lenses';
import {IData} from './interfaces';

export const _idLens = lensPath<IData,string>('_id');
export const isActiveLens = lensPath<IData,boolean>('isActive');
export const companyLens = lensPath<IData,string>('company');
export const emailLens = lensPath<IData,string>('email');
export const firstNameLens = lensPath<IData,string>('name', 'first');
export const lastNameLens = lensPath<IData,string>('name', 'last');
