import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-[80px] animate-blob" />
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4"
          >
            Debangshu{" "}
            <span className="gradient-text inline-block animate-gradient">
              Biswas
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
          >
            Full Stack Developer | Problem Solver | CS Undergraduate
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="relative gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-glow"
            >
              View Projects <ExternalLink size={16} />
            </a>
            <a
              href="#contact"
              className="glass-card px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1V3ZlJK-ANXUdGTytK5NPvgcBFSVFiZS5"
              target="_blank"
              className="glass-card px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-secondary transition-colors"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 gradient-bg rounded-full opacity-20 blur-2xl animate-float" />
            <img
              src={profilePhoto}
              alt="Debangshu Biswas"
              width={512}
              height={512}
              className="relative w-full h-full object-cover rounded-full border-4 border-card shadow-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs tracking-widest uppercase opacity-70">
            Scroll Down
          </span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
