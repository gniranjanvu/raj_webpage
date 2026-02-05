"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Loader2, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { Button, Input, Textarea } from "@/components/ui";
import { Marquee } from "@/components/animations";
import { siteConfig } from "@/lib/constants";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative section-padding bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      {/* Marquee Border Top */}
      <div className="absolute top-0 left-0 right-0 py-4 bg-nothing-black dark:bg-white overflow-hidden">
        <Marquee speed={20} className="text-white dark:text-black text-sm font-mono uppercase tracking-widest">
          <span className="mx-8">GET IN TOUCH</span>
          <span className="mx-8">•</span>
          <span className="mx-8">{`LET'S COLLABORATE`}</span>
          <span className="mx-8">•</span>
          <span className="mx-8">AVAILABLE FOR WORK</span>
          <span className="mx-8">•</span>
        </Marquee>
      </div>

      <div className="container-custom pt-16">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="section-number">{`// 07`}</span>
            <h2 className="section-title mt-2 mb-4">CONTACT</h2>
            <p className="section-subtitle">{`Let's Work Together`}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <FadeIn direction="left">
            <div className="space-y-8">
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Have a project in mind or want to discuss potential opportunities?
                I&apos;d love to hear from you. Feel free to reach out through any of
                the channels below or use the contact form.
              </p>

              <div className="space-y-6">
                <motion.a
                  href={`mailto:${siteConfig.email}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass-card group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-material-primary/10 flex items-center justify-center group-hover:bg-material-primary group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6 text-material-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {siteConfig.email}
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${siteConfig.phone}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass-card group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center group-hover:bg-success group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6 text-success group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {siteConfig.phone}
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-info" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {siteConfig.location}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="right">
            <div className="glass-card p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {`Thank you for reaching out. I'll get back to you soon!`}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Phone (Optional)"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="flex h-11 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-material-primary focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select type</option>
                        <option value="robotics">Robotics Project</option>
                        <option value="automation">Industrial Automation</option>
                        <option value="research">Research Collaboration</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <Textarea
                    label="Message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
