import { format } from 'date-fns';

export default function AdminView({ props }) {
    const data = props;
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-12" id="usersdata">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">Admin Dashboard</h1>
                    <span className="font-semibold text-[1.5em] text-blue-600">{"Registered Users  👤's"}</span>
                </div>

                {/* Volunteer Table */}
                <div className="bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200">
                    <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-800">Volunteer List</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left text-gray-700">
                            <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">First Name</th>
                                    <th className="px-6 py-4">Last Name</th>
                                    <th className="px-6 py-4">Email</th>
                                    <th className="px-6 py-4">Country</th>
                                    <th className="px-6 py-4">Address</th>
                                    <th className="px-6 py-4">City</th>
                                    <th className="px-6 py-4">State</th>
                                    <th className="px-6 py-4">Zip</th>
                                    <th className="px-6 py-4">Registered At</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {/* Example static row — replace with dynamic mapping */}
                                <tr className="hover:bg-gray-50 transition duration-200">
                                    <td className="px-6 py-4">Sonu</td>
                                    <td className="px-6 py-4">Sonu</td>
                                    <td className="px-6 py-4">sonu@example.com</td>
                                    <td className="px-6 py-4">India</td>
                                    <td className="px-6 py-4">123 Main St</td>
                                    <td className="px-6 py-4">Delhi</td>
                                    <td className="px-6 py-4">Delhi</td>
                                    <td className="px-6 py-4">110001</td>
                                    <td className="px-6 py-4">Aug 5, 2025</td>
                                </tr>

                                {
                                    data.length > 0
                                        ?
                                        data.map((vol, index) => {
                                            const now = vol.registeredAt;
                                            const formatted = format(now, 'PPPpp'); // Aug 5th, 2025 at 3:00 PM

                                            return (<tr key={index} className="hover:bg-gray-50 transition">
                                                <td className="px-6 py-4">{vol.firstname}</td>
                                                <td className="px-6 py-4">{vol.lastname}</td>
                                                <td className="px-6 py-4">{vol.email}</td>
                                                <td className="px-6 py-4">{vol.country}</td>
                                                <td className="px-6 py-4">{vol.Address}</td>
                                                <td className="px-6 py-4">{vol.city}</td>
                                                <td className="px-6 py-4">{vol.state}</td>
                                                <td className="px-6 py-4">{vol.zip}</td>
                                                <td className="px-6 py-4">{formatted}</td>
                                            </tr>)
                                        })
                                        :
                                        ""
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
