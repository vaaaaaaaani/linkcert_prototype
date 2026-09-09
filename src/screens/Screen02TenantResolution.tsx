import { useState, useEffect } from "react"
import type { Screen, Persona } from "../App"

interface Props { navigate: (s: Screen) => void; persona: Persona }

const adminSteps = [
  "Detecting organization from email domain",
  "Matching approved domain against registry",
  "Checking LinkBlock trust registry status",
  "Resolving authentication provider (SSO)",
  "Resolving role & permissions",
  "Establishing tenant-isolated session",
]

const studentSteps = [
  "Detecting organization from email domain",
  "Matching approved domain against registry",
  "Checking LinkBlock trust registry status",
  "Resolving authentication provider (SSO)",
  "Resolving role & permissions",
  "Applying record-level access scope",
]

export default function Screen02TenantResolution({ navigate, persona }: Props) {
  const [completedSteps, setCompletedSteps] = useState(0)
  const [done, setDone] = useState(false)

  const steps = persona === "student" ? studentSteps : adminSteps
  const isStudent = persona === "student"
  const accentColor = isStudent ? "#6941C6" : "#3157E5"
  const accentBg = isStudent ? "#F4F0FD" : "#EEF2FF"

  useEffect(() => {
    setCompletedSteps(0)
    setDone(false)
  }, [persona])

  useEffect(() => {
    if (completedSteps < steps.length) {
      const t = setTimeout(() => setCompletedSteps(c => c + 1), 480)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => setDone(true), 400)
      return () => clearTimeout(t)
    }
  }, [completedSteps, steps.length])

  const destScreen: Screen = isStudent ? "student-home" : "dashboard"

  return (
    <div style={{ minHeight: "100vh", background: "#F6F7FA", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32 }}>
      <div style={{ marginBottom: 48, textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: "#0D1424", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ fontWeight: 700, color: "#111827", fontSize: 16 }}>LinkCert</span>
        </div>
        <p style={{ color: "#667085", fontSize: 13, margin: 0 }}>Secure Authentication · Role Resolution</p>
      </div>

      <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 16, padding: 40, width: "100%", maxWidth: 540, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
        {!done ? (
          <>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <p style={{ color: "#374151", fontSize: 14, fontWeight: 500, margin: "0 0 4px" }}>Verifying access for</p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", color: accentColor, fontSize: 14, margin: 0 }}>
                {isStudent ? "olivia.chen@algomau.ca" : "alex.morgan@algomau.ca"}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {steps.map((step, i) => {
                const isComplete = i < completedSteps
                const isActive = i === completedSteps
                return (
                  <div key={step} style={{ display: "flex", alignItems: "center", gap: 14, padding: "11px 0", borderBottom: i < steps.length - 1 ? "1px solid #F9FAFB" : "none" }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: isComplete ? "#F0FAF5" : isActive ? accentBg : "#F9FAFB",
                      border: `1px solid ${isComplete ? "#167A5A" : isActive ? accentColor : "#E4E7EC"}`,
                      transition: "all 0.3s"
                    }}>
                      {isComplete
                        ? <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5L9 3" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        : isActive
                        ? <div style={{ width: 8, height: 8, borderRadius: "50%", border: `2px solid ${accentColor}`, borderTopColor: "transparent", animation: "spin 0.8s linear infinite" }} />
                        : <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D1D5DB" }} />
                      }
                    </div>
                    <span style={{ fontSize: 13, color: isComplete ? "#167A5A" : isActive ? "#111827" : "#9CA3AF", fontWeight: isActive ? 500 : 400, transition: "color 0.3s" }}>{step}</span>
                    {isComplete && <span style={{ marginLeft: "auto", color: "#167A5A", fontSize: 11, fontWeight: 500, fontFamily: "'JetBrains Mono', monospace" }}>✓</span>}
                  </div>
                )
              })}
            </div>
          </>
        ) : (
          <div className="screen-enter">
            <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#F0FAF5", border: "1px solid #167A5A", borderRadius: 10, padding: "14px 16px", marginBottom: 24 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#167A5A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p style={{ color: "#167A5A", fontWeight: 700, margin: 0, fontSize: 15 }}>Access Verified</p>
                <p style={{ color: "#167A5A", fontSize: 12, margin: 0, opacity: 0.75 }}>Role resolved · Tenant-isolated session established</p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
              {[
                { label: "Organization", value: "Algoma University", highlight: true },
                { label: "Domain", value: "algomau.ca", mono: true },
                { label: "Trust Registry", value: "Active", success: true },
                { label: "Authentication", value: "Institution SSO verified", success: true },
                { label: "Role", value: isStudent ? "Student / Learner" : "Credential Administrator", blue: true, violet: isStudent },
                { label: "Permission Profile", value: isStudent ? "Personal Credential Access" : "Institution Credential Operations", blue: true, violet: isStudent },
                { label: "Tenant ID", value: "tenant_algoma_001", mono: true },
                { label: "Data Scope", value: isStudent ? "Own credential records only" : "Institution credential operations", warn: isStudent },
              ].map(item => (
                <div key={item.label} style={{ background: "#F9FAFB", border: "1px solid #E4E7EC", borderRadius: 8, padding: "10px 12px" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 3px", fontWeight: 500, letterSpacing: "0.03em" }}>{item.label.toUpperCase()}</p>
                  <p style={{
                    margin: 0, fontSize: 12, fontWeight: (item as any).highlight ? 700 : 500,
                    fontFamily: item.mono ? "'JetBrains Mono', monospace" : "inherit",
                    color: item.success ? "#167A5A" : (item as any).violet ? "#6941C6" : (item as any).blue ? "#3157E5" : (item as any).warn ? "#B66A15" : "#111827",
                    wordBreak: "break-all"
                  }}>{item.value}</p>
                </div>
              ))}
            </div>

            {isStudent && (
              <div style={{ background: "#F4F0FD", border: "1px solid #DDD6FE", borderRadius: 8, padding: "10px 14px", marginBottom: 16 }}>
                <p style={{ color: "#6941C6", fontSize: 12, fontWeight: 700, margin: "0 0 3px" }}>Record-level access enforced</p>
                <p style={{ color: "#374151", fontSize: 11, margin: 0, lineHeight: 1.5 }}>
                  Olivia Chen may access her own authorized credential records only. PostgreSQL RLS + RBAC prevents access to other students' records within the same tenant.
                </p>
              </div>
            )}

            {!isStudent && (
              <div style={{ background: "#F8F9FC", border: "1px solid #E4E7EC", borderRadius: 8, padding: "10px 14px", marginBottom: 16 }}>
                <p style={{ color: "#667085", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                  <strong style={{ color: "#374151" }}>Tenant isolation active.</strong> Every request carries the resolved tenant context. PostgreSQL RLS prevents one institution from accessing another's data.
                </p>
              </div>
            )}

            <button
              onClick={() => navigate(destScreen)}
              style={{
                width: "100%", padding: "12px 20px",
                background: accentColor, color: "#FFFFFF",
                border: "none", borderRadius: 8, fontSize: 14,
                fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
              }}
            >
              {isStudent ? "Enter Student Workspace →" : "Enter Algoma University workspace →"}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
