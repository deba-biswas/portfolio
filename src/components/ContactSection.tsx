import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    window.location.href = `mailto:debangshubiswas637@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    // reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Let’s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground">
            Open to internships, freelance work, and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-xl p-6 flex flex-col gap-4 border border-border/50"
          >
            <div>
              <label className="text-sm font-medium mb-1.5 block">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm resize-none"
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </div>

            <button
              type="submit"
              className="gradient-bg text-primary-foreground px-6 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-glow"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center gap-6"
          >
            {/* Email */}
            <div className="glass-card rounded-xl p-5 flex items-center gap-4 border border-border/50">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-primary-foreground">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:debangshubiswas637@gmail.com"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  debangshubiswas637@gmail.com
                </a>
              </div>
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/deba-biswas/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-5 flex items-center gap-4 border border-border/50"
            >
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-primary-foreground">
                <Github size={18} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <span className="text-sm font-medium">
                  github.com/deba-biswas
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/debangshu-biswas/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-5 flex items-center gap-4 border border-border/50"
            >
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-primary-foreground">
                <Linkedin size={18} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <span className="text-sm font-medium">
                  linkedin.com/in/debangshu-biswas
                </span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
