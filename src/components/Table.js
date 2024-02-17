import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { BsChevronExpand, BsChevronDown, BsChevronUp } from "react-icons/bs";
import GlobalFilter from './GlobalFilter';
import { useSelector } from 'react-redux';

const Table = () => {

    const [columnFilters, setColumnFilters] = useState([])
    const [globalFilters, setGlobalFilters] = useState('')
    const [numberOfResults, setNumberOfResults] = useState(10)
    const [actualPage, setActualPage] = useState(0)

    const columns = [
        {
            accessorKey: 'firstName',
            header: "First Name",
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'lastName',
            header: "Last Name",
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'startDate',
            header: "Start Date",
            cell: (props) => <p>{props.getValue()}</p>,
            sortingFn: (
                rowA,
                rowB,
                columnId
            ) => {
                const dateA = new Date(rowA.getValue(columnId))
                const dateB = new Date(rowB.getValue(columnId))
                return dateA < dateB ? 1 : dateA > dateB ? -1 : 0
            }
        },
        {
            accessorKey: 'department',
            header: "Department",
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'birthDate',
            header: "Date of Birth",
            cell: (props) => <p>{props.getValue()}</p>,
            sortingFn: (
                rowA,
                rowB,
                columnId
            ) => {
                const dateA = new Date(rowA.getValue(columnId))
                const dateB = new Date(rowB.getValue(columnId))
                return dateA < dateB ? 1 : dateA > dateB ? -1 : 0
            }
        },
        {
            accessorKey: 'street',
            header: "Street",
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'city',
            header: "City",
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'state',
            header: "State",
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'zip',
            header: "Zip Code",
            cell: (props) => <p>{props.getValue()}</p>
        },
    ]
    
    const users = useSelector(state => state.users.users)

    const table = useReactTable({
        data: users,
        columns,
        enableSortingRemoval: false,
        state: {
            columnFilters,
            pagination: {
                pageSize: numberOfResults,
                pageIndex: actualPage
            },
            globalFilter: globalFilters,
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onGlobalFilterChange: setGlobalFilters,
    })

    const handleChange = (e) => {
        setNumberOfResults(Number(e.target.value))
        setActualPage(0)
    }

    const handlePrev = () => {
        setActualPage(actualPage - 1)
    }
    const handleNext = () => {
        setActualPage(actualPage + 1)
    }

    return (
        <div className='table'>
            <div className='filters'>
                <label>Show
                    <select onChange={handleChange}>
                        {[10, 25, 50, 100].map((number, index) => {
                            return <option value={number} key={index}>{number}</option>
                        })}
                    </select>
                    entries
                </label>

                <GlobalFilter setGlobalFilters={setGlobalFilters} value={globalFilters} setActualPage={setActualPage} />
            </div>
            <div className='table-wrapper'>
            {table.getHeaderGroups().map(headerGroup => <tr className='tr' key={headerGroup.id}>
                {headerGroup.headers.map(header => <th className='th' key={header.id}>
                    {header.column.columnDef.header}
                    <div className='chevrons'>                 
                        {header.column.getCanSort() && !header.column.getIsSorted() && <BsChevronExpand onClick={header.column.getToggleSortingHandler()} />}
                        {{
                            asc: <BsChevronUp onClick={header.column.getToggleSortingHandler()} />,
                            desc: <BsChevronDown onClick={header.column.getToggleSortingHandler()} />,
                        }[header.column.getIsSorted()]}  
                    </div>
                </th>)}
            </tr>)}
            {
                table.getRowModel().rows.map(row => <div className='tr' key={row.id}>
                    {row.getVisibleCells().map(cell => <div className='td' key={cell.id}>
                        {
                            flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                            )
                        }
                    </div>)}
                </div>)
            }
            </div>
            <div className='table-bottom'>
                <p>
                    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </p>
                <div className='pagination'>
                    <button onClick={handlePrev} disabled={!table.getCanPreviousPage()} aria-label='Previous page'>
                        <FaChevronLeft />
                    </button>
                    <button onClick={handleNext}
                        disabled={!table.getCanNextPage()} aria-label='Next page'>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;