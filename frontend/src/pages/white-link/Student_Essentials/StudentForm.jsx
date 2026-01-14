import React, { useState } from "react";

export default function StudentForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [agree, setAgree] = useState(false);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState(null);

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault(); // IMPORTANT: prevent full page navigation
        if (!agree) {
            setMsg({ type: "error", text: "You must accept Terms & Privacy to proceed." });
            return;
        }
        setLoading(true);
        setMsg(null);
        try {
            const res = await fetch(`/api/students/student-essentials`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || data.error || "Server error");
            setMsg({ type: "success", text: "Submitted successfully." });
            setForm({ name: "", email: "", message: "" });
            setAgree(false);
        } catch (err) {
            setMsg({ type: "error", text: err.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            <input name="name" value={form.name} onChange={onChange} placeholder="Full name" />
            <input name="email" value={form.email} onChange={onChange} placeholder="Email" />
            <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" />
            <label>
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> and <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </label>

            <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
            </button>

            {msg && <p className={msg.type === "error" ? "text-red-600" : "text-green-600"}>{msg.text}</p>}
        </form>
    );
}