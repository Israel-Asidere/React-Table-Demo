import React, {useMemo, useState} from 'react'
import {useTable, useRowSelect} from 'react-table/dist/react-table.development'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import './table.css'
import { Checkbox } from '@material-ui/core'

export const RowSelection = () => {
        const columns = useMemo(() => COLUMNS, [])
        const data = useMemo(() => MOCK_DATA, [])
        const [segun, setSegun] = useState([])

        
        
        // const what = segun.map(see => {
        //     let res = 0
        //     res += see
        // })
        // console.log(what)

 
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow, 
        selectedFlatRows
    } = useTable({columns, data}, useRowSelect, (hooks) => {
        hooks.visibleColumns.push((columns) => {
            return [
                {
                    id: 'selection',
                    Header: ({getToggleAllRowsSelectedProps}) => (
                        <Checkbox{...getToggleAllRowsSelectedProps()}/>
                    ), 
                    Cell: ({row}) => (
                        <Checkbox{...row.getToggleRowSelectedProps()}/>
                    )
                }, 
                ...columns
            ]
        })
    })

    const firstPageRows = rows.slice(0,10)

    return (<><table{...getTableProps()}>
        <thead> {
            headerGroups.map((headerGroup) => (<tr {...headerGroup.getHeaderGroupProps()}> {
                headerGroup.headers.map((column) => (<th {...column.getHeaderProps()}> {
                    column.render('Header')
                }</th>))
            } </tr>))
        } </thead>

        <tbody{...getTableBodyProps()}> {
            firstPageRows.map((row) => {
                prepareRow(row)
                return (<tr{...row.getRowProps()}> {
                    row.cells.map((cell) => {
                        return <td{...cell.getCellProps()}> {
                            cell.render('Cell')
                        }</td>
                })
                }
                    <td></td>
                </tr>)
            })
        }
            <tr>
                <td></td>
            </tr>
        </tbody>
        <tfoot> {
            footerGroups.map(footerGroup => (<tr{...footerGroup.getFooterGroupProps()}> {
                footerGroup.headers.map(column => (<td {...column.getFooterProps}> {
                    column.render('Footer')
                } </td>))
            } </tr>))
        } </tfoot>
    </table>
    {
        selectedFlatRows.map(single  => {
            let res = 0
            single.original.age.map(two => {
                res =+ two
            })
            console.log(res)
        })
    }
    </> 
    
       // <pre>
    //         <code>
    //             {JSON.stringify(
    //                 {
    //                     selectedFlatRows: selectedFlatRows.map((row) => row.original),
    //                 },
    //                 null,
    //                 2
    //             )}
    //         </code>
    //     </pre>
    
        )
     

       // {console.log(selectedFlatRows.map((single) => {
    //     // let total = 0
    //     single.original.age.map(one => {
    //         console.log(one)
    //     })
    //     return;
    // }))}

}

