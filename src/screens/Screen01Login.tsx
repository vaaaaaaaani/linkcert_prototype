import { useState } from "react"
import type { Screen, Persona } from "../App"

interface Props {
  navigate: (s: Screen) => void
  onSelectPersona: (p: Persona) => void
}

const personas = [
  {
    id: "admin" as Persona,
    name: "Alex Morgan",
    email: "alex.morgan@algomau.ca",
    role: "Credential Administrator",
    org: "Algoma University",
    initials: "AM",
    color: "#3157E5",
    bg: "#EEF2FF",
  },
  {
    id: "student" as Persona,
    name: "Olivia Chen",
    email: "olivia.chen@algomau.ca",
    role: "Student / Learner",
    org: "Algoma University",
    initials: "OC",
    color: "#6941C6",
    bg: "#F4F0FD",
  },
]

export default function Screen01Login({ navigate, onSelectPersona }: Props) {
  const [email, setEmail] = useState("alex.morgan@algomau.ca")
  const [focused, setFocused] = useState(false)
  const [selectedPersona, setSelectedPersona] = useState<Persona>("admin")
  const [showDemo, setShowDemo] = useState(false)

  const handleContinue = () => {
    onSelectPersona(selectedPersona)
  }

  const handlePersonaSelect = (p: Persona) => {
    setSelectedPersona(p)
    setEmail(p === "admin" ? "alex.morgan@algomau.ca" : "olivia.chen@algomau.ca")
  }

  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      {/* Left branding panel */}
      <div style={{
        flex: "0 0 45%", background: "#0D1424",
        display: "flex", flexDirection: "column", padding: "56px 60px", position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 320, height: 320, background: "radial-gradient(circle, rgba(49,87,229,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 10, marginBottom: "auto" }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 18, letterSpacing: "-0.01em" }}>LinkCert</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, marginLeft: 8 }}>by LinkBlock</span>
          </div>
        </div>

        <div style={{ position: "relative", marginTop: 80 }}>
          <div style={{ display: "inline-block", padding: "4px 10px", background: "rgba(49,87,229,0.15)", border: "1px solid rgba(49,87,229,0.25)", borderRadius: 4, marginBottom: 24 }}>
            <span style={{ color: "#7B9FFF", fontSize: 11, fontWeight: 500, letterSpacing: "0.06em" }}>CREDENTIAL INFRASTRUCTURE</span>
          </div>
          <h1 style={{ color: "#FFFFFF", fontSize: 32, fontWeight: 700, lineHeight: 1.2, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
            Trusted credential infrastructure starts with verified authority.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.65, margin: "0 0 48px" }}>
            LinkCert determines the organization and role before any credential data is loaded.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {["Multi-tenant institution isolation", "Cryptographic provenance & audit trail", "External attestation workflow", "Blockchain-anchored verification"].map(f => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(22,122,90,0.2)", border: "1px solid rgba(22,122,90,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Role ecosystem diagram */}
        <div style={{ position: "relative", marginTop: 48 }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 10, fontWeight: 600, margin: "0 0 10px", letterSpacing: "0.06em" }}>ROLE ECOSYSTEM</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Student / Learner", "Institution Staff", "External Attestor", "Public Verifier"].map((r, i) => (
              <span key={r} style={{
                padding: "4px 10px", borderRadius: 4,
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.45)", fontSize: 10, fontWeight: 500
              }}>{r}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Right login panel */}
      <div style={{ flex: 1, background: "#F6F7FA", display: "flex", alignItems: "center", justifyContent: "center", padding: 48 }}>
        <div style={{ width: "100%", maxWidth: 400 }}>
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 16, padding: "40px 40px 36px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ color: "#111827", fontSize: 22, fontWeight: 700, margin: "0 0 6px", letterSpacing: "-0.01em" }}>Sign in to LinkCert</h2>
              <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>Access your institution workspace securely.</p>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", color: "#374151", fontSize: 13, fontWeight: 500, marginBottom: 6 }}>Work or institution email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{
                  width: "100%", padding: "10px 14px",
                  border: `1px solid ${focused ? "#3157E5" : "#E4E7EC"}`,
                  borderRadius: 8, fontSize: 14, color: "#111827",
                  outline: "none", fontFamily: "inherit",
                  boxShadow: focused ? "0 0 0 3px rgba(49,87,229,0.1)" : "none",
                  transition: "all 0.15s"
                }}
              />
            </div>

            <button
              onClick={handleContinue}
              style={{
                width: "100%", padding: "11px 20px", background: "#3157E5",
                color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 14,
                fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
                marginBottom: 16
              }}
            >
              Continue securely →
            </button>

            <div style={{ paddingTop: 16, borderTop: "1px solid #F3F4F6", display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <p style={{ color: "#9CA3AF", fontSize: 12, margin: 0 }}>Organization access is verified against the LinkBlock trust registry.</p>
            </div>
          </div>

          {/* Demo persona switcher */}
          <div style={{ marginTop: 16 }}>
            <button
              onClick={() => setShowDemo(d => !d)}
              style={{
                width: "100%", background: "none", border: "1px dashed #D1D5DB",
                borderRadius: 10, padding: "10px 16px", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                fontFamily: "inherit", color: "#9CA3AF", fontSize: 12
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                Demo Persona — Prototype only
              </span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#D1D5DB" strokeWidth="1.5"><path d={showDemo ? "M2 8l4-4 4 4" : "M2 4l4 4 4-4"} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>

            {showDemo && (
              <div className="screen-enter" style={{
                marginTop: 8, background: "#FFFFFF", border: "1px solid #E4E7EC",
                borderRadius: 12, overflow: "hidden"
              }}>
                <div style={{ padding: "10px 14px", background: "#FFFBEB", borderBottom: "1px solid #FDE68A" }}>
                  <p style={{ color: "#92400E", fontSize: 11, fontWeight: 600, margin: 0 }}>
                    ⚠ Prototype only — in production, roles are resolved from institutional SSO, not selected here.
                  </p>
                </div>
                {personas.map(p => (
                  <button
                    key={p.id}
                    onClick={() => handlePersonaSelect(p.id)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center", gap: 12,
                      padding: "14px 16px", background: selectedPersona === p.id ? p.bg : "#FFFFFF",
                      border: "none", borderBottom: "1px solid #F3F4F6", cursor: "pointer",
                      fontFamily: "inherit", textAlign: "left",
                      transition: "background 0.15s"
                    }}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: p.bg, border: `2px solid ${selectedPersona === p.id ? p.color : "transparent"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: p.color, flexShrink: 0 }}>
                      {p.initials}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: "#111827", fontSize: 13, fontWeight: 600, margin: 0 }}>{p.name}</p>
                      <p style={{ color: "#667085", fontSize: 11, margin: 0 }}>{p.role} · {p.org}</p>
                      <p style={{ color: "#9CA3AF", fontSize: 10, margin: "1px 0 0", fontFamily: "'JetBrains Mono', monospace" }}>{p.email}</p>
                    </div>
                    {selectedPersona === p.id && (
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: p.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    )}
                  </button>
                ))}
                <div style={{ padding: "10px 16px" }}>
                  <button
                    onClick={handleContinue}
                    style={{
                      width: "100%", padding: "9px 16px",
                      background: selectedPersona === "student" ? "#6941C6" : "#3157E5",
                      color: "#FFFFFF", border: "none", borderRadius: 7,
                      fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                    }}
                  >
                    Sign in as {selectedPersona === "admin" ? "Alex Morgan" : "Olivia Chen"} →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
