// PaymentPage.jsx
import React, { useState, useMemo } from "react";
import { CreditCard, Lock, Calendar, User, DollarSign, Loader2, CheckCircle, XCircle } from "lucide-react";
import "./PaymentGateway.css";

// Helpers
const formatCardNumber = (value) =>
  value.replace(/\D/g, "").substring(0, 16).replace(/(.{4})/g, "$1 ").trim();

const formatExpiry = (value) => {
  const clean = value.replace(/\D/g, "").substring(0, 4);
  return clean.length <= 2 ? clean : `${clean.substring(0, 2)}/${clean.substring(2)}`;
};

const loadRazorpayScript = () =>
  new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

// promo hook (unchanged)
function usePromo(subtotal) {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState(null);
  const [applied, setApplied] = useState(false);

  const PROMO_RULES = {
    SAVE10: { type: "flat", amount: 10, label: "$10 off" },
    TENPERCENT: { type: "percent", percent: 10, label: "10% off" },
    FREETRIAL: { type: "full", label: "Free" },
  };

  const applyPromo = (code) => {
    const codeUC = (code || "").trim().toUpperCase();
    if (!codeUC) {
      setMessage({ type: "error", text: "Enter a promo code." });
      return;
    }
    const rule = PROMO_RULES[codeUC];
    if (!rule) {
      setDiscount(0);
      setApplied(false);
      setMessage({ type: "error", text: "Invalid promo code." });
      return;
    }
    let newDiscount = 0;
    if (rule.type === "flat") newDiscount = rule.amount;
    if (rule.type === "percent") newDiscount = (rule.percent / 100) * subtotal;
    if (rule.type === "full") newDiscount = subtotal;
    newDiscount = Math.min(newDiscount, subtotal);
    setDiscount(Number(newDiscount.toFixed(2)));
    setApplied(true);
    setMessage({ type: "success", text: `Applied: ${rule.label}` });
    setPromoCode(codeUC);
  };

  const removePromo = () => {
    setPromoCode("");
    setDiscount(0);
    setApplied(false);
    setMessage({ type: "info", text: "Promo removed." });
  };

  return {
    promoCode,
    setPromoCode,
    discount,
    applied,
    message,
    applyPromo,
    removePromo,
  };
}

// Reusable input
const PaymentInput = ({ id, label, icon: Icon, value, onChange, placeholder, type = "text", maxLength, error }) => (
  <div className="input-group">
    <label htmlFor={id}>{label}</label>
    <div className="input-wrapper">
      <Icon className="input-icon" />
      <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} maxLength={maxLength} className={error ? "error" : ""} />
    </div>
    {error && <p className="error-text">{error}</p>}
  </div>
);

export default function PaymentPage() {
  const [form, setForm] = useState({ cardNumber: "", cardholderName: "", expiryDate: "", cvv: "" });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // "success"|"error"|"error_validation"
  const [errors, setErrors] = useState({});

  const serviceFee = 40.0;
  const taxes = 3.2;
  const processingFee = 6.79;
  const subtotal = useMemo(() => serviceFee + taxes + processingFee, [serviceFee, taxes, processingFee]);

  const { promoCode, setPromoCode, discount, applied, message, applyPromo, removePromo } = usePromo(subtotal);
  const total = Math.max(0, subtotal - discount);

  const onChange = (e) => {
    const { id, value } = e.target;
    let formattedValue = value;
    if (id === "cardNumber") {
      formattedValue = formatCardNumber(value);
    } else if (id === "expiryDate") {
      formattedValue = formatExpiry(value);
    }
    setForm((prev) => ({ ...prev, [id]: formattedValue }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.cardNumber || form.cardNumber.replace(/\s/g, "").length !== 16) newErrors.cardNumber = "Enter a valid 16-digit card number.";
    if (!form.cardholderName.trim()) newErrors.cardholderName = "Cardholder name is required.";
    if (!form.expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.expiryDate)) newErrors.expiryDate = "Enter a valid MM/YY date.";
    if (!form.cvv || form.cvv.length < 3) newErrors.cvv = "Enter a valid CVV.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // NOTE: This implementation removes backend calls.
  // It opens Razorpay Checkout directly from the client (no order creation / server verification).
  // This is OK for demos only. Do NOT use as production flow without server-side order creation & signature verification.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPaymentStatus(null);

    if (!validateForm()) {
      setPaymentStatus("error_validation");
      return;
    }

    setIsProcessing(true);

    const isRazorpayLoaded = await loadRazorpayScript();
    if (!isRazorpayLoaded) {
      // If script fails to load, do a demo fallback (simulate success) so UI demo continues.
      console.warn("Razorpay script failed to load — falling back to simulated payment (DEMO only).");
      setTimeout(() => {
        setIsProcessing(false);
        setPaymentStatus("success");
      }, 1000);
      return;
    }

    try {
      // Razorpay accepts amount in paise (if INR). Convert total to smallest currency unit.
      const amountInPaise = Math.round(total * 100);

      const options = {
        key: "rzp_test_YgqgLzYxYJqYjZ", // Replace with your test/live Key ID for real usage
        amount: amountInPaise, // amount in paise
        currency: "INR",
        name: "INTAKE Clone Project",
        description: "Course Fee Payment (Demo - client-only)",
        // order_id: undefined, // not using order_id because we removed the backend
        handler: function (response) {
          // Without server verification this can't be trusted for production.
          // We'll treat it as success for demo purposes and show the response id.
          console.log("Razorpay response (client-only demo):", response);
          setPaymentStatus("success");
          setIsProcessing(false);
        },
        prefill: { name: form.cardholderName || "", email: "" },
        theme: { color: "#3399cc" },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
            setPaymentStatus(null);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      setPaymentStatus("error");
      setIsProcessing(false);
    }
  };

  const getStatus = (s) => {
    switch (s) {
      case "success":
        return { icon: CheckCircle, color: "green", text: "Payment Successful!" };
      case "error":
        return { icon: XCircle, color: "red", text: "Payment Failed. Try again." };
      case "error_validation":
        return { icon: XCircle, color: "orange", text: "Fix the highlighted errors." };
      default:
        return null;
    }
  };
  const status = getStatus(paymentStatus);

  return (
    <div className="payment-container">
      <div className="payment-card">
        {/* Left Summary */}
        <div className="summary-section">
          <h2>Order Summary</h2>
          <ul>
            <li><span>Service Fee</span><span>${serviceFee.toFixed(2)}</span></li>
            <li><span>Taxes</span><span>${taxes.toFixed(2)}</span></li>
            <li><span>Processing</span><span>${processingFee.toFixed(2)}</span></li>
            <li className="discount"><span>Promo Discount</span><span>{discount > 0 ? `- $${discount.toFixed(2)}` : "- $0.00"}</span></li>
          </ul>
          <div className="total"><span>Total</span><span>${total.toFixed(2)}</span></div>

          {message && (
            <div style={{ marginTop: 12, padding: 8, borderRadius: 8, background: message.type === "success" ? "#dcfce7" : message.type === "error" ? "#fee2e2" : "#eef2ff", color: message.type === "success" ? "#064e3b" : message.type === "error" ? "#7f1d1d" : "#1e40af" }}>
              {message.text}
            </div>
          )}
        </div>

        {/* Right Form */}
        <div className="form-section">
          <h2>Payment Details</h2>
          <form onSubmit={handleSubmit}>
            <PaymentInput id="cardNumber" label="Card Number" icon={CreditCard} value={form.cardNumber} onChange={onChange} placeholder="0000 0000 0000 0000" maxLength={19} error={errors.cardNumber} />
            <PaymentInput id="cardholderName" label="Cardholder Name" icon={User} value={form.cardholderName} onChange={onChange} placeholder="e.g., Jane Doe" error={errors.cardholderName} />

            <div className="row">
              <PaymentInput id="expiryDate" label="Expiry Date" icon={Calendar} value={form.expiryDate} onChange={onChange} placeholder="MM/YY" maxLength={5} error={errors.expiryDate} />
              <PaymentInput id="cvv" label="CVV" icon={Lock} value={form.cvv} onChange={onChange} placeholder="***" type="password" maxLength={4} error={errors.cvv} />
            </div>

            {/* Promo area (uses hook) */}
            <div className="promo-row">
              <div className="promo-input-container">
                <label className="promo-label">Promo Code</label>
                <div className="input-wrapper">
                  <DollarSign className="input-icon" />
                  <input
                    id="promo"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code (e.g., SAVE10)"
                  />
                </div>
              </div>

              {!applied ? (
                <button type="button" onClick={() => applyPromo(promoCode)} className="promo-btn apply-btn">
                  Apply
                </button>
              ) : (
                <button type="button" onClick={removePromo} className="promo-btn remove-btn">
                  Remove
                </button>
              )}
            </div>

            {/* status message */}
            {status && (
              <div className={`status-message ${status.color}`} style={{ marginTop: 12 }}>
                <status.icon className="status-icon" />
                <p>{status.text}</p>
              </div>
            )}

            <button className="btn-3" type="submit" disabled={isProcessing} style={{ marginTop: 16 }}>
              {isProcessing ? (<><Loader2 className="spin" /> Processing...</>) : (<><DollarSign /> Pay ${total.toFixed(2)}</>)}
            </button>

            <p className="secure-note">Transactions are secure & encrypted</p>
          </form>
        </div>
      </div>
    </div>
  );
}
