import { motion } from "framer-motion";
import { Download, Building2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CoverLetter() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        {/* Top meta */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Cover Letter</span>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-3">
            <div>
              <h1 className="text-3xl font-bold">Senior Software Engineer Officer</h1>
              <p className="text-muted-foreground font-mono text-sm mt-1">Grade 7 · Job ID 3160 · Da Afghanistan Bank</p>
            </div>
            <Button
              variant="outline"
              className="font-mono gap-2 shrink-0 print:hidden"
              onClick={() => window.print()}
              data-testid="button-print-cover-letter"
            >
              <Download className="h-4 w-4" />
              Print / Save
            </Button>
          </div>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="border rounded-lg bg-card overflow-hidden">
            {/* Letter header */}
            <div className="bg-muted/40 border-b px-8 py-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">Faridullah Qaderi</p>
                  <p className="text-sm text-muted-foreground font-mono">Senior Software Engineer · System Architect · Technical Team Lead</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Kabul, Afghanistan &nbsp;·&nbsp; +93 788 707 479 &nbsp;·&nbsp; faridullah.qaderi@mcit.gov.af
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                  <Calendar className="h-4 w-4 text-primary" />
                  28 April 2026 &nbsp;/&nbsp; 1405-02-08
                </div>
              </div>
            </div>

            {/* Recipient */}
            <div className="px-8 pt-6 pb-2 border-b bg-muted/20">
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">The Hiring Committee</p>
                  <p>General Directorate of Information Technology</p>
                  <p>Da Afghanistan Bank (DAB)</p>
                  <p>Kabul, Afghanistan</p>
                </div>
              </div>
            </div>

            {/* Subject */}
            <div className="px-8 py-4 border-b bg-primary/5">
              <p className="text-sm">
                <span className="font-semibold">Subject:</span>{" "}
                Application for the Position of Senior Software Engineer Officer (Grade 7) — Job ID 3160
              </p>
            </div>

            {/* Body */}
            <div className="px-8 py-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>Dear Members of the Hiring Committee,</p>

              <p>
                I am writing to express my interest in the position of Senior Software Engineer Officer (Grade 7)
                at the General Directorate of Information Technology, Da Afghanistan Bank. With over five years
                of experience in enterprise software engineering, system architecture, and national-scale systems,
                I am confident in my ability to contribute to DAB's digital transformation initiatives.
              </p>

              <p>
                Currently, I serve as a System Design & Analysis Specialist and Team Lead at the Ministry of
                Communications and Information Technology (MCIT). In this role, I lead the architecture and
                development of national ERP systems, including Revenue, Sales, Accounting, Payroll, and Afghan
                Post platforms. I manage the full Software Development Life Cycle—from requirements analysis to
                deployment—while producing technical documentation (SRS, UML, BPMN, APIs) and leading
                cross-functional teams.
              </p>

              <p>
                My technical expertise includes Python, Django, Odoo ERP, .NET Core, and Laravel, along with
                strong experience in RESTful APIs, system integration, and database design (PostgreSQL, MySQL).
                I am also experienced in Agile methodologies, CI/CD pipelines, Docker, and Git-based workflows,
                ensuring the delivery of secure and scalable systems.
              </p>

              <p>
                In addition, I am the founder of the open-source Harm Programming Language and have published
                modules on the Odoo App Store, including localization and AI-based tools. I am also the author
                of a Pashto book on cybersecurity awareness and am currently pursuing an MSc in Information
                Technology at Kabul University.
              </p>

              <p>
                I am highly motivated to contribute to Da Afghanistan Bank's mission by supporting the
                development of secure, reliable, and modern financial systems. I believe my combination of
                technical expertise and leadership experience makes me a strong fit for this role.
              </p>

              <p>
                I have attached my CV for your review and would welcome the opportunity to discuss my
                application further.
              </p>

              <p>Thank you for your consideration.</p>

              <div className="pt-4">
                <p className="text-foreground font-semibold">Respectfully,</p>
                <p className="text-foreground font-bold text-lg mt-2">Faridullah Qaderi</p>
                <p className="text-primary font-mono text-xs mt-0.5">Senior Software Engineer · System Architect</p>
                <p className="mt-1 text-xs">
                  Phone: +93 788 707 479 &nbsp;·&nbsp; Email: faridullah.qaderi@mcit.gov.af
                </p>
              </div>

              <Separator className="my-6" />

              <p className="text-xs text-muted-foreground italic">Enclosure: Curriculum Vitae</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
