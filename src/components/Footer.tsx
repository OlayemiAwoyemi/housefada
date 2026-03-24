const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} HouseFada · RC 9363567
        </div>
        <div className="flex items-center gap-6">
          <a href="https://www.housefada.com/" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
            housefada.com
          </a>
          <a href="https://wa.me/2348160169189" className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
