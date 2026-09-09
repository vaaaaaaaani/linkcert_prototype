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

const externalSteps = [
  "Detecting organization from email domain",
  "Searching LinkBlock Trust Registry",
  "Checking organization trust status",
  "Verifying authorized organization user",
  "Checking approved attestation scope",
  "Establishing tenant-isolated external session",
]

export default function Screen02TenantResolution({ navigate, persona }: Props) {
  const [completedSteps, setCompletedSteps] = useState(0)
  const [done, setDone] = useState(false)

  const isStudent = persona === "student"
const isExternal = persona === "external"

const steps = isStudent
  ? studentSteps
  : isExternal
  ? externalSteps
  : adminSteps

const accentColor = isStudent
  ? "#6941C6"
  : isExternal
  ? "#0F766E"
  : "#3157E5"

const accentBg = isStudent
  ? "#F4F0FD"
  : isExternal
  ? "#F0FDFA"
  : "#EEF2FF"

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

  const destScreen: Screen = isStudent
  ? "student-home"
  : isExternal
  ? "ns-request-inbox"
  : "dashboard"

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
                {isStudent
  ? "olivia.chen@algomau.ca"
  : isExternal
  ? "sarah.thompson@northstartech.ca"
  : "alex.morgan@algomau.ca"}
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
  {
    label: "Organization",
    value: isExternal ? "NorthStar Technologies" : "Algoma University",
    highlight: true
  },
  {
    label: "Domain",
    value: isExternal ? "northstartech.ca" : "algomau.ca",
    mono: true
  },
  {
    label: "Trust Registry",
    value: "Active",
    success: true
  },
  {
    label: "Authentication",
    value: isExternal
      ? "Corporate identity + MFA verified"
      : "Institution SSO verified",
    success: true
  },
  {
    label: "Role",
    value: isStudent
      ? "Student / Learner"
      : isExternal
      ? "Organization Administrator / Placement Attestor"
      : "Credential Administrator",
    blue: true,
    violet: isStudent
  },
  {
    label: "Permission Profile",
    value: isStudent
      ? "Personal Credential Access"
      : isExternal
      ? "External Attestation Operations"
      : "Institution Credential Operations",
    blue: true,
    violet: isStudent
  },
  {
    label: "Tenant ID",
    value: isExternal
      ? "tenant_northstar_001"
      : "tenant_algoma_001",
    mono: true
  },
  {
    label: "Data Scope",
    value: isStudent
      ? "Own credential records only"
      : isExternal
      ? "Assigned attestation requests only"
      : "Institution credential operations",
    warn: isStudent || isExternal
  },
].map((item, idx) => (
  <div key={idx} style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 8, padding: "12px 14px" }}>
    <p style={{ fontSize: 12, fontWeight: 600, color: "#6B7280", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: 0.5 }}>{item.label}</p>
    <p style={{ fontSize: 14, fontWeight: 500, color: item.highlight ? "#167A5A" : item.success ? "#167A5A" : item.warn ? "#D97706" : item.blue ? "#2563EB" : "#111827", margin: 0, fontFamily: item.mono ? "'JetBrains Mono', monospace" : "inherit", opacity: item.warn ? 0.8 : 1 }}>{item.value}</p>
  </div>
))}
              {isExternal && (
  <div
    style={{
      background: "#F0FDFA",
      border: "1px solid #99F6E4",
      borderRadius: 8,
      padding: "12px 14px",
      marginBottom: 16,
    }}
  >
    <p
      style={{
        color: "#0F766E",
        fontSize: 12,
        fontWeight: 700,
        margin: "0 0 5px",
      }}
    >
      Approved external attestation authority
    </p>

    <p
      style={{
        color: "#374151",
        fontSize: 11,
        margin: 0,
        lineHeight: 1.6,
      }}
    >
      NorthStar Technologies is authorized to respond to
      Employment / Placement Verification requests only.
      Access is restricted to requests specifically assigned
      to NorthStar. No Algoma University tenant access is granted.
    </p>
  </div>
)}
            </div>

            {isStudent && (
              <div style={{ background: "#F4F0FD", border: "1px solid #DDD6FE", borderRadius: 8, padding: "10px 14px", marginBottom: 16 }}>
                <p style={{ color: "#6941C6", fontSize: 12, fontWeight: 700, margin: "0 0 3px" }}>Record-level access enforced</p>
                <p style={{ color: "#374151", fontSize: 11, margin: 0, lineHeight: 1.5 }}>
                  Olivia Chen may access her own authorized credential records only. PostgreSQL RLS + RBAC prevents access to other students' records within the same tenant.
                </p>
              </div>
            )}

            {!isStudent && !isExternal && (
              <div style={{ background: "#F8F9FC", border: "1px solid #E4E7EC", borderRadius: 8, padding: "10px 14px", marginBottom: 16 }}>
                <p style={{ color: "#667085", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                  <strong style={{ color: "#374151" }}>Tenant isolation active.</strong> Every request carries the resolved tenant context. PostgreSQL RLS prevents one institution from accessing another's data.
                </p>
              </div>
            )}

            {isExternal && (
  <div
    style={{
      background: "#F8F9FC",
      border: "1px solid #E4E7EC",
      borderRadius: 8,
      padding: "10px 14px",
      marginBottom: 16,
    }}
  >
    <p
      style={{
        color: "#667085",
        fontSize: 12,
        margin: 0,
        lineHeight: 1.5,
      }}
    >
      <strong style={{ color: "#374151" }}>
        Cross-tenant isolation active.
      </strong>{" "}
      NorthStar operates inside its own restricted LinkCert
      organization workspace. It cannot access Algoma University's
      tenant. Only explicitly assigned attestation requests are shared.
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
              {isStudent
  ? "Enter Student Workspace →"
  : isExternal
  ? "Enter NorthStar Attestor Workspace →"
  : "Enter Algoma University Workspace →"}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
