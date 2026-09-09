import type { Screen } from "../App"
import Sidebar from "../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const hashes = [
  "a1b2c3...001", "d4e5f6...002", "g7h8i9...003",
  "j1k2l3...004", "m4n5o6...005", "p7q8r9...006",
]

export default function Screen15MerkleRoot({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{
          background: "#FFFFFF", borderBottom: "1px solid #E4E7EC",
          padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8
        }}>
          <button onClick={() => navigate("final-fingerprint")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Final Fingerprint</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Batch Merkle Root</span>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
              Batch Merkle Root
            </h1>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>
              Final credential fingerprints are combined into a Merkle tree. One root anchors the entire batch while each credential retains an individual proof path.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 20 }}>
            {/* Merkle diagram */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 24 }}>
                <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 20px" }}>Credential Fingerprints → Merkle Tree</h2>

                {/* Leaf hashes */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 16 }}>
                  {hashes.map((h, i) => (
                    <div key={h} style={{
                      background: "#F9FAFB", border: "1px solid #E4E7EC",
                      borderRadius: 6, padding: "7px 10px", textAlign: "center"
                    }}>
                      <p style={{ color: "#9CA3AF", fontSize: 9, margin: "0 0 2px", fontWeight: 600 }}>CREDENTIAL {String(i + 1).padStart(3, "0")}</p>
                      <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#374151", fontSize: 10 }}>{h}</code>
                    </div>
                  ))}
                  <div style={{
                    background: "#F9FAFB", border: "1px dashed #D1D5DB",
                    borderRadius: 6, padding: "7px 10px", textAlign: "center",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <p style={{ color: "#9CA3AF", fontSize: 11, margin: 0 }}>+ 237 more</p>
                  </div>
                </div>

                {/* Arrow down */}
                <div style={{ textAlign: "center", marginBottom: 16 }}>
                  <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                    <div style={{ width: 1, height: 24, background: "#D1D5DB" }} />
                    <div style={{
                      background: "#EEF2FF", border: "1px solid #C7D7FD",
                      borderRadius: 6, padding: "6px 20px"
                    }}>
                      <p style={{ color: "#3157E5", fontSize: 11, fontWeight: 700, margin: 0 }}>MERKLE TREE</p>
                    </div>
                    <div style={{ width: 1, height: 24, background: "#D1D5DB" }} />
                  </div>
                </div>

                {/* Root */}
                <div style={{
                  background: "#0D1424", borderRadius: 10, padding: "18px 22px",
                  border: "1px solid rgba(255,255,255,0.1)", textAlign: "center"
                }}>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 700, margin: "0 0 8px", letterSpacing: "0.08em" }}>MERKLE ROOT</p>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", color: "#60A5FA", fontSize: 20, fontWeight: 700 }}>0x82F7AC...912E</code>
                </div>

                <div style={{ marginTop: 14, background: "#F8F9FC", borderRadius: 8, padding: "11px 14px", border: "1px solid #E4E7EC" }}>
                  <p style={{ color: "#374151", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                    LinkCert can anchor one Merkle root for a credential batch while each credential retains a cryptographic proof path back to that root.
                  </p>
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22 }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Batch Summary</h3>
                {[
                  { label: "Credentials", value: "243" },
                  { label: "Merkle Root", value: "0x82F7AC...912E", mono: true },
                  { label: "Issuer", value: "Algoma University" },
                  { label: "Batch ID", value: "BATCH-AU-2026-006", mono: true },
                  { label: "Status", value: "Ready to anchor", ok: true },
                ].map(item => (
                  <div key={item.label} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "8px 0", borderBottom: "1px solid #F3F4F6"
                  }}>
                    <span style={{ color: "#667085", fontSize: 12 }}>{item.label}</span>
                    <span style={{
                      fontSize: 12, fontWeight: 600,
                      color: (item as any).ok ? "#167A5A" : "#111827",
                      fontFamily: item.mono ? "'JetBrains Mono', monospace" : "inherit"
                    }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: "#F9FAFB", border: "1px solid #E4E7EC", borderRadius: 12, padding: 18 }}>
                <p style={{ color: "#374151", fontSize: 12, fontWeight: 700, margin: "0 0 6px" }}>What gets anchored?</p>
                <ul style={{ color: "#667085", fontSize: 12, margin: 0, paddingLeft: 16, lineHeight: 1.8 }}>
                  <li>The Merkle root hash only</li>
                  <li>Algoma University issuer reference</li>
                  <li>Timestamp and transaction metadata</li>
                </ul>
                <div style={{ marginTop: 10, padding: "8px 12px", background: "#FFF8ED", borderRadius: 6, border: "1px solid #FDE68A" }}>
                  <p style={{ color: "#92400E", fontSize: 11, margin: 0, fontWeight: 600 }}>No student data is placed on blockchain</p>
                </div>
              </div>

              <button
                onClick={() => navigate("blockchain-anchor")}
                style={{
                  width: "100%", padding: "12px 16px", background: "#3157E5",
                  color: "#FFFFFF", border: "none", borderRadius: 8,
                  fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                }}
              >
                Anchor Batch Proof →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
