import {_idLens, isActiveLens, companyLens, emailLens, firstNameLens, lastNameLens} from './lenses';


export default  [
        {
            id: '_id',
            visible: false,
            index: 0,
            title: 'ID',
            accessor: _idLens
        },
        {
            id: 'isActive',
            visible: false,
            index: 1,
            title: 'Active',
            accessor: isActiveLens
        },
        {
            id: 'company',
            visible: true,
            index: 2,
            title: 'Company',
            accessor: companyLens

        },
        {
            id: 'email',
            visible: true,
            index: 3,
            title: 'Email',
            accessor: emailLens

        },
        {
            id: 'firstName',
            visible: true,
            index: 4,
            title: 'First Name',
            accessor: firstNameLens

        },
        {
            id: 'lastName',
            visible: true,
            index: 5,
            title: 'Last Name',
            accessor: lastNameLens
        }
    ]
