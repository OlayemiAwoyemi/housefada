import { Link } from "react-router-dom";
import footerLogo from "@/assets/HouseFada_Logo_Footer.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
                { label: "AgroFresh", href: "/agrofresh" },
                { label: "AutoHub", href: "/autohub" },
              ].map((link) => (
                <Link key={link.href} to={link.href} onClick={() => window.scrollTo(0, 0)} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">More</div>
            <div className="space-y-2.5">
              {[
                { label: "Tech Innovations", href: "/tech" },
                { label: "Real Estate", href: "/realestate" },
                { label: "Publishing", href: "/publishing" },
                { label: "Travel & Tourism", href: "/travel" },
              ].map((link) => (
                <Link key={link.href} to={link.href} onClick={() => window.scrollTo(0, 0)} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Contact</div>
            <div className="space-y-2.5 text-sm text-muted-foreground">
              <a href="tel:+2348160169189" className="block hover:text-foreground transition-colors">+234 816 016 9189</a>
              <a href="mailto:housefada@yahoo.com" className="block hover:text-foreground transition-colors">housefada@yahoo.com</a>
              <a href="https://wa.me/2348160169189" target="_blank" rel="noopener noreferrer" className="block hover:text-foreground transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
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
