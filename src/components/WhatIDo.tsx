import { ArrowUpRight, BrainCircuit, Cpu, Layers, Radio } from "lucide-react";
import { content } from "@/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const ICONS: Record<string, typeof Layers> = {
  fullstack: Layers,
  aiml: BrainCircuit,
  software: Cpu,
  iot: Radio,
};

export function WhatIDo() {
  return (
    <section id="skills" className="border-t border-border py-24 sm:py-32">
      <div className="container-edit">
        <SectionHeader index="04" eyebrow="What I Do" title="Skills & Expertise" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.skills.map((s, i) => {
            const Icon = ICONS[s.id] ?? Layers;
            return (
              <Reveal key={s.id} variant="up" delay={i * 90}>
                <div className="card-surface card-hover group h-full p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-primary">
                        <Icon size={14} strokeWidth={1.8} />
                      </span>
                      <span className="section-index">{s.index}</span>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mt-5 text-lg">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
