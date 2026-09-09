import { useState } from "react"
import type { Screen } from "../../App"

interface Props {
  navigate: (s: Screen) => void
}

export default function ExternalSecuritySetup({ navigate }: Props) {
  const [step, setStep] = useState(1)

  const labels = ["Identity", "Security", "Authority"]

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F6F7FA",
      padding: "40px 24px"
    }}>
      <div style={{
        width: "100%",
        maxWidth: 650,
        margin: "0 auto"
      }}>
        <div style={{ marginBottom: 24 }}>
          <p style={{
            color: "#0F766E",
            fontSize: 11,
            fontWeight: 700,
            margin: "0 0 6px",
            letterSpacing: "0.06em"
          }}>
            NORTHSTAR ACCOUNT ACTIVATION
          </p>

          <h1 style={{
            fontSize: 22,
            color: "#111827",
            margin: "0 0 6px"
          }}>
            Secure your LinkCert account
          </h1>

          <p style={{
            color: "#667085",
            fontSize: 14,
            margin: 0
          }}>
            Complete the required identity and security setup before signing
            external attestations.
          </p>
        </div>

        <div style={{
          display: "flex",
          gap: 8,
          marginBottom: 24
        }}>
          {labels.map((label, i) => {
            const number = i + 1
            const complete = step > number
            const active = step === number

            return (
              <div key={label} style={{
                flex: 1,
                padding: 12,
                borderRadius: 8,
                border: `1px solid ${
                  complete ? "#167A5A" :
                  active ? "#0F766E" :
                  "#E4E7EC"
                }`,
                background:
                  complete ? "#F0FAF5" :
                  active ? "#F0FDFA" :
                  "#FFFFFF"
              }}>
                <p style={{
                  margin: 0,
                  fontSize: 12,
                  fontWeight: 700,
                  color:
                    complete ? "#167A5A" :
                    active ? "#0F766E" :
                    "#9CA3AF"
                }}>
                  {complete ? "✓ " : `${number}. `}
                  {label}
                </p>
              </div>
            )
          })}
        </div>

        <div style={{
          background: "#FFFFFF",
          border: "1px solid #E4E7EC",
          borderRadius: 16,
          padding: 30,
          boxShadow: "0 4px 20px rgba(0,0,0,0.04)"
        }}>
          {step === 1 && (
            <>
              <h2 style={{
                color: "#111827",
                fontSize: 18,
                margin: "0 0 6px"
              }}>
                Verify your work email
              </h2>

              <p style={{
                color: "#667085",
                fontSize: 13,
                lineHeight: 1.6,
                margin: "0 0 20px"
              }}>
                We sent a verification code to the NorthStar corporate email
                associated with this invitation.
              </p>

              <div style={{
                background: "#F9FAFB",
                border: "1px solid #E4E7EC",
                borderRadius: 8,
                padding: 14,
                marginBottom: 16
              }}>
                <p style={{
                  color: "#9CA3AF",
                  fontSize: 10,
                  margin: "0 0 4px",
                  fontWeight: 600
                }}>
                  WORK EMAIL
                </p>

                <p style={{
                  color: "#111827",
                  fontSize: 13,
                  fontWeight: 600,
                  margin: 0
                }}>
                  sarah.thompson@northstartech.ca
                </p>
              </div>

              <input
                defaultValue="482916"
                aria-label="Email verification code"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: 12,
                  border: "1px solid #E4E7EC",
                  borderRadius: 8,
                  fontSize: 18,
                  letterSpacing: "0.25em",
                  textAlign: "center",
                  marginBottom: 12,
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              />

              <p style={{
                color: "#9CA3AF",
                fontSize: 11,
                lineHeight: 1.5,
                margin: "0 0 20px"
              }}>
                Prototype demo code is pre-filled. In production this code
                would be delivered to Sarah's verified corporate mailbox.
              </p>

              <button
                onClick={() => setStep(2)}
                style={{
                  width: "100%",
                  padding: 12,
                  background: "#0F766E",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 8,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit"
                }}
              >
                Verify Corporate Email →
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h2 style={{
                color: "#111827",
                fontSize: 18,
                margin: "0 0 6px"
              }}>
                Set up multi-factor authentication
              </h2>

              <p style={{
                color: "#667085",
                fontSize: 13,
                lineHeight: 1.6,
                margin: "0 0 20px"
              }}>
                MFA is required for NorthStar users who are authorized to
                sign external attestations.
              </p>

              <div style={{
                border: "1px solid #0F766E",
                background: "#F0FDFA",
                borderRadius: 10,
                padding: 16,
                marginBottom: 16,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <div>
                  <p style={{
                    color: "#0F766E",
                    fontSize: 13,
                    fontWeight: 700,
                    margin: "0 0 4px"
                  }}>
                    Authenticator App
                  </p>

                  <p style={{
                    color: "#374151",
                    fontSize: 12,
                    margin: 0
                  }}>
                    Recommended for attestation users
                  </p>
                </div>

                <span style={{
                  background: "#FFFFFF",
                  color: "#0F766E",
                  border: "1px solid #99F6E4",
                  borderRadius: 4,
                  padding: "3px 8px",
                  fontSize: 10,
                  fontWeight: 700
                }}>
                  SELECTED
                </span>
              </div>

              <div style={{
                width: 150,
                height: 150,
                background: "#F9FAFB",
                border: "1px solid #E4E7EC",
                borderRadius: 8,
                margin: "0 auto 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: 11,
                color: "#667085",
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                DEMO
                <br />
                AUTHENTICATOR
                <br />
                QR
              </div>

              <input
                defaultValue="193204"
                aria-label="MFA verification code"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: 12,
                  border: "1px solid #E4E7EC",
                  borderRadius: 8,
                  fontSize: 18,
                  letterSpacing: "0.25em",
                  textAlign: "center",
                  marginBottom: 20,
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              />

              <button
                onClick={() => setStep(3)}
                style={{
                  width: "100%",
                  padding: 12,
                  background: "#0F766E",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 8,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit"
                }}
              >
                Confirm MFA →
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <h2 style={{
                color: "#111827",
                fontSize: 18,
                margin: "0 0 6px"
              }}>
                Confirm your attestation authority
              </h2>

              <p style={{
                color: "#667085",
                fontSize: 13,
                lineHeight: 1.6,
                margin: "0 0 20px"
              }}>
                Your identity is verified. Review the authority NorthStar
                has assigned to your account.
              </p>

              <div style={{
                background: "#F9FAFB",
                border: "1px solid #E4E7EC",
                borderRadius: 10,
                padding: 18,
                marginBottom: 18
              }}>
                {[
                  ["User", "Sarah Thompson"],
                  ["Organization", "NorthStar Technologies"],
                  ["Role", "Placement Attestor"],
                  ["Approved Scope", "Employment / Placement Verification"]
                ].map(([label, value]) => (
                  <div key={label} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 18,
                    padding: "7px 0"
                  }}>
                    <span style={{
                      color: "#9CA3AF",
                      fontSize: 12
                    }}>
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
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                marginBottom: 20
              }}>
                <div style={{
                  background: "#F0FAF5",
                  border: "1px solid #D1FAE5",
                  borderRadius: 8,
                  padding: 14
                }}>
                  <p style={{
                    color: "#167A5A",
                    fontSize: 11,
                    fontWeight: 700,
                    margin: "0 0 8px"
                  }}>
                    YOU MAY CONFIRM
                  </p>

                  {[
                    "Placement completion",
                    "Employment dates",
                    "Role / title",
                    "Placement hours"
                  ].map(x => (
                    <p key={x} style={{
                      color: "#374151",
                      fontSize: 12,
                      margin: "5px 0"
                    }}>
                      ✓ {x}
                    </p>
                  ))}
                </div>

                <div style={{
                  background: "#FFF1F2",
                  border: "1px solid #FECDD3",
                  borderRadius: 8,
                  padding: 14
                }}>
                  <p style={{
                    color: "#BE123C",
                    fontSize: 11,
                    fontWeight: 700,
                    margin: "0 0 8px"
                  }}>
                    YOU MAY NOT
                  </p>

                  {[
                    "Issue Algoma credentials",
                    "Approve university degrees",
                    "Verify unrelated certificates",
                    "Access Algoma's tenant"
                  ].map(x => (
                    <p key={x} style={{
                      color: "#374151",
                      fontSize: 12,
                      margin: "5px 0"
                    }}>
                      × {x}
                    </p>
                  ))}
                </div>
              </div>

              <button
                onClick={() => navigate("external-account-ready")}
                style={{
                  width: "100%",
                  padding: 12,
                  background: "#0F766E",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 8,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit"
                }}
              >
                Accept Role & Activate Account →
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
