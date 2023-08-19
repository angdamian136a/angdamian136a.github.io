import Image from "next/image"
import Link from "next/link"
import homePic from "../../public/images/profile3.jpeg"
import ordPic from "../../public/images/profile4.jpeg"
import bizCasualPic from "../../public/images/profile5.jpeg"
import perthOne from "../../public/images/profile6.jpeg"
export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center mx-5">
        <Image
          className="flex rounded-3xl object-center mx-5 my-10"
          src={homePic}
          alt="Home profile picture"
          width={500}
          height={500}
        />
        {/* <Image
          className="flex rounded-3xl object-center mx-5 my-10"
          src={bizCasualPic}
          alt="Business casual picture"
          width={330}
          height={400}
        /> */}
        <Image
          className="flex rounded-3xl object-center mx-5 my-10"
          src={ordPic}
          alt="ORD graduation picture 1"
          width={500}
          height={500}
        />
        <Image
          className="flex rounded-3xl object-center mx-5 my-10"
          src={perthOne}
          alt="Perth trip: Sand dunes"
          width={650}
          height={500}
        />
        {/* <div>
          <h1 className="font-mono text-5xl lg:text-6xl font-extrabold">Ang Guan Ghee, Damian</h1>
        </div> */}
      </div>
      <div className="flex justify-center mx-5 mt-10 mb-20 px-10 md:mx-20">
        <div className="font-sans text-xl lg:text-2xl leading-10 lg:leading-loose">
          <h2>Hello there! My name is <span className="font-bold text-3xl lg:text-4xl text-amber-300">Damian</span>, and here's a short introduction about myself 😉</h2>
          <br/>
          <p>I'm currently a Year 3 undergraduate at Singapore's <span className="font-bold text-amber-200">Nanyang Technological University [NTU]</span>, pursuing a <span className="font-bold text-amber-200">Bachelor of Science [BSc] with the School of Biological Sciences [SBS]</span> as part of the four-year Double Major Programme (Honours) in <Link href={"https://www.ntu.edu.sg/sbs/admissions/programmes/undergraduate/undergraduate-programmes/detail/bachelor-of-science-in-biomedical-sciences-and-biobusiness"} className="font-bold text-amber-200 underline hover:text-amber-400">Biomedical Sciences and BioBusiness [BSB]</Link>. Under this programme, I will be cross-trained in biomedical sciences/biotechnology and biobusiness (business/management with relevance to the biomedical/healthcare sector).</p>
          <br/>
          <p>I'm a budding scientist eager to learn across a vast multitude of fields with a primary focus on <span className="font-bold text-amber-200">Bioinformatics / Computational Biology</span>, a fascinating intersection of the amazing, ever-intertwining domains of the biological and computational sciences.</p>
          <br/>
          <p>I have adopted an intensive growth mindset with the goal of building a set of <Link href={"https://corporatefinanceinstitute.com/resources/management/t-shaped-skills/"} className="font-bold text-amber-200 underline hover:text-amber-400">T-shaped skills</Link> to truly provide value to society. I have set my in-depth learning focuses on <span className="font-bold text-amber-200">Biomedical Sciences, BioBusiness and Bioinformatics</span> while simultaneously broadening my scope of knowledge to encompass <span className="font-bold text-amber-200"> Business, Finance and Economics</span> alongside my personal hobbyist indulgences in <span className="font-bold text-amber-200">History, Politics and Global Affairs</span>.</p>
          <br/>
          {/* <p>Additionally, despite my less-than-satisfactory aptitude towards the languages, I enjoy learning how to <span className="font-bold text-2xl text-amber-200">converse in foreign languages</span> from my incredibly supportive international friends because of its enriching importance in every society's culture, tradition and history.</p> */}
          <p>On the side, I really love reading and writing, recreational kayaking, keeping fit, cooking and baking, and more recently, I've been doing web development as a more mentally-invigorating hobby.</p>
        </div>
      </div>
    </div>
  )
}