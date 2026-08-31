function SectionLabel({ children }) {
  return (
    <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#d3ff5f]">
      <span className="h-px w-7 bg-[#d3ff5f]" />
      {children}
    </p>
  );
}

export default SectionLabel;
