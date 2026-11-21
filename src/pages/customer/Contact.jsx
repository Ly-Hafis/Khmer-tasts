import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customer Inquiry:", form);
    setSuccess(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const inputStyle =
    "w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

  return (
    <section id="contact" className="min-h-screen bg-[#fffaf0] px-5 py-12">
      {/* HEADER */}
      <div className="mx-auto mb-7 max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
          Get In Touch
        </p>

        <h2 className="mt-1.5 text-2xl font-extrabold text-slate-900 md:text-3xl">
          Contact <span className="text-[#e99b16]">Khmer Food</span> Team
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Have questions about your order, catering, or branch events? Send us a
          message below.
        </p>
      </div>

      {/* MAIN CONTACT CONTENT */}
      <div className="mx-auto grid max-w-5xl items-stretch gap-6 lg:grid-cols-5">
        {/* LEFT SUPPORT CARD (2 columns) */}
        <div className="flex flex-col justify-between rounded-2xl bg-[#0f172a] p-6 text-white shadow-md lg:col-span-2">
          <div>
            <h3 className="text-lg font-bold">Customer Support</h3>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Our team is ready to assist with orders, dietary notes, or branch
              inquiries.
            </p>

            <div className="mt-5 space-y-4">
              {/* PHONE */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/20 text-base text-orange-400">
                  📞
                </div>
                <div>
                  <h4 className="text-xs font-bold">Call Us Directly</h4>
                  <p className="text-xs text-slate-400">
                    012 345 678 / 012 888 999
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-500/20 text-base text-yellow-400">
                  ✉️
                </div>
                <div>
                  <h4 className="text-xs font-bold">Email Address</h4>
                  <p className="text-xs text-slate-400">
                    support@khmerfood.com
                  </p>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-base text-blue-400">
                  📍
                </div>
                <div>
                  <h4 className="text-xs font-bold">Headquarters</h4>
                  <p className="text-xs text-slate-400">
                    St 51 corner St 302, BKK1, Phnom Penh
                  </p>
                </div>
              </div>

              {/* HOURS */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-base text-emerald-400">
                  🕒
                </div>
                <div>
                  <h4 className="text-xs font-bold">Operating Hours</h4>
                  <p className="text-xs text-slate-400">
                    Everyday: 08:30 AM - 10:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-800 pt-4">
            <p className="text-xs text-slate-400">
              Fast Response Guaranteed via our Support Portal.
            </p>
          </div>
        </div>

        {/* RIGHT CONTACT FORM (3 columns) */}
        <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm lg:col-span-3">
          <h3 className="text-lg font-bold text-slate-900">Send an Inquiry</h3>

          {success && (
            <div className="mt-3 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-xs font-medium text-green-700">
              ✓ Your message has been submitted successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
            {/* NAME AND EMAIL */}
            <div className="grid gap-3.5 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-700">
                  Full Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Dara Sok"
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-gray-700">
                  Email Address <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  className={inputStyle}
                />
              </div>
            </div>

            {/* PHONE AND SUBJECT */}
            <div className="grid gap-3.5 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="012 345 678"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-gray-700">
                  Subject <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Inquiry / Feedback topic"
                  required
                  className={inputStyle}
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-700">
                Message / Details <span className="text-orange-500">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="3"
                placeholder="Tell us how we can help you..."
                required
                className={`${inputStyle} resize-none`}
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-[#eb3b3b] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 active:scale-95"
            >
              <span>➤</span>
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;