with open('src/components/Footer.tsx', 'r') as f:
    text = f.read()

new_content = """import { Button } from './ui/Button';
import { ColorBlock } from './ui/ColorBlock';

export default function Footer() {
  return (
    <>
      <ColorBlock color="white" id="contact" className="border-t border-hairline/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-start max-w-[1024px] mx-auto">
          <div>
            <h2 className="figma-display-lg leading-tight tracking-tighter mb-4">Contact Us</h2>
            <p className="figma-body text-ink/70 mb-8">
              Ready to grow your business? Contact us today to get started.
            </p>
            <div className="figma-body-sm font-bold text-ink">
              Email:
              <a href="mailto:info@qadmastechnologies.com" className="block text-blue-600 mt-1 hover:underline">info@qadmastechnologies.com</a>
            </div>
          </div>
          
          <div className="bg-surface-soft p-lg rounded-3xl border border-hairline/50">
             <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div className="flex flex-col">
                 <label className="figma-caption mb-2 text-ink/70">Name</label>
                 <input type="text" placeholder="Your name" className="px-4 py-3 rounded-lg border border-hairline/50 bg-white outline-none focus:border-ink transition-colors" />
               </div>
               <div className="flex flex-col">
                 <label className="figma-caption mb-2 text-ink/70">Email</label>
                 <input type="email" placeholder="your@email.com" className="px-4 py-3 rounded-lg border border-hairline/50 bg-white outline-none focus:border-ink transition-colors" />
               </div>
               <div className="flex flex-col">
                 <label className="figma-caption mb-2 text-ink/70">Message</label>
                 <textarea rows={4} placeholder="How can we help?" className="px-4 py-3 rounded-lg border border-hairline/50 bg-white outline-none focus:border-ink transition-colors resize-none"></textarea>
               </div>
               <Button variant="primary" type="submit" className="w-full mt-2">Send Message</Button>
             </form>
          </div>
        </div>
      </ColorBlock>

      <footer className="bg-canvas text-ink py-section px-xl border-t border-hairline/50">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-4 gap-xl">
          
          <div className="md:col-span-1">
            <h2 className="text-[32px] tracking-tight font-bold mb-lg">QadmasTech</h2>
            <p className="figma-body-sm text-ink mb-md">Building the Digital World For Today and Tomorrow</p>
            <div className="flex space-x-2">
              <Button variant="icon-circular" href="https://www.instagram.com/qadmastech/" aria-label="Instagram">IG</Button>
              <Button variant="icon-circular" href="https://www.facebook.com/people/Qadmas-Technologies/61572903006289/" aria-label="Facebook">FB</Button>
              <Button variant="icon-circular" href="https://in.linkedin.com/company/qadmastechnologies" aria-label="LinkedIn">IN</Button>
            </div>
          </div>

          <div>
            <h3 className="figma-caption text-ink mb-md">Quick Links</h3>
            <ul className="space-y-sm figma-body-sm text-ink">
              <li><a href="#home" className="hover:opacity-70">Home</a></li>
              <li><a href="#about" className="hover:opacity-70">About Us</a></li>
              <li><a href="#services" className="hover:opacity-70">Services</a></li>
              <li><a href="#portfolio" className="hover:opacity-70">Portfolio</a></li>
              <li><a href="#contact" className="hover:opacity-70">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="figma-caption text-ink mb-md">Legal</h3>
            <ul className="space-y-sm figma-body-sm text-ink">
              <li><a href="https://qadmastechnologies.com/privacy-policy/" className="hover:opacity-70">Privacy Policy</a></li>
              <li><a href="https://maps.app.goo.gl/fTpqiQC3rukyJUxA6" className="hover:opacity-70">Google Maps</a></li>
              <li><a href="#" className="hover:opacity-70">Licenses</a></li>
              <li><a href="#" className="hover:opacity-70">Softwares</a></li>
            </ul>
          </div>

          <div>
            <h3 className="figma-caption text-ink mb-md">Newsletter</h3>
            <p className="figma-body-sm mb-md">Subscribe to receive updates, insights, and offers.</p>
            <form className="flex border border-hairline rounded-md overflow-hidden p-1 shadow-sm">
              <input type="email" placeholder="Email Address" className="px-sm py-[8px] w-full bg-canvas text-ink outline-none figma-body-sm" />
              <Button variant="primary" type="submit" className="scale-90 origin-right">Subscribe</Button>
            </form>
          </div>

        </div>

        <div className="mx-auto max-w-[1280px] mt-[64px] figma-body-sm text-ink/60">
          &copy; {new Date().getFullYear()} Qadmas Technologies. All rights reserved.
        </div>
      </footer>
    </>
  );
}
"""

with open('src/components/Footer.tsx', 'w') as f:
    f.write(new_content)
