import { useState } from "react"
import type { Screen } from "../App"
import Sidebar from "../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const fieldMap = [
  { csv: "student_id", lc: "Recipient ID", status: "Matched" },
  { csv: "student_name", lc: "Recipient Name", status: "Matched" },
  { csv: "program_name", lc: "Credential Title", status: "Matched" },
  { csv: "completion_date", lc: "Completion Date", status: "Matched" },
  { csv: "credential_type", lc: "Workflow Policy", status: "Matched" },
]

export default function Screen04CSVUpload({ navigate, currentScreen }: Props) {
  const [uploaded, setUploaded] = useState(true)

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
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Import Official Credential Data</span>
        </div>

        <div style={{ padding: "32px" }}>
          {/* Page header */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
              {[
                { label: "Source: Institution CSV", color: "#3157E5", bg: "#EEF2FF" },
                { label: "Tenant: Algoma University", color: "#374151", bg: "#F3F4F6" },
                { label: "Status: Draft", color: "#B66A15", bg: "#FFF8ED" },
              ].map(b => (
                <span key={b.label} style={{
                  padding: "3px 10px", borderRadius: 4, fontSize: 11, fontWeight: 600,
                  background: b.bg, color: b.color, letterSpacing: "0.02em"
                }}>{b.label}</span>
              ))}
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111827", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
              Import Official Credential Data
            </h1>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>
              Upload and validate institution-controlled credential data before protection and approval.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Upload zone */}
              <div style={{
                background: "#FFFFFF", border: "1px solid #E4E7EC",
                borderRadius: 12, padding: 24
              }}>
                <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Source File</h2>
                <div style={{
                  border: "1px solid #167A5A", borderRadius: 10,
                  background: "#F0FAF5", padding: "18px 20px",
                  display: "flex", alignItems: "center", gap: 14
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 8, background: "#167A5A",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "#111827", fontSize: 14, fontWeight: 600, margin: "0 0 2px" }}>2026_graduating_students.csv</p>
                    <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>246 rows · Uploaded by alex.morgan@algomau.ca</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#167A5A" }} />
                    <span style={{ color: "#167A5A", fontSize: 12, fontWeight: 600 }}>Ready</span>
                  </div>
                </div>

                <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                  {[
                    { label: "Total Rows", value: "246" },
                    { label: "Valid Records", value: "246" },
                    { label: "Validation Errors", value: "0" },
                  ].map(s => (
                    <div key={s.label} style={{ background: "#F9FAFB", borderRadius: 8, padding: "12px 14px", border: "1px solid #E4E7EC" }}>
                      <p style={{ color: "#667085", fontSize: 11, margin: "0 0 4px", fontWeight: 500 }}>{s.label.toUpperCase()}</p>
                      <p style={{ color: "#111827", fontSize: 20, fontWeight: 700, margin: 0 }}>{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Field mapping */}
              <div style={{
                background: "#FFFFFF", border: "1px solid #E4E7EC",
                borderRadius: 12, overflow: "hidden"
              }}>
                <div style={{ padding: "16px 22px", borderBottom: "1px solid #E4E7EC" }}>
                  <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: 0 }}>Field Mapping</h2>
                  <p style={{ color: "#667085", fontSize: 12, margin: "2px 0 0" }}>CSV columns mapped to LinkCert credential fields</p>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "#F9FAFB" }}>
                      {["CSV Field", "LinkCert Field", "Result"].map(h => (
                        <th key={h} style={{
                          padding: "9px 22px", textAlign: "left",
                          fontSize: 11, fontWeight: 600, color: "#667085",
                          letterSpacing: "0.04em", borderBottom: "1px solid #E4E7EC"
                        }}>{h.toUpperCase()}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {fieldMap.map((row, i) => (
                      <tr key={row.csv} style={{ borderBottom: i < fieldMap.length - 1 ? "1px solid #F3F4F6" : "none" }}>
                        <td style={{ padding: "11px 22px" }}>
                          <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#374151", background: "#F3F4F6", padding: "2px 6px", borderRadius: 4 }}>{row.csv}</code>
                        </td>
                        <td style={{ padding: "11px 22px" }}>
                          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>{row.lc}</span>
                        </td>
                        <td style={{ padding: "11px 22px" }}>
                          <span style={{
                            display: "inline-flex", alignItems: "center", gap: 5,
                            color: "#167A5A", fontSize: 12, fontWeight: 600,
                            background: "#F0FAF5", padding: "3px 8px", borderRadius: 4
                          }}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22 }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Upload Details</h3>
                {[
                  { label: "Uploaded by", value: "alex.morgan@algomau.ca", mono: true },
                  { label: "Upload time", value: "Aug 25, 2026 · 10:30 AM" },
                  { label: "Institution", value: "Algoma University" },
                  { label: "Tenant", value: "tenant_algoma_001", mono: true },
                  { label: "Credential Type", value: "Degree / Graduation" },
                  { label: "Workflow Policy", value: "Standard Academic" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 12 }}>
                    <span style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 500 }}>{item.label}</span>
                    <span style={{
                      fontSize: 12, color: "#111827", fontWeight: 500,
                      fontFamily: item.mono ? "'JetBrains Mono', monospace" : "inherit",
                      wordBreak: "break-all"
                    }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: "#EEF2FF", border: "1px solid #C7D7FD", borderRadius: 12, padding: 18 }}>
                <p style={{ color: "#3157E5", fontSize: 12, fontWeight: 600, margin: "0 0 6px" }}>Next Step</p>
                <p style={{ color: "#374151", fontSize: 12, lineHeight: 1.5, margin: "0 0 14px" }}>
                  After validation, LinkCert will create cryptographic fingerprints to protect this source data before any approval workflow begins.
                </p>
                <button
                  onClick={() => navigate("data-protection")}
                  style={{
                    width: "100%", padding: "10px 16px", background: "#3157E5",
                    color: "#FFFFFF", border: "none", borderRadius: 8,
                    fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                  }}
                >
                  Validate & Protect Source →
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
