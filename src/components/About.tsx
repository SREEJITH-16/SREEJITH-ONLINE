import { Briefcase, GraduationCap, MapPin, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { content } from "@/content";
import { Reveal, MaskReveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function About() {
  const { profile } = content;
  const currentRole = content.experience.find((e) => e.current) ?? content.experience[0];

  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <div className="container-edit">
        <SectionHeader index="02" eyebrow="About Me" title="More Than Just a Developer." />

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="portrait-glow relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface">
              <img
                src="/sreejith-portrait-color.jpeg"
                alt={`${profile.name} speaking at an event`}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={1000}
                height={1250}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal variant="up">
              <div className="space-y-5 text-[0.98rem] leading-relaxed text-muted-foreground">
                {profile.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal variant="up" delay={120}>
              <blockquote className="mt-8 border-l-2 border-primary pl-5 font-display text-xl italic leading-snug sm:text-2xl">
                &ldquo;Discipline today, a better tomorrow.&rdquo;
                <footer className="mt-2 font-sans text-xs not-italic uppercase tracking-widest text-muted-foreground">
                  {profile.name}
                </footer>
              </blockquote>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Reveal variant="up" delay={160}>
                <InfoCard icon={GraduationCap} label="Education">
                  <p className="text-sm leading-snug text-foreground">{profile.education.degree}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{profile.education.duration}</p>
                </InfoCard>
              </Reveal>
              <Reveal variant="up" delay={220}>
                <InfoCard icon={Briefcase} label="Experience">
                  {currentRole ? (
                    <>
                      <p className="text-sm leading-snug text-foreground">
                        {currentRole.role} &middot; {currentRole.company}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">{currentRole.duration}</p>
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground">—</p>
                  )}
                </InfoCard>
              </Reveal>
              <Reveal variant="up" delay={280}>
                <InfoCard icon={MapPin} label="Location">
                  <p className="text-sm leading-snug text-foreground">{profile.location}</p>
                </InfoCard>
              </Reveal>
              <Reveal variant="up" delay={340}>
                <InfoCard icon={Sparkles} label="Interests">
                  <p className="text-sm leading-snug text-foreground">{profile.interests.join(", ")}</p>
                </InfoCard>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .portrait-glow {
          box-shadow: 0 0 60px -14px color-mix(in oklab, var(--primary) 30%, transparent);
        }
      `}</style>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof GraduationCap;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="card-surface card-hover flex h-full flex-col gap-3 p-5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-primary">
        <Icon size={15} strokeWidth={1.8} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <div className="mt-1.5">{children}</div>
      </div>
    </div>
  );
}
