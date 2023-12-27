import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import mockedData from '../mocks/data'

const Table = () => {

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
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <div className='table'>
            {table.getHeaderGroups().map(headerGroup => <div className='tr' key={headerGroup.id}>
                {headerGroup.headers.map(header => <div className='th' key={header.id}>
                    {header.column.columnDef.header}
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
    );
};

export default Table;