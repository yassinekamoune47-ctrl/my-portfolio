import { useState } from "react";
import { personalInfo } from "../data/personalInfo";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Send,
  Sparkles,
  Copy,
  Check,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copiedType, setCopiedType] = useState(null);
  const [formStatus, setFormStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        state: "error",
        message: "Please fill in all required fields (Name, Email, Message).",
      });
      return;
    }

    const emailSubject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `Hello Yassine,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;

    // Launch mailto
    window.location.href = mailtoUrl;

    setFormStatus({
      state: "success",
      message:
        "Your default email client has been launched with the prefilled message. If it didn't open automatically, you can copy the email address directly using the button above.",
    });
  };

  return (
    <section id="contact" className="py-24 relative bg-[#07080d] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-purple-700/15 via-blue-600/15 to-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle text-xs font-mono text-cyan-300 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Together
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-xl mx-auto">
            Have a project in mind or looking for a developer? Feel free to contact me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Contact Information
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                I am responsive via Email, WhatsApp, and phone. Choose the channel that suits you best.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                        Email
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(personalInfo.email, "email")}
                    className="p-2 rounded-xl text-slate-400 hover:text-white glass-panel-subtle hover:bg-white/10 transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedType === "email" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                        Phone
                      </span>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                      >
                        {personalInfo.phoneFormatted}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                    className="p-2 rounded-xl text-slate-400 hover:text-white glass-panel-subtle hover:bg-white/10 transition-colors"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedType === "phone" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* WhatsApp Item */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                        WhatsApp
                      </span>
                      <a
                        href={personalInfo.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors truncate block"
                      >
                        {personalInfo.whatsappNumber}
                      </a>
                    </div>
                  </div>
                  <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-emerald-400 hover:text-emerald-300 glass-panel-subtle hover:bg-emerald-500/10 transition-colors"
                    title="Open WhatsApp"
                    aria-label="Open WhatsApp"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Buttons Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl text-xs font-semibold text-white bg-purple-600/30 hover:bg-purple-600/40 border border-purple-500/40 transition-colors"
                >
                  <Mail className="w-4 h-4 text-purple-300" />
                  <span>Send Email</span>
                </a>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl text-xs font-semibold text-white bg-emerald-600/30 hover:bg-emerald-600/40 border border-emerald-500/40 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-300" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Social Profiles:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-purple-500/40 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 space-y-6 relative">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Draft your message below. Submitting will launch your email client with your message cleanly structured.
                </p>
              </div>

              {formStatus.state === "success" && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{formStatus.message}</span>
                </div>
              )}

              {formStatus.state === "error" && (
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{formStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-mono text-slate-300 block uppercase tracking-wider"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-400 transition-colors font-sans"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-mono text-slate-300 block uppercase tracking-wider"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-400 transition-colors font-sans"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-mono text-slate-300 block uppercase tracking-wider"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-400 transition-colors font-sans"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-mono text-slate-300 block uppercase tracking-wider"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-400 transition-colors font-sans resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-xl shadow-purple-600/25 hover:shadow-cyan-500/30 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Mailto</span>
                </button>
              </form>

              {/* Transparent architecture notice */}
              <div className="pt-2 text-center">
                <span className="text-[11px] font-mono text-slate-400">
                  Direct client-side delivery • No third-party tracking • Encrypted in transit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
