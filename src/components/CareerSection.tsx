import { useState, type FormEvent } from "react";
import { User, Phone, Link2, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Reveal } from "@/components/ui/reveal";

const inputClass =
  "w-full rounded-md border border-gold/15 bg-[#101010] py-2.5 pl-9 pr-3 text-[11px] text-cream placeholder:text-[#6b6b6b] focus:border-gold/50 focus:outline-none";

export function CareerSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        "service_0hz5l2d",
        "template_81diss5",
        {
          from_name: formData.get("name"),
          whatsapp: formData.get("whatsapp"),
          cv: formData.get("cv") || "N/A",
          about: formData.get("about") || "N/A",
        },
        {
          publicKey: "t-FMg9NVx5Xt7rHV7",
        }
      );
      setSent(true);
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="career" className="bg-[#080808] py-20 md:py-24">
      <div className="mx-auto grid max-w-[1050px] items-center gap-14 px-6 md:grid-cols-2">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.25em] text-gold">
            JOIN THE LEGACY
          </p>
          <h2 className="mt-4 font-heavy text-4xl uppercase leading-[0.9] text-cream sm:text-5xl md:text-[3.4rem]">
            START YOUR <span className="text-gold-bright">ROYAL</span> JOURNEY
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#8C8C8C]">
            Join the fastest-growing Arabian culinary brand. We're looking for
            passionate individuals ready to create exceptional dining
            experiences.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h3 className="font-display text-xl font-semibold text-cream">
            Apply Now
          </h3>
          <p className="mt-1 text-xs text-[#8C8C8C]">
            Share your passion with us.
          </p>

          <form className="mt-5 space-y-3" onSubmit={onSubmit}>
            <div className="relative">
              <User
                size={12}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/60"
              />
              <input
                required
                name="name"
                aria-label="Full Name"
                placeholder="Full Name"
                className={inputClass}
              />
            </div>
            <div className="relative">
              <Phone
                size={12}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/60"
              />
              <input
                required
                type="tel"
                name="whatsapp"
                aria-label="WhatsApp Number"
                placeholder="WhatsApp Number"
                inputMode="numeric"
                pattern="[0-9]{7,15}"
                maxLength={15}
                title="Enter numbers only"
                onKeyDown={(e) => {
                  const allowedKeys = [
                    "Backspace",
                    "Delete",
                    "ArrowLeft",
                    "ArrowRight",
                    "ArrowUp",
                    "ArrowDown",
                    "Tab",
                    "Home",
                    "End",
                  ];
                  if (
                    allowedKeys.includes(e.key) ||
                    e.ctrlKey ||
                    e.metaKey
                  ) {
                    return;
                  }
                  if (!/^[0-9]$/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                onChange={(e) => {
                  // Strips out any pasted or autofilled non-digit characters too.
                  e.target.value = e.target.value.replace(/\D/g, "");
                }}
                className={inputClass}
              />
            </div>
            <div className="relative">
              <Link2
                size={12}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/60"
              />
              <input
                name="cv"
                aria-label="CV / Portfolio Link (Optional)"
                placeholder="CV / Portfolio Link (Optional)"
                className={inputClass}
              />
            </div>
            <textarea
              name="about"
              rows={4}
              aria-label="Tell us about yourself"
              placeholder="Tell us about yourself..."
              className="w-full rounded-md border border-gold/15 bg-[#101010] p-3 text-[11px] text-cream placeholder:text-[#6b6b6b] focus:border-gold/50 focus:outline-none"
            />
            {error && (
              <p className="text-center text-[10px] text-red-400">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={loading || sent}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-gold py-2.5 text-[10px] font-semibold tracking-[0.2em] text-black transition-all hover:brightness-110 disabled:opacity-60"
            >
              {loading ? "SENDING..." : sent ? "SUBMITTED ✓" : "SUBMIT"}
              <Send size={11} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
