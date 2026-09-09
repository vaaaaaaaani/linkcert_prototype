import { useState, useEffect } from "react"
import type { Screen } from "../App"
import Sidebar from "../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const steps = [
  "Preparing Merkle root",
  "Verifying institution signature",
  "Submitting blockchain transaction",
  "Waiting for network confirmation",
]

export default function Screen16BlockchainAnchor({ navigate, currentScreen }: Props) {
  const [anchoring, setAnchoring] = useState(false)
  const [step, setStep] = useState(0)
  const [confirmed, setConfirmed] = useState(false)

  const startAnchor = () => {
    setAnchoring(true)
    let s = 0
    const advance = () => {
      s++
      setStep(s)
      if (s < steps.length) setTimeout(advance, 700)
      else setTimeout(() => setConfirmed(true), 800)
    }
    setTimeout(advance, 600)
  }

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{
          background: "#FFFFFF", borderBottom: "1px solid #E4E7EC",
          padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8
        }}>
          <button onClick={() => navigate("merkle-root")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Merkle Root</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Blockchain Anchor</span>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
              Blockchain Proof Anchor
            </h1>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>
              The Merkle root is anchored as an immutable on-chain reference. No credential data or student records are stored on blockchain.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {!anchoring ? (
                <>
                  <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 24 }}>
                    <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Ready to Anchor</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                      {[
                        { label: "Merkle Root", value: "0x82F7AC...912E", mono: true },
                        { label: "Credentials in batch", value: "243" },
                        { label: "Issuer", value: "Algoma University" },
                        { label: "Network", value: "Polygon (configurable)" },
                      ].map(item => (
                        <div key={item.label} style={{ background: "#F9FAFB", borderRadius: 8, padding: "10px 14px", border: "1px solid #E4E7EC" }}>
                          <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600 }}>{item.label.toUpperCase()}</p>
                          <p style={{ color: "#111827", fontSize: 12, fontWeight: 600, margin: 0, fontFamily: item.mono ? "'JetBrains Mono', monospace" : "inherit" }}>{item.value}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: "#F9FAFB", borderRadius: 8, padding: "12px 16px", marginBottom: 20, border: "1px solid #E4E7EC" }}>
                      <p style={{ color: "#374151", fontSize: 12, fontWeight: 600, margin: "0 0 4px" }}>Blockchain infrastructure is configurable</p>
                      <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>Polygon is used for this demo. Institutions can configure the target network in integration settings.</p>
                    </div>
                    <button
                      onClick={startAnchor}
                      style={{
                        width: "100%", padding: "12px 24px", background: "#111827",
                        color: "#FFFFFF", border: "none", borderRadius: 8,
                        fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit"
                      }}
                    >
                      Anchor Batch Proof
                    </button>
                  </div>
                </>
              ) : !confirmed ? (
                <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 32 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {steps.map((s, i) => {
                      const complete = i < step
                      const active = i === step - 1
                      return (
                        <div key={s} style={{ display: "flex", gap: 14, alignItems: "center" }}>
                          <div style={{
                            width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                            background: complete ? "#167A5A" : active ? "#EEF2FF" : "#F3F4F6",
                            border: `1px solid ${complete ? "#167A5A" : active ? "#3157E5" : "#E4E7EC"}`,
                            display: "flex", alignItems: "center", justifyContent: "center"
                          }}>
                            {complete
                              ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              : active
                              ? <div style={{ width: 10, height: 10, borderRadius: "50%", border: "2px solid #3157E5", borderTopColor: "transparent", animation: "spin 0.8s linear infinite" }} />
                              : <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#D1D5DB" }} />
                            }
                          </div>
                          <span style={{ fontSize: 14, color: complete ? "#167A5A" : active ? "#111827" : "#9CA3AF", fontWeight: complete || active ? 500 : 400 }}>{s}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <div className="screen-enter" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {/* Confirmed */}
                  <div style={{ background: "#FFFFFF", border: "1px solid #167A5A", borderRadius: 12, overflow: "hidden" }}>
                    <div style={{ background: "#167A5A", padding: "20px 24px", display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4.5 4.5L16 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <div>
                        <p style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 700, margin: 0 }}>Blockchain Proof Confirmed</p>
                        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, margin: 0 }}>Long-term immutable verification proof established</p>
                      </div>
                    </div>
                    <div style={{ padding: "20px 24px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        {[
                          { label: "Network", value: "Polygon" },
                          { label: "Root", value: "0x82F7AC...912E", mono: true },
                          { label: "Transaction", value: "0x937ac...829e", mono: true },
                          { label: "Block", value: "#72849314", mono: true },
                          { label: "Timestamp", value: "Aug 25, 2026 · 11:07 AM" },
                          { label: "Confirmations", value: "32", ok: true },
                        ].map(item => (
                          <div key={item.label} style={{ background: "#F9FAFB", borderRadius: 8, padding: "10px 14px", border: "1px solid #E4E7EC" }}>
                            <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600 }}>{item.label.toUpperCase()}</p>
                            <p style={{ color: (item as any).ok ? "#167A5A" : "#111827", fontSize: 12, fontWeight: 600, margin: 0, fontFamily: item.mono ? "'JetBrains Mono', monospace" : "inherit" }}>{item.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate("issued-credential")}
                    style={{
                      padding: "11px 20px", background: "#3157E5", color: "#FFFFFF",
                      border: "none", borderRadius: 8, fontSize: 13,
                      fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                    }}
                  >
                    View Issued Credential →
                  </button>
                </div>
              )}
            </div>

            {/* Privacy card */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22 }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: "#111827", margin: "0 0 14px" }}>What was placed on-chain</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {["Cryptographic Merkle root", "Batch anchor timestamp", "Transaction metadata", "Issuer reference (configurable)"].map(item => (
                    <div key={item} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 4" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span style={{ color: "#374151", fontSize: 12 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "#FFFFFF", border: "1px solid #C2414B", borderRadius: 12, padding: 22 }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: "#C2414B", margin: "0 0 14px" }}>What was NOT placed on-chain</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {["Student names or IDs", "Grade or academic records", "CSV or source file", "Credential PDF", "Any private student data"].map(item => (
                    <div key={item} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3l-8 8" stroke="#C2414B" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      <span style={{ color: "#374151", fontSize: 12 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
