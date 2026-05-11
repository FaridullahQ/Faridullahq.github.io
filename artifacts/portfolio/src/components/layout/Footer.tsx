import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40 mt-auto">
      <div className="container mx-auto px-4 py-8 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-mono font-semibold tracking-tight text-foreground">FARIDULLAH.DEV</span>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Senior Software Engineer & System Architect
            </p>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:faridullah.qaderi@mcit.gov.af"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-link-email"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/FaridullahQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-link-github"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-link-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <div className="flex justify-center md:justify-end text-sm text-muted-foreground">
            <p data-testid="footer-copyright">&copy; 2026 Faridullah Qaderi</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
