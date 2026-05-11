import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "faridullah.qaderi@mcit.gov.af",
    href: "mailto:faridullah.qaderi@mcit.gov.af",
    testid: "contact-info-email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+93 788 707 479",
    href: "tel:+93788707479",
    testid: "contact-info-phone",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kabul, Afghanistan",
    href: null,
    testid: "contact-info-location",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/FaridullahQ",
    testid: "contact-social-github",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    testid: "contact-social-linkedin",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactForm) {
    console.log("Contact form submitted", data);
    setSubmitted(true);
    form.reset();
  }

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
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Contact</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Get in Touch</h1>
          <p className="text-muted-foreground leading-relaxed">
            Whether you have a project in mind, want to discuss a role, or just want to connect —
            send a message and I'll get back to you promptly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Left: contact info */}
          <div className="md:col-span-2 space-y-6">
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="border rounded-lg p-6 bg-card"
            >
              <h2 className="text-xs font-mono text-primary tracking-widest uppercase mb-5">Contact Info</h2>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-3" data-testid={item.testid}>
                      <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono">{item.label}</p>
                        <p className="text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} className="block hover:opacity-80 transition-opacity">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="border rounded-lg p-6 bg-card"
            >
              <h2 className="text-xs font-mono text-primary tracking-widest uppercase mb-5">Online</h2>
              <div className="space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                      data-testid={link.testid}
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="md:col-span-3"
          >
            {submitted ? (
              <div className="border rounded-lg p-10 bg-card flex flex-col items-center text-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Message Sent</h3>
                <p className="text-muted-foreground max-w-sm text-sm">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button
                  variant="outline"
                  className="font-mono mt-2"
                  onClick={() => setSubmitted(false)}
                  data-testid="button-send-another"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div className="border rounded-lg p-6 md:p-8 bg-card">
                <h2 className="text-xs font-mono text-primary tracking-widest uppercase mb-6">Send a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-mono">Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your full name"
                                {...field}
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-mono">Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                {...field}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-mono">Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="What's this about?"
                              {...field}
                              data-testid="input-subject"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-mono">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project, role, or question..."
                              className="min-h-[140px] resize-none"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full font-mono gap-2"
                      disabled={form.formState.isSubmitting}
                      data-testid="button-submit-contact"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
