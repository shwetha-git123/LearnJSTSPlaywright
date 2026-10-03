# VWO – Full Platform QA Test Plan

**Test Plan ID:** TP-VWO-001  
**Version:** 1.0  
**Status:** Draft  
**Product:** VWO – Digital Experience Optimization Platform  
**Application Reference:** https://app.vwo.com/  
**PRD Date:** January 7, 2026  
**Prepared By:** QA Team  
**Testing Approach:** Manual Testing  
**Methodology:** Agile / Sprint-based  

---

## 1. Test Plan ID and Title

| Field | Value |
|---|---|
| Test Plan ID | TP-VWO-001 |
| Title | VWO – Full Platform QA Test Plan |
| Version | 1.0 |
| Status | Draft |
| Product | VWO – Digital Experience Optimization Platform |
| Source Requirement | Product Requirements Document (PRD), dated January 7, 2026 |
| Test Approach | Manual testing only |
| Delivery Model | Agile / Sprint-based |

---

## 2. Objective and References

### 2.1 Objective

The objective of this test plan is to define the QA strategy and planned testing approach for the full VWO platform based on the supplied Product Requirements Document (PRD).

Testing will focus on validating that the platform's documented functional capabilities work as intended across the major product areas, integrations, supported browsers, and core user workflows.

The plan is intended to provide a high-level QA strategy rather than detailed test cases.

### 2.2 Product Overview

VWO is described in the PRD as an enterprise-grade Digital Experience Optimization (DXO) and Conversion Rate Optimization (CRO) platform. It supports experimentation, behavioral insights, personalization, workflow management, and integrations.

### 2.3 References

- VWO Product Requirements Document (PRD), dated January 7, 2026.
- Generic RICE POT Template for QA, Test Plan profile.

### 2.4 Business Objectives Relevant to QA

The PRD identifies the following primary business goals:

- Improve conversion rates across key user funnels.
- Enable teams to test hypotheses and validate UX changes using empirical data.
- Reduce engineering dependency for experimentation and optimization workflows.
- Provide unified insights across optimization activities.

---

## 3. In Scope and Out of Scope

### 3.1 In Scope

The test plan covers the full VWO platform capabilities described in the PRD:

1. Experimentation and Testing
   - A/B Testing
   - Split URL Testing
   - Multivariate Testing
   - Multiple experiment variations
   - Audience targeting
   - Custom goals and metrics
   - SmartStats
   - Version previews
   - Cross-browser/cross-device validation
   - Scheduling and reporting

2. Behavioral Insights
   - Heatmaps
   - Session recordings
   - On-page surveys and feedback
   - Funnel analytics

3. Personalization
   - Audience segmentation
   - Geography/behavior/demographic targeting
   - Customized content delivery

4. Program and Workflow Management
   - Central planning
   - Collaboration
   - Kanban-style experiment workflows

5. Integrations
   - Shopify
   - Salesforce
   - Segment
   - Snowflake
   - WordPress
   - Drupal
   - CDPs and analytics/tracking systems, where available in the approved QA environment

6. Cross-browser compatibility
   - Chrome
   - Firefox
   - Edge
   - Safari
   - Desktop and mobile viewport testing

7. Standard QA test types
   - Functional testing
   - Integration testing
   - Regression testing
   - Smoke testing
   - Sanity testing
   - Compatibility testing
   - Basic usability testing
   - Basic performance testing

### 3.2 Out of Scope

The following are outside the primary scope of this high-level plan unless separately requested or approved:

- Automated test execution and automation framework implementation.
- Detailed penetration testing or specialized security testing.
- Dedicated performance engineering, stress testing, endurance testing, or capacity benchmarking.
- Full scalability testing.
- Formal GDPR/CCPA compliance audit.
- Disaster recovery certification or specialized reliability engineering.
- Native mobile SDK testing beyond mobile viewport/browser validation.
- AI-driven suggestion engine, native mobile SDK enhancements, and advanced predictive analytics identified as future enhancements in the PRD.
- Production/customer data testing.
- Detailed API test-case design unless required by an integration-specific test effort.

---

## 4. Requirements and Planned Coverage

### 4.1 Functional Requirement Coverage

| Requirement ID | Requirement | Priority in PRD | Planned QA Coverage |
|---|---|---|---|
| FR1 | A/B, Split & Multivariate Testing | Must | Functional, smoke, sanity, regression, compatibility |
| FR2 | SmartStats Engine | Must | Functional, integration, regression, basic usability |
| FR3 | Visual & Code Editor | Must | Functional, smoke, regression, compatibility, basic performance |
| FR4 | Heatmaps & Session Recordings | Must | Functional, integration, regression, compatibility |
| FR5 | Audience Targeting | High | Functional, integration, regression, compatibility |
| FR6 | Real-time Reporting & Dashboards | Must | Functional, integration, regression, basic performance |
| FR7 | Personalization Engine | High | Functional, integration, regression, compatibility |
| FR8 | Integration Connectors | High | Integration, functional, regression |
| FR9 | Collaboration & Workflow Management | Medium | Functional, regression, usability |

### 4.2 Planned Coverage by Major Area

| Area | Primary Coverage |
|---|---|
| Experiment creation | Valid and invalid experiment configuration, variations, goals, metrics |
| Audience targeting | Segment configuration and targeting behavior |
| Visual/Code Editor | Experiment configuration and editing workflows |
| Experiment launch | Launch, scheduling, monitoring, and lifecycle behavior |
| SmartStats | Results presentation and documented statistical-analysis behavior |
| Behavioral Insights | Heatmaps, recordings, surveys, and funnels |
| Personalization | Segment-based personalized experiences |
| Reporting | Dashboard data, experiment metrics, and reporting workflows |
| Workflow Management | Planning, collaboration, backlog/workflow actions |
| Integrations | Data synchronization and integration workflow validation |
| Browser compatibility | Core flows across agreed browser matrix |
| Performance | Basic response-time validation for applicable editing workflows |

### 4.3 Requirement Traceability

Detailed test-case-level traceability will be established during test-case preparation. Where the PRD does not provide a more granular acceptance criterion, the corresponding requirement ID will be used as the traceability reference.

---

## 5. Test Approach, Levels, and Types

### 5.1 Overall Approach

Testing will follow an Agile/Sprint-based approach. QA activities will be aligned with feature development and sprint delivery.

The testing lifecycle will generally follow:

1. Requirement analysis
2. Test planning
3. Test-case preparation
4. Smoke testing
5. Functional testing
6. Integration testing
7. Regression testing
8. Compatibility testing
9. Final QA validation and sign-off

### 5.2 Test Levels

#### Functional Testing

Validate that documented VWO features and workflows meet the functional requirements.

Coverage includes positive, negative, boundary, and applicable edge scenarios.

#### Integration Testing

Validate data and workflow interactions between VWO and supported external platforms/connectors available in the QA environment.

#### Regression Testing

Validate that new feature changes do not adversely affect existing functionality.

Regression scope will be risk-based and expanded for impacted modules.

#### Smoke Testing

Perform a focused build-level validation of critical application availability and core workflows before detailed testing begins.

#### Sanity Testing

Perform focused validation after feature changes or defect fixes to confirm the affected functionality is suitable for further testing.

#### Compatibility Testing

Validate supported core workflows using:

- Chrome – latest stable
- Firefox – latest stable
- Edge – latest stable
- Safari – latest stable

Testing will cover desktop and mobile viewport scenarios.

#### Basic Usability Testing

Evaluate key user journeys for understandable navigation, consistent behavior, and usability issues that materially affect the documented workflows.

#### Basic Performance Testing

The PRD states that the system should respond within 2 seconds for editing workflows. Basic QA performance checks will validate applicable editing workflows against this documented requirement where the QA environment permits reliable measurement.

Detailed performance engineering and load/stress testing are outside this plan.

### 5.3 Manual Testing Only

This test plan is intentionally limited to manual testing.

No automation framework, automated regression suite, or automation implementation is included.

---

## 6. Environment, Tools, Access, and Test Data

### 6.1 Test Environment

A dedicated QA/Staging environment will be used.

| Item | Status |
|---|---|
| QA/Staging URL | Not provided |
| QA infrastructure details | Not provided |
| Production access | Not required |
| Environment owner | Not provided |

The public/application reference URL in the PRD is `https://app.vwo.com/`; it is treated as a product reference and not as confirmation of the execution environment.

### 6.2 Browsers and Execution Targets

| Target | Planned Coverage |
|---|---|
| Chrome | Latest stable |
| Firefox | Latest stable |
| Edge | Latest stable |
| Safari | Latest stable |
| Desktop | Yes |
| Mobile viewport | Yes |

Exact OS versions and device models are not provided and should be finalized if required for execution.

### 6.3 Tools

The PRD does not specify a QA/test-management/defect-management tool.

Therefore:

- Test management tool: Not provided
- Defect tracking tool: Not provided
- Browser/device execution infrastructure: Not provided
- Performance measurement tooling: Not provided

The project team should confirm the approved tools before execution.

### 6.4 Test Accounts and Access

Required QA access is to be provisioned before execution.

Expected access may include:

- QA user accounts
- Required user roles
- Access to applicable VWO modules
- Access to configured integration environments
- Integration credentials where required

Actual credentials and role assignments are Not Provided.

### 6.5 Test Data

Synthetic QA data will be used.

Expected data categories include:

- Sample experiments
- Multiple variations
- Sample goals and metrics
- Audience segments
- Behavioral interaction data
- Personalization rules
- Sample reporting data
- Integration test records

Actual datasets, accounts, segments, and integration credentials are Not Provided and must be provisioned before testing.

Production/customer data must not be assumed for QA execution.

---

## 7. Entry and Exit Criteria

### 7.1 Entry Criteria

Testing may begin when:

- Approved requirements/user stories are available for the sprint.
- Required acceptance criteria are available or clarified.
- A deployable build is available in the QA/Staging environment.
- QA environment is accessible.
- Required test accounts and roles are provisioned.
- Required synthetic test data is available.
- Applicable integrations required for the sprint are available.
- Smoke testing prerequisites are met.
- Known blocking environment issues have been resolved or formally accepted.

### 7.2 Exit Criteria

Testing for a release/sprint may be considered complete when:

- All planned critical/high-priority functional scenarios have been executed.
- Smoke testing has passed.
- No open Critical/Blocker defects remain.
- No unresolved High-severity defects remain without Product Owner approval.
- Planned regression testing has been completed.
- Agreed browser compatibility testing has been completed.
- Critical business flows pass.
- Test results and defect status have been documented.
- QA test summary/report has been completed.
- Required QA Lead/Product Owner sign-off has been obtained.

Exit criteria are proposed for this test plan because the PRD does not define formal QA release thresholds.

---

## 8. Roles, Responsibilities, Estimates, and Schedule

### 8.1 Roles and Responsibilities

| Role | Responsibility |
|---|---|
| QA Lead | Test planning, QA coordination, scope management, status reporting, risk tracking, final QA recommendation |
| QA Engineers | Test design, manual execution, defect reporting, retesting, regression testing, test evidence |
| Developers | Defect investigation, root-cause analysis, fixes, technical support |
| Product Owner | Requirement clarification, acceptance criteria clarification, business acceptance |
| DevOps | QA environment availability, deployment support, infrastructure support |

### 8.2 Agile/Sprint-Based Schedule

Calendar dates and sprint duration are Not Provided.

The proposed sequence is:

| Phase | Activity |
|---|---|
| Sprint Planning / Requirement Analysis | Review requirements, acceptance criteria, dependencies, and risks |
| Test Planning | Define scope, approach, test data, environment, and coverage |
| Test Preparation | Prepare test scenarios/cases and required synthetic data |
| Build Validation | Execute smoke testing |
| Sprint QA | Execute functional testing |
| Integration Validation | Validate applicable integrations |
| Regression | Validate impacted and existing critical functionality |
| Compatibility | Execute browser and viewport coverage |
| Final Validation | Verify critical flows, review open defects, prepare QA summary |
| Sign-off | QA Lead/Product Owner review and approval |

The schedule should be aligned with the actual Agile sprint/release calendar once provided.

### 8.3 Estimates

Effort estimates are **Not Provided** because the PRD does not specify sprint duration, team size, feature complexity per release, or execution volume.

Effort should be estimated after sprint scope and acceptance criteria are finalized.

---

## 9. Defect Management and Reporting

### 9.1 Defect Lifecycle

The proposed defect lifecycle is:

**New → Triaged → Assigned → In Progress → Fixed → Ready for Retest → Retest → Closed**

A defect may be reopened if the reported issue persists or the fix introduces a regression.

### 9.2 Defect Information

Each defect should contain, where applicable:

- Defect title
- Environment
- Module/feature
- Preconditions
- Test data
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority
- Evidence such as screenshots/logs
- Build/version
- Reproduction status

### 9.3 Severity and Priority

Severity and priority should be proposed by QA during initial triage and confirmed through the project defect process.

Critical/Blocker issues should be reviewed promptly because they may prevent continued testing or release.

### 9.4 Retesting and Regression

After a defect is marked fixed:

1. QA retests the defect.
2. If fixed, the defect is closed according to the agreed workflow.
3. If not fixed, the defect is reopened with evidence.
4. Impacted regression scenarios are executed where appropriate.

### 9.5 Reporting

QA status reporting should communicate:

- Planned vs executed testing
- Passed/failed/blocked scenarios
- Open defects by severity
- Critical risks
- Environment blockers
- Regression status
- Compatibility status
- Exit-criteria status

---

## 10. Risks, Dependencies, Assumptions, and Open Questions

### 10.1 Risks

| Risk | Impact | Mitigation |
|---|---|---|
| QA environment is unavailable or unstable | Testing delays | Provision and validate QA environment before execution |
| Required integration environments are unavailable | Integration coverage blocked | Confirm integration dependencies during sprint planning |
| Test data is not provisioned | Functional scenarios cannot be executed | Prepare synthetic QA data before execution |
| Requirements/acceptance criteria are incomplete | Incorrect or incomplete coverage | Resolve requirement gaps before test-case finalization |
| Large number of interconnected modules | Regression risk | Maintain risk-based regression coverage |
| Browser-specific behavior | User-facing compatibility issues | Execute agreed browser matrix |
| Changes late in sprint | Reduced regression time | Prioritize critical business flows and impacted areas |

### 10.2 Dependencies

- QA/Staging environment
- Required user accounts and roles
- Synthetic test data
- Applicable external integration environments
- Stable builds
- Approved requirements and acceptance criteria
- Defect-tracking mechanism
- Product Owner and development availability for clarification/triage

### 10.3 Assumptions

- Testing is performed using a dedicated QA/Staging environment.
- Synthetic data is used for QA.
- Production/customer data is not required.
- Manual testing is the agreed test approach.
- Testing follows an Agile/Sprint-based delivery model.
- Chrome, Firefox, Edge, and Safari latest stable versions are the baseline browser targets.
- Desktop and mobile viewport testing are required.
- The standard QA exit criteria defined in this document are proposed for this plan.
- Actual environment URLs, credentials, tools, and schedules will be provided by the project team.

### 10.4 Open Questions

The following items remain Not Provided by the PRD:

1. QA/Staging environment URL and infrastructure details.
2. User roles and exact permission matrix.
3. Test accounts and credentials.
4. Exact synthetic test-data requirements.
5. Integration environments and credentials.
6. Approved test-management and defect-tracking tools.
7. Exact operating-system/device matrix, if required beyond browser/viewport coverage.
8. Sprint/release dates and duration.
9. Detailed acceptance criteria for individual features.
10. Formal project-specific severity/priority definitions.
11. Formal release approval/sign-off ownership beyond the proposed roles.

---

## 11. Suspension and Resumption Criteria

### 11.1 Suspension Criteria

Testing may be suspended when:

- The QA environment is unavailable or unusable.
- A Critical/Blocker defect prevents testing of major workflows.
- The deployed build is unstable and prevents meaningful execution.
- Required test data or access is unavailable.
- Critical external integrations required for the current test scope are unavailable.
- Requirements change materially during execution and require clarification before testing can continue.

### 11.2 Resumption Criteria

Testing may resume when:

- The environment is restored and validated.
- Blocking defects are fixed or an approved workaround is available.
- Required accounts/access are restored.
- Required test data is available.
- Required integrations are available.
- Updated requirements/acceptance criteria are reviewed where applicable.
- A smoke test confirms that the build is suitable for continued testing.

After resumption, QA should assess the impact of the interruption and execute appropriate regression/smoke coverage before continuing with the remaining test scope.

---

## 12. Test Deliverables and Approval

### 12.1 Planned Test Deliverables

The QA team is expected to produce, as applicable:

1. Test Plan
2. Test Scenarios/Test Cases
3. Test Data
4. Test Execution Results
5. Defect Reports
6. Regression Test Results
7. Compatibility Test Results
8. QA Status Reports
9. Test Summary Report
10. QA Sign-off/Approval record

### 12.2 Approval

The test plan and final QA status should be reviewed by the appropriate project stakeholders.

Proposed approval roles:

| Role | Approval / Review Responsibility |
|---|---|
| QA Lead | Test strategy, coverage, execution status, QA sign-off recommendation |
| Product Owner | Business requirements and acceptance |
| Development | Technical defect resolution and readiness |
| DevOps | Environment readiness where applicable |

Final named approvers are **Not Provided** in the PRD and should be confirmed by the project team.

---

## Appendix A — PRD Requirement Reference

| PRD Area | Reference |
|---|---|
| Experimentation & Testing | A/B, Split URL, Multivariate, audience targeting, goals/metrics, SmartStats, previews, cross-browser/device QA, scheduling and reporting |
| Behavioral Insights | Heatmaps, session recordings, surveys/feedback, funnel analytics |
| Personalization | Geography, behavior, demographics, customized content |
| Program & Workflow Management | Planning, collaboration, Kanban-style workflows |
| Integrations | Shopify, Salesforce, Segment, Snowflake, WordPress, Drupal, CDPs and analytics systems |
| NFRs | 2-second editing response target, 2FA/RBAC/activity logs, scalability, GDPR/CCPA/privacy, 99.9% uptime SLA |

## Appendix B — Important Scope Note

This document is a **high-level manual QA test plan**. It defines planned coverage and QA strategy; it does not represent executed testing.

No pass/fail results, defect counts, environment validation results, or production-readiness claims are made by this document.

All project-specific information not supplied in the PRD or through the clarification process is explicitly identified as **Not Provided**, proposed, or requiring confirmation.
