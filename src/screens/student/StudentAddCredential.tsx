import { useState } from "react"
import type { Screen } from "../../App"
import StudentSidebar from "../../components/StudentSidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

export default function StudentAddCredential({ navigate, currentScreen }: Props) {
  const [form, setForm] = useState({
    type: "Professional Certification",
    name: "AWS Cloud Practitioner",
    org: "Amazon Web Services",
    number: "AWS-CP-482910",
    issued: "2026-03-05",
    expiry: "2029-03-05",
  })
  const [uploaded, setUploaded] = useState(true)

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <StudentSidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => navigate("student-home")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Home</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Add Career Credential</span>
        </div>

        <div style={{ padding: "32px", maxWidth: 700 }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px", letterSpacing: "-0.01em" }}>Add a Career Credential</h1>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>Submit an external credential or professional claim for verification and inclusion in your LinkCert record.</p>
          </div>

          {/* Important notice */}
          <div style={{ background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 10, padding: "12px 16px", marginBottom: 24, display: "flex", gap: 10 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B66A15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p style={{ color: "#92400E", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
              <strong>Submitting a credential does not make it verified.</strong> Your submission will undergo required verification through the relevant external organization and institutional review where applicable.
            </p>
          </div>

          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 14, padding: 28 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              {[
                { label: "Credential Type", key: "type", value: form.type, options: ["Professional Certification", "Industry Certification", "Professional Licence", "Employment Credential"] },
                { label: "Credential Name", key: "name", value: form.name },
                { label: "Issuing Organization", key: "org", value: form.org },
                { label: "Credential / Licence Number", key: "number", value: form.number },
                { label: "Issue Date", key: "issued", value: form.issued, type: "date" },
                { label: "Expiry Date (if applicable)", key: "expiry", value: form.expiry, type: "date" },
              ].map(field => (
                <div key={field.key}>
                  <label style={{ display: "block", color: "#374151", fontSize: 12, fontWeight: 500, marginBottom: 5 }}>{field.label}</label>
                  {(field as any).options ? (
                    <select
                      value={field.value}
                      onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                      style={{ width: "100%", padding: "9px 12px", border: "1px solid #E4E7EC", borderRadius: 7, fontSize: 13, color: "#111827", background: "#FFFFFF", fontFamily: "inherit", outline: "none" }}
                    >
                      {(field as any).options.map((o: string) => <option key={o}>{o}</option>)}
                    </select>
                  ) : (
                    <input
                      type={(field as any).type || "text"}
                      value={field.value}
                      onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                      style={{ width: "100%", padding: "9px 12px", border: "1px solid #E4E7EC", borderRadius: 7, fontSize: 13, color: "#111827", fontFamily: "inherit", outline: "none" }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Evidence upload */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", color: "#374151", fontSize: 12, fontWeight: 500, marginBottom: 8 }}>Evidence Upload</label>
              {uploaded ? (
                <div style={{ border: "1px solid #167A5A", borderRadius: 10, background: "#F0FAF5", padding: "14px 18px", display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 7, background: "#167A5A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "#111827", fontSize: 13, fontWeight: 600, margin: 0 }}>aws_certificate.pdf</p>
                    <p style={{ color: "#667085", fontSize: 11, margin: 0 }}>2.4 MB · Uploaded</p>
                  </div>
                  <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#167A5A" }} />
                    <span style={{ color: "#167A5A", fontSize: 12, fontWeight: 600 }}>Ready</span>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setUploaded(true)}
                  style={{ border: "2px dashed #E4E7EC", borderRadius: 10, padding: "24px", textAlign: "center", cursor: "pointer", background: "#F9FAFB" }}
                >
                  <p style={{ color: "#667085", fontSize: 13, margin: 0 }}>Click to upload or drag and drop · PDF, JPG, PNG</p>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate("student-protect-submission")}
              style={{ width: "100%", padding: "12px 20px", background: "#6941C6", color: "#FFFFFF", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
            >
              Continue →
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
