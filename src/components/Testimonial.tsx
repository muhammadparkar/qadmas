import TestimonialsColumns from './ui/testimonials-columns-1';

interface TestimonialProps {
  onCaseStudyClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Testimonial(_props: TestimonialProps = {}) {
  return (
    <div id="testimonials" className="border-t border-slate-200/80 bg-gallery-white">
      <TestimonialsColumns
        title={
          <h2 className="text-display font-medium text-ink tracking-tight leading-[1.04]">
            What our users say <br className="hidden sm:inline" />
            <span className="text-apple-blue font-serif-accent font-normal italic">
              about our work
            </span>
          </h2>
        }
        subtitle="See what our customers have to say about us."
      />
    </div>
  );
}
