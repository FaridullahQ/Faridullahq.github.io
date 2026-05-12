import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const competencies = [
  "Full Software Development Life Cycle (SDLC)",
  "Enterprise System Architecture & Design",
  "Requirements Engineering (SRS, UML, BPMN, DFD)",
  "Backend Development (Python, Django, Odoo, .NET Core)",
  "RESTful API Design & System Integration",
  "Database Design & Optimization (PostgreSQL, MySQL)",
  "Software Testing (Unit, Integration, TDD/BDD)",
  "Agile / Scrum / Kanban Methodologies",
  "Technical Documentation & System Analysis",
  "Team Leadership & Technical Mentoring",
  "Government & Enterprise System Delivery",
  "Secure & High-Performance Software Engineering",
];

const techGroups = [
  {
    category: "Languages & Frameworks",
    items: ["Python", "Django", "Odoo ERP (v15–v19)", ".NET Core", "Laravel (PHP)", "C#"],
  },
  {
    category: "Web Technologies",
    items: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "ORM Optimization"],
  },
  {
    category: "System Engineering",
    items: ["SDLC", "Monolithic Architecture", "Modular Monolithic", "Microservices", "API Design"],
  },
  {
    category: "Testing & DevOps",
    items: ["Unit Testing", "Integration Testing", "TDD/BDD", "Git", "Docker", "CI/CD"],
  },
  {
    category: "Methodologies & Docs",
    items: ["Agile", "Scrum", "Kanban", "SRS", "UML", "BPMN", "DFD", "Use Cases"],
  },
];

const languages = [
  { lang: "Pashto", level: "Fluent" },
  { lang: "Dari", level: "Fluent" },
  { lang: "English", level: "Fluent" },
];

export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-14 max-w-3xl"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">About Me</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Building Systems at National Scale
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Senior Software Engineer and System Architect with over five years of experience
            leading the full Software Development Life Cycle (SDLC), enterprise system
            architecture, and large-scale government digital transformation initiatives.
            Specialized in Python, Django, Odoo ERP (v15–v19), RESTful API design, and database
            architecture, with a strong record of delivering national-level enterprise systems.
            Proven ability to translate complex business and financial requirements into secure,
            scalable, and maintainable solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact card */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="border rounded-lg p-6 bg-card h-fit"
          >
            <h2 className="font-semibold text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
              Contact
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5" data-testid="about-location">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Kabul, Afghanistan</span>
              </div>
              <a
                href="mailto:faridullah.qaderi@mcit.gov.af"
                className="flex items-start gap-2.5 hover:text-primary transition-colors"
                data-testid="about-email"
              >
                <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="break-all">faridullah.qaderi@mcit.gov.af</span>
              </a>
              <div className="flex items-start gap-2.5" data-testid="about-phone">
                <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>+93 788 707 479</span>
              </div>
            </div>

            <h2 className="font-semibold text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3 mt-8">
              Languages
            </h2>
            <div className="space-y-2 text-sm">
              {languages.map((l) => (
                <div key={l.lang} className="flex justify-between items-center" data-testid={`language-${l.lang.toLowerCase()}`}>
                  <span>{l.lang}</span>
                  <Badge variant="outline" className="text-xs">{l.level}</Badge>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core competencies */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="md:col-span-2"
          >
            <h2 className="font-semibold text-sm font-mono text-muted-foreground uppercase tracking-wider mb-5">
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {competencies.map((c, i) => (
                <motion.div
                  key={c}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-start gap-2 p-3 rounded border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all"
                  data-testid={`competency-${i}`}
                >
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm">{c}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Technical Skills</span>
          <h2 className="text-2xl font-bold mt-1 mb-8">Full Stack Proficiency</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              custom={gi}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="border rounded-lg p-5 bg-card"
              data-testid={`tech-group-${gi}`}
            >
              <h3 className="text-xs font-mono text-primary uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="font-mono text-xs"
                    data-testid={`tech-badge-${item.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
