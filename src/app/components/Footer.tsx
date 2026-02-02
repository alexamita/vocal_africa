/**
 * Footer Component
 *
 * Global footer for the application.
 * Contains:
 * - Organization logo and tagline.
 * - Quick links navigation.
 * - Social media links.
 * - Contact information.
 * - Newsletter subscription form.
 */
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Loader2,
  Check,
} from "lucide-react";
import { useState, FormEvent } from "react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");

      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link
              to="/"
              className="inline-block bg-white p-3 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <img src={logo} alt="VOCAL Africa" className="h-16 w-auto" />
            </Link>
            <p className="text-gray-500 leading-relaxed text-sm max-w-xs">
              Empowering communities, amplifying voices, and driving systemic
              change across Africa through advocacy, leadership, and diverse
              storytelling.
            </p>
            <div className="flex gap-5">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { label: "About Us", to: "/what-we-do" },
                { label: "Our Leadership", to: "/leadership" },
                { label: "Careers", to: "/careers" },
                { label: "Newsroom", to: "/newsroom/all" },
                { label: "Media Gallery", to: "/media/gallery" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">
              Resources
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Articles", to: "/newsroom/articles" },
                { label: "Press Statements", to: "/newsroom/press-statements" },
                { label: "Reports", to: "/newsroom/reports" },
                { label: "Publications", to: "/resources/publications" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">
              Contact Information
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gray-600 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    736 Tabere Cres
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gray-600" />
                <a
                  href="mailto:info@vocalafrica.org"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  info@vocalafrica.org
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gray-600" />
                <a
                  href="tel:+25458555444"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +254 58555444
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">
              Newsletter
            </h4>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Join our community for updates.
            </p>
            <form className="space-y-3" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-white/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                required
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full font-bold py-3 rounded-sm transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2 group ${
                  status === "success"
                    ? "bg-green-600 text-white cursor-default"
                    : "bg-white text-black hover:bg-gray-200"
                } disabled:opacity-80 disabled:cursor-not-allowed`}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Subscribing...
                  </>
                ) : status === "success" ? (
                  <>
                    <Check className="w-4 h-4" />
                    Subscribed!
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs text-center md:text-left">
            © {currentYear} VOCAL Africa. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              to="/privacy"
              className="text-gray-600 hover:text-white text-xs transition-colors uppercase tracking-wider"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-gray-600 hover:text-white text-xs transition-colors uppercase tracking-wider"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
