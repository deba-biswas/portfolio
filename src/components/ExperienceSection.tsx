import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const timeline = [
  {
    type: "cert",
    title: "XPro: Cybersecurity & API Testing",
    org: "Employability.life, Federation University Australia",
    date: "Mar 2025 – May 2025",
    desc: "Tested APIs, validated responses, and identified security vulnerabilities.",
  },
  {
    type: "cert",
    title: "Google Cybersecurity Specialization",
    org: "Google, Coursera",
    date: "Jan 2025 – Jun 2025",
    desc: "Learned network security, threat detection, and automation using Linux, SQL & Python.",
  },
  {
    type: "cert",
    title: "IBM Soft Skills Specialization",
    org: "IBM, Coursera",
    date: "Dec 2024 – Jan 2025",
    desc: "Improved communication, teamwork, and problem-solving skills.",
  },
  {
    type: "edu",
    title: "B.Tech in Computer Science Engineering",
    org: "Sister Nivedita University",
    date: "2022 – Present",
    desc: "Focused on full-stack development, DSA, and real-world projects.",
  },
  {
    type: "edu",
    title: "Higher Secondary (XII), Science",
    org: "Nawpara High School",
    date: "2021",
    desc: "",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="section-padding bg-secondary/30"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full gradient-bg -translate-x-1.5 mt-3 z-10 shadow-glow" />

              {/* Card */}
              <div
                className={`ml-10 md:ml-0 md:w-[45%] ${
                  i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
                }`}
              >
                <div className="glass-card rounded-xl p-5 border border-border/50 hover:shadow-glow transition-all duration-300">
                  {/* Top Row */}
                  <div
                    className={`flex items-center gap-2 mb-2 ${
                      i % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {item.type === "edu" ? (
                      <GraduationCap size={16} className="text-primary" />
                    ) : (
                      <Award size={16} className="text-accent" />
                    )}

                    <span className="text-xs text-muted-foreground font-medium">
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold mb-1">
                    {item.title}
                  </h3>

                  {/* Org */}
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.org}
                  </p>

                  {/* Description */}
                  {item.desc && (
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
