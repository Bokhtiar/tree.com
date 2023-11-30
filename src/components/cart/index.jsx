import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { DashboardBradCrumbs } from '../DashboardBradCrumbs';

export const Cart = () => {

    
    /** cart list */
    const carts = JSON.parse(localStorage.getItem('carts')) || []
    
    const deleteCart = (id) => {
        // Step 1: Retrieve existing JSON data from localStorage
        var jsonData = JSON.parse(localStorage.getItem("carts")) || [];
        console.log("json data", id);
        // Step 2: Identify and remove the specific item by its index
        function removeItemByIndex(indexToRemove) {
            jsonData.splice(indexToRemove, 1);
        }

        // Example: Remove item at index 2
        removeItemByIndex(id);

        // Step 3: Save the updated JSON data back to localStorage
        localStorage.setItem("cars", JSON.stringify(jsonData));
    }

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
                    {/* <Link to={`/dashboard/jobs/show/${row.id}`}>
                        <span class="material-symbols-outlined text-gray-600 text-[20px]">
                            visibility
                        </span>
                    </Link> */}
                    <span onClick={()=> deleteCart(row.id)} >
                        <span class="material-symbols-outlined text-gray-600 text-[20px]">
                            delete
                        </span>
                    </span>
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