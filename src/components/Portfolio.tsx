"use client";

import Image from "next/image";
import { useState } from "react";

import project1 from "@/assets/proj5.png";
import project2 from "@/assets/proj6.png";
import project3 from "@/assets/proj7.png";

const projects = [
  {
    id: 1,
    year: 2023,
    title: "Doodle - customer support chatbot",
    description:
      "We built an advanced customer support chatbot for Doodle. Our chatbot now handles 87% of Doodle's customer support inquiries, freeing up their team to focus on more complex issues.",
    image: project1,
  },
  {
    id: 2,
    year: 2024,
    title: "Dash - AI calling system",
    description:
      "We developed Dash, an AI-powered calling system that enhances customer communication and support with automated...",
    image: project2,
  },
  {
    id: 3,
    year: 2024,
    title: "Atomic - AI driven outreach",
    description:
      "Atomic is our AI-driven outreach tool that maximize engagement and conversions through intelligent automation.",
    image: project3,
  },
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="portfolio" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-purple-300">project</span>
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group"
            >
              <p className="text-purple-300 text-lg mb-2">{project.year}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-purple-500 transition-colors duration-300 ${
                  selectedProject.id === project.id && "text-purple-300"
                }`}
              >
                {project.title} ↗
              </h3>
              {selectedProject.id === project.id && (
                <>
                  <div className="border-b-2 border-purple-300 my-4" />
                  <p className="text-gray-400 transition-all duration-500 ease-in-out">
                    {project.description}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
        <Image
          src={selectedProject.image}
          alt={selectedProject.title}
          className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
          width={800}
          height={450}
        />
      </div>
    </section>
  );
}

export default Portfolio;
