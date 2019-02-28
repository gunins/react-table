import {_idLens, isActiveLens, companyLens, emailLens, firstNameLens, lastNameLens} from './lenses';
import {tableType, order} from "./table/TableIntercaces";

export default [
    {
        type: tableType.ID,
        id:'_id',
        accessor: _idLens
    },
    {
        type: tableType.Row,
        id: 'isActive',
        visible: true,
        index: 1,
        attribute: 'data-active',
        accessor: isActiveLens
    },
    {
        type: tableType.Cell,
        id: 'company',
        visible: true,
        title: 'Company',
        index: 3,
        accessor: companyLens,
        sort: true,
        order: order.ASC

    },
    {
        type: tableType.Cell,
        id: 'email',
        visible: true,
        index: 2,
        title: 'Email',
        accessor: emailLens

    },
    {
        type: tableType.Cell,
        id: 'firstName',
        visible: true,
        index: 4,
        title: 'First Name',
        accessor: firstNameLens

    },
    {
        type: tableType.Cell,
        id: 'lastName',
        visible: true,
        index: 5,
        title: 'Last Name',
        accessor: lastNameLens
    }
]
