import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import mockedData from '../mocks/data'
import { useEffect, useState } from 'react';
import { FaSort, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Table = () => {

    const [columnFilters, setColumnFilters] = useState([])
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

    const table = useReactTable({
        data: mockedData,
        columns,
        state: {
            columnFilters,
            pagination: {
                pageSize: numberOfResults,
                pageIndex: actualPage
            }
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
    })

    const firstName = columnFilters.find(
        filter => filter.id === 'firstName'
    )?.value || ''

    const handleChange = (e) => {
        setNumberOfResults(Number(e.target.value))
    }

    const handlePrev = () => {
        setActualPage(actualPage - 1)
    }
    const handleNext = () => {
        setActualPage(actualPage + 1)
    }

    const onFilterChange = (id, value) => setColumnFilters(
        filters => filters.filter(f => f.id !== f.id).concat({
            id, value
        })
    )
    return (
        <div className='table'>
            <div className='filters'>
                <p>Show
                    <select onChange={handleChange}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                    entries
                </p>

                <div className='search'>
                    <label htmlFor="search">
                        Search
                    </label>
                    <input type="text" name="search" value={firstName} onChange={(e) => onFilterChange('firstName', e.target.value)} />
                </div>
            </div>
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