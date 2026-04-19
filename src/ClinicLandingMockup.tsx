import type { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  MonitorSmartphone,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Stethoscope,
  Wand2,
  CheckCircle
} from "lucide-react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const heroReveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: smoothEase },
  },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: smoothEase },
  },
};

const serviceCardReveal = {
  hidden: { opacity: 0, y: 18, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.68, ease: smoothEase },
  },
};

const compactReveal = {
  hidden: { opacity: 0, y: 16, scale: 0.992 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.62, ease: smoothEase },
  },
};

const heroCardStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.28,
    },
  },
};

const serviceCardStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.06,
    },
  },
};

const reasonCardStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const processCardStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const cardHover = {
  y: -3,
  scale: 1.003,
  boxShadow: "0 14px 32px rgba(17,17,17,0.06)",
  borderColor: "#BFDBFE",
  transition: { duration: 0.32, ease: smoothEase },
};

const iconHover = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.06,
    rotate: -3,
    transition: { duration: 0.35, ease: smoothEase },
  },
};

type IconType = ComponentType<{ size?: number; className?: string }>;

function InteractiveCard({
  children,
  className,
  hover = cardHover,
}: {
  children: ReactNode;
  className: string;
  hover?: {
    y?: number;
    scale?: number;
    boxShadow?: string;
    borderColor?: string;
    backgroundColor?: string;
    transition?: { duration: number; ease: readonly [number, number, number, number] };
  };
}) {
  return (
    <motion.div whileHover={hover} className={className}>
      {children}
    </motion.div>
  );
}

function IconBadge({
  icon: Icon,
  size = 20,
  className = "mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]",
}: {
  icon: IconType;
  size?: number;
  className?: string;
}) {
  return (
    <motion.div variants={iconHover} initial="rest" whileHover="hover" className={className}>
      <Icon size={size} />
    </motion.div>
  );
}

export default function ClinicLandingMockup() {
  const services = [
    {
      title: "Landing Page Design",
      description:
        "A focused one-page website designed to turn visitors into actual bookings.",
      icon: MousePointerClick,
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Clinic website planning and strategy",
    },
    {
      title: "Clinic Website Redesign",
      description:
        "Modernize outdated websites with a cleaner structure, stronger trust signals, and clearer CTAs.",
      icon: Wand2,
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Modern clinic interior for website redesign concept",
    },
    {
      title: "Mobile Optimization",
      description:
        "Make the experience easier to navigate and book from on smaller screens.",
      icon: MonitorSmartphone,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Mobile booking and responsive website experience",
    },
  ];

  const reasons = [
    {
      text: "Focused on results, not just visuals",
      icon: Sparkles,
    },
    {
      text: "Built for clinics and service-based businesses",
      icon: Stethoscope,
    },
    {
      text: "Fast, efficient process with clear direction",
      icon: BadgeCheck,
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Audit",
      description:
        "I review your current website and identify the biggest conversion issues.",
    },
    {
      number: "2",
      title: "Redesign",
      description:
        "I restructure the page to improve clarity, trust, and booking flow.",
    },
    {
      number: "3",
      title: "Launch",
      description:
        "You get a cleaner, more strategic website that is ready to convert.",
    },
  ];

  const heroStats = [
    {
      title: "1-Page",
      text: "Conversion-first structure",
      icon: MousePointerClick,
    },
    {
      title: "Mobile",
      text: "Optimized experience",
      icon: Smartphone,
    },
    {
      title: "Clear",
      text: "Trust-building layout",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <header className="sticky top-0 z-30 border-b border-[#E5E7EB]/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
            clinicwebdesign
          </p>
          <a
            href="#cta"
            className="rounded-xl bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1D4ED8]"
          >
            Get a Free Audit
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#f6f4f9] min-h-[650px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.12),_transparent_35%),radial-gradient(circle_at_left,_rgba(20,184,166,0.08),_transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-stretch lg:px-10 lg:min-h-[650px]">
            <motion.div className="max-w-xl" initial="hidden" animate="visible" variants={heroReveal}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                Booking-focused websites for clinics
              </p>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Get More Bookings With a Better Clinic Website
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-[#4B5563] sm:text-lg">
                I design clean, modern websites for massage, chiropractic, and wellness clinics—built to increase trust and drive more appointments.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#cta"
                  className="rounded-2xl bg-[#2563EB] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#1D4ED8]"
                >
                  Get a Free Website Audit
                </a>
                <a
                  href="#work"
                  className="rounded-2xl border border-[#D1D5DB] px-6 py-3.5 text-center text-sm font-semibold text-[#111111] hover:border-[#2563EB] hover:text-[#2563EB]"
                >
                  View Sample Redesign
                </a>
              </div>

              <motion.div
                className="mt-10 grid max-w-md grid-cols-3 gap-4 text-sm"
                initial="hidden"
                animate="visible"
                variants={heroCardStagger}
              >
                {heroStats.map((item) => (
                  <motion.div key={item.title} variants={compactReveal}>
                    <InteractiveCard className="rounded-2xl border border-[#E5E7EB] bg-white p-4">
                      <IconBadge
                        icon={item.icon}
                        className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]"
                      />
                      <p className="text-2xl font-semibold">{item.title}</p>
                      <p className="mt-1 text-[#6B7280]">{item.text}</p>
                    </InteractiveCard>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full lg:justify-self-end"
              initial="hidden"
              animate="visible"
              variants={heroReveal}
            >
              <div className="relative mx-auto w-full max-w-[680px] h-full">
                <img
                  src="/ClinicWebsiteAgency-Hero-laptop.png"
                  alt="Doctor holding a laptop"
                  className="h-full w-full rounded-[28px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="work">
          <div className="mx-auto max-w-4xl px-6 pb-28 pt-24 lg:px-10">
            <motion.div
              className="max-w-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionReveal}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                What I Offer
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                What I can help you with
              </h2>
              <p className="mt-4 text-base leading-7 text-[#4B5563]">
                Start with a focused landing page, then expand into a full website when the business is ready.
              </p>
            </motion.div>

            <motion.div
              className="mt-12 space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={serviceCardStagger}
            >
              {services.map((service) => (
                <motion.div key={service.title} variants={serviceCardReveal}>
                  <InteractiveCard className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white">
                    <div className="grid md:grid-cols-2">
                      <div className="h-64 md:h-full">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center p-6 md:p-8">
                        <IconBadge
                          icon={service.icon}
                          className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]"
                        />
                        <h3 className="text-xl font-semibold tracking-[-0.02em]">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-[#6B7280]">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </InteractiveCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="mt-10 bg-[#0F172A] text-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-2">
              <motion.div
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={sectionReveal}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#93C5FD]">
                  Why work with me
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                  Clear, strategic, and built for action.
                </h2>

                <motion.div
                  className="mt-8 space-y-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={reasonCardStagger}
                >
                  {reasons.map((item) => (
                    <motion.div key={item.text} variants={compactReveal}>
                      <InteractiveCard
                        hover={{
                          borderColor: "#93C5FD",
                          backgroundColor: "rgba(255,255,255,0.06)",
                          boxShadow: "0 12px 40px rgba(255,255,255,0.12)",
                          transition: { duration: 0.3, ease: smoothEase },
                        }}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                      >
                        <IconBadge
                          icon={item.icon}
                          size={18}
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#93C5FD]"
                        />
                        <p className="text-base leading-7 text-white">{item.text}</p>
                      </InteractiveCard>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={sectionReveal}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#93C5FD]">
                  Process
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                  A simple 3-step workflow.
                </h2>

                <motion.div
                  className="mt-8 space-y-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={processCardStagger}
                >
                  {steps.map((step, index) => (
                    <motion.div key={step.number} variants={compactReveal}>
                      <InteractiveCard
                        hover={{
                          borderColor: "#93C5FD",
                          backgroundColor: "rgba(255,255,255,0.06)",
                          transition: { duration: 0.18, ease: smoothEase },
                        }}
                        className="group relative grid grid-cols-[56px_1fr] gap-4 rounded-2xl border border-transparent px-3 py-4"
                      >
                        <div className="relative flex justify-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-semibold text-white">
                            {step.number}
                          </div>
                          {index !== steps.length - 1 && (
                            <div className="absolute top-10 h-[calc(100%+0.75rem)] w-px bg-white/15" />
                          )}
                        </div>

                        <div className="pb-2">
                          <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                          <p className="mt-2 text-base leading-7 text-white/80">
                            {step.description}
                          </p>
                        </div>
                      </InteractiveCard>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={sectionReveal}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                  For clinic owners
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl text-[#111111]">
                  Get exclusive clinic marketing tips.
                </h2>
                <p className="mt-4 text-base leading-7 text-[#4B5563]">
                  Join clinic owners who are booking more patients + growing faster. Get weekly strategies on website optimization, patient acquisition, and clinic growth.
                </p>
                <ul className="mt-6 space-y-3 text-base text-[#374151]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 text-[#2563EB]" size={18} />
                    <span>Weekly actionable clinic marketing tips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 text-[#2563EB]" size={18} />
                    <span>Patient booking strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 text-[#2563EB]" size={18} />
                    <span>Website optimization guides</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={sectionReveal}
              >
                <InteractiveCard className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 md:p-8 shadow-sm">
                  <form
                    action="https://formspree.io/f/mdayzlkv"
                    method="POST"
                    className="space-y-4"
                  >
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#374151]">Your clinic name</label>
                      <input
                        type="text"
                        name="clinic_name"
                        placeholder="Your clinic name"
                        className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-base outline-none transition focus:border-[#2563EB]"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#374151]">Email</label>
                      <input
                        type="email"
                        name="newsletter_email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-base outline-none transition focus:border-[#2563EB]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-[#2563EB] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#1D4ED8]"
                    >
                      Subscribe for Free Tips
                    </button>

                    <p className="text-xs text-center text-[#9CA3AF]">
                      No spam, unsubscribe anytime.
                    </p>
                  </form>
                </InteractiveCard>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <motion.div
              className="max-w-2xl mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionReveal}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                Trusted by clinic owners
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl text-[#111111]">
                What clinic owners say
              </h2>
            </motion.div>

            <motion.div
              className="grid gap-6 md:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={serviceCardStagger}
            >
              <motion.div variants={serviceCardReveal}>
                <InteractiveCard className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 md:p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-base leading-7 text-[#374151] mb-4">
                    "Built a website from zero. Started getting consistent bookings within the first month of launch."
                  </p>
                  <p className="font-semibold text-[#111111]">Massage Clinic Owner</p>
                  <p className="text-sm text-[#6B7280]">Southeast US</p>
                </InteractiveCard>
              </motion.div>

              <motion.div variants={serviceCardReveal}>
                <InteractiveCard className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 md:p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-base leading-7 text-[#374151] mb-4">
                    "Website redesign transformed how we get new patients. Now handling bookings online that we never received before."
                  </p>
                  <p className="font-semibold text-[#111111]">Chiropractic Clinic Owner</p>
                  <p className="text-sm text-[#6B7280]">Midwest</p>
                </InteractiveCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <motion.div
              className="max-w-2xl mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionReveal}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                Simple pricing
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl text-[#111111]">
                Packages designed for growing clinics
              </h2>
              <p className="mt-4 text-base leading-7 text-[#4B5563]">
                Choose the right package for your needs. Add 1-week rush for $500 or start monthly maintenance at $50.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-6 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={serviceCardStagger}
            >
              <motion.div variants={serviceCardReveal}>
                <InteractiveCard className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 md:p-8 h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-[#111111]">Basic Package</h3>
                  <p className="mt-2 text-3xl font-bold text-[#2563EB]">$999</p>
                  <p className="mt-1 text-sm text-[#6B7280]">Most popular for startups</p>
                  <ul className="mt-6 space-y-3 flex-1">
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>Homepage + essential pages</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>Services overview</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>Booking integration</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>Mobile optimized</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>2 revision rounds</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-xs text-[#9CA3AF]">3-4 weeks delivery</p>
                </InteractiveCard>
              </motion.div>

              <motion.div variants={serviceCardReveal}>
                <InteractiveCard className="rounded-[28px] border-2 border-[#2563EB] bg-[#F0F7FF] p-6 md:p-8 h-full flex flex-col relative">
                  <div className="absolute -top-3 left-4 bg-[#2563EB] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    POPULAR
                  </div>
                  <h3 className="text-lg font-semibold text-[#111111]">Professional</h3>
                  <p className="mt-2 text-3xl font-bold text-[#2563EB]">$1,495</p>
                  <p className="mt-1 text-sm text-[#6B7280]">Best for established clinics</p>
                  <ul className="mt-6 space-y-3 flex-1">
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>Everything in Basic, plus:</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>Multiple service pages</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>Insurance & FAQ pages</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>Team page</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>Blog section</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>4 revision rounds</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-xs text-[#9CA3AF]">3-4 weeks delivery</p>
                </InteractiveCard>
              </motion.div>

              <motion.div variants={serviceCardReveal}>
                <InteractiveCard className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 md:p-8 h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-[#111111]">Premium</h3>
                  <p className="mt-2 text-3xl font-bold text-[#2563EB]">$1,995</p>
                  <p className="mt-1 text-sm text-[#6B7280]">White glove service</p>
                  <ul className="mt-6 space-y-3 flex-1">
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>Everything in Professional</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>Unlimited service pages</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>Advanced booking features</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>Testimonials section</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>Analytics setup</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#374151]">
                      <CheckCircle className="mt-0.5 text-[#2563EB] shrink-0" size={16} />
                      <span>Unlimited revisions</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-xs text-[#9CA3AF]">3-4 weeks delivery</p>
                </InteractiveCard>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-10 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionReveal}
            >
              <p className="text-base text-[#374151]">
                <span className="font-semibold">💨 Want it faster?</span> Add $500 for 1-week rush (limited availability)
              </p>
              <p className="mt-4 text-base text-[#374151]">
                <span className="font-semibold">💰 Ongoing support?</span> Optional monthly maintenance at $50/month (updates, security, hosting)
              </p>
            </motion.div>
          </div>
        </section>

        <section id="cta" className="pb-20 pt-20 lg:pt-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <motion.div
              className="overflow-hidden rounded-[32px] border border-[#BFDBFE] bg-[linear-gradient(135deg,#EFF6FF_0%,#FFFFFF_55%,#F8FAFC_100%)] p-8 sm:p-10 lg:p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={sectionReveal}
            >
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                    Free audit offer
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                    Get more bookings from your existing traffic.
                  </h2>
                  <p className="mt-4 max-w-xl text-lg leading-8 text-[#4B5563]">
                    I’ll audit your current website and show you exactly what’s hurting conversions—and how to fix it.
                  </p>

                  <ul className="mt-6 space-y-3 text-base text-[#374151]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 text-[#2563EB]" size={18} />
                      <span>Conversion issues (why visitors don’t book)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 text-[#2563EB]" size={18} />
                      <span>UX & mobile problems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 text-[#2563EB]" size={18} />
                      <span>Clear improvement suggestions</span>
                    </li>
                  </ul>

                  <p className="mt-4 text-sm text-[#6B7280]">
                    Delivered within 24–48 hours. No obligation.
                  </p>

                  
                </div>

                <InteractiveCard className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 md:p-8 shadow-sm">
                  <form
                    action="https://formspree.io/f/xojywwnz"
                    method="POST"
                    className="space-y-4"
                  >
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#374151]">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-base outline-none transition focus:border-[#2563EB]"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#374151]">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-base outline-none transition focus:border-[#2563EB]"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#374151]">
                        What's your biggest booking challenge?
                      </label>
                      <select
                        name="challenge"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-[#D1D5DB] bg-white px-4 py-3 text-base outline-none transition focus:border-[#2563EB]"
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="No online presence">No online presence</option>
                        <option value="Low website traffic">Low website traffic</option>
                        <option value="Poor booking conversion">Poor booking conversion</option>
                        <option value="Outdated website">Outdated website</option>
                        <option value="Not sure">Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#374151]">
                        Which package interests you?
                      </label>
                      <select
                        name="package_interest"
                        defaultValue=""
                        className="w-full rounded-xl border border-[#D1D5DB] bg-white px-4 py-3 text-base outline-none transition focus:border-[#2563EB]"
                      >
                        <option value="">Not sure yet</option>
                        <option value="Basic - $999">Basic - $999</option>
                        <option value="Professional - $1,495">Professional - $1,495</option>
                        <option value="Premium - $1,995">Premium - $1,995</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#374151]">
                        Interested in monthly maintenance?
                      </label>
                      <select
                        name="maintenance_interest"
                        defaultValue=""
                        className="w-full rounded-xl border border-[#D1D5DB] bg-white px-4 py-3 text-base outline-none transition focus:border-[#2563EB]"
                      >
                        <option value="">Not sure</option>
                        <option value="Yes - $50/month">Yes - $50/month</option>
                        <option value="Maybe later">Maybe later</option>
                        <option value="I'll handle hosting myself">I'll handle hosting myself</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#1D4ED8]"
                    >
                      Get My Free Audit
                      <ArrowRight size={16} />
                    </button>

                    <p className="text-xs text-center text-[#9CA3AF] mt-2">
                      We respect your privacy. No spam.
                    </p>
                  </form>
                </InteractiveCard>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="border-t border-[#E5E7EB] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                  clinicwebdesign
                </p>
                <p className="mt-2 text-sm text-[#6B7280]">
                  Building high-converting websites for clinics.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#111111] mb-3">Quick Links</p>
                <ul className="space-y-2 text-sm text-[#6B7280]">
                  <li><a href="#work" className="hover:text-[#2563EB]">Services</a></li>
                  <li><a href="#pricing" className="hover:text-[#2563EB]">Pricing</a></li>
                  <li><a href="#cta" className="hover:text-[#2563EB]">Get Audit</a></li>
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#111111] mb-3">Contact</p>
                <p className="text-sm text-[#6B7280] mb-1">your-email@example.com</p>
                <p className="text-sm text-[#6B7280]">your-phone@example.com</p>
              </div>
            </div>

            <div className="mt-8 border-t border-[#E5E7EB] pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-[#9CA3AF]">
              <p>&copy; 2026 Clinic Web Design. All rights reserved.</p>
              <div className="flex gap-6 mt-4 sm:mt-0">
                <a href="#" className="hover:text-[#2563EB]">Privacy Policy</a>
                <a href="#" className="hover:text-[#2563EB]">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
