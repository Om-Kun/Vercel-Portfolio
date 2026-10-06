import HoverImg from "@/components/block/hover-img";
import { ArtGallery } from "@/components/block/art-gallery";
import { DiscoverButton } from "@/components/block/discover-button";
import Image from "next/image";

export default function Home() {
  const showcaseProjects = [
    {
      title: "Seguro",
      label: "100% Local ai agent that actually Operates your desktop",
      imageSrc: "/proj1_web.jpg"
    },
    {
      title: "NUllDrop",
      label: "Airdrop+File treansfer Via gestures in Android",
      imageSrc: "/proj2_web.jpg"
    },
    {
      title: "D-OM OS",
      label: "Retro Crt online Linux Distro",
      imageSrc: "/proj3_web.jpg"
    }
  ];

  const galleryImages = [
    "art1_web.jpg",
    "art2_web.jpg",
    "art3_web.jpg",
    "art4_web.jpg",
    "art5_web.jpg"
  ];

  const galleryItems = [
    { title: "ASSCOD", year: "2026" },
    { title: "Marlboro", year: "2026" },
    { title: "system", year: "2026" },
    { title: "wanna be", year: "2025" },
    { title: "wednesday", year: "2025" }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden pt-24">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 text-foreground p-6 md:px-24 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="font-medium tracking-tight"><a href="#">Om Salunke</a></div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-muted-foreground transition-colors">About</a>
          <a href="#projects" className="hover:text-muted-foreground transition-colors">Projects</a>
          <a href="#gallery" className="hover:text-muted-foreground transition-colors">Gallery</a>
          <a href="#socials" className="hover:text-muted-foreground transition-colors">Socials</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex w-full flex-col md:flex-row items-center justify-between min-h-[70vh] px-6 md:px-24 text-left border-b border-border/40 pb-20">

        <div className="z-10 flex flex-col items-start max-w-3xl space-y-8 mt-20 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-md text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.1]">
            Software Engineer <br />
            <span className="text-muted-foreground font-serif italic font-normal">&</span> Digital Artist.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light">
            I build clean, performant web applications and design striking visual experiences.
            Currently studying Computer Engineering with a focus on Full Stack and AI/ML.
          </p>

          <div className="pt-8 flex gap-6 items-center">
            <a href="#projects">
              <DiscoverButton label="Discover Projects" />
            </a>
            <a href="https://github.com/Om-Kun" target="_blank" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/om-salunke-111a81324/?isSelfProfile=true" target="_blank" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Hero Image / Pic Placeholder */}
        <div className="order-1 md:order-2 mb-12 md:mb-0 relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-border p-2">
          <div className="w-full h-full rounded-full bg-muted/20 overflow-hidden relative group">
            {/* To change this pic, place your image (e.g. om.jpg) in the "public" folder of the project, then uncomment the <Image /> tag below and update the src to "/om.jpg". */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm z-10 group-hover:opacity-0 transition-opacity">

            </div>
            <Image src="/Sobar-me.jpg" alt="Om Salunke" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Experience / About */}
      <section id="about" className="py-24 px-6 md:px-24 border-b border-border/40 w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 section-animate">
            <h2 className="text-xs tracking-widest uppercase text-muted-foreground font-medium mb-4">Background</h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-16 section-animate">
            <div className="text-2xl md:text-3xl leading-snug font-light">
              I am a 3rd-year Computer Engineering diploma student with a deep passion for the intersection of logic and creativity. I specialize in <span className="font-medium text-foreground">React, Next.js, and AI/ML integrations</span>, while also creating graphic art, posters, and custom UI components.
            </div>

            <div>
              <h3 className="text-sm font-medium mb-6">Experience</h3>
              <div className="flex flex-col border-t border-border/40">
                <div className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border/40 hover:bg-muted/5 transition-colors cursor-default px-2">
                  <div>
                    <h4 className="text-xl font-medium group-hover:translate-x-2 transition-transform duration-300">Freelance Developer & Designer</h4>
                    <p className="text-muted-foreground mt-1">Independent</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0">2024 — Present</div>
                </div>
                <div className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border/40 hover:bg-muted/5 transition-colors cursor-default px-2">
                  <div>
                    <h4 className="text-xl font-medium group-hover:translate-x-2 transition-transform duration-300">Computer Engineering Diploma</h4>
                    <p className="text-muted-foreground mt-1">Student</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0">2023 — Present</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects / Experience Section using Hover Image */}
      <section id="projects" className="w-full max-w-6xl mx-auto py-32 px-6">
        <div className="mb-16">
          <h2 className="text-xs tracking-widest uppercase text-muted-foreground font-medium mb-4">Selected Works</h2>
          <p className="text-3xl md:text-5xl font-light tracking-tight">A curated list of recent engineering and design projects.</p>
        </div>

        <HoverImg projects={showcaseProjects} />
      </section>

      {/* Art Gallery Section */}
      <section id="gallery" className="w-full bg-black border-t border-border/40 relative h-[100vh] flex flex-col justify-center">
        <div className="absolute top-20 left-6 md:left-24 z-10 pointer-events-none">
          <h2 className="text-xs tracking-widest uppercase text-gray-500 font-medium mb-4">My GFX Work:</h2>
          <p className="text-3xl md:text-5xl font-light text-white tracking-tight">Brutalism,funk,grundge</p>
        </div>

        {/* The Obsidian UI Art Gallery Component - Full Bleed */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <ArtGallery className="h-full w-full" images={galleryImages} items={galleryItems} />
        </div>
      </section>

      {/* Socials Section */}
      <section id="socials" className="w-full max-w-5xl mx-auto py-24 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-10 md:p-16 rounded-3xl bg-muted/10 border border-border/40 hover:bg-muted/20 hover:border-border/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ease-out">
          <div>
            <h2 className="text-2xl md:text-4xl font-medium tracking-tight mb-4">Connect across the web.</h2>
            <p className="text-muted-foreground font-light max-w-sm">Follow my creative journey and engineering logs.</p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <a href="https://github.com/Om-Kun" target="_blank" className="group px-6 py-3 rounded-full border border-border/40 bg-background hover:bg-foreground hover:text-background transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 shadow-sm hover:shadow-lg">
              <span className="font-medium text-sm">GitHub</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/om-salunke-111a81324/?isSelfProfile=true" target="_blank" className="group px-6 py-3 rounded-full border border-border/40 bg-background hover:bg-foreground hover:text-background transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 shadow-sm hover:shadow-lg">
              <span className="font-medium text-sm">LinkedIn</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
            <a href="mailto:omsalunke369@gmail.com" className="group px-6 py-3 rounded-full border border-border/40 bg-background hover:bg-foreground hover:text-background transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 shadow-sm hover:shadow-lg">
              <span className="font-medium text-sm">Email</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
            <a href="/resume.pdf" target="_blank" className="group px-6 py-3 rounded-full border border-border/40 bg-background hover:bg-foreground hover:text-background transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 shadow-sm hover:shadow-lg">
              <span className="font-medium text-sm">Resume</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-4xl mx-auto py-32 px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8">Let's build together.</h2>
        <p className="text-xl text-muted-foreground mb-12 font-light">Available for freelance opportunities and collaborations.</p>
        <a
          href="mailto:om@example.com"
          className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background rounded-full font-medium transition-transform hover:scale-105"
        >
          Get in touch
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-border/40 py-8 px-6 md:px-24 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
        <p>© 2026 Om Salunke. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/om-salunke-111a81324/?isSelfProfile=true" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://github.com/Om-Kun" className="hover:text-foreground transition-colors">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
