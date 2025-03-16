const services = [
  {
    id: "01",
    title: "Web Design",
    description:
      "Crafting visually stunning and user-friendly websites tailored to your brand's identity and goals.",
  },
  {
    id: "02",
    title: "SEO Optimization",
    description:
      "Enhancing your website's visibility and ranking on search engines through strategic keyword integration and technical optimization.",
  },
  {
    id: "03",
    title: "UI/UX Design",
    description:
      "Creating intuitive and engaging user experiences and interfaces that prioritize user satisfaction and ease of use.",
  },
  {
    id: "04",
    title: "Digital Marketing",
    description:
      "Strategizing and executing comprehensive digital marketing campaigns to boost your online presence and engagement.",
  },
  {
    id: "05",
    title: "Content Creation",
    description:
      "Crafting engaging and relevant content. including blogs, videos...",
  },
  {
    id: "06",
    title: "Social Media Management",
    description: "Managing your social media channels to build brand...",
  },
];

function Services() {
  return (
    <section className="text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
          <h2 className="text-6xl font-extrabold sticky top-20">SERVICES</h2>
        </div>
        <div className="md:w-3/4">
          {services.map((service) => (
            <div key={service.id} className="mb-16 flex items-center">
              <div className="text-purple-400 font-bold text-5xl mr-6">
                {service.id}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
