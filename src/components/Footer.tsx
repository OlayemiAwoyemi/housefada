import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-lg font-bold tracking-tighter">
              HOUSE<span className="text-accent">FADA</span>
            </Link>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Premium living solutions for modern Nigeria.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">Services</div>
            <div className="space-y-2.5">
              {[
                { label: "Cleaning", href: "/cleaning" },
                { label: "Culinary", href: "/culinary" },
                { label: "Mobility", href: "/mobility" },
              ].map((link) => (
                <Link key={link.href} to={link.href} className="block text-sm text-foreground/70 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">More</div>
            <div className="space-y-2.5">
              {[
                { label: "AgroFresh", href: "/agrofresh" },
                { label: "AutoHub", href: "/autohub" },
                { label: "Tech Innovations", href: "/tech" },
              ].map((link) => (
                <Link key={link.href} to={link.href} className="block text-sm text-foreground/70 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">Contact</div>
            <div className="space-y-2.5 text-sm text-foreground/70">
              <a href="tel:+2348160169189" className="block hover:text-accent transition-colors">+234 816 016 9189</a>
              <a href="mailto:housefada@yahoo.com" className="block hover:text-accent transition-colors">housefada@yahoo.com</a>
              <a href="https://wa.me/2348160169189" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} HouseFada · RC 9363567
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            Ibadan, Nigeria
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
