import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Star } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* CTA bar */}
      <div className="bg-primary py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading text-2xl font-bold text-primary-foreground">Ready to Explore Morocco?</p>
            <p className="font-body text-sm text-primary-foreground/85">Book today and pay on arrival. Free cancellation available.</p>
          </div>
          <a
            href="https://wa.me/212766776545"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-foreground text-primary-foreground font-semibold px-8 py-3 rounded-full hover:bg-foreground/90 transition-colors whitespace-nowrap"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="SEE&KNOW Tours & Travels" className="h-16 w-auto mb-2 rounded-full" />
            <p className="text-sm tracking-widest text-accent uppercase mb-4">Marrakech, Morocco</p>
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed mb-4">
              Full-service Moroccan travel agency offering desert tours, mountain trips, coastal escapes, and cultural experiences across Morocco.
            </p>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" className="text-accent" />
              ))}
              <span className="text-xs text-primary-foreground/50 ml-2">4.9/5 · 2,400+ reviews</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Our Tours</h4>
            <ul className="space-y-2">
              {[
                { to: "/sahara-desert-tour", label: "3-Day Sahara Tour" },
                { to: "/agafay-desert", label: "Agafay Desert" },
                { to: "/atlas-mountains", label: "Atlas Mountains" },
                { to: "/ouzoud-waterfalls", label: "Ouzoud Waterfalls" },
                { to: "/essaouira", label: "Essaouira Day Trip" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Why Choose Us</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/60">
              <li>✓ Licensed travel agency</li>
              <li>✓ Best direct price guarantee</li>
              <li>✓ Pay on arrival</li>
              <li>✓ Free cancellation</li>
              <li>✓ 24/7 WhatsApp support</li>
              <li>✓ Professional local guides</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/212766776545" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <Phone size={16} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-sm text-primary-foreground/80 group-hover:text-accent transition-colors">+212 766-776545</p>
                    <p className="font-body text-xs text-primary-foreground/40">WhatsApp & Phone</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-body text-sm text-primary-foreground/80">info@seeandknow.com</p>
                  <p className="font-body text-xs text-primary-foreground/40">We reply within 2 hours</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-body text-sm text-primary-foreground/80">Marrakech, Morocco</p>
                  <p className="font-body text-xs text-primary-foreground/40">Operating across Morocco</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2025 SEE&KNOW Tours & Travels. All rights reserved. · Marrakech, Morocco
          </p>
          <p className="font-body text-xs text-primary-foreground/40">
            Morocco Desert Tours · Sahara Tour from Marrakech · Agafay Desert · Atlas Mountains
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
