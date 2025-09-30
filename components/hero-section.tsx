"use client";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="animate-fade-in-up">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl animate-fade-in-up [animation-delay:100ms]">
          Blossom Chikezie
        </h1>
        <p className="text-xl font-medium text-primary animate-fade-in-up [animation-delay:200ms]">
          Why Blossom Chikezie?
        </p>
        <p className="text-lg text-muted-foreground text-pretty leading-relaxed animate-fade-in-up [animation-delay:300ms]">
          I don't just write code, I ship results. At Canalis Lab, I slashed
          page load times by 40% and automated workflows that cut processing
          time by 70% for 50+ users. At Regulon, I built the onboarding flow
          that brought in the first 10+ users and seamlessly integrated third-party APIs
          like Google Calendar and Stripe. At Prunedge, I led a document management system
          now running across two Nigerian states, shaving 30% off processing
          times.
        </p>
        <p className="text-lg text-muted-foreground text-pretty leading-relaxed animate-fade-in-up [animation-delay:500ms]">
          Here's what makes me different: I'm combining battle-tested
          engineering chops with cutting-edge AI skills I gain from my MSc, think
          sentiment analysis, data extraction, machine learning pipelines. I
          bridge the gap between what works today and what's possible tomorrow.
          Hire me, and you get a developer who moves fast, thinks strategically,
          and turns complex problems into clean, measurable wins. Let's build
          something exceptional.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up [animation-delay:400ms]">
        <Button
          variant="outline"
          size="icon"
          asChild
          className="transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-lg hover:shadow-primary/20 bg-transparent"
        >
          <a
            href="https://github.com/Blossom1-chike"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          asChild
          className="transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-lg hover:shadow-primary/20 bg-transparent"
        >
          <a
            href="https://linkedin.com/in/blossom-chikezie"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          asChild
          className="transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-lg hover:shadow-primary/20 bg-transparent"
        >
          <a
            href="https://blossom-chikezie.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
          >
            <Globe className="h-5 w-5" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          asChild
          className="transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-lg hover:shadow-primary/20 bg-transparent"
        >
          <a href="mailto:chinanuchikezie515@gmail.com" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
      </div>

      <div className="mt-12 space-y-2 animate-fade-in-up [animation-delay:500ms]">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Location:</span>{" "}
          England, United Kingdom
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Phone:</span> 07516
          091946
        </p>
      </div>
    </div>
  );
}
