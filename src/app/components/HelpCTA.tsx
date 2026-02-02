/**
 * HelpCTA Component (Section)
 *
 * A reusable call-to-action section asking if the user needs help.
 * Redirects to the contact page generally, or could be specific support channels.
 */
import { useNavigate } from "react-router-dom";
import { HeartHandshake } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export const HelpCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 font-bold text-[10px] uppercase tracking-widest mb-4 border border-orange-200">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>We are here for you</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-950 uppercase tracking-tight">
          Do you need our help?
        </h2>

        <p className="text-lg text-green-900/70 leading-relaxed font-medium mb-8 max-w-2xl mx-auto">
          If you or someone you know needs support, advocacy, or information
          regarding human rights, don’t hesitate to reach out. Our team is
          committed to equal rights for all.
        </p>

        <Button
          onClick={() => navigate("/contact")}
          className="bg-green-900 hover:bg-green-950 text-white font-bold px-10 py-5 h-auto text-sm cursor-pointer uppercase tracking-widest shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 rounded-xl"
        >
          CONTACT US
        </Button>
      </div>
    </section>
  );
};
