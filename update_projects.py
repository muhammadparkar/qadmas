with open('src/components/Projects.tsx', 'r') as f:
    text = f.read()

new_content = """import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ColorBlock } from './ui/ColorBlock';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <>
      {/* Our Process Section */}
      <ColorBlock color="white" id="process" className="border-t border-hairline/50">
        <div className="flex flex-col md:flex-row justify-between mb-xl">
          <div className="max-w-[672px]">
            <h2 className="figma-display-lg mb-md leading-tight text-balance">
              Our Process
            </h2>
            <p className="figma-body text-ink/70">
              A structured approach to bringing your vision to life.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {[
            { step: "01", name: "Consultation", desc: "Understanding your goals and requirements", delay: 0.1 },
            { step: "02", name: "Strategy & Planning", desc: "Creating a roadmap for execution", delay: 0.2 },
            { step: "03", name: "Development", desc: "Building and implementing solutions", delay: 0.3 },
            { step: "04", name: "Launch & Optimize", desc: "Continuous improvement and scaling", delay: 0.4 }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
              className="p-lg bg-surface-soft rounded-3xl border border-hairline/50 group hover:shadow-lg transition-all duration-300"
            >
              <span className="figma-eyebrow text-ink/40 mb-4 block">{item.step}.</span>
              <h4 className="figma-card-title text-ink mb-2">
                {item.name}
              </h4>
              <p className="figma-body-sm text-ink/70">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </ColorBlock>

      {/* Projects Section */}
      <ColorBlock color="white" id="portfolio" className="border-t border-hairline/50 pt-section">
        <div className="flex flex-col md:flex-row justify-between mb-xl">
          <div className="max-w-[672px]">
            <h2 className="figma-display-lg mb-md leading-tight text-balance">
              Featured Projects
            </h2>
            <p className="figma-body text-ink/70">
              We have worked across multiple industries delivering web applications, cloud solutions, and marketing campaigns.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex gap-4 items-start">
             <Button variant="primary" href="#contact">Get a Quote</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg relative">
          {[
             { tag: "Web Application", name: "E-Commerce Replatforming", delay: 0.1 },
             { tag: "Cloud Solution", name: "Custom ERP System", delay: 0.3 }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
              className="p-xl bg-surface-soft rounded-3xl border border-hairline/50 group hover:shadow-lg transition-all duration-500 overflow-hidden relative cursor-pointer"
            >
              <div className="flex items-center justify-between mb-12">
                 <p className="figma-eyebrow text-ink/50">{item.tag}</p>
                 <div className="w-10 h-10 rounded-full border border-hairline/50 bg-white flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight size={20} />
                 </div>
              </div>
              <h4 className="figma-display-sm text-[32px] md:text-[40px] font-semibold text-ink leading-tight mb-8 text-balance max-w-[384px]">
                {item.name}
              </h4>
              
              {/* Abstract project mockup graphic */}
              <div className="w-[120%] h-[240px] bg-white rounded-t-2xl shadow-sm border border-hairline translate-x-4 md:translate-x-12 translate-y-4 group-hover:-translate-y-2 transition-transform duration-500 relative p-6">
                 <div className="w-full flex justify-between items-center mb-6">
                    <div className="w-1/3 h-4 bg-surface-soft rounded-full"></div>
                    <div className="flex space-x-2">
                       <div className="w-8 h-8 rounded-full bg-blue-50"></div>
                       <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                    </div>
                 </div>
                 <div className="flex gap-6 h-full border-t border-hairline pt-6">
                    <div className="w-1/4 h-full bg-surface-soft rounded-lg"></div>
                    <div className="flex-1 space-y-4">
                       <div className="w-full h-12 bg-surface-soft rounded-lg"></div>
                       <div className="w-full h-12 bg-surface-soft rounded-lg"></div>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ColorBlock>

      {/* Testimonials */}
      <ColorBlock color="white" className="border-t border-hairline/50 pt-section">
        <div className="max-w-[720px] mx-auto text-center">
          <h3 className="figma-display-lg leading-tight mb-lg tracking-tighter">Clients appreciate our transparent communication and result-driven approach.</h3>
          <p className="figma-body-lg text-ink/70 mb-xl text-balance">
            With a focus on timely delivery, we ensure your business meets its goals effectively.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
             <Button variant="primary" href="#contact">Get started today</Button>
          </div>
        </div>
      </ColorBlock>
    </>
  );
}
"""

with open('src/components/Projects.tsx', 'w') as f:
    f.write(new_content)
