import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Google Cybersecurity Specialization",
    org: "Google • Coursera",
    date: "Jan 2025 – Jun 2025",
    desc: "Built a strong foundation in cybersecurity including network security, threat detection, incident response, and risk management. Gained hands-on experience with Linux, SQL, and Python to analyze security threats and automate tasks.",
    skills: ["Linux", "Python", "SQL", "Security"],
    link: "https://www.coursera.org/account/accomplishments/specialization/77APZDVV4YP2",
  },
  {
    title: "XPro: Cybersecurity & API Testing",
    org: "Federation University Australia",
    date: "Mar 2025 – May 2025",
    desc: "Built a strong foundation in cybersecurity including network security, threat detection, incident response, and risk management. Gained hands-on experience with Linux, SQL, and Python to analyze security threats and automate tasks.",
    skills: ["Linux", "API Testing", "Postman", "Security"],
    link: "https://verify.employability.life/verify?data=U2FsdGVkX1%2F9V3newb8TT3kqDQjAf9mtmxCsbfFOJd%2B79r%2Bd2HqenhIw6Lwekv8D%2FFFCcPkBk8Dj4SEa5m9OeeaVAY3rGv8Vl4Ja4nDCfbQ%3D",
  },
  {
    title: "IBM Soft Skills Specialization",
    org: "IBM • Coursera",
    date: "Dec 2024 – Jan 2025",
    desc: "Built a strong foundation in cybersecurity including network security, threat detection, incident response, and risk management. Gained hands-on experience with Linux, SQL, and Python to analyze security threats and automate tasks.",
    skills: ["Communication", "Teamwork", "Problem Solving"],
    link: "https://www.coursera.org/account/accomplishments/specialization/41OL7VQAUL35",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    org: "Postman",
    date: "Jul 2025",
    desc: "Demonstrated strong understanding of API fundamentals by working with REST APIs in Postman. Performed GET, POST, PATCH, and DELETE requests, handled headers, query parameters, and authentication, and completed hands-on tasks by building and testing API collections.",
    skills: ["API", "Postman", "REST", "API Testing", "Scripting"],
    link: "https://api.badgr.io/public/assertions/ex_g-8ndS6e_Sx_z8vENmw",
  },
];

const CertificationsSection = () => {
  const [active, setActive] = useState(1);
  const [transition, setTransition] = useState(true);

  const sliderRef = useRef<HTMLDivElement>(null);

  // Clone slides for infinite effect
  const slides = [
    certifications[certifications.length - 1],
    ...certifications,
    certifications[0],
  ];

  const nextSlide = () => setActive((prev) => prev + 1);
  const prevSlide = () => setActive((prev) => prev - 1);

  // Seamless loop logic
  useEffect(() => {
    if (!sliderRef.current) return;

    const handleTransitionEnd = () => {
      if (active === slides.length - 1) {
        setTransition(false);
        setActive(1);
      }
      if (active === 0) {
        setTransition(false);
        setActive(slides.length - 2);
      }
    };

    const slider = sliderRef.current;
    slider.addEventListener("transitionend", handleTransitionEnd);

    return () =>
      slider.removeEventListener("transitionend", handleTransitionEnd);
  }, [active, slides.length]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  // Swipe support
  const startX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  return (
    <>
      <section id="certifications" className="section-padding bg-secondary/30">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>

          <p className="text-muted-foreground mb-12">
            My learning journey and achievements
          </p>

          {/* Slider */}
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={sliderRef}
              className="flex"
              style={{
                transform: `translateX(-${active * 100}%)`,
                transition: transition ? "transform 0.5s ease" : "none",
              }}
            >
              {slides.map((cert, i) => (
                <div
                  key={i}
                  className="min-w-full flex items-center justify-center px-4"
                >
                  <div className="glass-card p-10 md:p-12 rounded-2xl max-w-xl md:max-w-2xl w-full border border-border/50 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
                    {/* Title */}
                    <h3 className="text-2xl font-semibold mb-2">
                      {cert.title}
                    </h3>

                    {/* Org */}
                    <p className="text-sm text-muted-foreground mb-1">
                      {cert.org}
                    </p>

                    {/* Date */}
                    <span className="text-xs text-primary font-medium mb-4 block">
                      {cert.date}
                    </span>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-5">
                      {cert.desc}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        className="text-sm text-primary flex items-center justify-center gap-1 hover:underline"
                      >
                        View Certificate <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass-card hover:bg-secondary transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass-card hover:bg-secondary transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-border/50 mt-16" />
    </>
  );
};

export default CertificationsSection;
