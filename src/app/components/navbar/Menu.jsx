import Link from "next/link";

const Menu = ({toggleMenu}) => {
    return (
        toggleMenu ? (
            <div className="m-0 px-5 md:hidden bg-slate-700">
                <ul className="text-slate-200 font-semibold">
                    <li>
                        <Link href={"/about"}>
                            <p className="text-xl hover:text-white mr-4 py-2">About</p>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/portfolio"}>
                            <p className="text-xl hover:text-white mr-4 py-2">Portfolio</p>
                        </Link>
                    </li>
                    {/* <li>
                        <Link href={"/blog"}>
                            <p className="text-xl hover:text-white mr-4 py-2">Blog</p>
                        </Link>
                    </li> */}
                </ul>
            </div>
        ) : null
    )
}

export default Menu;