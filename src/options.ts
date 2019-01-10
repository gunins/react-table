import {_idLens, isActiveLens, companyLens, emailLens, firstNameLens, lastNameLens} from './lenses';

export default {
    fields: [
        {
            title: 'ID',
            visible: false,
            id: '_id',
            index: 0,
            accessor: _idLens
        },
        {
            title: 'Active',
            visible: false,
            id: 'isActive',
            index: 1,
            accessor: isActiveLens
        },
        {
            title: 'Company',
            visible: true,
            id: 'company',
            index: 2,
            accessor: companyLens

        },
        {
            title: 'Email',
            visible: true,
            id: 'email',
            index: 3,
            accessor: emailLens

        },
        {
            title: 'First Name',
            visible: true,
            id: 'firstName',
            index: 4,
            accessor: firstNameLens

        },
        {
            title: 'Last Name',
            visible: true,
            id: 'lastName',
            index: 5,
            accessor: lastNameLens
        }
    ]
}
