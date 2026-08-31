    import {
    ArrowRight,
    Check,
    RotateCcw,
    Sparkles,
    } from "lucide-react";

    import { getPackageDetails } from "../../utils/calculateEstimate";

    function formatPrice(value) {
    return new Intl.NumberFormat("en-PH").format(value);
    }

    function EstimateResult({
    estimate,
    onRestart,
    onRequestProposal,
    }) {
    if (!estimate) {
        return null;
    }

    const packageDetails = getPackageDetails(
        estimate.recommendedPackage
    );

    return (
        <section className="w-full">
        <div className="mx-auto w-full max-w-5xl">

            {/* ============================================================
                HEADER
            ============================================================ */}

            <div className="mx-auto max-w-3xl text-center">

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white px-3.5 py-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#d8ff63] text-[#171817]">
                <Sparkles
                    size={10}
                    strokeWidth={2.5}
                />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/50">
                Estimate complete
                </span>
            </div>

            {/* Heading */}

            <h2 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[#111111]">
                Your estimated investment
            </h2>

            {/* Price */}

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-2">

                <span className="whitespace-nowrap text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#111111]">
                ₱{formatPrice(estimate.minimum)}
                </span>

                <span className="text-xl font-medium text-black/20">
                —
                </span>

                <span className="whitespace-nowrap text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#111111]">
                ₱{formatPrice(estimate.maximum)}
                </span>

            </div>

            {/* Description */}

            <p className="mx-auto mt-4 max-w-2xl text-xs leading-5 text-black/45 sm:text-sm sm:leading-6">
                Based on the requirements you selected,
                this is an initial investment range for your
                project. We&apos;ll confirm the exact scope and
                pricing with you before development begins.
            </p>

            </div>

            {/* ============================================================
                RESULT GRID
            ============================================================ */}

            <div
            className="
                mt-8
                grid
                items-start
                gap-4
                md:grid-cols-2
                lg:mt-10
                lg:gap-5
            "
            >

            {/* ==========================================================
                PROJECT SCOPE
            ========================================================== */}

            <div
                className="
                w-full
                rounded-[22px]
                border
                border-black/[0.07]
                bg-white
                p-5
                sm:p-6
                lg:p-7
                "
            >

                {/* Header */}

                <div className="flex items-start justify-between gap-4">

                <div className="min-w-0">

                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#7c9825]">
                    Project scope
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.045em] text-[#111111] sm:text-2xl">
                    Your requirements
                    </h3>

                </div>

                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f5f5f2] text-[#7c9825]">
                    <Check
                    size={15}
                    strokeWidth={2.5}
                    />
                </div>

                </div>

                {/* Requirement cards */}

                <div className="mt-6 grid grid-cols-1 gap-2.5 min-[400px]:grid-cols-2">

                {estimate.scope.projectType && (
                    <ScopeItem
                    label="Project type"
                    value={estimate.scope.projectType}
                    />
                )}

                {estimate.scope.pages && (
                    <ScopeItem
                    label="Pages"
                    value={estimate.scope.pages}
                    />
                )}

                {estimate.scope.design && (
                    <ScopeItem
                    label="Design direction"
                    value={estimate.scope.design}
                    />
                )}

                {estimate.scope.timeline && (
                    <ScopeItem
                    label="Timeline"
                    value={estimate.scope.timeline}
                    />
                )}

                </div>

                {/* Additional functionality */}

                {estimate.scope.features?.length > 0 && (
                <div className="mt-6 border-t border-black/[0.07] pt-6">

                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-black/35">
                    Additional functionality
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">

                    {estimate.scope.features.map(
                        (feature) => (
                        <div
                            key={feature}
                            className="inline-flex max-w-full items-center gap-2 rounded-full border border-black/[0.07] bg-[#f8f8f5] px-3 py-2 text-xs text-black/65"
                        >

                            <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#d8ff63] text-[#171817]">
                            <Check
                                size={9}
                                strokeWidth={3}
                            />
                            </span>

                            <span className="break-words">
                            {feature}
                            </span>

                        </div>
                        )
                    )}

                    </div>

                </div>
                )}

            </div>

            {/* ==========================================================
                RECOMMENDED PACKAGE
            ========================================================== */}

            <div
                className="
                relative
                w-full
                overflow-hidden
                rounded-[22px]
                bg-[#171817]
                p-5
                text-white
                sm:p-6
                lg:p-7
                "
            >

                {/* Subtle glow */}

                <div
                className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-44
                    w-44
                    rounded-full
                    bg-[#d8ff63]/10
                    blur-3xl
                "
                />

                {/* Header */}

                <div className="relative flex items-start justify-between gap-4">

                <div className="min-w-0">

                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/40">
                    Recommended package
                    </p>

                    <h3 className="mt-2 break-words text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">
                    {packageDetails.name}
                    </h3>

                </div>

                <span className="shrink-0 rounded-full bg-[#d8ff63] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.1em] text-[#171817]">
                    Best fit
                </span>

                </div>

                {/* Description */}

                <p className="relative mt-4 max-w-md text-xs leading-5 text-white/50 sm:text-sm sm:leading-6">
                {packageDetails.description}
                </p>

                {/* Divider */}

                <div className="relative mt-6 border-t border-white/10 pt-6">

                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                    Package starting price
                </p>

                <div className="mt-2 flex flex-wrap items-baseline gap-2">

                    <span className="text-3xl font-semibold leading-none tracking-[-0.06em] sm:text-4xl">
                    ₱{formatPrice(
                        packageDetails.startingPrice
                    )}
                    </span>

                    <span className="text-xs text-white/30">
                    / project
                    </span>

                </div>

                </div>

                {/* Best for */}

                {packageDetails.bestFor?.length > 0 && (
                <div className="relative mt-6">

                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                    Typically suitable for
                    </p>

                    <ul className="mt-4 space-y-2.5">

                    {packageDetails.bestFor
                        .slice(0, 4)
                        .map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-2.5 text-xs leading-5 text-white/60 sm:text-sm"
                        >

                            <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-white/[0.08]">
                            <Check
                                size={9}
                                strokeWidth={3}
                            />
                            </span>

                            <span className="min-w-0 break-words">
                            {item}
                            </span>

                        </li>
                        ))}

                    </ul>

                </div>
                )}

                {/* CTA */}
    <div className="relative mt-7">
    <button
        type="button"
        onClick={onRequestProposal}
        className="
        group
        flex
        min-h-12
        w-full
        cursor-pointer
        items-center
        justify-center
        gap-2
        rounded-full
        bg-[#d8ff63]
        px-5
        py-3.5
        text-center
        text-xs
        font-bold
        text-[#171817]
        whitespace-nowrap
        transition-all
        duration-300
        hover:bg-white
        active:scale-[0.98]
        sm:text-sm
        "
    >
        <span className="shrink-0">
        Request a detailed proposal
        </span>

        <ArrowRight
        size={16}
        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        />
    </button>

    <p className="mt-2.5 text-center text-[9px] leading-4 text-white/25">
        No commitment. We&apos;ll review your requirements first.
    </p>
    </div>

            </div>

            </div>

            {/* ============================================================
                DISCLAIMER
            ============================================================ */}

            <p className="mx-auto mt-5 max-w-2xl px-4 text-center text-[10px] leading-4 text-black/35 sm:mt-6 sm:text-[11px] sm:leading-5">
            <span className="font-semibold text-black/50">
                Initial estimate only.
            </span>{" "}
            Final pricing depends on confirmed scope,
            content, integrations, revisions, and technical
            requirements.
            </p>

            {/* ============================================================
                RESTART
            ============================================================ */}

            <div className="mt-2 flex justify-center">

            <button
                type="button"
                onClick={onRestart}
                className="
                group
                inline-flex
                min-h-10
                cursor-pointer
                items-center
                gap-2
                rounded-full
                px-4
                text-xs
                font-semibold
                text-black/40
                transition-colors
                hover:bg-white
                hover:text-[#171817]
                "
            >
                <RotateCcw
                size={13}
                className="transition-transform duration-300 group-hover:-rotate-45"
                />

                Start a new estimate
            </button>

            </div>

        </div>
        </section>
    );
    }

    /* ================================================================
    SCOPE ITEM
    ================================================================ */

    function ScopeItem({
    label,
    value,
    }) {
    return (
        <div
        className="
            min-w-0
            rounded-[15px]
            border
            border-black/[0.06]
            bg-[#f8f8f5]
            px-4
            py-3.5
        "
        >
        <p className="text-[8px] font-bold uppercase tracking-[0.13em] text-black/35">
            {label}
        </p>

        <p className="mt-1.5 break-words text-sm font-semibold leading-5 tracking-[-0.02em] text-[#222222]">
            {value}
        </p>
        </div>
    );
    }

    export default EstimateResult;