import { useState } from "react";

export default function AdminLogin(props) {
    const { setUsers, setAdmin, setType, setMessage, setShow } = { ...props };

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);

    const login = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("http://localhost:3000/api/adminlogin", {
                method: 'POST',
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (res.status == 200) {
                setAdmin(true);
                setUsers(data.users);
                setShow(true);
                setMessage(data.message);
                setType("success")
                setLoading(false);

                window.location.hash = "#usersdata";
            } else {
                setShow(true);
                setMessage(data.message);
                setLoading(false);
                setType("error");
            }
        } catch (err) {
            setShow(true);
            setMessage(err.message);
            setLoading(false);
            setType("error");
            console.log(err);
        }
    }

    return (
        <div id="admin">
            <div className="mb-10 text-center">
                <span className="font-semibold text-[2em] text-blue-600">{"Login As Admin 👩‍💻"}</span>
            </div>

            <form className="w-full flex flex-col" onSubmit={(e) => login(e)}>
                <div className="mx-auto">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base/7 font-semibold text-gray-900">Admin Credentials</h2>
                        <div className="mt-10">
                            <div className="sm:col-span-3">
                                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">Username</label>
                                <div className="mt-2">
                                    <input required placeholder="username is admin" onChange={(e) => setFormData({ ...formData, username: e.target.value })} id="username" type="text" name="username" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                                <div className="mt-2">
                                    <input required placeholder="password is admin" onChange={(e) => setFormData({ ...formData, password: e.target.value })} id="password" type="password" name="password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button disabled={loading} type="submit" className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">{loading ? "Logging In" : "Login"}</button>
                </div>
            </form>

        </div>
    )
}