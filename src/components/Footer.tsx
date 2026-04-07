import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <Link to="/" className="text-base font-bold tracking-tight">
              HOUSE<span className="text-accent">FADA</span>
            </Link>
            <p className="mt-2.5 text-muted-foreground text-xs leading-relaxed">
              Premium living solutions for modern Nigeria. Trusted since 2017.
            </p>
          </div>

          <div>
            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Services</div>
            <div className="space-y-2">
              {[
                { label: "Cleaning", href: "/cleaning" },
                { label: "Culinary", href: "/culinary" },
                { label: "Mobility", href: "/mobility" },
              ].map((link) => (
                <Link key={link.href} to={link.href} onClick={() => window.scrollTo(0, 0)} className="block text-xs text-foreground/70 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">More</div>
            <div className="space-y-2">
              {[
                { label: "AgroFresh", href: "/agrofresh" },
                { label: "AutoHub", href: "/autohub" },
                { label: "Tech Innovations", href: "/tech" },
              ].map((link) => (
                <Link key={link.href} to={link.href} onClick={() => window.scrollTo(0, 0)} className="block text-xs text-foreground/70 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Contact</div>
            <div className="space-y-2 text-xs text-foreground/70">
              <a href="tel:+2347069510606" className="block hover:text-accent transition-colors">+234 706 951 0606</a>
              <a href="mailto:housefada@yahoo.com" className="block hover:text-accent transition-colors">housefada@yahoo.com</a>
              <a href="https://wa.me/2347069510606" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} HouseFada · RC 9363567 · Est. 2017
          </div>
          <div className="text-[10px] text-muted-foreground">
            Redemption City, Mowe, Ogun State, Nigeria
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
