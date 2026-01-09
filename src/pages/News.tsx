import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import newsHero from "@/assets/generated/news_hero.png";
import news1 from "@/assets/generated/news_1.png";
import news2 from "@/assets/generated/news_2.png";
import news3 from "@/assets/generated/news_3.png";

const News = () => {
  const articles = [
    {
      title: "Understanding Smart Meter Billing",
      date: "September 17, 2025",
      description:
        "Why Does My Bill Not Show a Start and End Meter Reading? Your electricity usage is measured using a smart (interval) meter, which records how",
      image: news1,
      link: "#",
    },
    {
      title:
        "The Strategic Shift to Outsourcing Embedded Networks Amidst Regulatory Changes",
      date: "May 22, 2024",
      description:
        "Strata Companies in Western Australia are facing a shifting landscape in the management of embedded networks, with new regulations and compliance requirements looming on the",
      image: news2,
      link: "#",
    },
    {
      title: "Voluntary Embedded Networks Code of Practice Now Live",
      date: "March 11, 2024",
      description:
        "Registration is now open for Embedded Network Sellers to participate in the Voluntary Embedded Networks Code of Practice. The implementation of this code comes amidst",
      image: news3,
      link: "#",
    },
    {
      title: "Billing for EV Charger Usage in Strata",
      date: "January 10, 2024",
      description:
        "As electric vehicles (EVs) become increasingly popular, apartment buildings face a unique challenge—how to effectively and fairly bill residents for EV charger usage. In this",
      image: news3,
      link: "#",
    },
    {
      title:
        "Understanding the Cost Implications: EV Charging Infrastructure in Multi-Tenanted Buildings",
      date: "July 26, 2023",
      description:
        "Many Strata communities are taking proactive steps to accommodate rise of electric vehicles (EVs) in Australia. However, amidst the enthusiasm for EV adoption, it is",
      image: news1,
      link: "#",
    },
    {
      title:
        "Bright Connect residential customers can now apply for the Household Electricity Credit",
      date: "July 12, 2023",
      description:
        "Good news for Bright Connect residential customers! You can now apply for the Household Electricity Credit, a payment introduced by the Western Australian State Government",
      image: news2,
      link: "#",
    },
    {
      title: "Strata Managed Embedded Networks: The Model in Crisis",
      date: "May 10, 2023",
      description:
        "An embedded network is collection of private electricity meters that sit behind a single connection to the local electricity grid of a multi-lot building, such",
      image: news2,
      link: "#",
    },
    {
      title: "Changes to Synergy Electricity Prices for 2023",
      date: "July 7, 2023",
      description:
        "The WA State Government has recently announced upcoming changes to the regulated electricity tariffs, set to be implemented on 1st July 2023. These changes will",
      image: news1,
      link: "#",
    },
    {
      title: "New NCC Requirements for EV Charging Infrastructure in Carparks",
      date: "October 10, 2022",
      description:
        "The National Construction Code (NCC) has introduced new requirements for electric vehicle (EV) charging infrastructure in carparks associated with certain building classes. The changes aim",
      image: news3,
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHeader
        title="Read it bright here"
        subheading="Get the latest industry insights and updates."
        backgroundImage={newsHero}
        className="text-white"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A202C] mb-4">
            Keep up to date with the latest
          </h2>
        </div>
      </section>

      {/* News Grid */}
      <section className="pb-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white group flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow text-left border border-t-0 border-gray-100">
                  <h3 className="text-xl font-bold text-[#2D3092] mb-4 leading-tight">
                    {article.title}
                  </h3>
                  <RevealOnScroll>
                    <p className="text-gray-500 font-light text-sm mb-6 leading-relaxed flex-grow">
                      {article.description}
                    </p>
                  </RevealOnScroll>

                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <a
                      href={article.link}
                      className="text-[#2D3092] font-bold text-xs tracking-widest uppercase hover:underline"
                    >
                      READ MORE »
                    </a>
                    <span className="text-gray-400 text-xs">
                      {article.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
