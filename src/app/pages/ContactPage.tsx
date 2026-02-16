import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { SiteShell } from "@/app/components/layout/SiteShell";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import { Section, Container } from "@/app/components/ui/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

type FormType = "strategy" | "proposal" | "inquiry";

const hashToForm: Record<string, FormType> = {
  "#strategy": "strategy",
  "#proposal": "proposal",
  "#inquiry": "inquiry",
};

type StrategyFormState = {
  fullName: string;
  email: string;
  companyName: string;
  websiteUrl: string;
  projectType: string;
  briefDescription: string;
};

type ProposalFormState = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  websiteUrl: string;
  projectTypes: string[];
  serviceInterests: string[];
  budgetRange: string;
  timeline: string;
  projectGoals: string;
};

type InquiryFormState = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const strategyProjectOptions = [
  "New website",
  "Redesign",
  "Webflow development",
  "AI consulting",
  "SEO / AEO",
  "Not sure yet",
];

const proposalServiceOptions = [
  "Web Design & Redesign",
  "Webflow Development",
  "Custom Applications",
  "AI Consulting",
  "SEO / AEO",
  "Ongoing Optimization",
];

const proposalProjectTypeOptions = [
  "New build",
  "Redesign",
  "Migration",
  "Optimization",
  "Ongoing support",
];

const proposalBudgetOptions = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not sure yet",
];

const proposalTimelineOptions = [
  "ASAP (within 30 days)",
  "1-2 months",
  "3-4 months",
  "5+ months",
  "Flexible timeline",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidUrl(url: string) {
  if (!url.trim()) return true;
  try {
    const normalized = url.startsWith("http") ? url : `https://${url}`;
    new URL(normalized);
    return true;
  } catch {
    return false;
  }
}

async function submitContactPayload(payload: Record<string, unknown>) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Unable to submit form");
  }
}

function ContactPageMetadata() {
  useEffect(() => {
    document.title = "Contact MIS, Inc. — Strategy Calls, Proposal Requests & Inquiries";

    const description =
      "Contact MIS, Inc. to book a free strategy call, request a custom proposal, or send an inquiry for web design, AI, SEO, and digital growth support.";

    const upsertMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name=\"${name}\"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    upsertMeta("description", description);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.misinc.com/contact");
  }, []);

  return null;
}

export default function ContactPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeForm, setActiveForm] = useState<FormType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [strategyForm, setStrategyForm] = useState<StrategyFormState>({
    fullName: "",
    email: "",
    companyName: "",
    websiteUrl: "",
    projectType: "",
    briefDescription: "",
  });
  const [strategyErrors, setStrategyErrors] = useState<Record<string, string>>({});
  const [strategySuccess, setStrategySuccess] = useState(false);

  const [proposalForm, setProposalForm] = useState<ProposalFormState>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    websiteUrl: "",
    projectTypes: [],
    serviceInterests: [],
    budgetRange: "",
    timeline: "",
    projectGoals: "",
  });
  const [proposalErrors, setProposalErrors] = useState<Record<string, string>>({});
  const [proposalSuccess, setProposalSuccess] = useState(false);

  const [inquiryForm, setInquiryForm] = useState<InquiryFormState>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [inquiryErrors, setInquiryErrors] = useState<Record<string, string>>({});
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const [submitError, setSubmitError] = useState("");
  const revealSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mapped = hashToForm[location.hash];
    setActiveForm(mapped ?? null);
  }, [location.hash]);

  useEffect(() => {
    if (activeForm && revealSectionRef.current) {
      revealSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeForm]);

  const contactPageStructuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact MIS, Inc.",
      url: "https://www.misinc.com/contact",
      mainEntity: {
        "@type": "Organization",
        name: "MIS, Inc.",
        url: "https://www.misinc.com",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "karim@misinc.com",
          telephone: "+1-505-555-1234",
        },
      },
    }),
    [],
  );

  const revealForm = (formType: FormType) => {
    setActiveForm(formType);
    navigate({ pathname: "/contact", hash: `#${formType}` }, { replace: false });
    window.setTimeout(() => {
      revealSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const validateStrategy = () => {
    const errors: Record<string, string> = {};
    if (!strategyForm.fullName.trim()) errors.fullName = "Full name is required.";
    if (!strategyForm.email.trim()) {
      errors.email = "Email is required.";
    } else if (!isValidEmail(strategyForm.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!isValidUrl(strategyForm.websiteUrl)) {
      errors.websiteUrl = "Enter a valid website URL.";
    }

    setStrategyErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateProposal = () => {
    const errors: Record<string, string> = {};

    if (!proposalForm.fullName.trim()) errors.fullName = "Full name is required.";
    if (!proposalForm.email.trim()) {
      errors.email = "Email is required.";
    } else if (!isValidEmail(proposalForm.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!isValidUrl(proposalForm.websiteUrl)) {
      errors.websiteUrl = "Enter a valid website URL.";
    }
    if (!proposalForm.projectGoals.trim()) {
      errors.projectGoals = "Project goals are required.";
    }

    setProposalErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateInquiry = () => {
    const errors: Record<string, string> = {};

    if (!inquiryForm.fullName.trim()) errors.fullName = "Full name is required.";
    if (!inquiryForm.email.trim()) {
      errors.email = "Email is required.";
    } else if (!isValidEmail(inquiryForm.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!inquiryForm.subject.trim()) errors.subject = "Subject is required.";
    if (!inquiryForm.message.trim()) errors.message = "Message is required.";

    setInquiryErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleStrategySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    if (!validateStrategy()) return;

    try {
      setIsSubmitting(true);
      await submitContactPayload({ formType: "strategy", ...strategyForm });
      setStrategySuccess(true);
      setStrategyErrors({});
    } catch {
      setSubmitError(
        "We couldn't submit your request right now. Please try again or email karim@misinc.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProposalSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    if (!validateProposal()) return;

    try {
      setIsSubmitting(true);
      await submitContactPayload({ formType: "proposal", ...proposalForm });
      setProposalSuccess(true);
      setProposalErrors({});
    } catch {
      setSubmitError(
        "We couldn't submit your request right now. Please try again or email karim@misinc.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInquirySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    if (!validateInquiry()) return;

    try {
      setIsSubmitting(true);
      await submitContactPayload({ formType: "inquiry", ...inquiryForm });
      setInquirySuccess(true);
      setInquiryErrors({});
    } catch {
      setSubmitError(
        "We couldn't submit your request right now. Please try again or email karim@misinc.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SiteShell>
      <ContactPageMetadata />
      <script type="application/ld+json">{JSON.stringify(contactPageStructuredData)}</script>

      <div className="content-stretch relative flex w-full shrink-0 flex-col items-center">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="flex-1" aria-labelledby="contact-page-heading">
        <Section variant="hero">
          <Container size="standard">
            <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
              <p className="text-xs font-medium uppercase tracking-wide text-primary">
                Contact MIS, Inc.
              </p>
              <h1
                id="contact-page-heading"
                className="text-4xl font-medium leading-tight text-foreground md:text-5xl"
              >
                Get in Touch - We're Ready to Help
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-loose text-muted-foreground md:text-lg">
                Choose the path that fits your goal: book a free strategy call, request a
                custom proposal, or send a general inquiry. Each option opens a focused
                form so you can share only what matters and get a faster response.
              </p>
              <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  className="rounded-full px-6 py-6 text-sm tracking-wide"
                  onClick={() => revealForm("strategy")}
                >
                  Schedule a Strategy Call
                </Button>
                <Button
                  className="rounded-full px-6 py-6 text-sm tracking-wide"
                  onClick={() => revealForm("proposal")}
                >
                  Request a Proposal
                </Button>
                <Button
                  className="rounded-full px-6 py-6 text-sm tracking-wide"
                  onClick={() => revealForm("inquiry")}
                >
                  Send a Message
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">We respond within one business day.</p>
            </div>
          </Container>
        </Section>

        {activeForm && (
          <Section
            id="revealable-forms"
            variant="standard"
            aria-live="polite"
            aria-labelledby="forms-heading"
          >
            <Container size="narrow">
              <div ref={revealSectionRef} className="mb-8 flex flex-col gap-4">
                <h2
                  id="forms-heading"
                  className="text-3xl font-medium leading-snug text-foreground md:text-4xl"
                >
                  Tell Us What You Need
                </h2>
                <p className="text-base leading-loose text-muted-foreground">
                  Use the form below to share just the essentials. We respond within one
                  business day.
                </p>
              </div>

              {submitError && (
                <p className="mb-4 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  {submitError}
                </p>
              )}

              {activeForm === "strategy" && (
              <Card id="strategy" className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl leading-snug text-foreground">
                    Free Strategy Call
                  </CardTitle>
                  <CardDescription className="text-base leading-loose text-muted-foreground">
                    Share a few details and we'll send next-step options for your strategy
                    call.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {strategySuccess ? (
                    <div className="rounded-md border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-foreground">
                      Request received. Our team will contact you within one business day to
                      confirm details and schedule your strategy call.
                    </div>
                  ) : (
                    <form className="space-y-5" onSubmit={handleStrategySubmit} noValidate>
                      <div className="space-y-2">
                        <Label htmlFor="strategy-full-name">Full Name *</Label>
                        <Input
                          id="strategy-full-name"
                          value={strategyForm.fullName}
                          onChange={(event) =>
                            setStrategyForm((prev) => ({ ...prev, fullName: event.target.value }))
                          }
                          aria-invalid={Boolean(strategyErrors.fullName)}
                          aria-describedby={strategyErrors.fullName ? "strategy-full-name-error" : undefined}
                        />
                        {strategyErrors.fullName && (
                          <p id="strategy-full-name-error" className="text-sm text-destructive">
                            {strategyErrors.fullName}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="strategy-email">Email *</Label>
                        <Input
                          id="strategy-email"
                          type="email"
                          value={strategyForm.email}
                          onChange={(event) =>
                            setStrategyForm((prev) => ({ ...prev, email: event.target.value }))
                          }
                          aria-invalid={Boolean(strategyErrors.email)}
                          aria-describedby={strategyErrors.email ? "strategy-email-error" : undefined}
                        />
                        {strategyErrors.email && (
                          <p id="strategy-email-error" className="text-sm text-destructive">
                            {strategyErrors.email}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="strategy-company">Company Name</Label>
                        <Input
                          id="strategy-company"
                          value={strategyForm.companyName}
                          onChange={(event) =>
                            setStrategyForm((prev) => ({ ...prev, companyName: event.target.value }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="strategy-website">Website URL</Label>
                        <Input
                          id="strategy-website"
                          type="url"
                          value={strategyForm.websiteUrl}
                          onChange={(event) =>
                            setStrategyForm((prev) => ({ ...prev, websiteUrl: event.target.value }))
                          }
                          aria-invalid={Boolean(strategyErrors.websiteUrl)}
                          aria-describedby={strategyErrors.websiteUrl ? "strategy-website-error" : undefined}
                        />
                        {strategyErrors.websiteUrl && (
                          <p id="strategy-website-error" className="text-sm text-destructive">
                            {strategyErrors.websiteUrl}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="strategy-project-type">What best describes your project?</Label>
                        <Select
                          value={strategyForm.projectType}
                          onValueChange={(value) =>
                            setStrategyForm((prev) => ({ ...prev, projectType: value }))
                          }
                        >
                          <SelectTrigger id="strategy-project-type">
                            <SelectValue placeholder="Select one" />
                          </SelectTrigger>
                          <SelectContent>
                            {strategyProjectOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="strategy-description">Brief description</Label>
                        <Textarea
                          id="strategy-description"
                          value={strategyForm.briefDescription}
                          onChange={(event) =>
                            setStrategyForm((prev) => ({
                              ...prev,
                              briefDescription: event.target.value,
                            }))
                          }
                          className="min-h-[140px]"
                        />
                      </div>

                      <p className="text-sm text-muted-foreground">We respond within one business day.</p>

                      <Button
                        type="submit"
                        className="w-full rounded-full px-6 py-6 text-sm tracking-wide"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Schedule My Call"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
              )}

              {activeForm === "proposal" && (
              <Card id="proposal" className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl leading-snug text-foreground">
                    Request a Proposal
                  </CardTitle>
                  <CardDescription className="text-base leading-loose text-muted-foreground">
                    Share your scope and priorities. We'll prepare a proposal timeline and
                    estimate.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {proposalSuccess ? (
                    <div className="rounded-md border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-foreground">
                      Proposal request received. We'll review your project details and
                      respond with next steps and timeline expectations within one business
                      day.
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleProposalSubmit} noValidate>
                      <div className="space-y-4">
                        <h3 className="text-base font-medium text-foreground">Section A - Contact Info</h3>

                        <div className="space-y-2">
                          <Label htmlFor="proposal-full-name">Full Name *</Label>
                          <Input
                            id="proposal-full-name"
                            value={proposalForm.fullName}
                            onChange={(event) =>
                              setProposalForm((prev) => ({ ...prev, fullName: event.target.value }))
                            }
                            aria-invalid={Boolean(proposalErrors.fullName)}
                            aria-describedby={proposalErrors.fullName ? "proposal-full-name-error" : undefined}
                          />
                          {proposalErrors.fullName && (
                            <p id="proposal-full-name-error" className="text-sm text-destructive">
                              {proposalErrors.fullName}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="proposal-email">Email *</Label>
                          <Input
                            id="proposal-email"
                            type="email"
                            value={proposalForm.email}
                            onChange={(event) =>
                              setProposalForm((prev) => ({ ...prev, email: event.target.value }))
                            }
                            aria-invalid={Boolean(proposalErrors.email)}
                            aria-describedby={proposalErrors.email ? "proposal-email-error" : undefined}
                          />
                          {proposalErrors.email && (
                            <p id="proposal-email-error" className="text-sm text-destructive">
                              {proposalErrors.email}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="proposal-phone">Phone</Label>
                          <Input
                            id="proposal-phone"
                            type="tel"
                            value={proposalForm.phone}
                            onChange={(event) =>
                              setProposalForm((prev) => ({ ...prev, phone: event.target.value }))
                            }
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="proposal-company">Company Name</Label>
                          <Input
                            id="proposal-company"
                            value={proposalForm.companyName}
                            onChange={(event) =>
                              setProposalForm((prev) => ({ ...prev, companyName: event.target.value }))
                            }
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="proposal-website">Website URL</Label>
                          <Input
                            id="proposal-website"
                            type="url"
                            value={proposalForm.websiteUrl}
                            onChange={(event) =>
                              setProposalForm((prev) => ({ ...prev, websiteUrl: event.target.value }))
                            }
                            aria-invalid={Boolean(proposalErrors.websiteUrl)}
                            aria-describedby={proposalErrors.websiteUrl ? "proposal-website-error" : undefined}
                          />
                          {proposalErrors.websiteUrl && (
                            <p id="proposal-website-error" className="text-sm text-destructive">
                              {proposalErrors.websiteUrl}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-base font-medium text-foreground">Section B - Project Details</h3>

                        <fieldset className="space-y-2">
                          <legend className="text-sm font-medium text-foreground">
                            What service are you interested in?
                          </legend>
                          <div className="grid grid-cols-1 gap-3">
                            {proposalServiceOptions.map((option) => {
                              const checked = proposalForm.serviceInterests.includes(option);
                              return (
                                <label key={option} className="flex items-center gap-2 text-sm text-foreground">
                                  <Checkbox
                                    checked={checked}
                                    onCheckedChange={(value) => {
                                      setProposalForm((prev) => ({
                                        ...prev,
                                        serviceInterests: value
                                          ? [...prev.serviceInterests, option]
                                          : prev.serviceInterests.filter((item) => item !== option),
                                      }));
                                    }}
                                  />
                                  <span>{option}</span>
                                </label>
                              );
                            })}
                          </div>
                        </fieldset>

                        <fieldset className="space-y-2">
                          <legend className="text-sm font-medium text-foreground">Project Type</legend>
                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {proposalProjectTypeOptions.map((option) => {
                              const checked = proposalForm.projectTypes.includes(option);
                              return (
                                <label key={option} className="flex items-center gap-2 text-sm text-foreground">
                                  <Checkbox
                                    checked={checked}
                                    onCheckedChange={(value) => {
                                      setProposalForm((prev) => ({
                                        ...prev,
                                        projectTypes: value
                                          ? [...prev.projectTypes, option]
                                          : prev.projectTypes.filter((item) => item !== option),
                                      }));
                                    }}
                                  />
                                  <span>{option}</span>
                                </label>
                              );
                            })}
                          </div>
                        </fieldset>

                        <div className="space-y-2">
                          <Label htmlFor="proposal-budget">Estimated Budget Range</Label>
                          <Select
                            value={proposalForm.budgetRange}
                            onValueChange={(value) =>
                              setProposalForm((prev) => ({ ...prev, budgetRange: value }))
                            }
                          >
                            <SelectTrigger id="proposal-budget">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {proposalBudgetOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="proposal-timeline">Desired Timeline</Label>
                          <Select
                            value={proposalForm.timeline}
                            onValueChange={(value) =>
                              setProposalForm((prev) => ({ ...prev, timeline: value }))
                            }
                          >
                            <SelectTrigger id="proposal-timeline">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              {proposalTimelineOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="proposal-goals">Project Goals *</Label>
                          <Textarea
                            id="proposal-goals"
                            value={proposalForm.projectGoals}
                            onChange={(event) =>
                              setProposalForm((prev) => ({ ...prev, projectGoals: event.target.value }))
                            }
                            className="min-h-[160px]"
                            aria-invalid={Boolean(proposalErrors.projectGoals)}
                            aria-describedby={proposalErrors.projectGoals ? "proposal-goals-error" : undefined}
                          />
                          {proposalErrors.projectGoals && (
                            <p id="proposal-goals-error" className="text-sm text-destructive">
                              {proposalErrors.projectGoals}
                            </p>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground">We respond within one business day.</p>

                      <Button
                        type="submit"
                        className="w-full rounded-full px-6 py-6 text-sm tracking-wide"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Request My Proposal"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
              )}

              {activeForm === "inquiry" && (
              <Card id="inquiry" className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl leading-snug text-foreground">
                    General Inquiry
                  </CardTitle>
                  <CardDescription className="text-base leading-loose text-muted-foreground">
                    Send your question and our team will follow up with a direct answer.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {inquirySuccess ? (
                    <div className="rounded-md border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-foreground">
                      Message received. Thanks for contacting MIS, Inc. We'll follow up
                      shortly.
                    </div>
                  ) : (
                    <form className="space-y-5" onSubmit={handleInquirySubmit} noValidate>
                      <div className="space-y-2">
                        <Label htmlFor="inquiry-full-name">Full Name *</Label>
                        <Input
                          id="inquiry-full-name"
                          value={inquiryForm.fullName}
                          onChange={(event) =>
                            setInquiryForm((prev) => ({ ...prev, fullName: event.target.value }))
                          }
                          aria-invalid={Boolean(inquiryErrors.fullName)}
                          aria-describedby={inquiryErrors.fullName ? "inquiry-full-name-error" : undefined}
                        />
                        {inquiryErrors.fullName && (
                          <p id="inquiry-full-name-error" className="text-sm text-destructive">
                            {inquiryErrors.fullName}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inquiry-email">Email *</Label>
                        <Input
                          id="inquiry-email"
                          type="email"
                          value={inquiryForm.email}
                          onChange={(event) =>
                            setInquiryForm((prev) => ({ ...prev, email: event.target.value }))
                          }
                          aria-invalid={Boolean(inquiryErrors.email)}
                          aria-describedby={inquiryErrors.email ? "inquiry-email-error" : undefined}
                        />
                        {inquiryErrors.email && (
                          <p id="inquiry-email-error" className="text-sm text-destructive">
                            {inquiryErrors.email}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inquiry-subject">Subject *</Label>
                        <Input
                          id="inquiry-subject"
                          value={inquiryForm.subject}
                          onChange={(event) =>
                            setInquiryForm((prev) => ({ ...prev, subject: event.target.value }))
                          }
                          aria-invalid={Boolean(inquiryErrors.subject)}
                          aria-describedby={inquiryErrors.subject ? "inquiry-subject-error" : undefined}
                        />
                        {inquiryErrors.subject && (
                          <p id="inquiry-subject-error" className="text-sm text-destructive">
                            {inquiryErrors.subject}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inquiry-message">Message *</Label>
                        <Textarea
                          id="inquiry-message"
                          value={inquiryForm.message}
                          onChange={(event) =>
                            setInquiryForm((prev) => ({ ...prev, message: event.target.value }))
                          }
                          className="min-h-[160px]"
                          aria-invalid={Boolean(inquiryErrors.message)}
                          aria-describedby={inquiryErrors.message ? "inquiry-message-error" : undefined}
                        />
                        {inquiryErrors.message && (
                          <p id="inquiry-message-error" className="text-sm text-destructive">
                            {inquiryErrors.message}
                          </p>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground">We respond within one business day.</p>

                      <Button
                        type="submit"
                        className="w-full rounded-full px-6 py-6 text-sm tracking-wide"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Send My Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
              )}
            </Container>
          </Section>
        )}

        {activeForm && (
          <Section variant="flush" tone="muted" aria-labelledby="related-links-heading">
            <Container size="standard">
              <div className="flex flex-col gap-3 py-10 text-sm leading-relaxed text-muted-foreground md:flex-row md:items-center md:justify-between">
                <p id="related-links-heading" className="font-medium text-foreground">
                  Explore related pages before you reach out:
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/services" className="underline-offset-4 hover:underline">
                    View our services
                  </Link>
                  <Link to="/solutions" className="underline-offset-4 hover:underline">
                    Explore solutions
                  </Link>
                  <Link to="/case-studies" className="underline-offset-4 hover:underline">
                    Review case studies
                  </Link>
                </div>
              </div>
            </Container>
          </Section>
        )}
      </main>

      <SiteFooter />
    </SiteShell>
  );
}
