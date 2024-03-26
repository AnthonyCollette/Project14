import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { BsChevronExpand, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
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

    const handleFirstPage = () => {
        setActualPage(0)
    }

    const handleTwoPagesBefore = () => {
        setActualPage(actualPage - 2)
    }
    const handleTwoPagesAfter = () => {
        setActualPage(actualPage + 2)
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
                {table.getHeaderGroups().map(headerGroup => <div className='tr' key={headerGroup.id}>
                    {headerGroup.headers.map(header => <div className='th' key={header.id}>
                        {header.column.columnDef.header}
                        <div className='chevrons'>
                            {header.column.getCanSort() && !header.column.getIsSorted() && <BsChevronExpand onClick={header.column.getToggleSortingHandler()} />}
                            {{
                                asc: <BsChevronUp onClick={header.column.getToggleSortingHandler()} />,
                                desc: <BsChevronDown onClick={header.column.getToggleSortingHandler()} />,
                            }[header.column.getIsSorted()]}
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
                    {table.getCanPreviousPage() && <button aria-label='First Page' onClick={handleFirstPage}><LuChevronFirst /></button>}
                    {table.getCanPreviousPage() && <button onClick={handlePrev} aria-label='Previous page'>
                        <FaChevronLeft />
                    </button>}
                    {actualPage >= 2 && <button className='pagination__number' onClick={handleTwoPagesBefore}>{actualPage - 1}</button>}
                    {actualPage >= 1 && <button className='pagination__number' onClick={handlePrev}>{actualPage}</button>}
                    <p className='pagination__number'>{actualPage + 1}</p>
                    {actualPage <= table.getPageCount() - 2 && <button className='pagination__number' onClick={handleNext}>{actualPage + 2}</button>}
                    {actualPage <= table.getPageCount() - 3 && <button className='pagination__number' onClick={handleTwoPagesAfter}>{actualPage + 3}</button>}
                    {table.getCanNextPage() && <button onClick={handleNext}
                        aria-label='Next page'>
                        <FaChevronRight />
                    </button>}
                    {table.getCanNextPage() && <button aria-label='Last Page' onClick={() => setActualPage(table.getPageCount() - 1)}><LuChevronLast /></button>}
                </div>
            </div>
        </div>
    );
};

export default Table;