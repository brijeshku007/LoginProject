import React, { useState } from 'react';

const ProtectedTable = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [isUserSectionVisible, setIsUserSectionVisible] = useState(false);

    // Check if user data exists, otherwise show access denied message
    if (!user) return <p className="text-red-500 text-center mt-4">Access Denied</p>;

    // Sample data for the static table
    const staticData = [
        { 
            id: 1, 
            name: 'Mohan', 
            createDate: '2024-12-16', 
            role: 'Admin', 
            status: 'Active', 
            profileImage: 'https://i.pravatar.cc/150?img=1' 
        },
        { 
            id: 2, 
            name: 'Shyam', 
            createDate: '2024-12-15', 
            role: 'User', 
            status: 'Inactive', 
            profileImage: 'https://i.pravatar.cc/150?img=2' 
        },
        { 
            id: 1, 
            name: 'Aditiya', 
            createDate: '2022-13-16', 
            role: 'User', 
            status: 'Active', 
            profileImage: 'https://i.pravatar.cc/150?img=1' 
        },
        { 
            id: 1, 
            name: 'Rajat', 
            createDate: '2024-12-16', 
            role: 'Employee', 
            status: 'Active', 
            profileImage: 'https://i.pravatar.cc/150?img=2' 
        },
        { 
            id: 1, 
            name: 'Sohan', 
            createDate: '2002-12-16', 
            role: 'Admin', 
            status: 'Inactive', 
            profileImage: 'https://i.pravatar.cc/150?img=1' 
        },
        { 
            id: 1, 
            name: 'Adom', 
            createDate: '1990-12-16', 
            role: 'User', 
            status: 'Active', 
            profileImage: 'https://i.pravatar.cc/150?img=1' 
        },
        { 
            id: 1, 
            name: 'Akash', 
            createDate: '2002-12-16', 
            role: 'Employee', 
            status: 'Inactive', 
            profileImage: 'https://i.pravatar.cc/150?img=2' 
        },
      
    ];

    // Display only the latest 10 rows in reverse order
    const latestData = staticData.slice(-10).reverse();

    return (
        <div className="container mx-auto p-4">
            {/* Button to toggle User Info visibility */}
            <div className="absolute top-4 right-4 z-10">
                <button
                    onClick={() => setIsUserSectionVisible(!isUserSectionVisible)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    {isUserSectionVisible ? 'Hide User Info' : 'Show User Info'}
                </button>
            </div>

            {/* User Info Section */}
            {isUserSectionVisible && (
                <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 max-w-3xl mx-auto w-full">
                    <h2 className="text-xl font-semibold mb-2">User Information</h2>
                    <p><span className="font-medium">Name:</span> {user.name}</p>
                    <p><span className="font-medium">Date of Birth:</span> {user.dob.slice(0, 10)}</p>
                    <p><span className="font-medium">Email:</span> {user.email}</p>
                </div>
            )}

            {/* Table Section */}
            <h2 className="text-2xl font-bold mt-8 mb-4">Latest Entries</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th className="py-2 px-4 border-b text-left">Name</th>
                            <th className="py-2 px-4 border-b text-left">Create Date</th>
                            <th className="py-2 px-4 border-b text-left">Role</th>
                            <th className="py-2 px-4 border-b text-left">Status</th>
                            <th className="py-2 px-4 border-b text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {latestData.map((entry) => (
                            <tr key={entry.id}>
                                <td className="py-2 px-4 border-b flex items-center">
                                    <img
                                        src={entry.profileImage}
                                        alt={entry.name}
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    {entry.name}
                                </td>
                                <td className="py-2 px-4 border-b">{entry.createDate}</td>
                                <td className="py-2 px-4 border-b">{entry.role}</td>
                                <td className="py-2 px-4 border-b">{entry.status}</td>
                                <td className="py-2 px-4 border-b">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProtectedTable;
