export default function Hero() {
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
            <div className="flex justify-center items-center h-20">
                <a href="#form" className="submitA p-2 w-[30%] bg-gray-900 rounded-[10px] cursor-pointer"><p>Register</p></a>
            </div>
        </main>
    )
}