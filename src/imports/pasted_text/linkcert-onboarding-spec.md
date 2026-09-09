ADD THE MISSING FIRST-TIME EXTERNAL ORGANIZATION ONBOARDING EXPERIENCE TO THE EXISTING LINKCERT PROTOTYPE.

CRITICAL:

DO NOT redesign, remove, simplify, or replace anything that already exists.

KEEP ALL EXISTING:

- Algoma University administrator experience
- Student / learner experience
- External verification request flow
- External attestor portal
- NorthStar attestation screen
- Institution approval
- Institution signing
- Credential proof
- Public verification
- Existing visual design
- Existing navigation
- Existing terminology
- Existing role-based permissions
- Existing multi-tenant architecture

This task is ADDITIVE ONLY.

The current prototype currently jumps too quickly from:

External Organization Required
→
NorthStar Technologies Verified
→
External Attestor Portal

The missing question is:

HOW DID NORTHSTAR TECHNOLOGIES BECOME VERIFIED?

We must now show:

1. NorthStar's first interaction with LinkCert
2. What NorthStar sees during onboarding
3. How NorthStar proves who it is
4. How its representative is verified
5. How LinkBlock reviews the organization
6. How LinkBlock decides what NorthStar is allowed to attest
7. How NorthStar receives its own restricted LinkCert workspace
8. How NorthStar receives an attestation signing identity
9. How NorthStar is activated in the Trust Registry
10. Only then should the existing external attestation flow begin

==================================================
IMPORTANT CONCEPT
==================================================

A company does NOT become trusted because:

- a student enters its name
- an institution enters an email
- the person has a company email address
- the organization has a website

LinkCert must separately establish:

ORGANIZATION LEGITIMACY

"Is NorthStar Technologies a real organization?"

and

ATTESTATION AUTHORITY

"What types of claims is NorthStar actually allowed to confirm?"

These are TWO DIFFERENT trust decisions.

Example:

NorthStar Technologies may be:

✓ A legitimate company

and may be authorized to verify:

✓ Employment with NorthStar
✓ Work-placement completion
✓ Employment dates
✓ Placement hours
✓ Job role

but NOT:

✕ University degrees
✕ Academic transcripts
✕ Nursing licences
✕ AWS certifications
✕ Professional licences unrelated to NorthStar

==================================================
START FROM EXISTING STUDENT / INSTITUTION FLOW
==================================================

Use the existing example:

Student:
Olivia Chen

Institution:
Algoma University

Credential:
Professional Placement Credential

Required External Organization:
NorthStar Technologies

The current workflow identifies:

External verification required

Then automatically search:

LINKBLOCK TRUST REGISTRY

Organization:
NorthStar Technologies

Domain:
northstartech.ca

Requested Scope:
Employment / Placement Verification

For this demonstration, the result should be:

NOT REGISTERED

Do NOT immediately show:

Verified

Instead show:

ORGANIZATION ONBOARDING REQUIRED

==================================================
NEW SCREEN 1
EXTERNAL ORGANIZATION NOT REGISTERED
==================================================

Heading:

NorthStar Technologies Is Not Yet Registered

Show:

Organization:
NorthStar Technologies

Domain:
northstartech.ca

Requested Verification:
Employment / Placement Verification

Trust Registry:
NOT REGISTERED

Text:

"NorthStar Technologies must complete organization verification before a trusted external attestation can be accepted."

Show progress:

✓ External organization identified

● Organization onboarding required

○ Organization identity verification

○ Authority review

○ Authorized representative verification

○ Signing identity activation

○ Trust Registry activation

Button:

INVITE NORTHSTAR TO LINKCERT

==================================================
NEW SCREEN 2
INVITATION SENT
==================================================

Show from the student / Algoma side:

Invitation Sent

Organization:
NorthStar Technologies

Contact:
sarah.thompson@northstartech.ca

Requested Purpose:
Employment / Placement Verification

Requested For:
Olivia Chen

Status:
WAITING FOR ORGANIZATION

Text:

"NorthStar must complete LinkCert organization onboarding before responding to the verification request."

Student tracking should show:

✓ Credential submitted
✓ Evidence protected
✓ External verification required
✓ NorthStar invited
● Organization onboarding
○ External attestation
○ Institution review
○ Credential verified

Then switch perspective to NorthStar.

==================================================
NORTHSTAR PERSPECTIVE
==================================================

Create a completely separate external organization onboarding experience.

NorthStar does NOT enter Algoma University's dashboard.

NorthStar receives an email / secure invitation such as:

"Algoma University has requested verification through LinkCert."

Button:

REVIEW REQUEST

When clicked, show:

LINKCERT

External Organization Invitation

Algoma University has requested an attestation from:

NorthStar Technologies

Subject:
Olivia Chen

Requested Claim:
Professional work placement completion

Important message:

"NorthStar Technologies is not yet a registered LinkCert attestor. Your organization must first complete verification."

Button:

BEGIN ORGANIZATION ONBOARDING

==================================================
NEW SCREEN 3
WELCOME TO EXTERNAL ORGANIZATION ONBOARDING
==================================================

Heading:

Become a Verified LinkCert Attestor

Subtitle:

"Establish your organization's identity, authority and authorized users before responding to credential verification requests."

Show onboarding steps:

1. Organization Details

2. Verify Domain

3. Verify Organization

4. Define Attestation Authority

5. Verify Representative

6. LinkBlock Review

7. Activate Organization

Button:

START

==================================================
NEW SCREEN 4
ORGANIZATION DETAILS
==================================================

Heading:

Tell Us About Your Organization

Fields:

Legal Organization Name

Display Name

Organization Type

Official Website

Official Domain

Business / Registration Number
where applicable

Country

Province / State

Business Address

Organization Phone

Primary Representative

Representative Email

Example:

Legal Name:
NorthStar Technologies Inc.

Display Name:
NorthStar Technologies

Organization Type:
Employer

Website:
northstartech.ca

Official Domain:
northstartech.ca

Country:
Canada

Province:
Ontario

Representative:
Sarah Thompson

Email:
sarah.thompson@northstartech.ca

Then ask:

Why does your organization need LinkCert?

Example answer:

"To verify employment and co-op placement claims for students who worked with NorthStar Technologies."

Button:

CONTINUE

==================================================
NEW SCREEN 5
VERIFY DOMAIN OWNERSHIP
==================================================

Heading:

Verify Official Organization Domain

Domain:

northstartech.ca

Explain:

"We need to establish that your organization controls the domain being claimed."

Show available methods:

Corporate Email Verification

DNS Verification

Organization SSO

Manual Verification

For prototype use:

CORPORATE EMAIL VERIFICATION

Send verification to:

sarah.thompson@northstartech.ca

Show processing state:

Verification email sent

Then:

DOMAIN VERIFIED

✓ northstartech.ca

Important note:

"Domain ownership is one identity check. It does not by itself grant attestation authority."

Button:

CONTINUE

==================================================
NEW SCREEN 6
ORGANIZATION LEGITIMACY VERIFICATION
==================================================

Heading:

Verify Organization Identity

Show LinkBlock reviewing:

Legal Organization Name

Official Domain

Official Website

Business / Registration Information where applicable

Organization Address

Primary Representative

Relevant authoritative records where available

Do NOT claim that LinkBlock has an automatic integration with every corporate or government registry.

Use terminology such as:

Verification Evidence

or

Authoritative Source Check Where Available

Example result:

Legal Name
MATCHED

Domain
VERIFIED

Website
VERIFIED

Business Information
MATCHED

Representative
VERIFIED

Organization Status
ACTIVE

Final state:

ORGANIZATION IDENTITY VERIFIED

Text:

"NorthStar Technologies has been established as a legitimate organization."

Then show:

NEXT:
Determine what NorthStar is actually authorized to attest.

Button:

CONTINUE TO AUTHORITY

==================================================
NEW SCREEN 7
ATTESTATION AUTHORITY REQUEST
==================================================

Heading:

What Does Your Organization Need to Verify?

Requested Scope:

EMPLOYMENT / PLACEMENT VERIFICATION

Show options such as:

Employment Verification

Work Placement Verification

Training Completion

Professional Licence

Academic Credential

Industry Certification

For NorthStar select:

Employment / Placement Verification

Then show proposed authority:

NorthStar may attest:

✓ Individual worked at NorthStar
✓ Employment dates
✓ Position / title
✓ Placement completion
✓ Placement hours
✓ NorthStar-issued workplace training

NorthStar may NOT attest:

✕ University degrees
✕ Academic transcripts
✕ Unrelated professional licences
✕ Third-party certifications

Text:

"Attestation authority is limited to claims the organization has legitimate real-world authority to confirm."

Button:

SUBMIT AUTHORITY REQUEST

==================================================
NEW SCREEN 8
VERIFY NORTHSTAR REPRESENTATIVE
==================================================

Heading:

Verify Organization Representative

Name:

Sarah Thompson

Organization:

NorthStar Technologies

Email:

sarah.thompson@northstartech.ca

Requested Role:

Organization Administrator

Show checks:

✓ Organization domain verified

✓ Email belongs to verified domain

✓ Organization association confirmed

Then establish authentication:

MFA:
ENABLED

Passkey:
AVAILABLE

Organization SSO:
OPTIONAL

For prototype:

Identity:
VERIFIED

MFA:
ENABLED

Status:

REPRESENTATIVE VERIFIED

Important explanation:

"Verifying NorthStar and verifying Sarah Thompson are separate checks."

Button:

SUBMIT FOR LINKBLOCK REVIEW

==================================================
NOW SWITCH TO LINKBLOCK SIDE
==================================================

This is extremely important.

Show what WE see when NorthStar submits its onboarding.

Create an internal interface:

LINKBLOCK TRUST ADMINISTRATION

This is NOT available to:

- students
- Algoma administrators
- normal NorthStar users

==================================================
NEW SCREEN 9
LINKBLOCK TRUST REVIEW QUEUE
==================================================

Heading:

Organization Review Queue

Show:

NorthStar Technologies Inc.

Type:
Employer

Requested Scope:
Employment / Placement Verification

Domain:
northstartech.ca

Representative:
Sarah Thompson

Status:
REVIEW REQUIRED

Button:

OPEN REVIEW

==================================================
NEW SCREEN 10
LINKBLOCK ORGANIZATION REVIEW
==================================================

Heading:

Review External Organization

Organization:

NorthStar Technologies Inc.

Show sections.

ORGANIZATION IDENTITY

Legal Name:
Verified

Domain:
Verified

Website:
Verified

Business Information:
Matched

Organization Status:
Active

REPRESENTATIVE

Sarah Thompson

Corporate Email:
Verified

Organization Association:
Verified

MFA:
Enabled

REQUESTED AUTHORITY

Employment / Placement Verification

Then show scope details:

Requested:

Employment verification

Placement completion

Employment dates

Placement hours

Actions:

REQUEST MORE INFORMATION

REJECT

APPROVE ORGANIZATION + SCOPE

For main prototype choose:

APPROVE ORGANIZATION + SCOPE

==================================================
NEW SCREEN 11
APPROVAL CONFIRMATION
==================================================

Before approval, show a confirmation modal.

Heading:

Approve NorthStar Technologies?

You are approving:

Organization Identity:
NorthStar Technologies

Organization Type:
Employer

Approved Scope:
Employment / Placement Verification

You are NOT granting:

Institution Credential Issuance

Academic Credential Authority

Professional Licence Authority

Algoma University Access

Buttons:

CANCEL

APPROVE & ACTIVATE

==================================================
NEW SCREEN 12
CREATE NORTHSTAR ORGANIZATION IDENTITY
==================================================

After approval show system provisioning.

Creating Organization ID

✓

Creating restricted LinkCert tenant

✓

Applying tenant isolation

✓

Creating external-attestor permissions

✓

Registering organization administrator

✓

Result:

Organization:

NorthStar Technologies

Organization ID:

ORG-NT-01827

Tenant:

tenant_northstar_001

Organization Type:

External Attestor / Employer

Trust Status:

APPROVED

Important text:

"NorthStar Technologies receives its own restricted LinkCert environment. It never receives access to Algoma University's tenant."

==================================================
NEW SCREEN 13
CREATE ATTESTATION SIGNING IDENTITY
==================================================

Heading:

Configure External Attestation Signing

Organization:

NorthStar Technologies

Purpose:

External Attestations Only

Show:

✓ Organization approved

✓ Attestation scope approved

✓ Organization administrator verified

✓ Signing identity created

✓ Public verification identity registered

Status:

ATTESTATION SIGNING ACTIVE

Show:

Signing Identity:
NorthStar Technologies

Key Status:
Active

Public Verification Identity:
Registered

Key Version:
1

Do NOT expose private key material.

Text:

"NorthStar's signing identity is used only to sign external attestations within its approved scope."

==================================================
NEW SCREEN 14
TRUST REGISTRY ENTRY
==================================================

Heading:

NorthStar Technologies Activated

Show final Trust Registry entry:

Organization:
NorthStar Technologies

Organization ID:
ORG-NT-01827

Tenant:
tenant_northstar_001

Verified Domain:
northstartech.ca

Organization Type:
Employer

Status:
ACTIVE

Approved Scope:
Employment / Placement Verification

Administrator:
Sarah Thompson

Authentication:
Verified

Signing Identity:
Active

Public Key:
Registered

Button:

CONTINUE TO REQUEST

==================================================
NOW RETURN TO NORTHSTAR
==================================================

Show NorthStar's own restricted workspace for the first time.

Header:

NorthStar Technologies

LinkCert External Attestor

Role:

Organization Administrator / Placement Attestor

Navigation:

Requests

Attestations

Authorized Users

Organization Profile

Security

Do NOT show:

Issue Credentials

University Batches

Student Directory

Algoma Audit Log

Registrar Controls

Institution Signing

==================================================
NEW SCREEN 15
NORTHSTAR REQUEST INBOX
==================================================

Heading:

Requests

Show one pending request:

Algoma University

Olivia Chen

Professional Placement Credential

Request:

Confirm completed work placement

Status:

READY FOR REVIEW

Button:

OPEN REQUEST

==================================================
CONNECT TO EXISTING EXTERNAL ATTESTOR SCREEN
==================================================

OPEN REQUEST must navigate directly into the external-attestor page that already exists in the prototype.

Do NOT rebuild it.

NorthStar should now see the already-existing:

Algoma University requests confirmation

Olivia Chen

Placement details

Approve

Request Correction

Reject

APPROVE & SIGN ATTESTATION

The only difference is that NOW the prototype has explained why NorthStar is trusted and why Sarah is allowed to sign it.

==================================================
WHEN SARAH SIGNS
==================================================

Keep the existing attestation logic.

Sarah signs:

THE EXTERNAL ATTESTATION

NorthStar does NOT sign:

ALGOMA UNIVERSITY'S FINAL CREDENTIAL

The signed attestation returns into Algoma's existing workflow.

Algoma then performs its existing:

Institution Review

↓

Final Institutional Approval

↓

Authorized Institution Signing

↓

Credential Verification

==================================================
SHOW THIS SIMPLE RELATIONSHIP
==================================================

Add a small Trust Details screen / modal showing:

ALGOMA UNIVERSITY

tenant_algoma_001

↓

Specific Attestation Request

↓

LINKCERT TRUST + WORKFLOW LAYER

↓

NORTHSTAR TECHNOLOGIES

tenant_northstar_001

↓

Signed Attestation

↓

LINKCERT

↓

ALGOMA UNIVERSITY WORKFLOW

Text:

"NorthStar never enters Algoma University's tenant. Only the specific scope-limited verification request is shared."

==================================================
ADD REGISTERED RETURNING ORGANIZATION CASE
==================================================

Also demonstrate what happens NEXT TIME.

Once NorthStar has completed onboarding, another request should NOT repeat onboarding.

Future flow:

External Verification Required

↓

Search Trust Registry

↓

NorthStar Technologies

Status:
ACTIVE

Scope:
Employment / Placement Verification

Signing Identity:
ACTIVE

↓

AUTHORIZED

↓

Send Secure Attestation Request

↓

NorthStar Request Inbox

This makes clear onboarding is generally a one-time organization trust process, followed by ongoing lifecycle reviews.

==================================================
ADD FAILURE STATE
==================================================

Create a compact alternate state:

Organization Verification Unsuccessful

Possible reasons:

Domain ownership could not be confirmed

Organization identity could not be sufficiently verified

Representative authorization could not be established

Requested attestation scope could not be justified

Actions:

REQUEST MORE INFORMATION

REJECT APPLICATION

Do NOT allow:

Continue Anyway

Trust Organization Anyway

Student Override

==================================================
ADD SUSPENSION STATE
==================================================

Show that external organization trust has a lifecycle.

Example:

NorthStar Technologies

Trust Status:
SUSPENDED

New Attestations:
DISABLED

Historical Attestations:
Still Available for Audit / Verification

Text:

"Existing historical records remain preserved, but NorthStar cannot issue new trusted attestations while suspended."

==================================================
FINAL RESULT
==================================================

The updated prototype should now clearly answer:

How did NorthStar first hear about LinkCert?

Through an external verification request / onboarding invitation.

What did NorthStar see?

Its own organization onboarding portal.

What did NorthStar provide?

Organization identity information, domain information, representative information and requested attestation authority.

How did we know their domain was legitimate?

Domain ownership verification.

How did we establish that NorthStar was a real organization?

Organization identity / business evidence review and authoritative-source checks where available.

How did we know Sarah actually belonged to NorthStar?

Verified organization identity + corporate domain + authenticated representative verification.

How did we decide what NorthStar could approve?

Attestation-scope review.

Who approved NorthStar?

LinkBlock Trust Administration.

Did Algoma approve NorthStar simply by selecting it?

NO.

Did Olivia approve NorthStar?

NO.

Did NorthStar approve itself?

NO.

Does NorthStar get access to Algoma's environment?

NO.

What does NorthStar receive?

Its own restricted external-attestor LinkCert workspace.

What does Sarah sign?

The external attestation only.

Who signs Algoma's final credential?

Algoma University.

Most importantly:

DO NOT DELETE OR REDESIGN ANY EXISTING SCREEN.

INSERT THIS ONBOARDING FLOW BEFORE THE EXISTING NORTHSTAR EXTERNAL-ATTESTOR EXPERIENCE.