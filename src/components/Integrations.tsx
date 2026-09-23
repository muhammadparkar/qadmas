import IntegrationHero from '@/components/ui/integration-hero';

export default function Integrations() {
  return (
    <div id="technologies" className="border-t border-slate-200/80 bg-gallery-white">
      <IntegrationHero
        title={
          <h2 className="text-display font-medium text-ink tracking-tight leading-[1.04]">
            Built on technologies that{" "}
            <span className="text-apple-blue font-serif-accent font-normal italic">
              stand the test of scale
            </span>
          </h2>
        }
        description="We use industry-standard languages, modern frameworks, and cloud infrastructure with active global communities. Easy to maintain, easy to scale, and zero proprietary lock-in."
        buttonText="Discuss Your Architecture"
        buttonHref="#contact"
      />
    </div>
  );
}
