import { useState } from "react";

export default function RegistrationForm(props) {
    const { setType, setMessage, setShow, setIsRegister, setUserRegisteredData } = { ...props };
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        country: "United States",
        Address: "",
        city: "",
        state: "",
        zip: ""
    });
    const [loading, setLoading] = useState(false);

    const register = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("http://localhost:3000/api/submit", {
                method: 'POST',
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            console.log(data);

            if (res.status == 200) {
                setShow(true);
                setMessage(data.message);
                setType("success")
                setLoading(false);
                setIsRegister(null);
                setUserRegisteredData(data.user);
                window.location.hash = "#usersdata";
            } else {
                setShow(true);
                setMessage(data.message);
                setType("error")
                setLoading(false);
            }
        } catch (err) {
            setShow(true);
            setMessage(err.message);
            setType("error")
            setLoading(false);
            console.log(err);
        }
    }

    return (
        <div className="w-full p-6 lg:p-12" id="form">
            <div className="mb-10 text-center">
                <span className="font-semibold text-[2em] text-blue-600">{"Register As Volunteer 👤"}</span>
            </div>
            <form className="w-full" onSubmit={register}>
                <div className="mx-auto">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>
                                <div className="mt-2">
                                    <input required onChange={(e) => setFormData({ ...formData, "firstname": e.target.value })} id="first-name" type="text" name="first-name" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">Last name</label>
                                <div className="mt-2">
                                    <input required onChange={(e) => setFormData({ ...formData, "lastname": e.target.value })} id="last-name" type="text" name="last-name" autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input required onChange={(e) => setFormData({ ...formData, "email": e.target.value })} id="email" type="email" name="email" autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">Country</label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select onChange={(e) => setFormData({ ...formData, "country": e.target.value })} id="country" name="country" autoComplete="country-name" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                    <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                                        <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">Street address</label>
                                <div className="mt-2">
                                    <input required onChange={(e) => setFormData({ ...formData, "Address": e.target.value })} id="street-address" type="text" name="street-address" autoComplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">City</label>
                                <div className="mt-2">
                                    <input required onChange={(e) => setFormData({ ...formData, "city": e.target.value })} id="city" type="text" name="city" autoComplete="address-level2" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">State / Province</label>
                                <div className="mt-2">
                                    <input required onChange={(e) => setFormData({ ...formData, "state": e.target.value })} id="region" type="text" name="region" autoComplete="address-level1" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">ZIP / Postal code</label>
                                <div className="mt-2">
                                    <input required onChange={(e) => setFormData({ ...formData, "zip": e.target.value })} id="postal-code" type="text" name="postal-code" autoComplete="postal-code" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button disabled={loading} type="submit" className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">{loading ? "Registering" : "Register"}</button>
                </div>
            </form>

        </div>
    )
}