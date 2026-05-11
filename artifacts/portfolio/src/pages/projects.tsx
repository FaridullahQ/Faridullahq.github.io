import { motion } from "framer-motion";
import { Github, ExternalLink, BookOpen, Package, Code2, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const featuredProjects = [
  {
    icon: Code2,
    title: "Harm Programming Language",
    subtitle: "Founder & Developer",
    description:
      "An original Python-based programming language with English-like syntax designed to lower the barrier to entry for new programmers. Built from scratch including the Lexer, parser, and interpreter, with support for variables, loops, conditional statements, and functions. Released as an open-source educational initiative.",
    tags: ["Python", "Interpreter Design", "Lexer", "Parser", "Open Source", "Education"],
    url: "https://github.com/FaridullahQ/harm-lang",
    urlLabel: "View on GitHub",
    urlIcon: Github,
    status: "Open Source",
  },
  {
    icon: Package,
    title: "Hijri Shamsi Date Module",
    subtitle: "Published on Odoo App Store",
    description:
      "A localization module providing the Afghan Hijri Shamsi calendar system within Odoo ERP. Enables Afghan organizations to work natively with their local calendar alongside the Gregorian calendar, supporting compliance and usability for government and enterprise deployments.",
    tags: ["Odoo ERP", "Python", "Localization", "Afghan Calendar", "ERP Module"],
    url: "#",
    urlLabel: "View on App Store",
    urlIcon: ExternalLink,
    status: "Published",
  },
  {
    icon: Globe,
    title: "AI-Based Auto Translation Module",
    subtitle: "Published on Odoo App Store",
    description:
      "An Odoo module that integrates AI translation services directly into ERP workflows, enabling automated translation of documents, records, and interface elements. Designed for multilingual organizations operating across language boundaries.",
    tags: ["Odoo ERP", "Python", "AI Integration", "Translation", "Automation"],
    url: "#",
    urlLabel: "View on App Store",
    urlIcon: ExternalLink,
    status: "Published",
  },
  {
    icon: BookOpen,
    title: "Cyber Security Awareness Publication",
    subtitle: "Author",
    description:
      "A Pashto-language book on cybersecurity awareness addressing digital safety, common cyber threats, and protective practices for general readers. Aimed at promoting cyber awareness within Pashto-speaking communities where local-language resources are limited.",
    tags: ["Cybersecurity", "Pashto", "Publication", "Digital Safety", "Community"],
    url: "#",
    urlLabel: "Learn More",
    urlIcon: BookOpen,
    status: "Published",
  },
];

const placeholderProjects = [
  {
    title: "Project Title",
    description:
      "Add your project description here. Describe the problem it solves, the technologies used, and the impact it created. This is a placeholder card ready for your customization.",
    tags: ["Technology", "Stack", "Here"],
    placeholder: true,
  },
  {
    title: "Project Title",
    description:
      "Add your project description here. Describe the problem it solves, the technologies used, and the impact it created. This is a placeholder card ready for your customization.",
    tags: ["Technology", "Stack", "Here"],
    placeholder: true,
  },
];

export default function Projects() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Projects & Innovations</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Work that Ships</h1>
          <p className="text-muted-foreground leading-relaxed">
            From national-scale ERP systems to open-source programming languages and published Odoo modules —
            a selection of projects built with purpose.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {featuredProjects.map((project, i) => {
            const Icon = project.icon;
            const UrlIcon = project.urlIcon;
            return (
              <motion.div
                key={project.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group border rounded-lg bg-card p-6 flex flex-col hover:border-primary/40 hover:shadow-md transition-all duration-200"
                data-testid={`project-card-${i}`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10 text-primary shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <Badge
                    variant={project.status === "Open Source" ? "default" : "secondary"}
                    className="font-mono text-xs shrink-0"
                  >
                    {project.status}
                  </Badge>
                </div>

                <h3 className="font-bold text-lg mb-0.5">{project.title}</h3>
                <p className="text-xs font-mono text-primary mb-3">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {project.url !== "#" && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-fit gap-2 font-mono text-xs"
                    data-testid={`project-link-${i}`}
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <UrlIcon className="h-3.5 w-3.5" />
                      {project.urlLabel}
                    </a>
                  </Button>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Placeholder Projects */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Coming Soon</span>
          <h2 className="text-lg font-semibold mt-1 mb-5">More Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {placeholderProjects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="border border-dashed rounded-lg p-6 bg-muted/20 opacity-60"
              data-testid={`placeholder-project-${i}`}
            >
              <div className="h-10 w-10 rounded bg-muted mb-4" />
              <h3 className="font-bold text-lg mb-3 text-muted-foreground">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs font-mono opacity-50">
                    {tag}
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
