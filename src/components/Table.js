import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { useEffect, useState } from 'react';
import { FaSort, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
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
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'department',
            header: "Department",
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'birthDate',
            header: "Date of Birth",
            cell: (props) => <p>{props.getValue()}</p>
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
            accessorKey: 'zip',
            header: "Zip Code",
            cell: (props) => <p>{props.getValue()}</p>
        },
    ]
    
    const users = useSelector(state => state.users.users)

    const table = useReactTable({
        data: users,
        columns,
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
                <p>Show
                    <select onChange={handleChange}>
                        {[10, 25, 50, 100].map((number, index) => {
                            return <option value={number} key={index}>{number}</option>
                        })}
                    </select>
                    entries
                </p>

                <GlobalFilter setGlobalFilters={setGlobalFilters} value={globalFilters} setActualPage={setActualPage} />
            </div>
            <div className='table-wrapper'>
            {table.getHeaderGroups().map(headerGroup => <div className='tr' key={headerGroup.id}>
                {headerGroup.headers.map(header => <div className='th' key={header.id}>
                    {header.column.columnDef.header}
                    <div className='chevrons'>
                        {header.column.getCanSort() && <FaSort onClick={header.column.getToggleSortingHandler()} />}
                    </div>
                </div>)}
            </div>)}
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
                    <button onClick={handlePrev} disabled={!table.getCanPreviousPage()}>
                        <FaChevronLeft />
                    </button>
                    <button onClick={handleNext}
                        disabled={!table.getCanNextPage()}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;