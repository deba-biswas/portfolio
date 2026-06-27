import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import projectEmployee from "@/assets/employee-management.png";
import projectBlog from "@/assets/blog.png";
import projectCafe from "@/assets/cafe-management.png";

const projects = [
  {
    title: "Café Ember - Cafe Management System",
    desc: "System to manage cafe orders, billing, and inventory with a simple and efficient dashboard.",
    tech: ["React", "Tailwind CSS", "Flask", "MongoDB"],
    image: projectCafe,
    github: "https://github.com/deba-biswas/cafe-ember.git",
    live: "#",
    featured: true,
  },
  {
    title: "Blogging Platform",
    desc: "Responsive blogging app with authentication and content management features.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    image: projectBlog,
    github: "https://github.com/deba-biswas/quillspace.git",
    live: "#",
    featured: true,
  },
  {
    title: "Employee Management System",
    desc: "Secure dashboard with role-based access and efficient employee data management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: projectEmployee,
    github: "#",
    live: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">Things I've built</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects
            .slice(0, showAll ? projects.length : 2)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card rounded-xl overflow-hidden group hover:shadow-glow transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full bg-primary/80 text-white">
                      Featured
                    </div>
                  )}

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-white hover:opacity-80"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="text-white hover:opacity-80"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={16} /> GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="gradient-bg px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition"
          >
            {showAll ? "Show Less" : "View More Projects"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
