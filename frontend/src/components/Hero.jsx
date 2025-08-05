import { formatDistanceToNow } from 'date-fns';

export default function Hero(props) {
    const { admin, setIsRegister, setAdmin, userRegisteredData } = { ...props };


    let timeAgo;
    if (userRegisteredData?.registeredAt) {
        const registeredAt = new Date(userRegisteredData.registeredAt);
        timeAgo = formatDistanceToNow(registeredAt, { addSuffix: true });
    }

    return (
        <main>
            <div className="grid grid-rows-3 lg:max-w-[80%] mx-auto">
                <span />
                <span className="flex justify-evenly">
                    <h1>Hope</h1>
                    <img
                        src="236795-800x533r1-kid-coding.jpg"
                        alt="hero-img"
                        className="w-50 h-30 rounded-[50px] hidden lg:block"
                        loading="lazy"
                    />
                    <h1>Rise</h1>
                </span>
                <span className="flex justify-evenly">
                    <h1>is </h1>
                    <h1>Support</h1>
                </span>
            </div>
            <div className="flex flex-col items-center gap-14">
                {
                    !admin
                        ?
                        <>
                            {/* Register Button */}
                            {
                                !userRegisteredData
                                    ?
                                    <div className="relative group">
                                        <a
                                            href="#form"
                                            onClick={() => setIsRegister(true)}
                                            className="submitA px-6 py-3 bg-gray-900 text-white rounded-[10px] cursor-pointer inline-flex justify-center items-center w-60"
                                        >
                                            Register
                                        </a>
                                        <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-max max-w-xs px-3 py-2 bg-black text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
                                            Register As A Volunteer
                                        </span>
                                    </div>
                                    :
                                    ""
                            }

                            {/* Admin Login Button */}
                            <div className="relative group">
                                <a
                                    href="#admin"
                                    onClick={() => setIsRegister(false)}
                                    className="submitA px-6 py-3 bg-gray-900 text-white rounded-[10px] cursor-pointer inline-flex justify-center items-center w-60"
                                >
                                    Admin Login
                                </a>
                                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max max-w-xs px-3 py-2 bg-black text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
                                    Login As An Admin To See Registered Users
                                    Admin Username = admin , Password = admin
                                </span>
                            </div>
                        </>
                        :
                        <div className="relative group">
                            <br />
                            <a
                                href="#form"
                                onClick={() => setAdmin(false)}
                                className="submitA px-6 py-3 bg-gray-900 text-white rounded-[10px] cursor-pointer inline-flex justify-center items-center w-60"
                            >
                                Logout
                            </a>
                            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max max-w-xs px-3 py-2 bg-black text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
                                Log Yourself Out
                            </span>
                        </div>
                }
            </div>
            {
                userRegisteredData
                    ?
                    <div className="p-6" id="registerdata">
                        <div className="mb-10 text-center">
                            <span className="font-semibold text-[2em] text-blue-600">Your Registration Details 📰</span>
                        </div>
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
                                    <td className="px-6 py-4">{userRegisteredData.firstname}</td>
                                    <td className="px-6 py-4">{userRegisteredData.lastname}</td>
                                    <td className="px-6 py-4">{userRegisteredData.email}</td>
                                    <td className="px-6 py-4">{userRegisteredData.country}</td>
                                    <td className="px-6 py-4">{userRegisteredData.Address}</td>
                                    <td className="px-6 py-4">{userRegisteredData.city}</td>
                                    <td className="px-6 py-4">{userRegisteredData.state}</td>
                                    <td className="px-6 py-4">{userRegisteredData.zip}</td>
                                    <td className="px-6 py-4">{timeAgo}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    :
                    ""
            }

        </main>
    )
}