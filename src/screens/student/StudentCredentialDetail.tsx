import { useState } from "react"
import type { Screen } from "../../App"
import StudentSidebar from "../../components/StudentSidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

type Tab = "overview" | "evidence" | "proof" | "history"

export default function StudentCredentialDetail({ navigate, currentScreen }: Props) {
  const [tab, setTab] = useState<Tab>("overview")
  const [showTechnical, setShowTechnical] = useState(false)

  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "evidence", label: "Evidence" },
    { id: "proof", label: "Proof" },
    { id: "history", label: "History" },
  ]

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <StudentSidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "0 32px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={() => navigate("student-credentials")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>My Credentials</button>
            <span style={{ color: "#D1D5DB" }}>›</span>
            <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Professional Placement Credential</span>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => navigate("student-share")} style={{ padding: "7px 14px", background: "#6941C6", color: "#FFFFFF", border: "none", borderRadius: 7, fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>Share</button>
          </div>
        </div>

        <div style={{ padding: "28px 32px", maxWidth: 740 }}>
          {/* Credential header card */}
          <div style={{ background: "linear-gradient(135deg, #1E1E4E 0%, #0D1424 100%)", borderRadius: 14, padding: "22px 24px", marginBottom: 20, display: "flex", gap: 16, alignItems: "center" }}>
            <div style={{ width: 52, height: 52, borderRadius: 11, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>🎓</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 5 }}>
                <span style={{ background: "#167A5A", color: "#FFFFFF", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 4, letterSpacing: "0.05em" }}>VERIFIED</span>
                <span style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 4, letterSpacing: "0.04em" }}>INSTITUTION-ISSUED</span>
              </div>
              <p style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 800, margin: "0 0 2px", letterSpacing: "-0.01em" }}>Professional Placement Credential</p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, margin: 0 }}>Algoma University · Software Developer Co-op · Olivia Chen</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, margin: "0 0 2px" }}>ID</p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", margin: 0 }}>LC-AU-2026-009821</p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 0, borderBottom: "1px solid #E4E7EC", marginBottom: 20 }}>
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                style={{
                  padding: "10px 18px", background: "none", border: "none", cursor: "pointer",
                  fontSize: 13, fontWeight: 500, fontFamily: "inherit",
                  color: tab === t.id ? "#6941C6" : "#667085",
                  borderBottom: tab === t.id ? "2px solid #6941C6" : "2px solid transparent",
                  marginBottom: -1,
                }}
              >{t.label}</button>
            ))}
          </div>

          {tab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22 }}>
                <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Credential Details</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[
                    { label: "Recipient", value: "Olivia Chen" },
                    { label: "Program", value: "Computer Science (Co-op)" },
                    { label: "Credential Type", value: "Professional Placement" },
                    { label: "Claim", value: "Software Developer Co-op Placement" },
                    { label: "Organization", value: "Northstar Technologies" },
                    { label: "Period", value: "May – Aug 2026" },
                    { label: "Issued By", value: "Algoma University" },
                    { label: "Issue Date", value: "August 26, 2026" },
                  ].map(item => (
                    <div key={item.label} style={{ background: "#F9FAFB", borderRadius: 8, padding: "10px 14px", border: "1px solid #E4E7EC" }}>
                      <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600 }}>{item.label.toUpperCase()}</p>
                      <p style={{ color: "#111827", fontSize: 13, fontWeight: 500, margin: 0 }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "evidence" && (
            <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22 }}>
              <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Evidence on File</h2>
              <div style={{ display: "flex", gap: 12, padding: "14px 16px", background: "#F9FAFB", borderRadius: 9, border: "1px solid #E4E7EC", marginBottom: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>📄</div>
                <div style={{ flex: 1 }}>
                  <p style={{ color: "#111827", fontSize: 13, fontWeight: 600, margin: "0 0 2px" }}>aws_certificate.pdf</p>
                  <p style={{ color: "#9CA3AF", fontSize: 11, margin: 0 }}>Submitted Aug 20, 2026 · Protected with SHA-256 fingerprint</p>
                </div>
                <span style={{ background: "#F0FAF5", color: "#167A5A", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 5, alignSelf: "center" }}>Intact</span>
              </div>
              <div style={{ background: "#F9FAFB", borderRadius: 9, padding: "12px 16px", border: "1px solid #E4E7EC" }}>
                <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 4px", fontWeight: 600 }}>EVIDENCE FINGERPRINT</p>
                <p style={{ color: "#374151", fontSize: 12, fontFamily: "'JetBrains Mono', monospace", margin: 0 }}>74bc19ef3d82c5a00b12e84f91c3...2a91</p>
              </div>
            </div>
          )}

          {tab === "proof" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22 }}>
                <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 6px" }}>What makes this credential trustworthy?</h2>
                <p style={{ color: "#667085", fontSize: 13, margin: "0 0 18px" }}>This credential has been verified through multiple independent steps.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { icon: "🏛️", label: "Issued by Algoma University", desc: "The institution cryptographically signed this credential with its own key. Not LinkCert — the university.", ok: true },
                    { icon: "🏢", label: "External attestation from Northstar Technologies", desc: "Sarah Thompson at Northstar Technologies confirmed the placement claim.", ok: true },
                    { icon: "🔒", label: "Evidence is intact", desc: "The submitted evidence has not been altered since submission.", ok: true },
                    { icon: "⛓️", label: "Blockchain-anchored proof", desc: "A cryptographic fingerprint is anchored on Polygon — no personal data is on-chain.", ok: true },
                  ].map(item => (
                    <div key={item.label} style={{ display: "flex", gap: 12, padding: "12px 16px", background: "#F9FAFB", borderRadius: 9, border: "1px solid #E4E7EC", alignItems: "flex-start" }}>
                      <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                      <div style={{ flex: 1 }}>
                        <p style={{ color: "#111827", fontSize: 13, fontWeight: 600, margin: "0 0 2px" }}>{item.label}</p>
                        <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>{item.desc}</p>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}><path d="M2 8l4 4 8-8" stroke="#167A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <button onClick={() => setShowTechnical(!showTechnical)} style={{ background: "none", border: "none", color: "#6941C6", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", padding: 0, display: "flex", gap: 6, alignItems: "center" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: showTechnical ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}><path d="M3 2l5 4-5 4" stroke="#6941C6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {showTechnical ? "Hide" : "View"} Technical Proof Details
                </button>
                {showTechnical && (
                  <div style={{ marginTop: 12, background: "#1E1E1E", borderRadius: 10, padding: "14px 16px" }}>
                    {[
                      { label: "Credential ID", value: "LC-AU-2026-009821" },
                      { label: "Credential SHA-256", value: "41e89fa72cb3f2a...c72" },
                      { label: "Merkle Root", value: "0x82F7AC...912E" },
                      { label: "Blockchain Tx", value: "0x937ac...829e" },
                      { label: "Attestation ID", value: "ATT-2026-982271" },
                      { label: "Issuer Key ID", value: "ISSUER-AU-001" },
                    ].map(item => (
                      <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <span style={{ color: "#9CA3AF", fontSize: 11 }}>{item.label}</span>
                        <span style={{ color: "#E2E8F0", fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {tab === "history" && (
            <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22 }}>
              <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Credential History</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { date: "Aug 26, 2026", action: "Credential issued", by: "Algoma University · Office of the Registrar", color: "#167A5A" },
                  { date: "Aug 25, 2026", action: "Institutional approval granted", by: "Alex Morgan, Credential Administrator", color: "#3157E5" },
                  { date: "Aug 25, 2026", action: "External attestation signed", by: "Sarah Thompson, Northstar Technologies", color: "#6941C6" },
                  { date: "Aug 20, 2026", action: "Evidence protected (SHA-256 fingerprint created)", by: "LinkCert system", color: "#667085" },
                  { date: "Aug 20, 2026", action: "Submission received", by: "Olivia Chen (Student)", color: "#667085" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, paddingBottom: i < 4 ? 16 : 0 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color, flexShrink: 0, marginTop: 3 }} />
                      {i < 4 && <div style={{ width: 1, flex: 1, background: "#E4E7EC", margin: "5px 0" }} />}
                    </div>
                    <div>
                      <p style={{ color: "#111827", fontSize: 13, fontWeight: 500, margin: "0 0 2px" }}>{item.action}</p>
                      <p style={{ color: "#9CA3AF", fontSize: 11, margin: 0 }}>{item.by} · {item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
