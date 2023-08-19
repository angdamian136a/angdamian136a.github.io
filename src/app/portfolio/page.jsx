import Link from "next/link"

const Portfolio = () => {
    return (
        <div className="m-14">
            <div className="pb-10">
                <h1 className="font-serif font-medium text-7xl">Portfolio</h1>
            </div>
            <hr/>
            <div className="py-10">
                <h2 className="font-serif font-medium text-5xl underline mt-5">My Projects</h2>
                <div className="mx-5 mt-10">
                    <h3 className="font-serif text-4xl italic font-bold">Bioinformatics</h3>
                    <ul>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS1009 Introduction to Computational Thinking Project [Coursework]</h4>
                                <p className="font-mono leading-6 mt-3">Analysing the expression profiles of highly-correlated genes from the <span className="italic">Hordeum vulgare</span> plant species.</p>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS0004 Introduction to Data Science Project [Coursework]</h4>
                                <p className="font-mono leading-6 mt-3">Determining the 10 most important genes for predicting tissue type in the <span className="italic">Arabidopsis thaliana</span> plant species.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mx-5 mt-10">
                    <h3 className="font-serif text-4xl italic font-bold">Data Science & Machine Learning</h3>
                    <ul>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">SC5010 Introduction to Data Analysis Project [Coursework]</h4>
                                <p className="font-mono leading-6 mt-3">Training a classification model using a speed dating dataset to predict a "match" between two profiles (based on user features) for potential deployment to an online dating site.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mx-5 mt-10">
                    <h3 className="font-serif text-4xl italic font-bold">Web Development</h3>
                    <ul>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">My Personal Website</h4>
                                <p className="font-mono leading-6 mt-3">First unguided (front-end) web development project using HTML, CSS and JavaScript along with React.js while experimenting with the latest Next.js and Tailwind CSS frameworks. Explored version control in greater detail with live hosting of static website on GitHub Pages.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="py-10">
                <div className="flex justify-between mt-5">
                    <h2 className="font-serif font-medium text-5xl underline">My Courses (NTU)</h2>
                    <Link
                        href={"https://www.ntu.edu.sg/sbs/admissions/programmes/undergraduate/curriculum/bmsb/curriculum-ay2021-intake"} 
                        className="font-mono underline text-lg hover:text-xl hover:text-amber-200"
                    >BSB Curriculum</Link>
                </div>
                <div className="mx-5 mt-10">
                    <div className="lg:flex justify-between">
                        <h3 className="font-serif text-4xl italic font-bold">Year 1 Semester 1 [Completed]</h3>
                        <h4 className="font-serif text-2xl italic font-normal">Aug 2021 - Dec 2021</h4>
                    </div>
                    <div className="m-10">
                        <div>
                            <h5 className="font-mono italic text-xl">Total AUs: 19</h5>
                            <h5 className="font-mono italic text-xl">Semester GPA: 3.97</h5>
                            <h5 className="font-mono italic text-xl">Cumulative GPA: 3.97</h5>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS1002 Biophysical Chemistry</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: B-</p>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS1200 Singapore Healthcare System</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: B+</p>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS2002 Microbiology</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Major Prescribed Elective [MPE]</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: B</p>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BU8101 Accounting: A User Perspective</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Broadening and Deepening Elective [BDE]</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: Pass</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mx-5 mt-10">
                    <div className="lg:flex justify-between">
                        <h3 className="font-serif text-4xl italic font-bold">Year 1 Semester 2 [Completed]</h3>
                        <h4 className="font-serif text-2xl italic font-normal">Jan 2022 - May 2022</h4>
                    </div>
                    <div className="m-10">
                        <div>
                            <h5 className="font-mono italic text-xl">Total AUs: 20</h5>
                            <h5 className="font-mono italic text-xl">Semester GPA: 4.85</h5>
                            <h5 className="font-mono italic text-xl">Cumulative GPA: 4.46</h5>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS1005 Biochemistry I</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: A-</p>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS1006 Principles of Genetics</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: A+</p>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS1007 Molecular and Cell Biology I</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: A-</p>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS2004 Molecular and Cell Biology II</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: A+</p>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS1009 Introduction to Computational Thinking</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: A+</p>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS1100 Molecular and Cell Biology Techniques Level 1</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: A+</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mx-5 mt-10">
                    <div className="lg:flex justify-between">
                        <h3 className="font-serif text-4xl italic font-bold">Year 2 Semester 1 [Completed]</h3>
                        <h4 className="font-serif text-2xl italic font-normal">Aug 2022 - Dec 2022</h4>
                    </div>
                    <div className="m-10">
                        <div>
                            <h5 className="font-mono italic text-xl">Total AUs: 17</h5>
                            <h5 className="font-mono italic text-xl">Semester GPA: 4.44</h5>
                            <h5 className="font-mono italic text-xl">Cumulative GPA: 4.45</h5>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS0004 Introduction to Data Science</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: A</p>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS2003 Biochemistry II</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: A+</p>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS2100 Molecular and Cell Biology Techniques Level 2</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: A-</p>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS2023 Regulatory Control of Healthcare Products and Medical Devices</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: B+</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mx-5 mt-10">
                    <div className="lg:flex justify-between">
                        <h3 className="font-serif text-4xl italic font-bold">Year 2 Semester 2 [Completed]</h3>
                        <h4 className="font-serif text-2xl italic font-normal">Jan 2023 - May 2023</h4>
                    </div>
                    <div className="m-10">
                        <div>
                            <h5 className="font-mono italic text-xl">Total AUs: 20</h5>
                            <h5 className="font-mono italic text-xl">Semester GPA: 4.85</h5>
                            <h5 className="font-mono italic text-xl">Cumulative GPA: 4.55</h5>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS2021 RNA Structures & RNA Based Drug Development</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: A</p>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS3006 Bioentrepreneurship</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: A</p>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS3109 Fundamentals of Immunology</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: A+</p>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS3013 Drug Discovery and Development, Biotechnology</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: A-</p>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">SC5010 Introduction to Data Analysis</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Broadening and Deepening Elective [BDE]</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                <p className="font-mono leading-6 mt-3">Grade: Pass</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mx-5 mt-10">
                    <div className="lg:flex justify-between">
                        <h3 className="font-serif text-4xl italic font-bold">Year 3 Semester 1 [Ongoing]</h3>
                        <h4 className="font-serif text-2xl italic font-normal">Aug 2023 - Dec 2023</h4>
                    </div>
                    <ul>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS3201 Intellectual Property Rights Related to BioBusiness & Their Applications</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Core</p>
                                <p className="font-mono leading-6 mt-3">AUs: 5</p>
                                {/* <p className="font-mono leading-6 mt-3">Grade: </p> */}
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS3202 Commercialization of Molecular and Cell Biology Techniques</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Major Prescribed Elective [MPE]</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                {/* <p className="font-mono leading-6 mt-3">Grade: </p> */}
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">BS4017 High-Throughput Bioinformatics</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Major Prescribed Elective [MPE]</p>
                                <p className="font-mono leading-6 mt-3">AUs: 3</p>
                                {/* <p className="font-mono leading-6 mt-3">Grade: </p> */}
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">SBS23013 “Using large language models to predict gene function”</h4>
                                <p className="font-mono leading-6 mt-3">Course Type: Undergraduate Research Experience on Campus [URECA]</p>
                                <p className="font-mono leading-6 mt-3">AUs: 4</p>
                                {/* <p className="font-mono leading-6 mt-3">Grade: </p> */}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="py-10">
                <div className="flex justify-between mt-5">
                    <h2 className="font-serif font-medium text-5xl underline">My Courses (Online)</h2>
                </div>
                <div className="mx-5 mt-10">
                    <h3 className="font-serif text-4xl italic font-bold">Udemy</h3>
                    <ul>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">Python for Data Science and Machine Learning Bootcamp</h4>
                                <div className="m-8">
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Date of Completion:</span> July 2023</p>
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Programming Skills:</span> Python</p>
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Concepts:</span> Data Analysis, Data Visualization, Machine Learning, Recommender Systems, Deep Learning, Big Data Analytics</p>
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Software Skills:</span> NumPy, Pandas, Matplotlib, Seaborn, Plotly, Scikit-Learn, TensorFlow, PySpark</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">Mastering the Coding Interview: Data Structures + Algorithms</h4>
                                <div className="m-8">
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Date of Completion:</span> Aug 2023</p>
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Programming Skills:</span> Python, JavaScript</p>
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Concepts:</span> Time Complexity, Space Complexity, Big O Notation, Data Structures, Algorithm Design</p>
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Software Skills:</span> NA</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">Complete SQL and Databases Bootcamp</h4>
                                <div className="m-8">
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Date of Completion:</span> Aug 2023</p>
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Programming Skills:</span> SQL</p>
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Concepts:</span> Basic SQL, Advanced SQL, Database Management, Database Design, Database Landscape, Performance & Security, Extras: Data Engineering, Machine Learning, Web Application Development</p>
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Software Skills:</span> PostgreSQL, Redis</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">Complete 2023 Web Development Bootcamp</h4>
                                <div className="m-8">
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Date of Completion:</span> Aug 2023</p>
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Programming Skills:</span> HTML, CSS, JavaScript, NoSQL, Unix, Git</p>
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Concepts:</span> Web Design, Front-End Development, Back-End Development, Version Control, Document Object Model, REST APIs, Databases, User Authentication </p>
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Software Skills:</span> Node.js, jQuery, EJS, React.js, MongoDB, OAuth, Axios, GitHub</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">100 Days of Code: The Complete Python Pro Bootcamp for 2023</h4>
                                <div className="m-8">
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Date of Completion:</span> Ongoing</p>
                                    {/* <p className="font-mono leading-6 mt-3"><span className="underline">Programming Skills:</span> Python</p> */}
                                    {/* <p className="font-mono leading-6 mt-3"><span className="underline">Concepts:</span> Data Analysis, Data Visualization, Machine Learning, Recommender Systems, Deep Learning, Big Data Analytics</p> */}
                                    {/* <p className="font-mono leading-6 mt-3"><span className="underline">Software Skills:</span> NumPy, Pandas, Matplotlib, Seaborn, Plotly, Scikit-Learn, TensorFlow, PySpark</p> */}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">Complete Web & Mobile Designer in 2023: UI/UX, Figma and more</h4>
                                <div className="m-8">
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Date of Completion:</span> Ongoing</p>
                                    {/* <p className="font-mono leading-6 mt-3"><span className="underline">Programming Skills:</span> Python</p> */}
                                    {/* <p className="font-mono leading-6 mt-3"><span className="underline">Concepts:</span> Data Analysis, Data Visualization, Machine Learning, Recommender Systems, Deep Learning, Big Data Analytics</p> */}
                                    {/* <p className="font-mono leading-6 mt-3"><span className="underline">Software Skills:</span> NumPy, Pandas, Matplotlib, Seaborn, Plotly, Scikit-Learn, TensorFlow, PySpark</p> */}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="m-10">
                                <h4 className="font-mono font-semibold text-2xl">Ultimate AWS Certified Solutions Architect Associate SAA-C03</h4>
                                <div className="m-8">
                                    <p className="font-mono leading-6 mt-3"><span className="underline">Date of Completion:</span> Ongoing</p>
                                    {/* <p className="font-mono leading-6 mt-3"><span className="underline">Programming Skills:</span> Python</p> */}
                                    {/* <p className="font-mono leading-6 mt-3"><span className="underline">Concepts:</span> Data Analysis, Data Visualization, Machine Learning, Recommender Systems, Deep Learning, Big Data Analytics</p> */}
                                    {/* <p className="font-mono leading-6 mt-3"><span className="underline">Software Skills:</span> NumPy, Pandas, Matplotlib, Seaborn, Plotly, Scikit-Learn, TensorFlow, PySpark</p> */}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;