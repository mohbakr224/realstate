import React, { useState } from "react";
import api from "../../utils/axios";
import Hero from "../../Components/Hero/Hero";

export default function Contact_us() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await api.post("/contact", formData);

      if (res.status === 200) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 reusable input component
  const Input = ({ label, ...props }) => (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text font-medium text-gray-700">
          {label}
        </span>
      </label>
      <input
        {...props}
        className="input input-bordered w-full bg-gray-50 focus:bg-white"
      />
    </div>
  );

  return (
    <>
      {/* HERO */}
      <Hero
        title="Connected Globally. Available Locally."
        text="Ahmed Talat"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
        have_Button={false}
      />

      {/* SUCCESS MESSAGE */}
      {success && (
        <div className="max-w-4xl mx-auto mt-4 alert alert-success">
          Message sent successfully!
        </div>
      )}

      {/* MAIN */}
      <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="grid lg:grid-cols-2 bg-white shadow-xl rounded-xl overflow-hidden">

          {/* LEFT SIDE */}
          <div className="bg-neutral text-white p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
              <p className="text-white/70 mb-8">
                We usually reply within 24 hours.
              </p>

              <div className="space-y-6 text-sm">
                <p>📍 New Cairo, Egypt</p>
                <p>📧 info@ahmedtalat.com</p>
                <p>📞 +20 100 000 0000</p>
              </div>
            </div>

            <p className="text-white/60 mt-10">
              Mon - Fri: 9 AM - 6 PM
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="p-10">
            <h2 className="text-3xl font-bold mb-6">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />

              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@email.com"
              />

              <Input
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+20 ..."
              />

              {/* MESSAGE */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Message
                  </span>
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full h-32 bg-gray-50"
                  required
                  placeholder="Write your message..."
                />
              </div>

              {/* BUTTON */}
              <button
                className="btn btn-error text-white w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}