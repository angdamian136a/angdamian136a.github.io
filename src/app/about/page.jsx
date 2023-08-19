import Link from "next/link"

const About = () => {
    return (
        <div className="m-14">
            <div className="pb-10">
                <h1 className="font-serif font-medium text-7xl">About</h1>
                {/* <h2 className="font-serif text-4xl">My Journey</h2> */}
            </div>
            <hr/>
            <div className="py-10">
                <h2 className="font-serif font-medium text-5xl underline mt-5">My Profile</h2>
                {/* <div className="mx-5 mt-10">
                    <h3 className="font-serif text-4xl italic font-bold">
                        Professional Summary
                    </h3>
                    <p className="m-5">
                        Insert summary
                    </p>
                </div> */}
                <div className="mx-5 mt-10">
                    <h3 className="font-serif text-4xl italic font-bold">
                        Personal Records
                    </h3>
                    <p className="m-5">
                        Explore my <Link href={"/about/records"} className="underline font-medium hover:text-amber-200 hover:text-3xl">personal records</Link> to get a brief overview of my education, experiences and achievements.
                    </p>
                </div>
            </div>
            <hr/>
            <div className="py-10">
                <h2 className="font-serif font-medium text-5xl underline mt-5">My Journey</h2>
                <div className="mx-5 mt-10">
                    <h3 className="font-serif text-4xl italic font-bold">
                        Preface
                    </h3>
                    <p className="m-5">
                        This story is not one I enjoy telling, but it is my story. For the first time in my life, I will attempt to condense my entire meaningful life into a succinct, informative narrative. While I excel in essay-writing, this amateur venture into biographing my life will take me deeper into the art of story-telling than I have ever gone before. Do forgive me if this turns out to be poor writing. 
                    </p>
                </div>
                <div className="mx-5 mt-10">
                    <h3 className="font-serif text-4xl italic font-bold">
                        My Story in Chapters
                    </h3>
                    <ul className="font-sans text-xl lg:text-2xl underline m-5">
                        <li className="my-5">
                            <Link href={"/about/prologue"} className="font-serif hover:text-amber-200 hover:text-3xl">
                                Prologue: Humble Beginnings
                            </Link>
                        </li>
                        <li className="my-5">
                            <Link href={"/about/chapter-one"} className="font-serif hover:text-amber-200 hover:text-3xl">
                                Chapter 1: Pain, Loss and Guilt
                            </Link>
                        </li>
                        <li className="my-5">
                            <Link href={"/about/chapter-two"} className="font-serif hover:text-amber-200 hover:text-3xl">
                                Chapter 2: Forging My Character (to be completed)
                            </Link>
                        </li>
                        <li className="my-5">
                            <Link href={"/about/chapter-three"} className="font-serif hover:text-amber-200 hover:text-3xl">
                                Chapter 3: Breaking Point (to be completed)
                            </Link>
                        </li>
                        <li className="my-5">
                            <Link href={"/about/chapter-four"} className="font-serif hover:text-amber-200 hover:text-3xl">
                                Chapter 4: The Great Enlightenment (to be completed)
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;
