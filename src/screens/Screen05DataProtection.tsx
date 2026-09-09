import type { Screen } from "../App"
import Sidebar from "../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const provenanceSteps = [
  { id: "H0", event: "UPLOAD", desc: "Original CSV received and stored", hash: "H0" },
  { id: "H1", event: "VALIDATION", desc: "H1 = hash(H0 + validation event)", hash: "H1" },
  { id: "H2", event: "ROW VERSIONING", desc: "H2 = hash(H1 + record fingerprints)", hash: "H2" },
  { id: "NEXT", event: "NEXT ACTION", desc: "Will reference H2", hash: null },
]

const pipeline = [
  { step: "Original CSV", detail: "2026_graduating_students.csv", done: true },
  { step: "Preserve original source", detail: "Immutable copy stored in tenant namespace", done: true },
  { step: "Create SHA-256 file fingerprint", detail: "98af3c72b6e8f91d4c...428fe3", done: true, mono: true },
  { step: "Create row-level fingerprints", detail: "246 / 246 records protected", done: true },
  { step: "Create record version 1", detail: "v1 established for all records", done: true },
  { step: "Create hash-linked provenance event", detail: "H0 anchor event recorded", done: true },
]

export default function Screen05DataProtection({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{
          background: "#FFFFFF", borderBottom: "1px solid #E4E7EC",
          padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8
        }}>
          <button onClick={() => navigate("dashboard")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Dashboard</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <button onClick={() => navigate("csv-upload")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Import Data</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Pre-Approval Data Protection</span>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3157E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: 0, letterSpacing: "-0.01em" }}>
                Pre-Approval Data Protection
              </h1>
            </div>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>
              LinkCert protects every source record with cryptographic fingerprints before any approval workflow begins.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
            {/* Pipeline */}
            <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 24 }}>
              <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 18px" }}>Protection Pipeline</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {pipeline.map((p, i) => (
                  <div key={p.step} style={{ display: "flex", gap: 14, paddingBottom: i < pipeline.length - 1 ? 0 : 0 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{
                        width: 24, height: 24, borderRadius: "50%",
                        background: "#167A5A", flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                          <path d="M2 5.5l2.5 2.5L9 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {i < pipeline.length - 1 && (
                        <div style={{ width: 1, flex: 1, minHeight: 20, background: "#E4E7EC", margin: "4px 0" }} />
                      )}
                    </div>
                    <div style={{ paddingBottom: i < pipeline.length - 1 ? 14 : 0 }}>
                      <p style={{ color: "#111827", fontSize: 13, fontWeight: 600, margin: "0 0 2px" }}>{p.step}</p>
                      <p style={{
                        color: "#667085", fontSize: 11, margin: 0,
                        fontFamily: p.mono ? "'JetBrains Mono', monospace" : "inherit"
                      }}>{p.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 24 }}>
                <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Protection Record</h2>
                {[
                  { label: "Original File", value: "2026_graduating_students.csv" },
                  { label: "File SHA-256", value: "98af3c72b6e8f91d4c...428fe3", mono: true },
                  { label: "Rows Protected", value: "246 / 246" },
                  { label: "Version", value: "v1" },
                  { label: "Tenant", value: "tenant_algoma_001", mono: true },
                  { label: "Actor", value: "alex.morgan@algomau.ca", mono: true },
                  { label: "Timestamp", value: "August 25, 2026 · 10:32 AM" },
                ].map(item => (
                  <div key={item.label} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                    padding: "8px 0", borderBottom: "1px solid #F3F4F6"
                  }}>
                    <span style={{ fontSize: 12, color: "#667085" }}>{item.label}</span>
                    <span style={{
                      fontSize: 12, color: "#111827", fontWeight: 500, textAlign: "right",
                      fontFamily: item.mono ? "'JetBrains Mono', monospace" : "inherit",
                      maxWidth: "55%", wordBreak: "break-all"
                    }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <div style={{
                background: "#FFF8ED", border: "1px solid #FDE68A",
                borderRadius: 10, padding: 16
              }}>
                <p style={{ color: "#92400E", fontSize: 13, fontWeight: 700, margin: "0 0 4px" }}>
                  No raw student data is placed on blockchain.
                </p>
                <p style={{ color: "#B45309", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                  Only cryptographic fingerprints are anchored. Student names, IDs, and records remain in tenant-isolated storage.
                </p>
              </div>
            </div>
          </div>

          {/* Provenance chain */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 24, marginBottom: 20 }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 6px" }}>Hash-Linked Provenance Chain</h2>
            <p style={{ color: "#667085", fontSize: 12, margin: "0 0 20px", lineHeight: 1.5 }}>
              Every important workflow event links to the previous event. A later change creates a new version and a new hash instead of silently replacing history.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              {provenanceSteps.map((step, i) => (
                <div key={step.id} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      background: step.hash ? "#0D1424" : "#F3F4F6",
                      border: `1px solid ${step.hash ? "#0D1424" : "#E4E7EC"}`,
                      borderRadius: 10, padding: "12px 16px", textAlign: "center"
                    }}>
                      <p style={{
                        color: step.hash ? "#9CA3AF" : "#9CA3AF",
                        fontSize: 9, fontWeight: 600, margin: "0 0 4px", letterSpacing: "0.08em"
                      }}>{step.event}</p>
                      {step.hash ? (
                        <p style={{
                          color: "#60A5FA", fontSize: 14, fontWeight: 700, margin: "0 0 4px",
                          fontFamily: "'JetBrains Mono', monospace"
                        }}>{step.hash}</p>
                      ) : (
                        <p style={{ color: "#6B7280", fontSize: 12, fontWeight: 600, margin: "0 0 4px" }}>NEXT ACTION</p>
                      )}
                      <p style={{ color: step.hash ? "#6B7280" : "#9CA3AF", fontSize: 10, margin: 0, lineHeight: 1.4 }}>{step.desc}</p>
                    </div>
                  </div>
                  {i < provenanceSteps.length - 1 && (
                    <div style={{ padding: "0 8px", flexShrink: 0 }}>
                      <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                        <path d="M1 6h15M12 1l5 5-5 5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={() => navigate("correction")}
              style={{
                padding: "10px 20px", background: "#FFFFFF", color: "#374151",
                border: "1px solid #E4E7EC", borderRadius: 8, fontSize: 13,
                fontWeight: 500, cursor: "pointer", fontFamily: "inherit"
              }}
            >
              Demonstrate a Correction
            </button>
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
      </main>
    </div>
  )
}
