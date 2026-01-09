import PageHeader from "@/components/PageHeader";
import caseStudiesHero from "@/assets/generated/case_studies_hero.png";
import caseStudy1 from "@/assets/generated/case_study_1.png";
import caseStudy2 from "@/assets/generated/case_study_2.png";

const CaseStudies = () => {
  const cases = [
    {
      title: "The Milano",
      description:
        "The Milano, an impressive development comprising 14 boutique apartments and two commercial units, stands proudly in Leederville, having been completed in late 2022. Designed",
      image: caseStudy1,
      link: "#",
    },
    {
      title: "Modèle",
      description:
        "Modèle is a boutique development of 18 apartment residences and penthouses in Como, set for completion by mid-2025. Featuring open-plan living spaces and stunning",
      image: caseStudy2,
      link: "#",
    },
    {
      title: "Elysian",
      description:
        "Scheduled for completion in 2024, a boutique collection of 34 apartments situated at the prestigious Paris end of Subiaco is currently in development. In",
      image: caseStudy1,
      link: "#",
    },
    {
      title: "123 Claisebrook",
      description:
        "123 Claisebrook, located in Perth, is a beautiful and unique heritage building that has undergone a complete redevelopment in 2022. Originally built in 1890, the",
      image: caseStudy2,
      link: "#",
    },
    {
      title: "Challis Apartments",
      description:
        "Challis is a boutique mixed-use development in the heart of Mt Lawley on Beaufort Street. Featuring 26 modern apartments ranging from 1 to 3",
      image: caseStudy1,
      link: "#",
    },
    {
      title: "Matheson on Kearns",
      description:
        "Matheson on Kearns is a six-storey mixed use development with 46 residential apartments, a café, a restaurant and office area. The development is located",
      image: caseStudy2,
      link: "#",
    },
    {
      title: "26 on Charles",
      description:
        "26 on Charles is a mixed-use development in South Perth comprising of 28 residential apartments and 14 commercial tenancies. The project build was completed",
      image: caseStudy1,
      link: "#",
    },
    {
      title: "Little Lane",
      description:
        "Located in downtown Fremantle, Little Lane is a seven-storey mixed used development consisting of 70 residential apartments and six ground floor commercial tenancies. The",
      image: caseStudy2,
      link: "#",
    },
    {
      title: "The Foundry",
      description:
        "Located in the heart of Leederville, the Foundry is a mixed used development consisting of 40 residential apartments and 4 floors of commercial tenancies.",
      image: caseStudy1,
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHeader
        title="Smart buildings, happy customers"
        subheading="See for yourself."
        backgroundImage={caseStudiesHero}
        className="text-white"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A202C] leading-tight mb-4">
            We’re proud of our work and invite you to take a closer look at some
            of our key projects.
          </h2>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow text-left">
                  <h3 className="text-2xl font-bold text-[#2D3092] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mb-8 leading-relaxed font-light text-sm flex-grow">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    className="text-[#2D3092] font-bold text-xs tracking-widest uppercase hover:underline mt-auto inline-flex items-center"
                  >
                    READ MORE »
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
