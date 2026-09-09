import type { Screen } from "../App"
import Sidebar from "../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const events = [
  { time: "11:07 AM", actor: "Blockchain", org: "Polygon Network", role: "Infrastructure", tenant: "global", action: "Batch proof confirmed", detail: "Block #72849314 · Tx 0x937ac...829e", hash: "ANCHOR-001", type: "blockchain" },
  { time: "11:06 AM", actor: "LinkCert", org: "LinkBlock", role: "System", tenant: "tenant_algoma_001", action: "Merkle root generated", detail: "0x82F7AC...912E · 243 credentials", hash: "H6", type: "system" },
  { time: "11:05 AM", actor: "LinkCert", org: "LinkBlock", role: "System", tenant: "tenant_algoma_001", action: "Final credential fingerprints created", detail: "243 SHA-256 hashes generated", hash: "H5", type: "system" },
  { time: "11:04 AM", actor: "Algoma University", org: "Algoma University", role: "Issuing Authority", tenant: "tenant_algoma_001", action: "Final credential digitally signed", detail: "Signed with ISSUER-AU-001 · Registrar key", hash: "H4", type: "institution" },
  { time: "11:02 AM", actor: "Registrar", org: "Algoma University", role: "Registrar", tenant: "tenant_algoma_001", action: "Final institutional approval granted", detail: "Credential: LC-AU-2026-009821", hash: "H4", type: "institution" },
  { time: "10:52 AM", actor: "Sarah Thompson", org: "Northstar Technologies", role: "Placement Supervisor", tenant: "ORG-NT-01827", action: "External attestation digitally signed", detail: "ATT-2026-982271 · Placement confirmation", hash: "H3b", type: "external" },
  { time: "10:41 AM", actor: "LinkCert", org: "LinkBlock", role: "System", tenant: "tenant_algoma_001", action: "External attestation request sent", detail: "To: sarah.thompson@northstartech.ca", hash: "H3a", type: "system" },
  { time: "10:36 AM", actor: "Faculty Reviewer", org: "Algoma University", role: "Faculty", tenant: "tenant_algoma_001", action: "Internal review approved", detail: "CS Graduation 2026 · 246 records", hash: "H3", type: "institution" },
  { time: "10:35 AM", actor: "LinkCert", org: "LinkBlock", role: "System", tenant: "tenant_algoma_001", action: "Version 2 created · new fingerprint", detail: "Record 018 · Olivia Chen · f23b...94aa", hash: "H3", type: "system" },
  { time: "10:35 AM", actor: "Alex Morgan", org: "Algoma University", role: "Credential Administrator", tenant: "tenant_algoma_001", action: "Record corrected", detail: "Record 018 · Completion date: Jun 12 → Jun 13", hash: "H2+", type: "user" },
  { time: "10:33 AM", actor: "LinkCert", org: "LinkBlock", role: "System", tenant: "tenant_algoma_001", action: "246 record versions created", detail: "v1 fingerprints for all records", hash: "H2", type: "system" },
  { time: "10:33 AM", actor: "LinkCert", org: "LinkBlock", role: "System", tenant: "tenant_algoma_001", action: "Original file fingerprint created", detail: "SHA-256: 98af3c72...428fe3", hash: "H1", type: "system" },
  { time: "10:32 AM", actor: "Alex Morgan", org: "Algoma University", role: "Credential Administrator", tenant: "tenant_algoma_001", action: "CSV uploaded", detail: "2026_graduating_students.csv · 246 rows", hash: "H0", type: "user" },
]

const typeColor = {
  user: { bg: "#EEF2FF", color: "#3157E5", dot: "#3157E5" },
  system: { bg: "#F3F4F6", color: "#374151", dot: "#9CA3AF" },
  institution: { bg: "#F0FAF5", color: "#167A5A", dot: "#167A5A" },
  external: { bg: "#F4F0FD", color: "#6941C6", dot: "#6941C6" },
  blockchain: { bg: "#0D1424", color: "#60A5FA", dot: "#60A5FA" },
}

export default function Screen21AuditLog({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{
          background: "#FFFFFF", borderBottom: "1px solid #E4E7EC",
          padding: "0 32px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#111827", fontSize: 13, fontWeight: 600 }}>Audit Log</span>
            <span style={{ background: "#EEF2FF", color: "#3157E5", fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 4, border: "1px solid #C7D7FD" }}>LC-AU-2026-009821</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {["user", "institution", "external", "system", "blockchain"].map(t => {
              const c = typeColor[t as keyof typeof typeColor]
              return (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 10px", background: c.bg, borderRadius: 4 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: c.dot }} />
                  <span style={{ color: c.color, fontSize: 10, fontWeight: 600, textTransform: "capitalize" }}>{t}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div style={{ padding: "24px 32px" }}>
          <div style={{ marginBottom: 20 }}>
            <h1 style={{ fontSize: 18, fontWeight: 700, color: "#111827", margin: "0 0 4px", letterSpacing: "-0.01em" }}>
              Provenance & Audit History
            </h1>
            <p style={{ color: "#667085", fontSize: 13, margin: 0 }}>
              Every workflow event is hash-linked. Each entry references the previous event — creating a tamper-evident audit chain.
            </p>
          </div>

          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#F9FAFB" }}>
                    {["Time", "Actor", "Organization", "Role", "Action", "Detail", "Event Hash"].map(h => (
                      <th key={h} style={{
                        padding: "10px 16px", textAlign: "left",
                        fontSize: 10, fontWeight: 700, color: "#667085",
                        letterSpacing: "0.05em", borderBottom: "1px solid #E4E7EC",
                        whiteSpace: "nowrap"
                      }}>{h.toUpperCase()}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {events.map((event, i) => {
                    const c = typeColor[event.type as keyof typeof typeColor]
                    return (
                      <tr key={i} style={{ borderBottom: i < events.length - 1 ? "1px solid #F3F4F6" : "none" }}>
                        <td style={{ padding: "11px 16px", whiteSpace: "nowrap" }}>
                          <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#374151" }}>
                            Aug 25 · {event.time}
                          </code>
                        </td>
                        <td style={{ padding: "11px 16px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.dot, flexShrink: 0 }} />
                            <span style={{ fontSize: 12, fontWeight: 600, color: "#111827", whiteSpace: "nowrap" }}>{event.actor}</span>
                          </div>
                        </td>
                        <td style={{ padding: "11px 16px" }}>
                          <span style={{ fontSize: 12, color: "#374151", whiteSpace: "nowrap" }}>{event.org}</span>
                        </td>
                        <td style={{ padding: "11px 16px" }}>
                          <span style={{ fontSize: 11, color: "#667085", whiteSpace: "nowrap" }}>{event.role}</span>
                        </td>
                        <td style={{ padding: "11px 16px" }}>
                          <span style={{
                            fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 4,
                            background: c.bg, color: c.color,
                            display: "inline-block", whiteSpace: "nowrap"
                          }}>{event.action}</span>
                        </td>
                        <td style={{ padding: "11px 16px", maxWidth: 200 }}>
                          <span style={{ fontSize: 11, color: "#667085" }}>{event.detail}</span>
                        </td>
                        <td style={{ padding: "11px 16px" }}>
                          <code style={{
                            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                            color: "#3157E5", background: "#EEF2FF",
                            padding: "2px 7px", borderRadius: 4, whiteSpace: "nowrap"
                          }}>{event.hash}</code>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ marginTop: 16, padding: "12px 16px", background: "#F9FAFB", borderRadius: 8, border: "1px solid #E4E7EC" }}>
            <p style={{ color: "#374151", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
              <strong>Hash-linked audit chain:</strong> Every event references the hash of the previous event. Inserting, removing, or altering any entry would break the chain and be immediately detectable. All events are tenant-scoped and stored with full actor, role, organization, and timestamp attribution.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
