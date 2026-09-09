import type { Screen } from "../../App"

interface Props { navigate: (s: Screen) => void }

const StepBar = ({ step }: { step: number }) => {
  const steps = ["Organization Details", "Verify Domain", "Verify Organization", "Attestation Authority", "Verify Representative", "Review", "Activate"]
  return (
    <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "12px 40px", display: "flex", gap: 0, overflowX: "auto" }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 12px" }}>
            <div style={{
              width: 22, height: 22, borderRadius: "50%",
              background: i < step ? "#167A5A" : i === step ? "#3157E5" : "#F3F4F6",
              border: i === step ? "2px solid #3157E5" : "none",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
            }}>
              {i < step
                ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                : <span style={{ color: i === step ? "#FFFFFF" : "#9CA3AF", fontSize: 10, fontWeight: 700 }}>{i + 1}</span>
              }
            </div>
            <span style={{ color: i === step ? "#111827" : i < step ? "#167A5A" : "#9CA3AF", fontSize: 12, fontWeight: i === step ? 700 : 500, whiteSpace: "nowrap" }}>{s}</span>
          </div>
          {i < steps.length - 1 && <div style={{ width: 20, height: 1, background: "#E4E7EC", flexShrink: 0 }} />}
        </div>
      ))}
    </div>
  )
}

export default function NSScreen05OrgDetails({ navigate }: Props) {
  return (
    <div style={{ minHeight: "100vh", background: "#F6F7FA", display: "flex", flexDirection: "column" }}>
      <header style={{
        background: "#0D1424", borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "0 40px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15 }}>LinkCert</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginLeft: 4 }}>Organization Onboarding</span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Step 1 of 7</span>
      </header>

      <StepBar step={0} />

      <div style={{ flex: 1, maxWidth: 720, margin: "0 auto", padding: "32px 24px", width: "100%" }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>Tell Us About Your Organization</h1>
        <p style={{ color: "#667085", fontSize: 14, margin: "0 0 28px" }}>Provide accurate legal information. This will be independently verified.</p>

        <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "24px 28px", marginBottom: 20 }}>
          <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 18px" }}>Organization Information</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { label: "Legal Organization Name", value: "NorthStar Technologies Inc." },
              { label: "Display Name", value: "NorthStar Technologies" },
              { label: "Organization Type", value: "Employer", select: true },
              { label: "Official Website", value: "northstartech.ca" },
              { label: "Official Domain", value: "northstartech.ca" },
              { label: "Business / Registration Number", value: "BC-1092847", note: "where applicable" },
              { label: "Country", value: "Canada", select: true },
              { label: "Province / State", value: "Ontario", select: true },
            ].map(field => (
              <div key={field.label}>
                <label style={{ display: "block", color: "#374151", fontSize: 12, fontWeight: 600, marginBottom: 6 }}>
                  {field.label}
                  {field.note && <span style={{ color: "#9CA3AF", fontWeight: 400 }}> ({field.note})</span>}
                </label>
                <input
                  defaultValue={field.value}
                  style={{
                    width: "100%", padding: "9px 12px", border: "1px solid #D1D5DB",
                    borderRadius: 6, fontSize: 13, color: "#111827", background: "#FAFAFA",
                    fontFamily: "inherit", boxSizing: "border-box"
                  }}
                  readOnly
                />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16 }}>
            <label style={{ display: "block", color: "#374151", fontSize: 12, fontWeight: 600, marginBottom: 6 }}>Business Address</label>
            <input
              defaultValue="200 Bay St, Toronto, Ontario M5J 2J1"
              style={{ width: "100%", padding: "9px 12px", border: "1px solid #D1D5DB", borderRadius: 6, fontSize: 13, color: "#111827", background: "#FAFAFA", fontFamily: "inherit", boxSizing: "border-box" }}
              readOnly
            />
          </div>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "24px 28px", marginBottom: 20 }}>
          <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 18px" }}>Primary Representative</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { label: "Full Name", value: "Sarah Thompson" },
              { label: "Representative Email", value: "sarah.thompson@northstartech.ca" },
              { label: "Title / Role", value: "Placement Supervisor" },
              { label: "Organization Phone", value: "+1 (416) 555-0194" },
            ].map(field => (
              <div key={field.label}>
                <label style={{ display: "block", color: "#374151", fontSize: 12, fontWeight: 600, marginBottom: 6 }}>{field.label}</label>
                <input
                  defaultValue={field.value}
                  style={{ width: "100%", padding: "9px 12px", border: "1px solid #D1D5DB", borderRadius: 6, fontSize: 13, color: "#111827", background: "#FAFAFA", fontFamily: "inherit", boxSizing: "border-box" }}
                  readOnly
                />
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "24px 28px", marginBottom: 24 }}>
          <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 6px" }}>Why does your organization need LinkCert?</p>
          <p style={{ color: "#667085", fontSize: 12, margin: "0 0 12px" }}>Describe the types of claims your organization needs to verify on behalf of institutions or students.</p>
          <textarea
            defaultValue="To verify employment and co-op placement claims for students who worked with NorthStar Technologies."
            style={{
              width: "100%", padding: "10px 12px", border: "1px solid #D1D5DB",
              borderRadius: 6, fontSize: 13, color: "#111827", background: "#FAFAFA",
              fontFamily: "inherit", boxSizing: "border-box", resize: "none", height: 80
            }}
            readOnly
          />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => navigate("ns-verify-domain")}
            style={{
              padding: "12px 28px", background: "#3157E5", color: "#FFFFFF",
              border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600,
              cursor: "pointer", fontFamily: "inherit"
            }}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  )
}
