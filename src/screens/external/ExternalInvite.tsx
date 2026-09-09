import type { Screen } from "../../App"

interface Props {
  navigate: (s: Screen) => void
}

export default function ExternalInvite({ navigate }: Props) {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#F6F7FA",
      display: "flex",
      flexDirection: "column"
    }}>
      <header style={{
        height: 60,
        background: "#0D1424",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28,
            height: 28,
            borderRadius: 6,
            background: "#0F766E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            fontWeight: 800,
            fontSize: 11
          }}>
            LC
          </div>

          <span style={{
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: 700
          }}>
            LinkCert
          </span>

          <span style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: 13
          }}>
            External Verification
          </span>
        </div>

        <span style={{
          color: "rgba(255,255,255,0.45)",
          fontSize: 12
        }}>
          Invitation for NorthStar Technologies
        </span>
      </header>

      <main style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 32
      }}>
        <div style={{
          width: "100%",
          maxWidth: 620
        }}>
          <div style={{
            background: "#FFFFFF",
            border: "1px solid #E4E7EC",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
          }}>
            <div style={{
              padding: "28px 32px",
              borderBottom: "1px solid #E4E7EC"
            }}>
              <p style={{
                color: "#0F766E",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.06em",
                margin: "0 0 8px"
              }}>
                VERIFICATION REQUEST RECEIVED
              </p>

              <h1 style={{
                color: "#111827",
                fontSize: 22,
                margin: "0 0 8px",
                letterSpacing: "-0.02em"
              }}>
                Algoma University needs NorthStar's confirmation
              </h1>

              <p style={{
                color: "#667085",
                fontSize: 14,
                lineHeight: 1.6,
                margin: 0
              }}>
                Hello Sarah. You've been invited to LinkCert to review an
                employment / placement verification request on behalf of
                NorthStar Technologies.
              </p>
            </div>

            <div style={{ padding: 32 }}>
              <div style={{
                background: "#F9FAFB",
                border: "1px solid #E4E7EC",
                borderRadius: 10,
                padding: 18,
                marginBottom: 20
              }}>
                {[
                  ["Requested by", "Algoma University"],
                  ["External organization", "NorthStar Technologies"],
                  ["Requested from", "Sarah Thompson"],
                  ["Subject", "Olivia Chen"],
                  ["Verification scope", "Employment / Placement Verification"]
                ].map(([label, value], i) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 20,
                      padding: "8px 0",
                      borderBottom: i < 4 ? "1px solid #E4E7EC" : "none"
                    }}
                  >
                    <span style={{ color: "#9CA3AF", fontSize: 12 }}>
                      {label}
                    </span>

                    <span style={{
                      color: "#111827",
                      fontSize: 12,
                      fontWeight: 600,
                      textAlign: "right"
                    }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{
                background: "#EEF2FF",
                border: "1px solid #C7D2FE",
                borderRadius: 10,
                padding: 16,
                marginBottom: 24
              }}>
                <p style={{
                  color: "#3157E5",
                  fontSize: 12,
                  fontWeight: 700,
                  margin: "0 0 5px"
                }}>
                  New to LinkCert?
                </p>

                <p style={{
                  color: "#374151",
                  fontSize: 12,
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  LinkCert securely connects institutions with trusted
                  external organizations for credential verification.
                  NorthStar is already registered. Since this is your first
                  time using LinkCert, you'll verify your identity and secure
                  your account before accessing the request.
                </p>
              </div>

              <button
                onClick={() => navigate("external-welcome")}
                style={{
                  width: "100%",
                  padding: 13,
                  background: "#0F766E",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit"
                }}
              >
                Get Started →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
