"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { projects, projectCategories, projectImages } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

export function PortfolioGrid() {
  const [active, setActive] = useState<string>("all");
  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.categoryId === active);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2.5">
        {projectCategories.map((cat) => {
          const selected = active === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={`rounded-full border px-5 py-2.5 text-sm tracking-tight transition-all duration-300 ${
                selected
                  ? "border-gold bg-gold text-white"
                  : "border-line-strong text-muted hover:border-gold hover:text-paper"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface"
          >
            <div className="relative aspect-[4/3] overflow-hidden border-b border-line">
              <img
                src={projectImages[project.id]}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-xs text-white backdrop-blur">
                {project.category}
              </span>
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-7">
              <div className="flex items-center gap-3 text-xs text-faint">
                <span>{project.year}</span>
                <span className="h-1 w-1 rounded-full bg-faint" />
                <span>{project.scale}</span>
                <span className="h-1 w-1 rounded-full bg-faint" />
                <span>{project.location}</span>
              </div>
              <h3 className="font-serif text-xl leading-snug transition-colors duration-500 group-hover:text-gold">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
