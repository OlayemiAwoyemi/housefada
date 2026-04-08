import { Link } from "react-router-dom";
import footerLogo from "@/assets/HouseFada_Logo_Footer.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="inline-block">
              <img src={footerLogo} alt="HouseFada" className="h-8" />
            </Link>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Premium living solutions for modern Nigeria. Trusted since 2017.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Services</div>
            <div className="space-y-2.5">
              {[
                { label: "Cleaning", href: "/cleaning" },
                { label: "Culinary", href: "/culinary" },
                { label: "Mobility", href: "/mobility" },
              ].map((link) => (
                <Link key={link.href} to={link.href} onClick={() => window.scrollTo(0, 0)} className="block text-sm text-foreground/70 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">More</div>
            <div className="space-y-2.5">
              {[
                { label: "AgroFresh", href: "/agrofresh" },
                { label: "AutoHub", href: "/autohub" },
                { label: "Tech Innovations", href: "/tech" },
              ].map((link) => (
                <Link key={link.href} to={link.href} onClick={() => window.scrollTo(0, 0)} className="block text-sm text-foreground/70 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Contact</div>
            <div className="space-y-2.5 text-sm text-foreground/70">
              <a href="tel:+2347069510606" className="block hover:text-accent transition-colors">+234 706 951 0606</a>
              <a href="mailto:housefada@yahoo.com" className="block hover:text-accent transition-colors">housefada@yahoo.com</a>
              <a href="https://wa.me/2347069510606" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} HouseFada · RC 9363567 · Est. 2017
          </div>
          <div className="text-xs text-muted-foreground">
            Redemption City, Mowe, Ogun State, Nigeria
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
