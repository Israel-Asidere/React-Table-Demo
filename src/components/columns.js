import { ColumnFilter } from "./ColumnFilter"

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id', 
        accessor: 'id',
        Filter: ColumnFilter,
    }, 
    {
        Header: 'Full Name',
        Footer: 'Full Name',
        accessor:'full_name',
        Filter: ColumnFilter,
    },
    {
        Header: 'Gender',
        Footer: 'Gender',
        accessor:'gender',
        Filter: ColumnFilter,
    },
    {
        Header: 'Age',
        Footer: 'Age',
        accessor:'age',
        Filter: ColumnFilter,
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor:'email',
        Filter: ColumnFilter,
    },
    {
        Header: 'Date Submitted',
        Footer: 'Date Submitted',
        accessor: 'date_submitted',
        Filter: ColumnFilter,
    },

]

export const GROUPED_COLUMNS = [
    { 
        Header: 'Id',
        Footer: 'Id', 
        accessor: 'id'
    },
    { 
        Header: 'Personal Info',
        Footer: 'Personal Info ', 
        columns: [
            {
                Header: 'Full Name',
                Footer: 'Full Name',
                accessor:'full_name'
            },
            {
                Header: 'Gender',
                Footer: 'Gender',
                accessor:'gender'
            },
            {
                Header: 'Age',
                Footer: 'Age',
                accessor:'age'
            }
 
        ]
    },
    {
        Header: ' Other Info',
        Footer: 'Other Info',
        columns: [
            {
                Header: 'Email',
                Footer: 'Email',
                accessor:'email'
            },
            {
                Header: 'Date Submitted',
                Footer: 'Date Submitted',
                accessor: 'date_submitted'
            }
        ]
    }
]

