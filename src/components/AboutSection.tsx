import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Shield, Globe } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Dev",
    desc: "Building responsive and interactive UIs with React & Tailwind",
  },
  {
    icon: Server,
    title: "Backend Dev",
    desc: "Developing APIs and server logic using Node.js & Flask",
  },
  {
    icon: Shield,
    title: "Security",
    desc: "Implementing JWT authentication and secure systems",
  },
  {
    icon: Globe,
    title: "Full Stack",
    desc: "Creating complete web applications from frontend to backend",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm a Computer Science undergraduate passionate about building
            modern, scalable web applications. I enjoy solving real-world
            problems through clean code, secure backend systems, and intuitive
            user interfaces.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center group hover:shadow-glow transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 mx-auto mb-4 gradient-bg rounded-lg flex items-center justify-center text-primary-foreground">
                <item.icon size={22} />
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
