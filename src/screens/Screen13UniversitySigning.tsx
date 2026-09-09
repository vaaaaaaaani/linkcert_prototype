import { useState } from "react"
import type { Screen } from "../App"
import Sidebar from "../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const signingSteps = [
  "Final institution approval recorded",
  "Credential payload finalized",
  "Algoma University digital signature applied",
  "Credential fingerprint created",
]

export default function Screen13UniversitySigning({ navigate, currentScreen }: Props) {
  const [signing, setSigning] = useState(false)
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)

  const startSigning = () => {
    setSigning(true)
    let s = 0
    const advance = () => {
      s++
      setStep(s)
      if (s < signingSteps.length) {
        setTimeout(advance, 500)
      } else {
        setTimeout(() => setDone(true), 400)
      }
    }
    setTimeout(advance, 500)
  }

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{
          background: "#FFFFFF", borderBottom: "1px solid #E4E7EC",
          padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8
        }}>
          <button onClick={() => navigate("university-approval")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Final Approval</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Institution Signing</span>
        </div>

        <div style={{ padding: "32px", maxWidth: 740 }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
              Institution Signing
            </h1>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>
              Algoma University applies its institution signing key to the final approved credential.
            </p>
          </div>

          {/* Signing authority card */}
          <div style={{
            background: "#0D1424", borderRadius: 14, padding: "28px 32px",
            marginBottom: 20, border: "1px solid rgba(255,255,255,0.08)"
          }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 600, margin: "0 0 16px", letterSpacing: "0.08em" }}>SIGNING AUTHORITY</p>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: "#1D2B4A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: "#60A5FA", flexShrink: 0 }}>AU</div>
              <div style={{ flex: 1 }}>
                <p style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 800, margin: "0 0 2px", letterSpacing: "-0.01em" }}>Algoma University</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, margin: 0 }}>Office of the Registrar</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, margin: "0 0 3px", letterSpacing: "0.05em" }}>ISSUER ID</p>
                <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#60A5FA", fontSize: 11 }}>ISSUER-AU-001</code>
              </div>
            </div>
            <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", gap: 24 }}>
              <div>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, margin: "0 0 3px", letterSpacing: "0.05em" }}>SIGNING KEY</p>
                <p style={{ color: "#FFFFFF", fontSize: 12, fontWeight: 500, margin: 0 }}>Algoma University Credential Signing Key</p>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, margin: "0 0 3px", letterSpacing: "0.05em" }}>KEY STATUS</p>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80" }} />
                  <span style={{ color: "#4ADE80", fontSize: 12, fontWeight: 600 }}>Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Credential details */}
          <div style={{
            background: "#FFFFFF", border: "1px solid #E4E7EC",
            borderRadius: 12, padding: 24, marginBottom: 20
          }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Credential to be Signed</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                { label: "Credential Type", value: "Professional Placement Credential" },
                { label: "Recipient", value: "Olivia Chen" },
                { label: "Issuing Authority", value: "Algoma University" },
                { label: "External Attestation", value: "Northstar Technologies · Verified" },
              ].map(item => (
                <div key={item.label} style={{ padding: "10px 14px", background: "#F9FAFB", borderRadius: 8, border: "1px solid #E4E7EC" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600 }}>{item.label.toUpperCase()}</p>
                  <p style={{ color: "#111827", fontSize: 12, margin: 0, fontWeight: 500 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Signing process */}
          {!signing ? (
            <>
              <div style={{
                background: "#EEF2FF", border: "1px solid #C7D7FD",
                borderRadius: 10, padding: "14px 18px", marginBottom: 20
              }}>
                <p style={{ color: "#3157E5", fontSize: 13, fontWeight: 600, margin: "0 0 4px" }}>
                  Only Algoma University holds the signing key
                </p>
                <p style={{ color: "#374151", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                  LinkCert facilitates the workflow and provides the finalized credential payload. The cryptographic signature is applied using Algoma University's institution issuer key — not LinkBlock's.
                </p>
              </div>
              <button
                onClick={startSigning}
                style={{
                  width: "100%", padding: "13px 24px", background: "#111827",
                  color: "#FFFFFF", border: "none", borderRadius: 9,
                  fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit"
                }}
              >
                Sign Final Credential
              </button>
            </>
          ) : (
            <div style={{
              background: "#FFFFFF", border: `1px solid ${done ? "#167A5A" : "#E4E7EC"}`,
              borderRadius: 12, padding: 24, transition: "border-color 0.3s"
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {signingSteps.map((s, i) => {
                  const complete = i < step
                  const active = i === step - 1 && !done
                  return (
                    <div key={s} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{
                        width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                        background: complete ? "#167A5A" : "#F3F4F6",
                        border: `1px solid ${complete ? "#167A5A" : "#E4E7EC"}`,
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        {complete
                          ? <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5L9 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          : <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D1D5DB" }} />
                        }
                      </div>
                      <span style={{
                        fontSize: 13, color: complete ? "#167A5A" : "#9CA3AF",
                        fontWeight: complete ? 600 : 400
                      }}>✓ {s}</span>
                    </div>
                  )
                })}
              </div>

              {done && (
                <div className="screen-enter" style={{ marginTop: 20 }}>
                  <div style={{
                    background: "#F0FAF5", border: "1px solid #D1FAE5",
                    borderRadius: 10, padding: "16px 20px", marginBottom: 20,
                    textAlign: "center"
                  }}>
                    <p style={{ color: "#167A5A", fontSize: 16, fontWeight: 800, margin: "0 0 4px" }}>
                      Signed by Algoma University
                    </p>
                    <p style={{ color: "#374151", fontSize: 12, margin: 0 }}>
                      Not signed by LinkBlock. The institution signed its own credential.
                    </p>
                  </div>
                  <button
                    onClick={() => navigate("final-fingerprint")}
                    style={{
                      width: "100%", padding: "11px 24px", background: "#3157E5",
                      color: "#FFFFFF", border: "none", borderRadius: 8,
                      fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                    }}
                  >
                    View Final Credential Fingerprint →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
