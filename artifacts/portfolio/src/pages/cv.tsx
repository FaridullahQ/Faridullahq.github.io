import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Globe, Users, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

const experience = [
  {
    role: "System Design & Analysis Specialist / Team Lead",
    org: "Ministry of Communications and Information Technology (MCIT)",
    location: "Kabul, Afghanistan",
    period: "April 2023 – Present",
    highlights: [
      "Lead architect for national-level ERP systems including Revenue, Sales, Accounting, Payroll Management, and Afghan Post operational modules",
      "Designed modular, scalable enterprise architectures supporting multiple ministries and integrating disparate government systems",
      "Managed the complete SDLC from requirements analysis and architectural design through development, deployment, and maintenance",
      "Authored comprehensive engineering documentation including SRS, UML diagrams, BPMN workflows, use cases, and API specifications",
      "Implemented structured testing strategies (unit, integration, and acceptance testing) across critical production environments",
      "Led and mentored cross-functional development teams using Agile methodologies",
      "Enforced coding standards, code reviews, and database optimization across all delivered projects",
    ],
  },
  {
    role: "Web & Desktop Application Developer",
    org: "QLinks Software House",
    location: "Jalalabad, Afghanistan",
    period: "June 2020 – June 2022",
    highlights: [
      "Developed and maintained web applications using Laravel (PHP) for diverse client requirements",
      "Built desktop applications with C# (.NET Framework) for business automation and operational management",
      "Optimized production systems through performance tuning, debugging, and database refinement",
      "Collaborated with cross-functional teams to deliver client projects on schedule",
    ],
  },
  {
    role: "IT Manager",
    org: "Shaheen Training Center",
    location: "Jalalabad, Afghanistan",
    period: "March 2018 – May 2020",
    highlights: [
      "Managed organizational IT infrastructure including networks, servers, endpoint systems, and information security policies",
      "Supervised IT support team, coordinating technical operations and ensuring uninterrupted service delivery",
      "Streamlined IT processes and introduced standardized procedures, improving operational efficiency and reducing system downtime",
    ],
  },
];

const education = [
  {
    degree: "Master of Science (M.Sc.) in Information Technology",
    institution: "Kabul University",
    location: "Kabul, Afghanistan",
    period: "2023 – 2025",
  },
  {
    degree: "Bachelor of Science (B.Sc.) in Computer Science",
    institution: "Nangarhar University",
    location: "Nangarhar, Afghanistan",
    period: "2016 – 2020",
    note: "Specialization: Networking & Communication",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Mia Omar High School",
    location: "",
    period: "2014",
  },
];

const certifications = [
  { name: "Diploma in English Language (DEL)", issuer: "Microsoft Educational Center", year: "2016" },
  { name: "Diploma in Information Technology (DIT)", issuer: "Zia Institute of Computer Science (ZICS)", year: "2012" },
  { name: "Certificate in Information Technology (CIT)", issuer: "Sayed Jamal Uddin Institute", year: "2011" },
  { name: "Diploma in English Language (DEL)", issuer: "Azrakash Computer & English Academic Center", year: "2011" },
];

const references = [
  {
    name: "Eng. Mahdi Dahmardah",
    org: "Ministry of Communications and Information Technology (MCIT)",
    email: "mahdidahmardah@gmail.com",
    phone: "+93 74 426 6486",
  },
  {
    name: "Eng. Zakirullah Zahid",
    org: "Ministry of Communications and Information Technology (MCIT)",
    email: "zakirullahzd@gmail.com",
    phone: "+93 766 245 618",
  },
];

function SectionHeader({ icon: Icon, title, index }: { icon: React.ElementType; title: string; index: number }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="flex items-center gap-3 mb-8"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex-1 h-px bg-border" />
    </motion.div>
  );
}

export default function Cv() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        {/* Header */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-primary tracking-widest uppercase">Curriculum Vitae</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-1 mb-2">Faridullah Qaderi</h1>
              <p className="text-lg text-muted-foreground font-mono">
                Senior Software Engineer · System Architect · Technical Team Lead
              </p>
              <p className="text-sm text-muted-foreground mt-1">Kabul, Afghanistan · +93 788 707 479 · faridullah.qaderi@mcit.gov.af</p>
            </div>
            <Button
              variant="outline"
              className="font-mono gap-2 shrink-0 print:hidden"
              onClick={() => window.print()}
              data-testid="button-download-cv"
            >
              <Download className="h-4 w-4" />
              Download / Print
            </Button>
          </div>
        </motion.div>

        <Separator className="mb-12" />

        {/* Professional Summary */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12"
        >
          <h2 className="text-xs font-mono text-primary tracking-widest uppercase mb-4">Professional Summary</h2>
          <p className="text-muted-foreground leading-relaxed">
            Senior Software Engineer and System Architect with over five years of experience leading the full
            Software Development Life Cycle (SDLC), enterprise system architecture, and large-scale government
            digital transformation initiatives. Specialized in Python, Django, Odoo ERP (v15–v19), RESTful API
            design, and database architecture, with a strong record of delivering national-level enterprise systems.
            Proven ability to translate complex business and financial requirements into secure, scalable, and
            maintainable solutions.
          </p>
        </motion.div>

        {/* Experience */}
        <div className="mb-14">
          <SectionHeader icon={Briefcase} title="Professional Experience" index={2} />
          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.role}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative pl-5 border-l-2 border-border hover:border-primary/50 transition-colors"
                data-testid={`experience-${i}`}
              >
                <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-primary" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-semibold text-base">{job.role}</h3>
                    <p className="text-sm text-primary font-mono">{job.org}</p>
                    <p className="text-xs text-muted-foreground">{job.location}</p>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs shrink-0 self-start">{job.period}</Badge>
                </div>
                <ul className="space-y-1.5">
                  {job.highlights.map((point, pi) => (
                    <li key={pi} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="mt-1.5 h-1 w-1 rounded-full bg-primary/60 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-14">
          <SectionHeader icon={GraduationCap} title="Education" index={3} />
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative pl-5 border-l-2 border-border hover:border-primary/50 transition-colors"
                data-testid={`education-${i}`}
              >
                <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-primary" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-primary font-mono">{edu.institution}</p>
                    {edu.location && <p className="text-xs text-muted-foreground">{edu.location}</p>}
                    {edu.note && <p className="text-xs text-muted-foreground italic">{edu.note}</p>}
                  </div>
                  <Badge variant="outline" className="font-mono text-xs shrink-0 self-start">{edu.period}</Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-14">
          <SectionHeader icon={Award} title="Certifications & Training" index={4} />
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={`${cert.name}-${cert.year}`}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border rounded p-4 bg-card hover:border-primary/30 transition-colors"
                data-testid={`cert-${i}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-sm">{cert.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-xs font-mono text-primary shrink-0">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* References */}
        <div className="mb-8">
          <SectionHeader icon={Users} title="References" index={5} />
          <div className="grid sm:grid-cols-2 gap-4">
            {references.map((ref, i) => (
              <motion.div
                key={ref.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border rounded p-5 bg-card"
                data-testid={`reference-${i}`}
              >
                <p className="font-semibold">{ref.name}</p>
                <p className="text-sm text-primary font-mono mt-0.5">{ref.org}</p>
                <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                  <a href={`mailto:${ref.email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                    {ref.email}
                  </a>
                  <p>{ref.phone}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
