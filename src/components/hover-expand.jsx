"use client";

import * as React from "react";
import { motion } from "motion/react";

import { cn } from "/src/lib/utils.js";

function HoverExpand({
  items,
  collapsedHeight = 68,
  // CHANGED: bumped default expanded height a bit to make more room for
  // longer descriptions. Feel free to raise this further (e.g. 380–420)
  // if you have very long paragraphs.
  expandedHeight = 360,
  className,
}) {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const handleCardToggle = (index) => {
    setHoveredIndex((current) => (current === index ? null : index));
  };

  return (
    <div className={cn("flex flex-col w-full", className)}>
      <div className="w-full border-t border-current opacity-15" />

      {items.map((item, i) => {
        const isHovered = hoveredIndex === i;
        const isOtherHovered = hoveredIndex !== null && !isHovered;

        return (
          <React.Fragment key={i}>
            <motion.div
              className="relative w-full overflow-hidden cursor-default"
              animate={{
                height: isHovered ? expandedHeight : collapsedHeight,
                opacity: isOtherHovered ? 0.38 : 1,
              }}
              transition={{
                height: {
                  type: "spring",
                  stiffness: 280,
                  damping: 32,
                  mass: 0.9,
                },
                opacity: { duration: 0.22, ease: "easeOut" },
              }}
              onClick={() => handleCardToggle(i)}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              aria-expanded={isHovered}
            >
              <motion.div
                className="absolute inset-0 w-full h-full"
                initial={false}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 1.06,
                }}
                transition={{
                  opacity: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
                  scale: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
                }}
              >

                <img
                  src={item.image}
                  alt={item.imageAlt ?? ""}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.10),transparent_38%),linear-gradient(to_top,_rgba(0,0,0,0.75),rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.10))]" />
              </motion.div>

              {/* CHANGED: switched from "items-end" (bottom-aligned) to
                  "items-start" (top-aligned) so the text block sits at the
                  top of the row instead of the bottom. Also switched the
                  inner layout from a row (justify-between) to a column,
                  since the description now needs its own full line below
                  the label instead of squeezing in beside it. */}
              <div className="absolute inset-0 flex items-start px-5 pt-4">
                <div className="flex w-full flex-col gap-2">
                  {/* Top row: number + label + sublabel */}
                  <div className="flex w-full items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-3 min-w-0 px-6">
                      <motion.span
                        className="text-xs tabular-nums shrink-0 opacity-40"
                        animate={{
                          color: isHovered ? "#ffffff" : "currentColor",
                          opacity: isHovered ? 0.5 : 0.4,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </motion.span>

                      <motion.span
                        className="font-semibold tracking-tight truncate"
                        style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}
                        animate={{
                          color: isHovered ? "#ffffff" : "currentColor",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.span>
                    </div>

                    {item.sublabel && (
                      <motion.span
                        className="text-xs tracking-widest uppercase shrink-0"
                        animate={{
                          color: isHovered
                            ? "rgba(255,255,255,0.55)"
                            : "currentColor",
                          opacity: isHovered ? 1 : 0.45,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.sublabel}
                      </motion.span>
                    )}
                  </div>

                  {/* CHANGED: description now lives on its own row below
                      the label, instead of inline next to it. Removed
                      "truncate" and "hidden sm:block" so long paragraphs
                      can wrap across multiple lines on all screen sizes.
                      "max-w-2xl" keeps line length readable instead of
                      stretching edge-to-edge. */}
                  {item.description && (
                    <motion.p
                      className="text-sm text-white/70 max-w-2xl whitespace-normal leading-relaxed text-shadow-lg"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : -8,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: isHovered ? 0.12 : 0,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                    >
                      {item.description}
                    </motion.p>
                  )}

                  {(item.href || item.onLearnMore || item.linkText) && (
                    <motion.a
                      href={item.href ?? "#"}
                      onClick={(event) => {
                        event.stopPropagation();
                        if (!item.href) {
                          event.preventDefault();
                        }
                        if (item.onLearnMore) {
                          item.onLearnMore();
                        }
                      }}
                      className="mt-1 inline-flex items-center gap-2 self-start text-sm font-medium text-white transition-colors hover:text-white/80"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : -8,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: isHovered ? 0.18 : 0,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                    >
                      {item.linkText ?? "Learn more"}
                      <span aria-hidden="true">→</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>

            <div className="w-full border-t border-current opacity-15" />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default HoverExpand;