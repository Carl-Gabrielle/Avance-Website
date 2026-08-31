export const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Projects", href: "#projects" },
];

const AuroraArt = () => (
  <div className="relative h-full w-full overflow-hidden bg-[#e8edf4]">
    <div className="absolute left-[13%] top-[12%] h-[78%] w-[74%] rounded-[20%] bg-[linear-gradient(145deg,#1531aa_0%,#818eff_48%,#e6ceff_100%)] shadow-[0_30px_50px_rgba(48,66,180,.32)]" />
    <div className="absolute left-[27%] top-[27%] h-[18%] w-[46%] rounded-full bg-white/85 blur-sm" />
    <div className="absolute bottom-[17%] left-[24%] h-[7%] w-[53%] rounded-full bg-[#181b7b]/45 blur-sm" />
  </div>
);

const HelioArt = () => (
  <div className="relative h-full w-full overflow-hidden bg-[#15151b]">
    <div className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f5a642]/40" />
    <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[28px] border-[#ef9d28] shadow-[0_0_65px_rgba(255,156,30,.65)]" />
    <div className="absolute left-1/2 top-1/2 h-[24%] w-[24%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffe19f] shadow-[0_0_50px_20px_rgba(255,213,123,.5)]" />
  </div>
);

const FinloopArt = () => (
  <div className="relative h-full w-full overflow-hidden bg-[#ece9e3]">
    <div className="absolute -left-[6%] top-[16%] h-[70%] w-[112%] -rotate-[12deg] rounded-[30px] bg-[#25202d] shadow-2xl" />
    <div className="absolute left-[18%] top-[32%] text-[clamp(2rem,6vw,4.8rem)] font-bold tracking-[-.09em] text-[#e6ff65]">finloop</div>
    <div className="absolute bottom-[23%] left-[18%] flex gap-2">
      <span className="h-2 w-16 rounded-full bg-white/30" />
      <span className="h-2 w-9 rounded-full bg-white/15" />
    </div>
  </div>
);

export const projects = [
  {
    name: "Aurora Health",
    description: "A calmer digital front door for modern care.",
    category: "Brand + Web",
    href: "#contact",
    canvasClass: "bg-[#e8edf4]",
    artClass: "inset-0 transition-transform duration-700 group-hover:scale-[1.04]",
    art: <AuroraArt />,
  },
  {
    name: "Helio Energy",
    description: "Making clean energy feel easy to choose.",
    category: "Product",
    href: "#contact",
    canvasClass: "bg-[#15151b]",
    artClass: "inset-0 transition-transform duration-700 group-hover:rotate-3 group-hover:scale-[1.04]",
    art: <HelioArt />,
  },
  {
    name: "Finloop",
    description: "Finance infrastructure, made human.",
    category: "Web platform",
    href: "#contact",
    canvasClass: "bg-[#ece9e3]",
    artClass: "inset-0 transition-transform duration-700 group-hover:scale-[1.04]",
    art: <FinloopArt />,
  },
];