export default function Footer() {
  return (
    <footer id="about" className="bg-[#101113] text-gray-300">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 bg-blue-600 rounded-lg"
                aria-hidden="true"
              />
              <span className="text-xl font-bold text-white">NEXUS</span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Empowering excellence through expert-led training and strategic
              consulting.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full bg-white/10"
                aria-hidden="true"
              />
              <div
                className="w-9 h-9 rounded-full bg-white/10"
                aria-hidden="true"
              />
              <div
                className="w-9 h-9 rounded-full bg-white/10"
                aria-hidden="true"
              />
            </div>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-white">Solutions</h5>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="hover:text-white" href="#solutions">
                  Sales Training
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#solutions">
                  Leadership Training
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#solutions">
                  Customer Service
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#solutions">
                  Corporate Training
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-white">Resources</h5>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="hover:text-white" href="#resources">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#resources">
                  Case Studies
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#resources">
                  Guides
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#events">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-white">Company</h5>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="hover:text-white" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#careers">
                  Careers
                </a>
              </li>
            </ul>
            <h5 className="mt-6 text-sm font-semibold text-white">Legal</h5>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="hover:text-white" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} NEXUS. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a className="hover:text-white" href="#">
              Security
            </a>
            <a className="hover:text-white" href="#">
              Status
            </a>
            <a className="hover:text-white" href="#">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
