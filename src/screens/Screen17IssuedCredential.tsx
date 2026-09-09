import { useState } from "react"
import type { Screen } from "../App"
import Sidebar from "../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

type Tab = "credential" | "evidence" | "proof" | "history"

export default function Screen17IssuedCredential({ navigate, currentScreen }: Props) {
  const [tab, setTab] = useState<Tab>("credential")

  const tabs: { id: Tab; label: string }[] = [
    { id: "credential", label: "Credential" },
    { id: "evidence", label: "Evidence" },
    { id: "proof", label: "Proof" },
    { id: "history", label: "History" },
  ]

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{
          background: "#FFFFFF", borderBottom: "1px solid #E4E7EC",
          padding: "0 32px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={() => navigate("dashboard")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Credentials</button>
            <span style={{ color: "#D1D5DB" }}>›</span>
            <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>LC-AU-2026-009821</span>
          </div>
          <button
            onClick={() => navigate("public-verification")}
            style={{ padding: "6px 14px", background: "#EEF2FF", color: "#3157E5", border: "1px solid #C7D7FD", borderRadius: 7, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}
          >
            Public Verification →
          </button>
        </div>

        <div style={{ padding: "28px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 20 }}>
            {/* Credential card */}
            <div style={{
              background: "#FFFFFF", border: "1px solid #E4E7EC",
              borderRadius: 16, overflow: "hidden"
            }}>
              {/* Header banner */}
              <div style={{ background: "#0D1424", padding: "24px 24px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 7, background: "#1D2B4A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#60A5FA" }}>AU</div>
                  <div>
                    <p style={{ color: "#FFFFFF", fontSize: 12, fontWeight: 700, margin: 0, letterSpacing: "0.05em" }}>ALGOMA UNIVERSITY</p>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, margin: 0 }}>Office of the Registrar</p>
                  </div>
                </div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, fontWeight: 600, margin: "0 0 4px", letterSpacing: "0.06em" }}>THIS IS TO CERTIFY THAT</p>
                <p style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 800, margin: "0 0 4px", letterSpacing: "-0.02em" }}>Olivia Chen</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, fontWeight: 600, margin: "0 0 4px", letterSpacing: "0.06em" }}>HAS BEEN AWARDED</p>
                <p style={{ color: "#93C5FD", fontSize: 15, fontWeight: 600, margin: 0 }}>Professional Placement Credential</p>
              </div>

              <div style={{ padding: "18px 22px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                  {[
                    { label: "Issued", value: "August 25, 2026" },
                    { label: "Credential ID", value: "LC-AU-2026-009821", mono: true },
                    { label: "Issued by", value: "Algoma University" },
                  ].map(item => (
                    <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: "1px solid #F3F4F6" }}>
                      <span style={{ color: "#9CA3AF", fontSize: 11 }}>{item.label}</span>
                      <span style={{ color: "#111827", fontSize: 11, fontWeight: 600, fontFamily: item.mono ? "'JetBrains Mono', monospace" : "inherit" }}>{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Status */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#F0FAF5", borderRadius: 8, padding: "10px 16px", marginBottom: 16, border: "1px solid #D1FAE5" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#167A5A" }} />
                  <span style={{ color: "#167A5A", fontSize: 13, fontWeight: 800, letterSpacing: "0.06em" }}>ACTIVE</span>
                </div>

                {/* QR placeholder */}
                <div style={{ background: "#F9FAFB", border: "1px solid #E4E7EC", borderRadius: 8, padding: 16, textAlign: "center" }}>
                  <div style={{
                    width: 100, height: 100, margin: "0 auto 8px",
                    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23F9FAFB'/%3E%3Crect x='10' y='10' width='35' height='35' fill='none' stroke='%23111827' stroke-width='2'/%3E%3Crect x='55' y='10' width='35' height='35' fill='none' stroke='%23111827' stroke-width='2'/%3E%3Crect x='10' y='55' width='35' height='35' fill='none' stroke='%23111827' stroke-width='2'/%3E%3Crect x='16' y='16' width='23' height='23' fill='%23111827'/%3E%3Crect x='61' y='16' width='23' height='23' fill='%23111827'/%3E%3Crect x='16' y='61' width='23' height='23' fill='%23111827'/%3E%3Crect x='55' y='55' width='8' height='8' fill='%23111827'/%3E%3Crect x='70' y='55' width='8' height='8' fill='%23111827'/%3E%3Crect x='55' y='70' width='8' height='8' fill='%23111827'/%3E%3Crect x='85' y='70' width='8' height='8' fill='%23111827'/%3E%3C/svg%3E")`,
                    backgroundSize: "contain"
                  }} />
                  <p style={{ color: "#9CA3AF", fontSize: 10, margin: 0 }}>Scan to verify credential</p>
                </div>
              </div>
            </div>

            {/* Tabs panel */}
            <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ display: "flex", borderBottom: "1px solid #E4E7EC" }}>
                {tabs.map(t => (
                  <button key={t.id} onClick={() => setTab(t.id)} style={{
                    flex: 1, padding: "14px 8px",
                    background: "none", border: "none", cursor: "pointer",
                    borderBottom: tab === t.id ? "2px solid #3157E5" : "2px solid transparent",
                    color: tab === t.id ? "#3157E5" : "#667085",
                    fontSize: 13, fontWeight: tab === t.id ? 600 : 400,
                    fontFamily: "inherit", transition: "all 0.15s"
                  }}>{t.label}</button>
                ))}
              </div>

              <div style={{ padding: 24 }}>
                {tab === "credential" && (
                  <div>
                    <h3 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Credential Details</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      {[
                        { label: "Credential Type", value: "Professional Placement Credential" },
                        { label: "Recipient", value: "Olivia Chen" },
                        { label: "Program", value: "Computer Science — Co-op Stream" },
                        { label: "Placement", value: "Northstar Technologies" },
                        { label: "Position", value: "Software Developer Intern" },
                        { label: "Dates", value: "May 4 – Aug 28, 2026" },
                        { label: "Required Hours", value: "560" },
                        { label: "Completed Hours", value: "576" },
                      ].map(item => (
                        <div key={item.label} style={{ padding: "10px 14px", background: "#F9FAFB", borderRadius: 8, border: "1px solid #E4E7EC" }}>
                          <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600 }}>{item.label.toUpperCase()}</p>
                          <p style={{ color: "#111827", fontSize: 12, margin: 0, fontWeight: 500 }}>{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tab === "proof" && (
                  <div>
                    <h3 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Cryptographic Proof</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {[
                        { label: "Issuer", value: "Algoma University", ok: true },
                        { label: "Issuer Signature", value: "Valid", ok: true },
                        { label: "External Attestation", value: "Northstar Technologies", ok: true },
                        { label: "Attestation Signature", value: "Valid", ok: true },
                        { label: "Credential Fingerprint", value: "Match", ok: true },
                        { label: "Merkle Proof", value: "Valid", ok: true },
                        { label: "Blockchain Anchor", value: "Confirmed · Polygon #72849314", ok: true },
                        { label: "Status", value: "Active", ok: true },
                        { label: "Privacy", value: "No personal information stored on-chain", neutral: true },
                      ].map(item => (
                        <div key={item.label} style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          padding: "10px 14px", background: "#F9FAFB", borderRadius: 8, border: "1px solid #E4E7EC"
                        }}>
                          <span style={{ color: "#374151", fontSize: 12 }}>{item.label}</span>
                          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            {item.ok && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 4" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                            <span style={{ color: item.ok ? "#167A5A" : "#374151", fontSize: 12, fontWeight: item.ok ? 600 : 400 }}>{item.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tab === "evidence" && (
                  <div>
                    <h3 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Supporting Evidence</h3>
                    <div style={{ background: "#F9FAFB", borderRadius: 10, padding: "14px 16px", border: "1px solid #E4E7EC", marginBottom: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 32, height: 32, borderRadius: 6, background: "#F4F0FD", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6941C6" strokeWidth="2"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                        </div>
                        <div>
                          <p style={{ color: "#111827", fontSize: 13, fontWeight: 600, margin: 0 }}>External Attestation by Northstar Technologies</p>
                          <p style={{ color: "#667085", fontSize: 11, margin: 0 }}>ATT-2026-982271 · Signed by Sarah Thompson</p>
                        </div>
                        <div style={{ marginLeft: "auto" }}>
                          <span style={{ background: "#F0FAF5", color: "#167A5A", fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 4 }}>Verified</span>
                        </div>
                      </div>
                    </div>
                    <p style={{ color: "#9CA3AF", fontSize: 12, lineHeight: 1.5, margin: 0 }}>
                      All evidence submitted during the approval workflow has been fingerprinted and preserved in the audit trail. No learner or institutional data is stored on blockchain.
                    </p>
                  </div>
                )}

                {tab === "history" && (
                  <div>
                    <h3 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Credential History</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                      {[
                        { time: "11:07 AM", actor: "Blockchain", action: "Batch proof confirmed · Polygon #72849314" },
                        { time: "11:05 AM", actor: "LinkCert", action: "Merkle root generated for batch" },
                        { time: "11:04 AM", actor: "Algoma University", action: "Final credential digitally signed" },
                        { time: "11:02 AM", actor: "Registrar", action: "Final approval granted" },
                        { time: "10:52 AM", actor: "Sarah Thompson, Northstar", action: "External attestation digitally signed" },
                        { time: "10:41 AM", actor: "LinkCert", action: "External attestation request sent" },
                      ].map((event, i) => (
                        <div key={i} style={{ display: "flex", gap: 14, paddingBottom: i < 5 ? 0 : 0 }}>
                          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#3157E5", flexShrink: 0, marginTop: 4 }} />
                            {i < 5 && <div style={{ width: 1, flex: 1, minHeight: 20, background: "#E4E7EC", margin: "3px 0" }} />}
                          </div>
                          <div style={{ paddingBottom: i < 5 ? 12 : 0 }}>
                            <p style={{ color: "#111827", fontSize: 12, fontWeight: 600, margin: 0 }}>{event.actor}</p>
                            <p style={{ color: "#667085", fontSize: 12, margin: "1px 0 0" }}>{event.action}</p>
                            <p style={{ color: "#9CA3AF", fontSize: 10, margin: "2px 0 0", fontFamily: "'JetBrains Mono', monospace" }}>Aug 25, 2026 · {event.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => navigate("audit-log")} style={{ marginTop: 16, padding: "7px 14px", background: "#EEF2FF", color: "#3157E5", border: "1px solid #C7D7FD", borderRadius: 6, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
                      View Full Audit Log →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
