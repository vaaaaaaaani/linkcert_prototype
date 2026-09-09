import { useState } from "react"
import type { Screen } from "../App"

interface Props { navigate: (s: Screen) => void }

export default function Screen18PublicVerification({ navigate }: Props) {
  const [credId, setCredId] = useState("LC-AU-2026-009821")
  const [verified, setVerified] = useState(false)
  const [loading, setLoading] = useState(false)

  const verify = () => {
    setLoading(true)
    setTimeout(() => { setLoading(false); setVerified(true) }, 1200)
  }

  const checks = [
    "Issuer is registered and trusted",
    "Algoma University signature is valid",
    "Credential fingerprint is valid",
    "External attestation is valid",
    "Credential has not been revoked",
    "Merkle proof is valid",
    "Blockchain proof confirmed",
  ]

  return (
    <div style={{ minHeight: "100vh", background: "#F6F7FA" }}>
      {/* Minimal public header */}
      <header style={{
        background: "#FFFFFF", borderBottom: "1px solid #E4E7EC",
        padding: "0 40px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: "#0D1424", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 16, color: "#111827" }}>LinkCert</span>
          <span style={{ color: "#9CA3AF", fontSize: 13 }}>· Credential Verification</span>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button
            onClick={() => navigate("login")}
            style={{ padding: "6px 14px", background: "#F3F4F6", color: "#374151", border: "1px solid #E4E7EC", borderRadius: 6, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}
          >
            Institution Login
          </button>
        </div>
      </header>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "60px 24px" }}>
        {/* Search */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: "#111827", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
            Verify a Credential
          </h1>
          <p style={{ color: "#667085", fontSize: 15, margin: 0 }}>
            Enter a credential ID or scan a QR code to verify authenticity and status.
          </p>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 14, padding: 28, marginBottom: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
            <input
              value={credId}
              onChange={e => setCredId(e.target.value)}
              placeholder="Credential ID (e.g. LC-AU-2026-009821)"
              style={{
                flex: 1, padding: "11px 14px", border: "1px solid #E4E7EC",
                borderRadius: 8, fontSize: 14, color: "#111827", fontFamily: "'JetBrains Mono', monospace",
                outline: "none", background: "#FFFFFF"
              }}
            />
            <button
              onClick={verify}
              disabled={loading}
              style={{
                padding: "11px 24px", background: "#3157E5", color: "#FFFFFF",
                border: "none", borderRadius: 8, fontSize: 14,
                fontWeight: 600, cursor: loading ? "wait" : "pointer",
                fontFamily: "inherit", minWidth: 90
              }}
            >
              {loading ? "…" : "Verify"}
            </button>
          </div>
          <p style={{ color: "#9CA3AF", fontSize: 12, margin: 0, textAlign: "center" }}>
            Verification is public and free. No account required.
          </p>
        </div>

        {loading && (
          <div style={{ textAlign: "center", padding: 32 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", border: "3px solid #EEF2FF", borderTopColor: "#3157E5", animation: "spin 0.8s linear infinite", margin: "0 auto 12px" }} />
            <p style={{ color: "#667085", fontSize: 13 }}>Verifying credential…</p>
          </div>
        )}

        {verified && !loading && (
          <div className="screen-enter">
            {/* Result */}
            <div style={{ background: "#FFFFFF", border: "1px solid #167A5A", borderRadius: 14, overflow: "hidden", marginBottom: 16 }}>
              <div style={{ background: "#167A5A", padding: "20px 28px", display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4.5 4.5L16 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 800, margin: "0 0 2px" }}>Credential Verified</p>
                  <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, margin: 0 }}>All cryptographic checks passed</p>
                </div>
                <div style={{ marginLeft: "auto", textAlign: "right" }}>
                  <span style={{ background: "rgba(255,255,255,0.2)", color: "#FFFFFF", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 20, letterSpacing: "0.05em" }}>VALID</span>
                </div>
              </div>

              <div style={{ padding: "22px 28px" }}>
                <div style={{ marginBottom: 20 }}>
                  <p style={{ color: "#111827", fontSize: 22, fontWeight: 800, margin: "0 0 2px", letterSpacing: "-0.01em" }}>Olivia Chen</p>
                  <p style={{ color: "#374151", fontSize: 15, fontWeight: 500, margin: "0 0 4px" }}>Professional Placement Credential</p>
                  <p style={{ color: "#667085", fontSize: 13, margin: 0 }}>Issued by <strong style={{ color: "#111827" }}>Algoma University</strong> · August 25, 2026</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                  {checks.map(check => (
                    <div key={check} style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "8px 14px", background: "#F9FAFB", borderRadius: 8, border: "1px solid #E4E7EC"
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span style={{ color: "#374151", fontSize: 13 }}>{check}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    onClick={() => navigate("hash-verification")}
                    style={{
                      flex: 1, padding: "10px 20px", background: "#3157E5", color: "#FFFFFF",
                      border: "none", borderRadius: 8, fontSize: 13,
                      fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                    }}
                  >
                    View Integrity Proof →
                  </button>
                  <button
                    onClick={() => navigate("tamper-demo")}
                    style={{
                      padding: "10px 20px", background: "#FFFFFF", color: "#C2414B",
                      border: "1px solid #FECDD3", borderRadius: 8, fontSize: 13,
                      fontWeight: 500, cursor: "pointer", fontFamily: "inherit"
                    }}
                  >
                    Tamper Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
