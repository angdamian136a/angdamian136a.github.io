import Link from "next/link";

const Records = () => {
    return (
        <div className="m-14">
            <div className="pb-10">
                <h1 className="font-serif font-medium text-7xl">Personal Records</h1>
            </div>
            <hr/>
            <div className="py-10">
                <h2 className="font-serif font-medium text-5xl underline mt-5">My Education</h2>
                <div className="mx-5 mt-10">
                    <div className="lg:flex justify-between">
                        <h3 className="font-serif text-4xl italic font-bold">
                            Nanyang Technological University [NTU]
                        </h3>
                        <h4 className="font-serif text-2xl italic font-normal">
                            Aug 2021 - present
                        </h4>
                    </div>
                    <div className="m-5">
                        <h5 className="font-serif text-3xl font-normal py-5">
                            School of Biological Sciences [SBS]
                        </h5>
                        <p className="px-5">
                            Bachelor of Science [BSc] <br/>
                            Double Major Programme (Honours) in Biomedical Sciences and BioBusiness [BSB] <br/>
                            Cumulative GPA (5-point system): 4.55  <br/>
                            AUs Completed (out of 140): 76 <br/>
                            Results: See "My University Courses" under the <Link href={"/portfolio"} className="underline">Portfolio</Link> section.
                        </p>
                    </div>
                </div>
                <div className="mx-5 mt-10">
                    <div className="lg:flex justify-between">
                        <h3 className="font-serif text-4xl italic font-bold">
                            Anderson Junior College [AJC]
                        </h3>
                        <h4 className="font-serif text-2xl italic font-normal">
                            Feb 2017 - Nov 2018
                        </h4>
                    </div>
                    <div className="m-5">
                        <h5 className="font-serif text-3xl font-normal py-5">
                            Science Stream (4 H2)
                        </h5>
                        <p className="px-5">
                            General Certificate of Education Advanced Level [GCE A-Level] <br/>
                            Rank Points (out of 90): 86.25  <br/>
                            Number of Distinctions: 4 <br/>
                            Results:
                        </p>
                        <ul className="px-10">
                            <li>
                                H1 General Paper [A]
                            </li>
                            <li>
                                H1 Project Work [A]
                            </li>
                            <li>
                                H2 Mathematics [A]
                            </li>
                            <li>
                                H2 Chemistry [A]
                            </li>
                            <li>
                                H2 Biology [B]
                            </li>
                            <li>
                                H2 History [B]
                            </li>
                            <li>
                                H1 Chinese [S]
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mx-5 mt-10">
                    <div className="lg:flex justify-between">
                        <h3 className="font-serif text-4xl italic font-bold">
                            Bukit Batok Secondary School [BBSS]
                        </h3>
                        <h4 className="font-serif text-2xl italic font-normal">
                            Jan 2013 - Oct 2016
                        </h4>
                    </div>
                    <div className="m-5">
                        <h5 className="font-serif text-3xl font-normal py-5">
                            Science Stream (Express)
                        </h5>
                        <p className="px-5">
                            General Certificate of Education Ordinary Level [GCE O-Level] <br/>
                            L1R5 Aggregate (Raw): 7  <br/>
                            Number of Distinctions: 7 <br/>
                            Results:
                        </p>
                        <ul className="px-10">
                            <li>
                                English Language [A2]
                            </li>
                            <li>
                                Mathematics [A1]
                            </li>
                            <li>
                                Additional Mathematics [A1]
                            </li>
                            <li>
                                Biology [A2]
                            </li>
                            <li>
                                Chemistry [A1]
                            </li>
                            <li>
                                Physics [A1]
                            </li>
                            <li>
                                Combined Humanities (History) [A1]
                            </li>
                            <li>
                                Chinese [C6]
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            {/* <div className="py-10">
                <h2 className="font-serif font-medium text-5xl underline mt-5">My Experience</h2>
                <div className="mx-5 mt-10">
                    <div className="lg:flex justify-between">
                        <h3 className="font-serif text-4xl italic font-bold">
                            School Contributions
                        </h3>
                        <h4 className="font-serif text-2xl italic font-normal">
                            Aug 2021 - present
                        </h4>
                    </div>
                    <div className="m-5">
                        <h5 className="font-serif text-3xl font-normal py-5">
                            School of Biological Sciences [SBS]
                        </h5>
                        <p className="px-5">
                            Bachelor of Science [BSc] <br/>
                            Double Major Programme (Honours) in Biomedical Sciences and BioBusiness [BSB] <br/>
                            Cumulative GPA (5-point system): 4.55  <br/>
                            AUs Completed (out of 140): 76 <br/>
                            Results: See "My University Courses" under the <Link href={"/portfolio"} className="underline">Portfolio</Link> section.
                        </p>
                    </div>
                </div>
                <div className="mx-5 mt-10">
                    <div className="lg:flex justify-between">
                        <h3 className="font-serif text-4xl italic font-bold">
                            Community Service
                        </h3>
                        <h4 className="font-serif text-2xl italic font-normal">
                            Aug 2021 - present
                        </h4>
                    </div>
                    <div className="m-5">
                        <h5 className="font-serif text-3xl font-normal py-5">
                            School of Biological Sciences [SBS]
                        </h5>
                        <p className="px-5">
                            Bachelor of Science [BSc] <br/>
                            Double Major Programme (Honours) in Biomedical Sciences and BioBusiness [BSB] <br/>
                            Cumulative GPA (5-point system): 4.55  <br/>
                            AUs Completed (out of 140): 76 <br/>
                            Results: See "My University Courses" under the <Link href={"/portfolio"} className="underline">Portfolio</Link> section.
                        </p>
                    </div>
                    <div className="mx-5 mt-10">
                    <div className="lg:flex justify-between">
                        <h3 className="font-serif text-4xl italic font-bold">
                            National Service
                        </h3>
                        <h4 className="font-serif text-2xl italic font-normal">
                            Aug 2021 - present
                        </h4>
                    </div>
                    <div className="m-5">
                        <h5 className="font-serif text-3xl font-normal py-5">
                            School of Biological Sciences [SBS]
                        </h5>
                        <p className="px-5">
                            Bachelor of Science [BSc] <br/>
                            Double Major Programme (Honours) in Biomedical Sciences and BioBusiness [BSB] <br/>
                            Cumulative GPA (5-point system): 4.55  <br/>
                            AUs Completed (out of 140): 76 <br/>
                            Results: See "My University Courses" under the <Link href={"/portfolio"} className="underline">Portfolio</Link> section.
                        </p>
                    </div>
                    <div className="mx-5 mt-10">
                    <div className="lg:flex justify-between">
                        <h3 className="font-serif text-4xl italic font-bold">
                            Internships
                        </h3>
                        <h4 className="font-serif text-2xl italic font-normal">
                            Aug 2021 - present
                        </h4>
                    </div>
                    <div className="m-5">
                        <h5 className="font-serif text-3xl font-normal py-5">
                            School of Biological Sciences [SBS]
                        </h5>
                        <p className="px-5">
                            Bachelor of Science [BSc] <br/>
                            Double Major Programme (Honours) in Biomedical Sciences and BioBusiness [BSB] <br/>
                            Cumulative GPA (5-point system): 4.55  <br/>
                            AUs Completed (out of 140): 76 <br/>
                            Results: See "My University Courses" under the <Link href={"/portfolio"} className="underline">Portfolio</Link> section.
                        </p>
                    </div>
                    <div className="mx-5 mt-10">
                    <div className="lg:flex justify-between">
                        <h3 className="font-serif text-4xl italic font-bold">
                            Work
                        </h3>
                        <h4 className="font-serif text-2xl italic font-normal">
                            Aug 2021 - present
                        </h4>
                    </div>
                    <div className="m-5">
                        <h5 className="font-serif text-3xl font-normal py-5">
                            School of Biological Sciences [SBS]
                        </h5>
                        <p className="px-5">
                            Bachelor of Science [BSc] <br/>
                            Double Major Programme (Honours) in Biomedical Sciences and BioBusiness [BSB] <br/>
                            Cumulative GPA (5-point system): 4.55  <br/>
                            AUs Completed (out of 140): 76 <br/>
                            Results: See "My University Courses" under the <Link href={"/portfolio"} className="underline">Portfolio</Link> section.
                        </p>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>
            <div className="py-10">
                <h2 className="font-serif font-medium text-5xl underline mt-5">My Achievements</h2>
                <div className="mx-5 mt-10">
                    <div className="lg:flex justify-between">
                        <h3 className="font-serif text-4xl italic font-bold">
                            Nanyang Technological University [NTU]
                        </h3>
                        <h4 className="font-serif text-2xl italic font-normal">
                            Aug 2021 - present
                        </h4>
                    </div>
                    <div className="m-5">
                        <h5 className="font-serif text-3xl font-normal py-5">
                            School of Biological Sciences [SBS]
                        </h5>
                        <p className="px-5">
                            Bachelor of Science [BSc] <br/>
                            Double Major Programme (Honours) in Biomedical Sciences and BioBusiness [BSB] <br/>
                            Cumulative GPA (5-point system): 4.55  <br/>
                            AUs Completed (out of 140): 76 <br/>
                            Results: See "My University Courses" under the <Link href={"/portfolio"} className="underline">Portfolio</Link> section.
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Records;