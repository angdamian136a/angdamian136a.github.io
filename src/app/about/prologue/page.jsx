import Image from "next/image";
import japanFamilyPic from "../../../../public/images/family2.jpeg"

const Prologue = () => {
    return (
        <div className="m-10">
            <div className="m-5">
                <h1 className="font-mono text-3xl lg:text-4xl font-bold">
                    Prologue: Humble Beginnings
                </h1>
            </div>
            <hr/>
            <Image
                className="rounded-3xl object-center mx-5 my-10"
                src={japanFamilyPic}
                alt="Japan trip family picture"
                width={400}
                height={400}
            />
            <div className="m-5">
                <p>
                    I have been fortunate enough to be brought up in a middle-income family that provided me all the necessities I needed growing up. My father, a mechanical engineer by training, came from modest wealth, his father having been a successful entrepreneur in the thriving construction materials market of the 1960s in Singapore. Yet, every single cent my father had was earned through hard work, commitment and leadership in his first and only company, Sembcorp Marine (now Seatrium) where he rose to General Manager of the Engineering Department over the span of 37 years. My mother, a chemical engineer, was raised in a middle-income Peranakan family in Seremban, Malaysia by her parents, both government civil servants who enjoyed a stable income and healthy pension after retirement. Shortly after marriage, my mother gave up her profession to look after the three children (myself being the youngest), while my father took on the responsibility of the sole breadwinner of the family. 
                </p>
                <br/>
                <p>
                    Since my parents had both married late (my father being 40 years older than me), our family enjoyed relative stability and comfort as both of them had been working for a couple of years before settling down. I had a mostly normal childhood, living in an Hougang HDB (public housing) until I was 6 years old before moving to a condominium in Bukit Batok where I studied at neighbourhood schools (Dazhong Primary School, Bukit Batok Secondary School). My mother was the disciplinarian by far, her canings struck the fear of god within us and coupled with her hot-temperedness, she was not to be messed with. However, she was also capable of great kindness, warmth and loving care for us, actively listening to our concerns and troubles and protecting us with all her willpower. With my father away most of the time (including Saturdays), I can say with full certainty that she was the primary force that moulded my character and attitude during the formative years of my life.
                </p>
            </div>
        </div>
    );
};

export default Prologue;

