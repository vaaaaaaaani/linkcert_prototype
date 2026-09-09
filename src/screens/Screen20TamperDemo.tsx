import { useState } from "react"
import type { Screen } from "../App"

interface Props { navigate: (s: Screen) => void }

export default function Screen20TamperDemo({ navigate }: Props) {
  const [tampered, setTampered] = useState(false)

  return (
    <div style={{ minHeight: "100vh", background: "#F6F7FA" }}>
      <header style={{
        background: "#FFFFFF", borderBottom: "1px solid #E4E7EC",
        padding: "0 40px", height: 60, display: "flex", alignItems: "center", gap: 10
      }}>
        <div style={{ width: 28, height: 28, borderRadius: 6, background: "#0D1424", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <span style={{ fontWeight: 700, fontSize: 16, color: "#111827" }}>LinkCert</span>
        <span style={{ color: "#9CA3AF", fontSize: 13 }}>· Tamper Detection Demo</span>
      </header>

      <div style={{ maxWidth: 740, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: "#FFF0F1", border: "1px solid #FECDD3", borderRadius: 8, padding: "5px 14px", marginBottom: 12 }}>
            <span style={{ color: "#C2414B", fontSize: 11, fontWeight: 700, letterSpacing: "0.05em" }}>INTERACTIVE DEMO</span>
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: "#111827", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
            Tamper Detection
          </h1>
          <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>
            See what happens when a single field of a credential is modified after issuance.
          </p>
        </div>

        {/* Original credential */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ background: "#F0FAF5", color: "#167A5A", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 4 }}>ORIGINAL · AUTHENTIC</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Recipient", value: "Olivia Chen" },
                { label: "Credential", value: "Professional Placement Credential" },
                { label: "Issuer", value: "Algoma University" },
                { label: "Completion Date", value: "August 28, 2026" },
              ].map(item => (
                <div key={item.label} style={{ padding: "8px 12px", background: "#F9FAFB", borderRadius: 6, border: "1px solid #E4E7EC" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 2px", fontWeight: 500 }}>{item.label.toUpperCase()}</p>
                  <p style={{ color: "#111827", fontSize: 13, fontWeight: 500, margin: 0 }}>{item.value}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12, padding: "8px 12px", background: "#F9FAFB", borderRadius: 6, border: "1px solid #E4E7EC" }}>
              <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 2px", fontWeight: 500 }}>CREDENTIAL FINGERPRINT</p>
              <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#167A5A", fontSize: 11, fontWeight: 700 }}>41E89F...72C</code>
            </div>
          </div>

          <div style={{ background: "#FFFFFF", border: `1px solid ${tampered ? "#C2414B" : "#E4E7EC"}`, borderRadius: 12, padding: 22, transition: "border-color 0.3s" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ background: tampered ? "#FFF0F1" : "#F9FAFB", color: tampered ? "#C2414B" : "#9CA3AF", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 4, transition: "all 0.3s" }}>
                {tampered ? "TAMPERED · MODIFIED" : "MODIFY TO DEMONSTRATE"}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Recipient", value: "Olivia Chen" },
                { label: "Credential", value: "Professional Placement Credential" },
                { label: "Issuer", value: "Algoma University" },
              ].map(item => (
                <div key={item.label} style={{ padding: "8px 12px", background: "#F9FAFB", borderRadius: 6, border: "1px solid #E4E7EC" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 2px", fontWeight: 500 }}>{item.label.toUpperCase()}</p>
                  <p style={{ color: "#111827", fontSize: 13, fontWeight: 500, margin: 0 }}>{item.value}</p>
                </div>
              ))}
              <div style={{ padding: "8px 12px", background: tampered ? "#FFF0F1" : "#F9FAFB", borderRadius: 6, border: `1px solid ${tampered ? "#FECDD3" : "#E4E7EC"}`, transition: "all 0.3s" }}>
                <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 2px", fontWeight: 500 }}>COMPLETION DATE</p>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {tampered && <span style={{ color: "#C2414B", textDecoration: "line-through", fontSize: 12 }}>August 28</span>}
                  <p style={{ color: tampered ? "#C2414B" : "#111827", fontSize: 13, fontWeight: tampered ? 700 : 500, margin: 0 }}>
                    {tampered ? "August 21, 2026" : "August 28, 2026"}
                  </p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 12, padding: "8px 12px", background: tampered ? "#FFF0F1" : "#F9FAFB", borderRadius: 6, border: `1px solid ${tampered ? "#FECDD3" : "#E4E7EC"}`, transition: "all 0.3s" }}>
              <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 2px", fontWeight: 500 }}>CREDENTIAL FINGERPRINT</p>
              <code style={{ fontFamily: "'JetBrains Mono', monospace", color: tampered ? "#C2414B" : "#9CA3AF", fontSize: 11, fontWeight: 700 }}>
                {tampered ? "73AB91...002F" : "—"}
              </code>
            </div>
          </div>
        </div>

        {!tampered ? (
          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => setTampered(true)}
              style={{
                padding: "12px 28px", background: "#C2414B", color: "#FFFFFF",
                border: "none", borderRadius: 9, fontSize: 14,
                fontWeight: 700, cursor: "pointer", fontFamily: "inherit"
              }}
            >
              Demonstrate Tampered Credential
            </button>
          </div>
        ) : (
          <div className="screen-enter">
            {/* Failure state */}
            <div style={{
              background: "#C2414B", borderRadius: 14, padding: "24px 28px",
              marginBottom: 20, textAlign: "center"
            }}>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, fontWeight: 700, margin: "0 0 6px", letterSpacing: "0.06em" }}>VERIFICATION RESULT</p>
              <p style={{ color: "#FFFFFF", fontSize: 26, fontWeight: 900, margin: "0 0 6px", letterSpacing: "-0.01em" }}>
                INTEGRITY CHECK FAILED
              </p>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, fontWeight: 600, margin: 0 }}>
                Fingerprints do not match
              </p>
            </div>

            {/* Hash comparison */}
            <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>Hash Comparison</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ padding: "12px 16px", background: "#FFF0F1", borderRadius: 8, border: "1px solid #FECDD3" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600 }}>PRESENTED CREDENTIAL HASH (MODIFIED)</p>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#C2414B", fontSize: 13, fontWeight: 700 }}>73AB91...002F</code>
                </div>
                <div style={{ padding: "12px 16px", background: "#F0FAF5", borderRadius: 8, border: "1px solid #D1FAE5" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600 }}>EXPECTED CREDENTIAL HASH (INSTITUTION-SIGNED)</p>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#167A5A", fontSize: 13, fontWeight: 700 }}>41E89F...72C</code>
                </div>
              </div>

              <div style={{ marginTop: 14, padding: "10px 14px", background: "#F9FAFB", borderRadius: 8, border: "1px solid #E4E7EC" }}>
                <p style={{ color: "#374151", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                  Even if the visual credential appears legitimate, <strong>changing one field creates a completely different fingerprint</strong> that no longer matches the institution-signed record.
                </p>
              </div>
            </div>

            {/* Detailed failures */}
            <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>Verification Failures</h3>
              {[
                { label: "Institution signature", value: "Invalid for modified payload", fail: true },
                { label: "Merkle proof", value: "Does not match anchored root", fail: true },
                { label: "Blockchain proof", value: "Original proof still exists (unmodified)", warn: true },
                { label: "Status", value: "Credential cannot be verified", fail: true },
              ].map(item => (
                <div key={item.label} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "10px 14px", background: item.fail ? "#FFF0F1" : "#FFF8ED",
                  borderRadius: 8, border: `1px solid ${item.fail ? "#FECDD3" : "#FDE68A"}`,
                  marginBottom: 8
                }}>
                  <span style={{ color: "#374151", fontSize: 12 }}>{item.label}</span>
                  <span style={{ color: item.fail ? "#C2414B" : "#B66A15", fontSize: 12, fontWeight: 600 }}>{item.value}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => { setTampered(false) }} style={{ padding: "9px 18px", background: "#FFFFFF", color: "#374151", border: "1px solid #E4E7EC", borderRadius: 7, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>Reset Demo</button>
              <button onClick={() => navigate("audit-log")} style={{ padding: "9px 18px", background: "#3157E5", color: "#FFFFFF", border: "none", borderRadius: 7, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>View Audit Log →</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
