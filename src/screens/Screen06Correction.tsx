import { useState } from "react"
import type { Screen } from "../App"
import Sidebar from "../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

export default function Screen06Correction({ navigate, currentScreen }: Props) {
  const [corrected, setCorrected] = useState(false)

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{
          background: "#FFFFFF", borderBottom: "1px solid #E4E7EC",
          padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8
        }}>
          <button onClick={() => navigate("data-protection")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Data Protection</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Version & Change Detection</span>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
              Version & Change Detection
            </h1>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>
              LinkCert preserves all historical versions. Corrections create a new version and a new provenance event — nothing is silently overwritten.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
            {/* Version 1 */}
            <div style={{
              background: "#FFFFFF", border: "1px solid #E4E7EC",
              borderRadius: 12, padding: 24, position: "relative"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <span style={{
                  background: "#F3F4F6", color: "#374151", fontSize: 11,
                  fontWeight: 700, padding: "3px 8px", borderRadius: 4
                }}>VERSION 1</span>
                <span style={{ color: "#667085", fontSize: 11 }}>Preserved</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div>
                  <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 2px", fontWeight: 500 }}>RECIPIENT</p>
                  <p style={{ color: "#111827", fontSize: 14, fontWeight: 600, margin: 0 }}>Olivia Chen</p>
                </div>
                <div>
                  <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 2px", fontWeight: 500 }}>PROGRAM</p>
                  <p style={{ color: "#111827", fontSize: 14, fontWeight: 500, margin: 0 }}>Computer Science</p>
                </div>
                <div>
                  <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 2px", fontWeight: 500 }}>COMPLETION DATE</p>
                  <p style={{ color: "#111827", fontSize: 14, fontWeight: 500, margin: 0, display: "flex", alignItems: "center", gap: 8 }}>
                    June 12, 2026
                    {corrected && (
                      <span style={{ background: "#FEE2E2", color: "#C2414B", fontSize: 10, fontWeight: 600, padding: "1px 6px", borderRadius: 3 }}>SUPERSEDED</span>
                    )}
                  </p>
                </div>
                <div>
                  <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 2px", fontWeight: 500 }}>FINGERPRINT v1</p>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#374151", background: "#F3F4F6", padding: "3px 8px", borderRadius: 4 }}>a91c...7ef2</code>
                </div>
              </div>
              {corrected && (
                <div style={{
                  position: "absolute", inset: 0, borderRadius: 12,
                  background: "rgba(249,250,251,0.6)",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <div style={{
                    background: "#FFFFFF", border: "1px solid #E4E7EC",
                    borderRadius: 8, padding: "8px 14px",
                    display: "flex", alignItems: "center", gap: 6
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#167A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    <span style={{ color: "#167A5A", fontSize: 12, fontWeight: 600 }}>Preserved — not deleted</span>
                  </div>
                </div>
              )}
            </div>

            {/* Version 2 / Correction form */}
            <div style={{
              background: "#FFFFFF", border: `1px solid ${corrected ? "#167A5A" : "#E4E7EC"}`,
              borderRadius: 12, padding: 24,
              transition: "border-color 0.3s"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <span style={{
                  background: corrected ? "#F0FAF5" : "#EEF2FF",
                  color: corrected ? "#167A5A" : "#3157E5",
                  fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 4
                }}>{corrected ? "VERSION 2" : "CORRECTION"}</span>
                <span style={{ color: "#667085", fontSize: 11 }}>{corrected ? "Current" : "Pending"}</span>
              </div>

              {!corrected ? (
                <>
                  <p style={{ color: "#667085", fontSize: 13, margin: "0 0 16px", lineHeight: 1.5 }}>
                    Administrator is correcting a record. A registrar identified an error in the completion date for Olivia Chen.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div>
                      <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 4px", fontWeight: 500 }}>RECIPIENT</p>
                      <p style={{ color: "#374151", fontSize: 14, fontWeight: 500, margin: 0 }}>Olivia Chen</p>
                    </div>
                    <div>
                      <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 4px", fontWeight: 500 }}>COMPLETION DATE</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: 13, color: "#C2414B", textDecoration: "line-through" }}>June 12, 2026</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        <span style={{ fontSize: 13, color: "#167A5A", fontWeight: 700 }}>June 13, 2026</span>
                      </div>
                    </div>
                    <div>
                      <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 4px", fontWeight: 500 }}>REASON</p>
                      <p style={{ color: "#374151", fontSize: 13, margin: 0 }}>Registrar correction</p>
                    </div>
                    <div>
                      <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 4px", fontWeight: 500 }}>CHANGED BY</p>
                      <p style={{ color: "#374151", fontSize: 13, margin: 0 }}>Alex Morgan · Credential Administrator</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setCorrected(true)}
                    style={{
                      marginTop: 20, width: "100%", padding: "10px 16px",
                      background: "#3157E5", color: "#FFFFFF",
                      border: "none", borderRadius: 8, fontSize: 13,
                      fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                    }}
                  >
                    Apply Correction & Create Version 2
                  </button>
                </>
              ) : (
                <div className="screen-enter">
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div>
                      <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 2px", fontWeight: 500 }}>RECIPIENT</p>
                      <p style={{ color: "#111827", fontSize: 14, fontWeight: 600, margin: 0 }}>Olivia Chen</p>
                    </div>
                    <div>
                      <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 2px", fontWeight: 500 }}>PROGRAM</p>
                      <p style={{ color: "#111827", fontSize: 14, fontWeight: 500, margin: 0 }}>Computer Science</p>
                    </div>
                    <div>
                      <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 2px", fontWeight: 500 }}>COMPLETION DATE</p>
                      <p style={{ color: "#167A5A", fontSize: 14, fontWeight: 700, margin: 0 }}>June 13, 2026</p>
                    </div>
                    <div>
                      <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 2px", fontWeight: 500 }}>FINGERPRINT v2</p>
                      <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#167A5A", background: "#F0FAF5", padding: "3px 8px", borderRadius: 4 }}>f23b...94aa</code>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Correction event / provenance */}
          {corrected && (
            <div className="screen-enter" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 24 }}>
                <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Correction Provenance Event</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 20 }}>
                  {[
                    { label: "Changed by", value: "Alex Morgan" },
                    { label: "Role", value: "Credential Administrator" },
                    { label: "Reason", value: "Registrar correction" },
                    { label: "Previous event", value: "H2", mono: true },
                    { label: "New event", value: "H3 = hash(H2 + correction + v2 fingerprint)", mono: true },
                    { label: "Timestamp", value: "Aug 25, 2026 · 10:35 AM" },
                  ].map(item => (
                    <div key={item.label}>
                      <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 3px", fontWeight: 500 }}>{item.label.toUpperCase()}</p>
                      <p style={{
                        color: "#111827", fontSize: 12, margin: 0, fontWeight: 500,
                        fontFamily: item.mono ? "'JetBrains Mono', monospace" : "inherit",
                        wordBreak: "break-all"
                      }}>{item.value}</p>
                    </div>
                  ))}
                </div>

                {/* Visual flow */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#F9FAFB", borderRadius: 8, padding: "12px 16px" }}>
                  {[
                    { label: "V1 preserved", icon: "shield", color: "#374151" },
                    { label: "Correction recorded", icon: "edit", color: "#B66A15" },
                    { label: "V2 is current", icon: "check", color: "#167A5A" },
                  ].map((item, i) => (
                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: 6,
                        background: i === 0 ? "#F3F4F6" : i === 1 ? "#FFF8ED" : "#F0FAF5",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                      }}>
                        {i === 0 && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                        {i === 1 && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B66A15" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>}
                        {i === 2 && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#167A5A" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>}
                      </div>
                      <span style={{ color: item.color, fontSize: 12, fontWeight: 600 }}>{item.label}</span>
                      {i < 2 && <svg width="16" height="12" viewBox="0 0 16 12" fill="none" style={{ marginLeft: "auto" }}><path d="M1 6h12M9 1l5 5-5 5" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 14, background: "#FFF8ED", border: "1px solid #FDE68A", borderRadius: 8, padding: "10px 14px" }}>
                  <p style={{ color: "#92400E", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                    <strong>Nothing historical was deleted.</strong> Pending batch integrity proof will be recalculated using the current approved fingerprints.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button
                  onClick={() => navigate("batch-review")}
                  style={{
                    padding: "10px 20px", background: "#3157E5", color: "#FFFFFF",
                    border: "none", borderRadius: 8, fontSize: 13,
                    fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                  }}
                >
                  Proceed to Batch Review →
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
