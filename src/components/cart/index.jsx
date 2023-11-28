import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { DashboardBradCrumbs } from '../DashboardBradCrumbs';

export const Cart = () => {

    /** cart list */
    const carts = JSON.parse(localStorage.getItem('carts')) || []

    const columns = [
        {
            name: 'Image', 
            cell: (row) => (
                <img
                    src={row.image}
                    alt="Company avatar"
                    className="h-10"
                />
            ),
        },
        {
            name: 'Title',
            selector: row => row.name,
        },
        // {
        //     name: "Salary",
        //     selector: (row) => `TK ${row.start_salary}-${row.end_salary}`,
        // },
        {
            name: 'Price',
            selector: row => `TK ${row.price}`,
        },
        {
            name: 'Quantity',
            selector: row => `QTY ${row.qty}`,
        },
        {
            name: "Action",
            minWidth: "150px",
            cell: (row) => (
                <div className="flex gap-1">
                    <Link to={`/dashboard/jobs/show/${row._id}`}>
                        <span class="material-symbols-outlined text-gray-600 text-[20px]">
                            visibility
                        </span>
                    </Link>
                    <Link to={`/dashboard/jobs/applicants/${row._id}`}>
                        <span class="material-symbols-outlined text-gray-600 text-[20px]">
                            delete
                        </span>
                    </Link>
                </div>
            ),
        },
    ];



    return <>

        <DashboardBradCrumbs name="My Cart Item"></DashboardBradCrumbs>

        <div className=' shadow-md p-4'>
            <DataTable
                columns={columns}
                data={carts}
                pagination
            />
        </div>
    </>
}