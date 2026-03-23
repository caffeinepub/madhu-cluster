import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronRight,
  Droplets,
  Facebook,
  FlowerIcon,
  Heart,
  Hexagon,
  Instagram,
  Leaf,
  Menu,
  Sparkles,
  TrendingUp,
  Twitter,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// ─── Navbar ────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "IMPACT", href: "#impact" },
  { label: "PRODUCTS", href: "#products" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-card" : ""
      }`}
      style={{ backgroundColor: "oklch(var(--warm-cream))" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-2"
            data-ocid="nav.link"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "oklch(var(--forest-green))" }}
            >
              <Hexagon className="w-5 h-5 text-white" />
            </div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ color: "oklch(var(--forest-green))" }}
            >
              Madhu-Cluster
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-ocid="nav.link"
                className="text-xs font-semibold tracking-widest transition-colors hover:opacity-70"
                style={{ color: "oklch(var(--forest-green))" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <a href="#contact">
              <Button
                data-ocid="nav.primary_button"
                className="text-white font-semibold tracking-wide text-xs px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "oklch(var(--honey-amber))" }}
              >
                JOIN INITIATIVE
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="nav.toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X
                className="w-5 h-5"
                style={{ color: "oklch(var(--forest-green))" }}
              />
            ) : (
              <Menu
                className="w-5 h-5"
                style={{ color: "oklch(var(--forest-green))" }}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
            style={{
              borderColor: "oklch(var(--border))",
              backgroundColor: "oklch(var(--warm-cream))",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xs font-semibold tracking-widest"
                  style={{ color: "oklch(var(--forest-green))" }}
                >
                  {l.label}
                </a>
              ))}
              <Button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  window.location.hash = "#contact";
                }}
                className="w-full text-white font-semibold tracking-wide text-xs rounded-full"
                style={{ backgroundColor: "oklch(var(--honey-amber))" }}
              >
                JOIN INITIATIVE
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────
function HoneycombSVG() {
  return (
    <svg
      viewBox="0 0 200 220"
      className="w-full h-full opacity-20"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      {[
        [100, 30],
        [60, 52],
        [140, 52],
        [20, 74],
        [100, 74],
        [180, 74],
        [60, 96],
        [140, 96],
        [20, 118],
        [100, 118],
        [180, 118],
        [60, 140],
        [140, 140],
        [20, 162],
        [100, 162],
        [180, 162],
        [60, 184],
        [140, 184],
      ].map(([cx, cy], i) => (
        <polygon
          // biome-ignore lint/suspicious/noArrayIndexKey: static decorative list
          key={i}
          points={`${cx},${cy - 18} ${cx + 16},${cy - 9} ${cx + 16},${cy + 9} ${cx},${cy + 18} ${cx - 16},${cy + 9} ${cx - 16},${cy - 9}`}
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
      ))}
    </svg>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.27 0.07 158) 0%, oklch(0.38 0.085 158) 55%, oklch(0.48 0.09 100) 100%)",
      }}
    >
      {/* Honeycomb overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <HoneycombSVG />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6"
              style={{
                backgroundColor: "oklch(var(--honey-amber) / 0.2)",
                color: "oklch(var(--honey-light))",
              }}
            >
              <Sparkles className="w-3 h-3" />
              Rural Empowerment Initiative
            </div>

            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-wide mb-6"
              style={{ color: "oklch(var(--honey-amber))" }}
            >
              Empowering Rural Women through Sustainable Beekeeping
            </h1>

            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              Cultivating pure organic honey from India's rich forests while
              generating sustainable rural livelihoods — one hive at a time.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#products">
                <Button
                  data-ocid="hero.primary_button"
                  className="text-white font-semibold px-7 py-3 h-auto rounded-full hover:opacity-90 transition-all hover:scale-105"
                  style={{ backgroundColor: "oklch(var(--honey-amber))" }}
                >
                  Discover Our Honey <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
              <a href="#contact">
                <Button
                  data-ocid="hero.secondary_button"
                  variant="outline"
                  className="font-semibold px-7 py-3 h-auto rounded-full border-2 border-white text-white bg-transparent hover:bg-white/10 transition-all hover:scale-105"
                >
                  Partner With Us
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right decorative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-80 h-80">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "oklch(var(--honey-amber) / 0.12)",
                  backdropFilter: "blur(2px)",
                }}
              />
              <div
                className="absolute inset-8 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(var(--honey-amber) / 0.25), oklch(var(--honey-light) / 0.10))",
                }}
              >
                <div
                  className="w-44 h-44 rounded-full flex flex-col items-center justify-center gap-2"
                  style={{ background: "oklch(var(--honey-amber) / 0.3)" }}
                >
                  <Hexagon
                    className="w-16 h-16 text-white/90"
                    strokeWidth={1}
                  />
                  <span className="text-white/90 text-sm font-semibold tracking-widest uppercase">
                    Pure Honey
                  </span>
                </div>
              </div>
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 -right-3 bg-white rounded-2xl px-3 py-2 shadow-card"
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: "oklch(var(--forest-green))" }}
                >
                  100% Organic
                </span>
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-3 -left-3 bg-white rounded-2xl px-3 py-2 shadow-card"
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: "oklch(var(--honey-amber))" }}
                >
                  4,000+ Women
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-12"
          fill="oklch(0.96 0.005 90)"
          aria-hidden="true"
          role="presentation"
        >
          <path d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}

// ─── Impact Stats ────────────────────────────────────────────────────────────
const STATS = [
  {
    id: "women",
    icon: Users,
    stat: "4,000+",
    label: "Women Empowered",
    sub: "Across rural beekeeping clusters in 12 states",
  },
  {
    id: "organic",
    icon: Leaf,
    stat: "100%",
    label: "Organic Production",
    sub: "Certified natural, no chemicals or additives",
  },
  {
    id: "trade",
    icon: TrendingUp,
    stat: "Fair Trade",
    label: "& Direct Market",
    sub: "Eliminating middlemen, maximizing farmer income",
  },
];

function ImpactStats() {
  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "oklch(var(--forest-green))" }}
          >
            Our Reach
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "oklch(var(--forest-green))" }}
          >
            Our Impact
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              data-ocid={`impact.item.${i + 1}`}
              className="rounded-xl p-8 text-center shadow-card hover:shadow-honey transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                backgroundColor: "oklch(var(--warm-cream))",
                border: "1px solid oklch(var(--border))",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: "oklch(var(--forest-green) / 0.1)" }}
              >
                <s.icon
                  className="w-7 h-7"
                  style={{ color: "oklch(var(--forest-green))" }}
                />
              </div>
              <p
                className="text-3xl font-black mb-1"
                style={{ color: "oklch(var(--honey-amber))" }}
              >
                {s.stat}
              </p>
              <p
                className="text-lg font-bold mb-2"
                style={{ color: "oklch(var(--forest-green))" }}
              >
                {s.label}
              </p>
              <p
                className="text-sm"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────
function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "oklch(var(--warm-cream))" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "oklch(var(--forest-green))" }}
            >
              About Our Initiative
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight mb-6"
              style={{ color: "oklch(var(--forest-green))" }}
            >
              Building a Green Economy Through Honey
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "oklch(var(--foreground))" }}
            >
              The Madhu-Cluster initiative is a government-backed rural
              empowerment program dedicated to transforming the lives of women
              farmers through sustainable beekeeping practices. By harnessing
              India's rich forest biodiversity, we create a green economy that
              benefits both people and the planet.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              Our cluster model brings together thousands of rural women,
              providing them with training, equipment, and direct market access
              — eliminating exploitative middlemen and ensuring fair, dignified
              income for every participant.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                "Zero Chemical Practices",
                "Government Certified",
                "Community-Led Model",
              ].map((tag) => (
                <div key={tag} className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "oklch(var(--honey-amber))" }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "oklch(var(--forest-green))" }}
                  >
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right decorative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <div
              className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-honey flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.71 0.12 72), oklch(0.78 0.09 80), oklch(0.65 0.11 65))",
              }}
            >
              <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-white/10" />
              <div className="absolute bottom-6 left-6 w-16 h-16 rounded-full bg-white/10" />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center">
                  <FlowerIcon
                    className="w-16 h-16 text-white"
                    strokeWidth={1.2}
                  />
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-xl tracking-wide">
                    Pure Forest
                  </p>
                  <p className="text-white/80 text-sm tracking-widest uppercase">
                    Honey Production
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Hexagon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Products ────────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: "honey",
    icon: Droplets,
    name: "Pure Forest Honey",
    desc: "Unprocessed, raw honey collected from pristine forest ecosystems. Rich in antioxidants and natural enzymes.",
    weight: "500g / 1kg jars",
    color: "linear-gradient(135deg, oklch(0.71 0.12 72), oklch(0.80 0.10 78))",
  },
  {
    id: "beeswax",
    icon: Hexagon,
    name: "Natural Beeswax",
    desc: "Premium quality beeswax sourced directly from rural hives. Used in cosmetics, candles, and craft industries.",
    weight: "100g / 500g blocks",
    color: "linear-gradient(135deg, oklch(0.65 0.085 60), oklch(0.75 0.09 70))",
  },
  {
    id: "pollen",
    icon: Sparkles,
    name: "Bee Pollen",
    desc: "Nutrient-dense pollen granules, a natural superfood packed with vitamins, minerals, and protein.",
    weight: "250g pouches",
    color:
      "linear-gradient(135deg, oklch(0.60 0.095 55), oklch(0.70 0.085 65))",
  },
];

function Products() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "oklch(var(--forest-green))" }}
          >
            Direct From Hive
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "oklch(var(--forest-green))" }}
          >
            Our Products
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              data-ocid={`products.item.${i + 1}`}
              className="rounded-2xl overflow-hidden shadow-card hover:shadow-honey transition-all duration-300 hover:-translate-y-2"
              style={{
                border: "1.5px solid oklch(var(--tan-card) / 0.5)",
                backgroundColor: "oklch(var(--warm-cream))",
              }}
            >
              <div
                className="h-44 flex items-center justify-center"
                style={{ background: p.color }}
              >
                <p.icon className="w-16 h-16 text-white" strokeWidth={1.2} />
              </div>
              <div className="p-6">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "oklch(var(--forest-green))" }}
                >
                  {p.name}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  {p.desc}
                </p>
                <p
                  className="text-xs font-semibold tracking-wide mb-5"
                  style={{ color: "oklch(var(--honey-amber))" }}
                >
                  {p.weight}
                </p>
                <Button
                  data-ocid={`products.primary_button.${i + 1}`}
                  className="w-full text-white font-semibold rounded-full hover:opacity-90 transition-all hover:scale-[1.02]"
                  style={{ backgroundColor: "oklch(var(--forest-green))" }}
                >
                  Pre-order Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", phone: "", message: "" });
      toast.success("Message sent! We'll reach out to you soon.");
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "oklch(var(--warm-cream))" }}
    >
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "oklch(var(--forest-green))" }}
          >
            Get Involved
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: "oklch(var(--forest-green))" }}
          >
            Join Us / Contact
          </h2>
          <p
            style={{ color: "oklch(var(--muted-foreground))" }}
            className="text-sm"
          >
            Whether you're a farmer, buyer, or partner — we'd love to hear from
            you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          data-ocid="contact.panel"
          className="rounded-2xl p-8 shadow-card space-y-5"
          style={{
            backgroundColor: "white",
            border: "1px solid oklch(var(--border))",
          }}
        >
          <div className="space-y-1.5">
            <Label
              htmlFor="name"
              className="text-sm font-semibold"
              style={{ color: "oklch(var(--forest-green))" }}
            >
              Full Name
            </Label>
            <Input
              id="name"
              data-ocid="contact.input"
              placeholder="e.g. Priya Sharma"
              required
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              className="rounded-lg text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="phone"
              className="text-sm font-semibold"
              style={{ color: "oklch(var(--forest-green))" }}
            >
              Phone Number
            </Label>
            <Input
              id="phone"
              data-ocid="contact.input"
              placeholder="+91 98765 43210"
              type="tel"
              required
              value={form.phone}
              onChange={(e) =>
                setForm((p) => ({ ...p, phone: e.target.value }))
              }
              className="rounded-lg text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="message"
              className="text-sm font-semibold"
              style={{ color: "oklch(var(--forest-green))" }}
            >
              Message
            </Label>
            <Textarea
              id="message"
              data-ocid="contact.textarea"
              placeholder="Tell us about your interest (farming, bulk buying, partnership)..."
              required
              rows={4}
              value={form.message}
              onChange={(e) =>
                setForm((p) => ({ ...p, message: e.target.value }))
              }
              className="rounded-lg text-sm resize-none"
            />
          </div>

          <Button
            type="submit"
            data-ocid="contact.submit_button"
            disabled={submitting}
            className="w-full text-white font-semibold h-11 rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "oklch(var(--forest-green))" }}
          >
            {submitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
const SOCIALS = [
  { icon: Twitter, label: "Twitter" },
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
];

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "oklch(var(--forest-dark))" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "oklch(var(--honey-amber) / 0.2)" }}
            >
              <Hexagon
                className="w-5 h-5"
                style={{ color: "oklch(var(--honey-amber))" }}
              />
            </div>
            <div>
              <p className="font-bold text-white">Madhu-Cluster</p>
              <p className="text-xs" style={{ color: "oklch(0.80 0 0)" }}>
                Rural Beekeeping Initiative
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <button
                key={s.label}
                type="button"
                aria-label={s.label}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:opacity-90"
                style={{ backgroundColor: "oklch(var(--honey-amber) / 0.25)" }}
              >
                <s.icon
                  className="w-4 h-4"
                  style={{ color: "oklch(var(--honey-amber))" }}
                />
              </button>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{
            borderTop: "1px solid oklch(1 0 0 / 0.1)",
            color: "oklch(0.70 0 0)",
          }}
        >
          <p>© {year} Madhu-Cluster. All rights reserved.</p>
          <p>
            Built with{" "}
            <Heart
              className="w-3 h-3 inline-block"
              style={{ color: "oklch(var(--honey-amber))" }}
            />{" "}
            using{" "}
            <a
              href={caffeineUrl}
              className="underline hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <ImpactStats />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
