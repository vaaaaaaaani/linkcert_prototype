import type { Screen } from "../App"
import Sidebar from "../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

export default function Screen14FinalFingerprint({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{
          background: "#FFFFFF", borderBottom: "1px solid #E4E7EC",
          padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8
        }}>
          <button onClick={() => navigate("university-signing")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Institution Signing</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Final Credential Fingerprint</span>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
              Final Signed Credential
            </h1>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>
              Two distinct cryptographic proofs protect this credential: source integrity through the workflow, and final issuance by the institution.
            </p>
          </div>

          {/* Credential summary */}
          <div style={{
            background: "#FFFFFF", border: "1px solid #E4E7EC",
            borderRadius: 12, padding: 24, marginBottom: 20
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <div>
                <p style={{ color: "#9CA3AF", fontSize: 11, fontWeight: 600, margin: "0 0 4px", letterSpacing: "0.05em" }}>CREDENTIAL ID</p>
                <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#111827", fontSize: 16, fontWeight: 700 }}>LC-AU-2026-009821</code>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80" }} />
                <span style={{ color: "#167A5A", fontSize: 13, fontWeight: 700 }}>ISSUED · ACTIVE</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
              {[
                { label: "Issuer", value: "Algoma University" },
                { label: "Recipient", value: "Olivia Chen" },
                { label: "Issuer Signature", value: "Valid ✓", ok: true },
                { label: "Credential Type", value: "Professional Placement Credential" },
                { label: "Issued", value: "August 25, 2026" },
                { label: "External Attestation", value: "Northstar Technologies · Valid ✓", ok: true },
              ].map(item => (
                <div key={item.label} style={{ background: "#F9FAFB", borderRadius: 8, padding: "10px 14px", border: "1px solid #E4E7EC" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600 }}>{item.label.toUpperCase()}</p>
                  <p style={{ color: (item as any).ok ? "#167A5A" : "#111827", fontSize: 12, margin: 0, fontWeight: 500 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SHA-256 display */}
          <div style={{
            background: "#0D1424", borderRadius: 12, padding: "20px 24px",
            marginBottom: 20, border: "1px solid rgba(255,255,255,0.08)"
          }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 600, margin: "0 0 8px", letterSpacing: "0.06em" }}>
              FINAL CREDENTIAL SHA-256 FINGERPRINT
            </p>
            <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#60A5FA", fontSize: 18, fontWeight: 700, wordBreak: "break-all" }}>
              41e89f7ca02272c4b91d3a5e8f2...
            </code>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, margin: "8px 0 0" }}>
              Fingerprint of the exact credential payload signed by Algoma University
            </p>
          </div>

          {/* Two proof cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
            {/* Source integrity */}
            <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3157E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: 0 }}>Source Integrity Proof</p>
                  <p style={{ color: "#9CA3AF", fontSize: 11, margin: 0 }}>Workflow provenance</p>
                </div>
              </div>
              <p style={{ color: "#667085", fontSize: 12, margin: "0 0 14px", lineHeight: 1.5 }}>
                Protects <strong style={{ color: "#374151" }}>what entered and changed during the workflow</strong> — from upload through every correction event.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 10px", background: "#F9FAFB", borderRadius: 6 }}>
                  <span style={{ color: "#667085", fontSize: 11 }}>Source hash</span>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#374151", fontSize: 11 }}>98af...fe3</code>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 10px", background: "#F9FAFB", borderRadius: 6 }}>
                  <span style={{ color: "#667085", fontSize: 11 }}>Provenance events</span>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#374151", fontSize: 11 }}>H0 → H1 → H2 → H3</code>
                </div>
              </div>
            </div>

            {/* Final credential proof */}
            <div style={{ background: "#FFFFFF", border: "1px solid #167A5A", borderRadius: 12, padding: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "#F0FAF5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#167A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: 0 }}>Final Credential Proof</p>
                  <p style={{ color: "#9CA3AF", fontSize: 11, margin: 0 }}>Institution issuance</p>
                </div>
              </div>
              <p style={{ color: "#667085", fontSize: 12, margin: "0 0 14px", lineHeight: 1.5 }}>
                Protects <strong style={{ color: "#374151" }}>exactly what Algoma University finally issued and signed</strong> — used for public verification.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 10px", background: "#F0FAF5", borderRadius: 6 }}>
                  <span style={{ color: "#667085", fontSize: 11 }}>Final credential hash</span>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#167A5A", fontSize: 11 }}>41e89...72c</code>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 10px", background: "#F0FAF5", borderRadius: 6 }}>
                  <span style={{ color: "#667085", fontSize: 11 }}>Signed by</span>
                  <span style={{ color: "#167A5A", fontSize: 11, fontWeight: 600 }}>Algoma University</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("merkle-root")}
            style={{
              padding: "10px 20px", background: "#3157E5", color: "#FFFFFF",
              border: "none", borderRadius: 8, fontSize: 13,
              fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
            }}
          >
            Generate Merkle Root for Batch →
          </button>
        </div>
      </main>
    </div>
  )
}
