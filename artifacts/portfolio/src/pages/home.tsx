import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Python", "Django", "Odoo ERP", ".NET Core", "Laravel",
  "PostgreSQL", "Docker", "CI/CD", "REST APIs", "Agile",
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "3", label: "National Systems" },
  { value: "2", label: "Odoo App Store Modules" },
  { value: "1", label: "Programming Language Created" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Accent glow */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 text-sm font-mono text-primary border border-primary/30 rounded px-3 py-1 bg-primary/5">
                <MapPin className="h-3.5 w-3.5" />
                Kabul, Afghanistan
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
              data-testid="hero-name"
            >
              Faridullah
              <br />
              <span className="text-primary">Qaderi</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-xl md:text-2xl text-muted-foreground font-light mb-4"
              data-testid="hero-title"
            >
              Senior Software Engineer
              <span className="text-primary/60 mx-3">/</span>
              System Architect
              <span className="text-primary/60 mx-3">/</span>
              Technical Team Lead
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-base text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Building national-scale enterprise systems that power government infrastructure.
              Five years architecting secure, high-performance platforms that millions depend on.
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-3 mb-14"
            >
              <Button asChild size="lg" className="font-mono gap-2" data-testid="hero-cta-cv">
                <Link href="/cv">
                  View CV <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-mono gap-2" data-testid="hero-cta-contact">
                <Link href="/contact">
                  <Mail className="h-4 w-4" /> Contact Me
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="font-mono gap-2" data-testid="hero-cta-projects">
                <Link href="/projects">
                  Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Quick links */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-5 text-muted-foreground"
            >
              <a
                href="mailto:faridullah.qaderi@mcit.gov.af"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                data-testid="hero-link-email"
              >
                <Mail className="h-4 w-4" />
                faridullah.qaderi@mcit.gov.af
              </a>
              <a
                href="https://github.com/FaridullahQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                data-testid="hero-link-github"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="text-4xl font-bold font-mono text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="text-xs font-mono text-primary tracking-widest uppercase">Technical Stack</span>
            <h2 className="text-3xl font-bold mt-2">Core Technologies</h2>
          </motion.div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-mono hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  data-testid={`skill-badge-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work CTA */}
      <section className="py-20 border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "/about",
                label: "About Me",
                desc: "Professional background, competencies, and story",
                testid: "cta-card-about",
              },
              {
                href: "/projects",
                label: "Projects",
                desc: "Open-source work, ERP modules, and more",
                testid: "cta-card-projects",
              },
              {
                href: "/cv",
                label: "Full CV",
                desc: "Detailed experience, education, and certifications",
                testid: "cta-card-cv",
              },
            ].map((item, i) => (
              <motion.div
                key={item.href}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link href={item.href} data-testid={item.testid}>
                  <div className="group border rounded-lg p-6 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 cursor-pointer h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-lg">{item.label}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
