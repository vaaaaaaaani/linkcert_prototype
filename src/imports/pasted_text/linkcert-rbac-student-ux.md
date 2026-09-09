EXTEND THE EXISTING LINKCERT PROTOTYPE WITH ROLE-BASED ACCESS AND A COMPLETE STUDENT / LEARNER EXPERIENCE.

IMPORTANT:
Do NOT redesign, remove, simplify, or replace the existing Algoma University administrator/staff experience.

The administrator prototype that already exists should remain visually and functionally the same unless a very small addition is required to demonstrate role-based access.

This task is an ADDITION to the existing prototype.

The goal is to demonstrate that LinkCert is role-aware and that different users see completely different interfaces and permissions based on their authenticated role.

==================================================
CORE ACCESS-CONTROL PRINCIPLE
==================================================

LinkCert is a multi-tenant, role-based platform.

Authentication determines:

1. Which organization / tenant the person belongs to
2. Whether that organization is trusted
3. Who the authenticated person is
4. What role that person has
5. What permissions that role receives

For an Algoma University account:

Email domain:
algomau.ca

can help resolve:

Institution:
Algoma University

Tenant:
tenant_algoma_001

But DO NOT use the email domain alone to determine whether someone is a student, administrator, registrar, etc.

After institutional authentication / SSO, LinkCert receives or maps the user's role.

Example:

alex.morgan@algomau.ca
Role:
Credential Administrator

olivia.chen@algomau.ca
Role:
Student / Learner

Both belong to:

Algoma University
tenant_algoma_001

But they receive completely different permissions and interfaces.

The same tenant_id architecture and PostgreSQL Row-Level Security still apply.

Then RBAC determines what data inside that tenant the user may access.

==================================================
DO NOT CREATE A MANUAL "CHOOSE YOUR ROLE" SECURITY MODEL
==================================================

The user must NOT simply select:

"I'm a student"
or
"I'm an administrator"

after login.

The role should be resolved from the authenticated identity.

For demo purposes, however, it is acceptable to include a small developer/demo control somewhere labelled:

"Demo Persona"

with:

Credential Administrator
Student / Learner

This is ONLY for navigating the prototype during the presentation.

Make it visually clear that in production the role comes from institutional identity / RBAC, not from the user choosing their privileges.

==================================================
SHOW THE ACCESS DECISION DURING LOGIN
==================================================

Extend the existing login resolution screen.

After:

Domain matched
Organization verified
Tenant resolved
Authentication verified

add:

Resolving role & permissions

For Alex Morgan show:

Role:
Credential Administrator

Permission profile:
Institution Credential Operations

Then enter the existing administrator application exactly as it currently exists.

For Olivia Chen show:

Role:
Student / Learner

Permission profile:
Personal Credential Access

Then enter an entirely different Student LinkCert interface.

==================================================
ROLE 1 — INSTITUTION ADMINISTRATOR / STAFF
==================================================

KEEP THE EXISTING ADMIN EXPERIENCE.

Administrators can continue to have:

Dashboard
Issue Credentials
Submissions
Approvals
Credentials
Verification
Integrations
Audit Log
Settings

They can:

- upload official institutional CSV data
- review institution credential batches
- review learner-submitted credential claims
- configure or follow required approval workflows
- request external attestations
- verify returned external attestations
- perform authorized institutional approval tasks according to role
- manage institution credential records according to permission
- view institution-level audit information

Do not change the existing administrator workflow.

The existing prototype already demonstrates this side.

==================================================
ROLE 2 — STUDENT / LEARNER
==================================================

Create a completely separate student interface.

It should NOT look like an administrator dashboard with menu items removed.

It should feel like a learner-facing digital credential portal.

Use the same LinkCert brand language and quality, but make the UX simpler, more personal and credential-focused.

Student example:

Name:
Olivia Chen

Institution:
Algoma University

Role:
Student

Tenant:
tenant_algoma_001

==================================================
STUDENT NAVIGATION
==================================================

Create student navigation with approximately:

Home

My Credentials

Career Credentials

My Submissions

Approval Requests / Tracking

Share & Verify

Profile

Do NOT show the student:

Issue Credentials
Institution Audit Log
Institution Integrations
Credential Types configuration
Institution Settings
Registrar approvals
Signing keys
Institution-wide credential records
Other students
Other users
Other tenant information
Batch issuance controls

The student must only see records they are authorized to access, normally their own.

==================================================
STUDENT SCREEN 1 — STUDENT HOME
==================================================

Create a polished learner dashboard.

Header:

Good evening, Olivia

Subtitle:

Your credentials, claims and verification requests in one place.

Show:

MY CREDENTIALS

3 Verified Credentials

1 Career Credential Under Review

1 External Approval Pending

Example credential cards:

Bachelor of Computer Science
Algoma University
Verified

Cybersecurity Fundamentals
Algoma University
Verified

AWS Cloud Practitioner
External Career Credential
Verified / Linked

Then section:

Recent Activity

Examples:

Professional Certification submitted

External verification requested

Employer attestation received

Credential approved by Algoma University

Include primary buttons:

View My Credentials

Add Career Credential

==================================================
STUDENT SCREEN 2 — MY CREDENTIALS
==================================================

Show a modern credential wallet/library.

Credential cards should display:

Credential name
Issuer
Issue date
Status
Verification status

Example:

Bachelor of Computer Science

Issuer:
Algoma University

Status:
Verified

Issuer Signature:
Valid

Blockchain Proof:
Confirmed

Another:

AWS Cloud Practitioner

Issuer:
Amazon Web Services

Type:
External Career Credential

Status:
Verified through LinkCert

Do not imply that Algoma University originally issued an AWS certification.

Clearly distinguish:

Institution-Issued Credential

and

Externally Issued / Career Credential

==================================================
IMPORTANT STUDENT CAPABILITY:
ADD A CAREER CREDENTIAL
==================================================

Students should be able to submit an external career credential / certification / licence for verification.

Create a prominent:

Add Career Credential

flow.

Examples could include:

Professional Certification
Industry Certification
Professional Licence
Employment / Placement Credential

Use a realistic example:

AWS Cloud Practitioner Certification

or

Ontario Professional Practice Licence

or

Professional Placement Credential

The prototype should demonstrate the architecture without suggesting that the learner can self-issue the credential.

==================================================
STUDENT SCREEN 3 — ADD CAREER CREDENTIAL
==================================================

Heading:

Add a Career Credential

Explain:

Submit an external credential or professional claim for verification and inclusion in your LinkCert record.

Form fields:

Credential Type

Credential Name

Issuing Organization

Credential / Licence Number

Issue Date

Expiry Date if applicable

Evidence Upload

Example:

Credential Type:
Professional Certification

Credential:
AWS Cloud Practitioner

Issuing Organization:
Amazon Web Services

Credential Number:
AWS-CP-482910

Upload:

aws_certificate.pdf

Button:

Continue

==================================================
STUDENT SCREEN 4 — PROTECT LEARNER SUBMISSION
==================================================

The student-submitted evidence enters the SAME protected provenance architecture as other inputs.

Show:

Evidence Received

↓

Original File Preserved

↓

SHA-256 Fingerprint Created

↓

Submission Version 1 Created

↓

Provenance Event Recorded

Example:

Original Evidence:
aws_certificate.pdf

Fingerprint:
74bc19ef...2a91

Version:
v1

Submitted by:
Olivia Chen

Role:
Student

Tenant:
tenant_algoma_001

Timestamp:
August 25, 2026

Explain:

"The original learner submission is preserved. Any later correction creates a new version rather than silently replacing the original."

Do NOT put raw learner evidence on blockchain.

This stage is provenance / integrity protection.

==================================================
STUDENT SCREEN 5 — VERIFICATION REQUIREMENTS
==================================================

After the upload, LinkCert evaluates the credential's workflow policy.

Show:

Verification Required

This credential cannot become verified simply because it was uploaded by the learner.

Required checks:

✓ Student identity authenticated

✓ Evidence fingerprint created

● Issuing / external organization verification required

○ Institution review

○ Final verified status

For some career credentials, the external organization may be the authority that verifies the underlying claim.

Show:

External Organization:

Amazon Web Services

or use the existing Northstar Technologies attestor example if that better matches the existing prototype.

Status:

External verification required

Button:

Request Verification

==================================================
STUDENT CAN REQUEST EXTERNAL APPROVAL
==================================================

This is important.

The student can INITIATE a request for verification / attestation for an external career credential.

The student is NOT approving their own credential.

The student is NOT selecting arbitrary organizations with authority.

LinkCert must verify that the external organization / attestor is registered and authorized for the relevant claim type.

Flow:

Student Submission

↓

LinkCert determines required attestation policy

↓

Registered organization identified

↓

Authorized attestor selected / routed

↓

Secure request sent

↓

External party reviews claim

↓

External party signs attestation

↓

Attestation returns to LinkCert

↓

Institution reviews where institutional approval is required

↓

Verified credential / record becomes available to student

==================================================
STUDENT SCREEN 6 — EXTERNAL ORGANIZATION CHECK
==================================================

Reuse the existing registered-attestor architecture.

Show:

Verifying External Organization

Organization:
Northstar Technologies

Domain:
northstartech.ca

Trust Registry:
Registered

Organization ID:
ORG-NT-01827

Authorized Claim:
Employment / Placement Verification

Signing Identity:
Active

Status:
Approved

Then:

Request will be sent to:

Sarah Thompson

Placement Supervisor

sarah.thompson@northstartech.ca

Button:

Send Verification Request

The student should see only the useful trust information.

Do not expose private organization administration information.

==================================================
STUDENT SCREEN 7 — REQUEST SUBMITTED
==================================================

Show:

Verification Request Sent

Professional Placement Credential

External Organization:
Northstar Technologies

Requested:
August 25, 2026

Status:

Waiting for External Attestation

Display a clear tracking timeline:

✓ Submission received

✓ Evidence protected

✓ Verification policy determined

✓ External organization verified

● Waiting for external attestor

○ Institution review

○ Verified credential

Button:

View Request Status

==================================================
EXTERNAL PARTY EXPERIENCE
==================================================

KEEP / REUSE the external approver portal already present in the prototype.

Do not create a conflicting workflow.

The external attestor:

- authenticates
- is matched to its registered organization
- has a permitted attestation role
- reviews the specific claim
- can request correction
- can approve the claim
- digitally signs the ATTESTATION

The external attestor does NOT sign the university's final credential.

Use existing external portal terminology:

Approve & Sign Attestation

NOT:

Sign Credential

==================================================
STUDENT SCREEN 8 — EXTERNAL APPROVAL RECEIVED
==================================================

Return to the student's tracking view after the attestor approves.

Show:

External Attestation Received

Northstar Technologies

Signed by:
Sarah Thompson

Attestation Status:
Valid

Signature:
Verified

Timestamp:
August 25, 2026 • 10:52 AM

Tracking timeline:

✓ Submission received

✓ Evidence protected

✓ External organization verified

✓ External attestation signed

● Algoma University review

○ Verified credential

Explain:

"The external organization has verified the relevant claim. This does not automatically make it an Algoma University-issued credential."

This distinction is critical.

==================================================
INSTITUTION ADMIN SEES STUDENT SUBMISSION
==================================================

Connect the student flow back to the EXISTING administrator prototype.

In the Algoma administrator:

Submissions

or

Approvals

show a new item:

Olivia Chen

Professional Placement Credential

Source:
Learner Submission

External Attestation:
Northstar Technologies • Valid

Status:
Ready for Institutional Review

When the administrator opens it, show:

Original learner submission

Evidence fingerprint

Version history

External attestation

External signature verification

Provenance history

Then the existing institutional workflow continues.

==================================================
INSTITUTION AUTHORITY
==================================================

Keep the existing authority rules exactly.

The external party signs:

THE EXTERNAL ATTESTATION

The institution performs:

FINAL INSTITUTIONAL DECISION

If the resulting item is an institution-issued LinkCert credential, the institution signs the final credential with its own issuer key.

Do not show:

LinkCert signing on behalf of Algoma University.

Do not show:

Student signing their own credential.

Do not show:

External employer signing the final Algoma credential.

==================================================
STUDENT SCREEN 9 — VERIFIED RESULT
==================================================

After required verification and institutional processing is complete, show the student:

Credential Verified

Professional Placement Credential

Claim:
Completed Software Developer Co-op Placement

External Attestor:
Northstar Technologies

Institution Review:
Algoma University

Status:
Verified

Then show trust details in a simple form:

Evidence Integrity:
Verified

External Attestation:
Valid

Institution Approval:
Valid

Credential Proof:
Confirmed

If a final institution-issued credential exists:

Issuer Signature:
Algoma University • Valid

Blockchain Proof:
Confirmed

==================================================
STUDENT SCREEN 10 — CREDENTIAL DETAIL
==================================================

The student should have a beautiful credential details page.

Tabs:

Overview

Evidence

Proof

History

Show:

Credential Name

Issuer / Source

Credential Type

Issue Date

Status

QR Code

Share

Verification Link

For proof details, translate technical information into learner-friendly language.

Example:

Issuer verified

External attestation verified

Credential has not been altered

Blockchain proof confirmed

Then optionally allow:

View Technical Proof

where the hashes / Merkle proof can be expanded.

==================================================
STUDENT SCREEN 11 — SHARE CREDENTIAL
==================================================

Allow the student to:

Show QR Code

Create Verification Link

Share Credential

Choose what to share where supported

Example:

Share:

Professional Placement Credential

With:

Employer / recruiter

Access:

Verified credential information

External verification status

Institution issuer information

Button:

Create Secure Verification Link

The recipient should then reach the existing public LinkCert verification experience.

==================================================
STUDENT SCREEN 12 — MY SUBMISSIONS
==================================================

Create a page showing all learner-originated submissions.

Example table/cards:

Professional Placement Credential
External attestation received
Institution review pending

AWS Cloud Practitioner
Verified

Professional Licence
Correction requested

Allow:

View Status

View Evidence

Respond to Correction

Do NOT allow:

Approve

Issue

Institution Sign

Revoke Institution Credential

Edit Audit History

==================================================
CORRECTION REQUEST EXPERIENCE
==================================================

Show an example where an external attestor or institution requests a correction.

Example:

Correction Required

Professional Licence

Reason:

Credential number does not match submitted evidence.

The student can:

Upload corrected evidence

or

Update permitted claim information

When they do:

DO NOT overwrite Version 1.

Show:

Version 1 • Preserved

↓

Correction Submitted

↓

Version 2 • Current

↓

New Fingerprint Created

↓

New Provenance Event Linked

This should use the same provenance model already demonstrated in the administrator flow.

==================================================
STUDENT SCREEN 13 — HISTORY
==================================================

Show a simple learner-readable history:

Aug 25

Credential submitted

Aug 25

Evidence fingerprint created

Aug 25

External verification requested

Aug 26

Northstar Technologies signed attestation

Aug 27

Algoma University reviewed submission

Aug 27

Credential verified

Then:

View Technical Audit Details

can reveal:

event hashes
versions
timestamps
signatures

Students should be able to see useful history for THEIR credential, not the full institution audit log.

==================================================
STUDENT PRIVILEGE BOUNDARIES
==================================================

Make permissions visually obvious.

STUDENT CAN:

- view their own credentials
- view their own credential proofs
- receive institution-issued credentials
- submit career credential claims / evidence
- request external verification where workflow allows
- track external approval requests
- respond to correction requests
- view their own provenance / history
- share credentials
- create verification links
- display QR verification
- use their credential wallet / record

STUDENT CANNOT:

- view other learners' records
- issue institution credentials
- approve institution batches
- sign institution credentials
- use institution issuer keys
- access institution-wide audit logs
- configure integrations
- configure credential workflow policy
- create arbitrary trusted attestors
- mark their own credential verified
- bypass required external verification
- bypass institutional approval
- edit immutable history
- access another tenant

==================================================
ADMINISTRATOR PRIVILEGE BOUNDARIES
==================================================

KEEP EXISTING ADMIN PERMISSIONS.

Administrators / authorized institution roles may have institution operational capabilities.

However, not every staff member necessarily has every privilege.

Visually demonstrate RBAC with a small area under:

Profile / Access

Example:

Role:
Credential Administrator

Permissions:

Credential Intake
Batch Management
Submission Review
External Attestation Requests
Credential Operations

Then perhaps display:

Institution Signing:
Not permitted

if the user is not the Registrar / authorized signing officer.

This is important:

Do not assume every administrator can use the institution signing key.

The existing final-signature workflow may require an authorized Registrar / Issuing Officer role.

==================================================
OPTIONAL STAFF ROLE DIFFERENCE
==================================================

Without building a completely separate interface for every staff role, demonstrate that LinkCert can distinguish roles such as:

Credential Administrator

Department Reviewer

Registrar / Authorized Issuer

Student / Learner

Registered External Attestor

Public Verifier

For example:

Credential Administrator:
Can prepare batches and workflows

Department Reviewer:
Can review assigned academic claims

Registrar / Authorized Issuer:
Can perform final institutional approval / signing where authorized

Student:
Can manage only their own credentials and claims

External Attestor:
Can sign only permitted external attestations

Public Verifier:
Can verify presented credentials but has no tenant administration access

Do not overbuild these roles.

The main two authenticated experiences being demonstrated should remain:

1. Algoma University Institution Staff
2. Algoma University Student / Learner

The external attestor portal and public verifier experience already exist and should continue to connect to them.

==================================================
STUDENT DATA ISOLATION
==================================================

The existing architecture uses:

tenant_id

PostgreSQL RLS

tenant-scoped storage

role-based permissions

For a student, also enforce record-level authorization.

Explain subtly:

Tenant resolved:
tenant_algoma_001

Role:
Student

Data scope:
Own credential records only

So:

Olivia Chen may access Olivia Chen's authorized records.

She cannot access another Algoma student's credential simply because both belong to the same tenant.

==================================================
PROTOTYPE PRESENTATION MODE
==================================================

Add an elegant way for the presenter to demonstrate the two experiences.

On the login screen or a hidden demo menu include:

DEMO PERSONA

Alex Morgan
Algoma University
Credential Administrator

Olivia Chen
Algoma University
Student / Learner

When Alex is used:

navigate into the EXISTING institution interface.

When Olivia is used:

navigate into the NEW student interface.

Clearly label this control as:

Prototype Demo Only

Do not make it look like an actual production role selector.

==================================================
MAIN STUDENT DEMO FLOW
==================================================

The clickable student presentation should be:

Secure Login

→ Organization Resolved

→ Role Resolved: Student

→ Student Home

→ Add Career Credential

→ Upload Evidence

→ Preserve Evidence + Create Fingerprint

→ Verification Policy Evaluated

→ Request External Verification

→ External Organization Verified

→ Request Sent

→ External Attestor Portal

→ Attestor Signs Attestation

→ Student Sees Attestation Received

→ Administrator Receives Learner Submission

→ Institution Review

→ Institution Final Approval where required

→ Institution Signs final institution-issued credential where applicable

→ Student Receives Verified Credential

→ Student Shares Credential

→ Public Verification

==================================================
IMPORTANT PRODUCT DISTINCTION
==================================================

There are now FOUR perspectives in the same ecosystem:

STUDENT / LEARNER

Submits, receives, tracks and shares credentials.

INSTITUTION

Reviews, governs, approves and issues institution credentials.

REGISTERED EXTERNAL ATTESTOR

Confirms only the external claim it is authorized to attest.

PUBLIC VERIFIER / EMPLOYER

Checks authenticity of the final credential.

LinkCert connects the four without confusing their authority.

==================================================
DESIGN REQUIREMENTS
==================================================

Preserve the excellent visual style of the existing generated prototype.

The new student interface should feel related to the administrator application but not identical.

Administrator:
operational / data-heavy / workflow-focused

Student:
personal / credential-focused / simpler / easier / polished

Use the SAME:

brand
typography
core palette
border system
button system
visual quality

But student navigation and information architecture should be purpose-built.

Do not turn the student portal into a mini admin dashboard.

Do not redesign existing screens unnecessarily.

Before completing, test that:

- Admin login leads to admin interface
- Student login leads to student interface
- Students cannot see admin navigation
- Students can submit external career credentials
- student upload receives provenance protection
- student can request permitted external verification
- external attestor flow connects correctly
- institution still retains final authority
- final institution credential is signed by institution, not student or LinkCert
- student receives and can share the verified result
- public verification still works
- roles and privileges are understandable without verbal explanation