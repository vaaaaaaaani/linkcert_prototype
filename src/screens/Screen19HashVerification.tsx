import type { Screen } from "../App"

interface Props { navigate: (s: Screen) => void }

export default function Screen19HashVerification({ navigate }: Props) {
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
        <span style={{ color: "#9CA3AF", fontSize: 13 }}>· Integrity Proof</span>
      </header>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: "#111827", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
            How Verification Works
          </h1>
          <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>
            Three cryptographic steps confirm this credential is authentic and unmodified.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Step 1 */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "14px 20px", borderBottom: "1px solid #E4E7EC", background: "#F9FAFB", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#3157E5" }}>1</div>
              <span style={{ color: "#111827", fontSize: 14, fontWeight: 600 }}>Calculate fingerprint of presented credential</span>
            </div>
            <div style={{ padding: "16px 20px" }}>
              <p style={{ color: "#667085", fontSize: 12, margin: "0 0 12px", lineHeight: 1.5 }}>
                The verifier computes a SHA-256 hash of the credential's exact data payload.
              </p>
              <div style={{ background: "#0D1424", borderRadius: 8, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>Computed hash</span>
                <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#60A5FA", fontSize: 13, fontWeight: 700 }}>41e89f7ca02272c...</code>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div style={{ textAlign: "center" }}>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none"><path d="M8 1v20M2 16l6 6 6-6" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>

          {/* Step 2 */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "14px 20px", borderBottom: "1px solid #E4E7EC", background: "#F9FAFB", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#3157E5" }}>2</div>
              <span style={{ color: "#111827", fontSize: 14, fontWeight: 600 }}>Verify institution signature</span>
            </div>
            <div style={{ padding: "16px 20px" }}>
              <p style={{ color: "#667085", fontSize: 12, margin: "0 0 12px", lineHeight: 1.5 }}>
                The institution's public key is retrieved from the LinkBlock trust registry and used to verify the signature applied by Algoma University.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1, background: "#F9FAFB", borderRadius: 8, padding: "12px 16px", border: "1px solid #E4E7EC" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600 }}>SIGNER</p>
                  <p style={{ color: "#111827", fontSize: 13, fontWeight: 600, margin: 0 }}>Algoma University</p>
                </div>
                <div style={{ flex: 1, background: "#F0FAF5", borderRadius: 8, padding: "12px 16px", border: "1px solid #D1FAE5" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600 }}>SIGNATURE</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <p style={{ color: "#167A5A", fontSize: 13, fontWeight: 700, margin: 0 }}>Valid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div style={{ textAlign: "center" }}>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none"><path d="M8 1v20M2 16l6 6 6-6" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>

          {/* Step 3 */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "14px 20px", borderBottom: "1px solid #E4E7EC", background: "#F9FAFB", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#3157E5" }}>3</div>
              <span style={{ color: "#111827", fontSize: 14, fontWeight: 600 }}>Validate Merkle proof against blockchain</span>
            </div>
            <div style={{ padding: "16px 20px" }}>
              <p style={{ color: "#667085", fontSize: 12, margin: "0 0 12px", lineHeight: 1.5 }}>
                The credential's Merkle proof path is computed and the resulting root is compared against the anchored root on Polygon.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 10, alignItems: "center" }}>
                <div style={{ background: "#F9FAFB", borderRadius: 8, padding: "12px 16px", border: "1px solid #E4E7EC", textAlign: "center" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 4px", fontWeight: 600 }}>COMPUTED ROOT</p>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#111827", fontSize: 11, fontWeight: 700 }}>0x82F7AC...912E</code>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2v16M2 10h16" stroke="#167A5A" strokeWidth="2" strokeLinecap="round"/></svg>
                <div style={{ background: "#F9FAFB", borderRadius: 8, padding: "12px 16px", border: "1px solid #E4E7EC", textAlign: "center" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 4px", fontWeight: 600 }}>BLOCKCHAIN ROOT</p>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#111827", fontSize: 11, fontWeight: 700 }}>0x82F7AC...912E</code>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div style={{ textAlign: "center" }}>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none"><path d="M8 1v20M2 16l6 6 6-6" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>

          {/* Result */}
          <div style={{ background: "#167A5A", borderRadius: 14, padding: "24px 28px", textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, margin: "0 0 6px", letterSpacing: "0.06em", fontWeight: 600 }}>RESULT</p>
            <p style={{ color: "#FFFFFF", fontSize: 24, fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.01em" }}>Credential Integrity Confirmed</p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, margin: "0 0 16px", lineHeight: 1.5 }}>
              The presented credential produces the same cryptographic result as the institution-signed credential included in the anchored batch.
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
            <button onClick={() => navigate("public-verification")} style={{ padding: "9px 18px", background: "#FFFFFF", color: "#374151", border: "1px solid #E4E7EC", borderRadius: 7, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>← Back to Verification</button>
            <button onClick={() => navigate("tamper-demo")} style={{ padding: "9px 18px", background: "#C2414B", color: "#FFFFFF", border: "none", borderRadius: 7, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Demonstrate Tamper Detection →</button>
          </div>
        </div>
      </div>
    </div>
  )
}
