import re

with open('src/components/Services.tsx', 'r') as f:
    content = f.read()

new_grid = """        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* 1. Software Development */}
        <motion.div variants={item} className="md:col-span-1 p-xl bg-surface-soft rounded-3xl border border-hairline/50 flex flex-col items-start overflow-hidden relative group">
          <div className="flex items-center space-x-2 text-ink mb-2 z-10">
            <Code size={20} strokeWidth={1.5} />
            <span className="font-semibold figma-body-sm">Software Development</span>
          </div>
          <p className="figma-body text-ink/70 mb-12 z-10">Custom software tailored to your business processes. Built for scalability, performance, and long-term reliability.</p>
          <div className="flex-1 w-full min-h-[160px] mt-auto relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-xl flex items-center justify-center">
                <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} className="w-32 h-32 rounded-full border border-blue-300 border-dashed relative">
                   <div className="absolute inset-4 rounded-full border border-blue-400 border-dashed"></div>
                   <div className="absolute inset-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
                </motion.div>
             </div>
          </div>
        </motion.div>

        {/* 2. Enterprise Solutions */}
        <motion.div variants={item} className="md:col-span-2 p-xl bg-blue-600 text-white rounded-3xl border border-hairline/50 overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            <div className="flex flex-col z-10">
              <div className="flex items-center space-x-2 mb-2">
                <Database size={20} strokeWidth={1.5} />
                <span className="font-semibold figma-body-sm">Enterprise Solutions</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-medium tracking-tight mt-6 mb-8 pr-4">
                "Streamline operations using enterprise-grade CRM and ERP tools."
              </h3>
              <div className="flex items-center space-x-4 mt-auto">
                 <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"><Database size={18} /></div>
                 <div className="figma-body-sm">
                    <p className="font-bold">Workflow Automation</p>
                    <p className="opacity-80">Business intelligence dashboards</p>
                 </div>
              </div>
            </div>
            
            <div className="relative min-h-[200px] z-10 flex border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 pl-0 md:pl-12 items-center">
               <div className="w-full bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20 space-y-4">
                  <div className="w-full h-8 bg-white/20 rounded-md"></div>
                  <div className="w-3/4 h-8 bg-white/20 rounded-md"></div>
                  <div className="w-5/6 h-8 bg-white/20 rounded-md"></div>
               </div>
            </div>
          </div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400 blur-3xl rounded-full opacity-50"></div>
        </motion.div>

        {/* 3. Website Development */}
        <motion.div variants={item} className="md:col-span-2 p-xl bg-surface-soft rounded-3xl border border-hairline/50 overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            <div className="flex flex-col z-10 pr-0 md:pr-8">
              <div className="flex items-center space-x-2 text-ink mb-2">
                <Globe size={20} strokeWidth={1.5} />
                <span className="font-semibold figma-body-sm">Website Development</span>
              </div>
              <p className="figma-body text-ink/70 mb-8 pr-4">Create modern, responsive, and high-performing websites that convert visitors into customers.</p>
              
              <div className="space-y-3 mt-auto">
                 <div className="flex items-center space-x-3 figma-body-sm bg-white p-3 rounded-lg border border-hairline w-fit pr-8">
                    <span>📱 Mobile-first design</span>
                 </div>
                 <div className="flex items-center space-x-3 figma-body-sm bg-white p-3 rounded-lg border border-hairline w-fit shadow-sm relative left-6">
                    <span>⚡ Fast loading speed & SEO</span>
                 </div>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center relative">
               <div className="w-full h-48 bg-white rounded-xl shadow-sm border border-hairline p-4 flex flex-col space-y-3">
                 <div className="w-full h-6 bg-surface-soft rounded"></div>
                 <div className="w-full flex space-x-3">
                   <div className="w-1/3 h-24 bg-surface-soft rounded"></div>
                   <div className="w-2/3 h-24 bg-surface-soft rounded"></div>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* 4. Mobile App Development */}
        <motion.div variants={item} className="md:col-span-1 p-xl bg-surface-soft rounded-3xl border border-hairline/50 flex flex-col relative overflow-hidden">
          <div className="flex items-center space-x-2 text-ink mb-2 z-10">
            <Smartphone size={20} strokeWidth={1.5} />
            <span className="font-semibold figma-body-sm">Mobile App Dev</span>
          </div>
          <p className="figma-body text-ink/70 mb-12 z-10">Cross-platform and native mobile apps with a focus on UI/UX and performance.</p>
          <div className="w-full bg-white rounded-xl shadow-sm border border-hairline flex-1 min-h-[160px] p-6 relative flex items-center justify-center">
             <div className="w-24 h-48 border-[4px] border-hairline rounded-3xl flex flex-col items-center py-2">
                <div className="w-8 h-1 bg-hairline rounded-full mb-2"></div>
                <div className="w-full flex-1 bg-surface-soft rounded-md mx-2"></div>
             </div>
          </div>
        </motion.div>

        {/* 5. Digital Marketing */}
        <motion.div variants={item} className="md:col-span-1 p-xl bg-surface-soft rounded-3xl border border-hairline/50 flex flex-col relative overflow-hidden">
          <div className="flex items-center space-x-2 text-ink mb-2 z-10">
            <LineChart size={20} strokeWidth={1.5} />
            <span className="font-semibold figma-body-sm">Digital Marketing</span>
          </div>
          <p className="figma-body text-ink/70 mb-12 z-10">Drive traffic, engagement, and conversions using proven SEO and paid strategies.</p>
          <div className="w-full bg-white rounded-xl shadow-sm border border-hairline flex-1 min-h-[160px] p-6 relative flex items-end">
             <div className="w-full h-full flex items-end justify-between space-x-2">
                {[40, 70, 45, 90, 65, 110, 85].map((h, i) => (
                   <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: h }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }} className="w-full bg-blue-500 rounded-t-sm"></motion.div>
                ))}
             </div>
          </div>
        </motion.div>

        {/* 6. IT Support & Maintenance */}
        <motion.div variants={item} className="md:col-span-1 p-xl bg-surface-soft rounded-3xl border border-hairline/50 flex flex-col relative overflow-hidden">
          <div className="flex items-center space-x-2 text-ink mb-2 z-10">
            <ShieldCheck size={20} strokeWidth={1.5} />
            <span className="font-semibold figma-body-sm">IT Support</span>
          </div>
          <p className="figma-body text-ink/70 mb-12 z-10">We ensure your systems run smoothly with continuous monitoring and security updates.</p>
          <div className="w-full bg-white rounded-xl shadow-sm border border-hairline flex-1 min-h-[160px] p-6 relative flex items-center justify-center">
             <ShieldCheck size={64} className="text-green-500 opacity-20" />
          </div>
        </motion.div>

        {/* 7. Business Setup Services */}
        <motion.div variants={item} className="md:col-span-1 p-xl bg-surface-soft rounded-3xl border border-hairline/50 flex flex-col relative overflow-hidden">
          <div className="flex items-center space-x-2 text-ink mb-2 z-10">
            <Briefcase size={20} strokeWidth={1.5} />
            <span className="font-semibold figma-body-sm">Business Setup (UAE)</span>
          </div>
          <p className="figma-body text-ink/70 mb-12 z-10">Assisting entrepreneurs with company registration, trade licenses, and visa processes.</p>
          <div className="w-full bg-white rounded-xl shadow-sm border border-hairline flex-1 min-h-[160px] p-6 relative flex flex-col justify-center space-y-2">
             <div className="w-full h-4 bg-surface-soft rounded"></div>
             <div className="w-3/4 h-4 bg-surface-soft rounded"></div>
             <div className="w-1/2 h-4 bg-surface-soft rounded"></div>
          </div>
        </motion.div>"""

# Using regex to replace the content
import re
new_content = re.sub(
    r'initial="hidden"\s*whileInView="show".*?</motion\.div>\s*</motion\.div>',
    new_grid + "\n      </motion.div>",
    content,
    flags=re.DOTALL
)

with open('src/components/Services.tsx', 'w') as f:
    f.write(new_content)
