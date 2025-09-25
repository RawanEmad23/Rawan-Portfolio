"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-pink-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center text-purple-700 mb-4">
          Contact Me
        </h1>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          type="submit"
          className="bg-pink-400 text-white font-semibold rounded-lg py-3 hover:bg-pink-500 transition"
        >
          Send Message
        </button>
        <p className="text-center mt-2">{status}</p>
      </form>
    </section>
  );
}
