
import React from 'react'

const TableHead = () => {
    return (

        <thead className="border-y">
           
            <tr>
                <th scope="col" className="text-sm font-medium border-x text-gray-900 px-6 py-4 text-left">
                    Sl.No
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-x">
                    Name
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-x">
                    Email
                   
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-x">
                    Phone
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-x">
                    View
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-x">
                    Edit
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-x">
                    Delete
                </th>

            </tr>
        </thead>
    )
}

export default TableHead