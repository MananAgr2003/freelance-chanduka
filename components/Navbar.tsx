

export default function Navbar() {

    let listStyle = "hover:border-b cursor-pointer"

    return (
        <nav className="z-20 w-full absolute top-0 flex justify-between bg-transparent md:px-24 px-4 py-4">
            <div className="flex w-full md:w-1/3 justify-center">
                <img src="/images/logo.png" alt="Company Logo" className="md:w-[250px] w-48 w-full" />
            </div>

            <div className="flex-1">
                <ul className="hidden list-none md:flex justify-end items-center gap-3 text-white">
                    <li className={listStyle}>Home</li>
                    <li className={listStyle}>Our Products</li>
                    <li className={listStyle}>About us</li>
                    <li className={listStyle}>Blog</li>
                    <li className={listStyle}>Contact us</li>
                    <li>
                        <button className="px-2 py-2 bg-bgPrimary rounded">
                        +800 275 8777
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}