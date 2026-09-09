import { useState } from "react"
import type { Screen } from "../../App"

interface Props { navigate: (s: Screen) => void }

export default function NSScreen11LBOrgReview({ navigate }: Props) {
  const [showModal, setShowModal] = useState(false)

  return (
    <div style={{ minHeight: "100vh", background: "#F6F7FA", display: "flex", flexDirection: "column" }}>
      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#FFFFFF", borderRadius: 16, padding: "32px 36px", maxWidth: 480, width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>Approve NorthStar Technologies?</h2>
            <p style={{ color: "#667085", fontSize: 13, margin: "0 0 24px" }}>You are approving the following organization and scope:</p>

            <div style={{ background: "#F0FAF5", border: "1px solid #167A5A", borderRadius: 10, padding: "16px 18px", marginBottom: 16 }}>
              <p style={{ color: "#059669", fontSize: 11, fontWeight: 700, margin: "0 0 10px", letterSpacing: "0.04em" }}>YOU ARE APPROVING</p>
              {[
                { label: "Organization Identity", value: "NorthStar Technologies" },
                { label: "Organization Type", value: "Employer" },
                { label: "Approved Scope", value: "Employment / Placement Verification" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid rgba(22,122,90,0.1)" }}>
                  <span style={{ color: "#374151", fontSize: 13 }}>{item.label}</span>
                  <span style={{ color: "#111827", fontSize: 13, fontWeight: 600 }}>{item.value}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "#FFF1F2", border: "1px solid #FECDD3", borderRadius: 10, padding: "16px 18px", marginBottom: 24 }}>
              <p style={{ color: "#BE123C", fontSize: 11, fontWeight: 700, margin: "0 0 10px", letterSpacing: "0.04em" }}>YOU ARE NOT GRANTING</p>
              {["Institution Credential Issuance", "Academic Credential Authority", "Professional Licence Authority", "Algoma University Access"].map(item => (
                <div key={item} style={{ display: "flex", gap: 8, alignItems: "center", padding: "4px 0" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 2l6 6M8 2l-6 6" stroke="#BE123C" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  <span style={{ color: "#BE123C", fontSize: 13 }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setShowModal(false)} style={{ flex: 1, padding: "11px", border: "1px solid #D1D5DB", borderRadius: 8, background: "#FFFFFF", color: "#374151", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>Cancel</button>
              <button
                onClick={() => { setShowModal(false); navigate("ns-provisioning") }}
                style={{ flex: 1, padding: "11px", background: "#167A5A", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}
              >
                Approve & Activate
              </button>
            </div>
          </div>
        </div>
      )}

      <header style={{ background: "#0D1424", borderBottom: "1px solid rgba(255,255,255,0.12)", padding: "0 40px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15 }}>LinkCert</span>
          <div style={{ height: 16, width: 1, background: "rgba(255,255,255,0.2)", margin: "0 4px" }} />
          <span style={{ color: "#94A3B8", fontSize: 13 }}>LinkBlock Trust Administration</span>
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#EF4444" }} />
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em" }}>INTERNAL — NOT ACCESSIBLE TO INSTITUTIONS OR STUDENTS</span>
        </div>
      </header>

      <div style={{ flex: 1, display: "flex" }}>
        <nav style={{ width: 220, background: "#111827", padding: "20px 0" }}>
          {["Review Queue", "Active Organizations", "Suspended", "Audit Log", "Trust Registry"].map((item, i) => (
            <div key={item} style={{ padding: "10px 20px", borderLeft: i === 0 ? "3px solid #3157E5" : "3px solid transparent", background: i === 0 ? "rgba(49,87,229,0.15)" : "transparent", cursor: "pointer" }}>
              <span style={{ color: i === 0 ? "#FFFFFF" : "#94A3B8", fontSize: 13, fontWeight: i === 0 ? 600 : 400 }}>{item}</span>
            </div>
          ))}
        </nav>

        <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
          <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={() => navigate("ns-lb-review-queue")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Review Queue</button>
            <span style={{ color: "#D1D5DB" }}>›</span>
            <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>NorthStar Technologies Review</span>
          </div>

          <div style={{ padding: "28px 32px", maxWidth: 900 }}>
            <h1 style={{ fontSize: 18, fontWeight: 700, color: "#111827", margin: "0 0 24px" }}>Review External Organization</h1>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
              {/* Organization Identity */}
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "20px 22px" }}>
                <p style={{ color: "#9CA3AF", fontSize: 11, fontWeight: 700, margin: "0 0 14px", letterSpacing: "0.06em" }}>ORGANIZATION IDENTITY</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { label: "Legal Name", value: "NorthStar Technologies Inc.", status: "Verified" },
                    { label: "Domain", value: "northstartech.ca", status: "Verified", mono: true },
                    { label: "Website", value: "northstartech.ca", status: "Verified", mono: true },
                    { label: "Business Information", value: "BC-1092847", status: "Matched", mono: true },
                    { label: "Organization Status", value: "Active", status: "Active" },
                  ].map(item => (
                    <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "#F9FAFB", borderRadius: 6 }}>
                      <div>
                        <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 2px", fontWeight: 600, letterSpacing: "0.04em" }}>{item.label.toUpperCase()}</p>
                        <p style={{ color: "#111827", fontSize: 12, margin: 0, fontFamily: item.mono ? "'JetBrains Mono', monospace" : "inherit" }}>{item.value}</p>
                      </div>
                      <span style={{ color: "#167A5A", fontSize: 10, fontWeight: 700, alignSelf: "center" }}>{item.status.toUpperCase()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Representative + Authority */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "20px 22px" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 11, fontWeight: 700, margin: "0 0 14px", letterSpacing: "0.06em" }}>REPRESENTATIVE</p>
                  <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 8px" }}>Sarah Thompson</p>
                  {[
                    { label: "Corporate Email", value: "Verified" },
                    { label: "Organization Association", value: "Verified" },
                    { label: "MFA", value: "Enabled" },
                  ].map(item => (
                    <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #F3F4F6" }}>
                      <span style={{ color: "#667085", fontSize: 12 }}>{item.label}</span>
                      <span style={{ color: "#167A5A", fontSize: 12, fontWeight: 600 }}>{item.value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "20px 22px" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 11, fontWeight: 700, margin: "0 0 12px", letterSpacing: "0.06em" }}>REQUESTED AUTHORITY</p>
                  <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 10px" }}>Employment / Placement Verification</p>
                  {["Employment verification", "Placement completion", "Employment dates", "Placement hours"].map(item => (
                    <div key={item} style={{ display: "flex", gap: 8, padding: "4px 0" }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ marginTop: 3, flexShrink: 0 }}><circle cx="5" cy="5" r="2" fill="#3157E5"/></svg>
                      <span style={{ color: "#374151", fontSize: 12 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "20px 24px", display: "flex", gap: 12, justifyContent: "flex-end", alignItems: "center" }}>
              <button style={{ padding: "10px 20px", background: "#FFFFFF", border: "1px solid #D1D5DB", borderRadius: 8, color: "#374151", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>Request More Information</button>
              <button onClick={() => navigate("ns-failure")} style={{ padding: "10px 20px", background: "#FFFFFF", border: "1px solid #FCA5A5", borderRadius: 8, color: "#DC2626", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Reject</button>
              <button onClick={() => setShowModal(true)} style={{ padding: "10px 24px", background: "#167A5A", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Approve Organization + Scope</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
