---
dojops: 1
scannedAt: '2026-03-10T18:40:17.794Z'
primaryLanguage: node
languages:
  - name: node
    confidence: 0.9
    indicator: package.json
  - name: typescript
    confidence: 0.85
    indicator: tsconfig.json
packageManager: null
ci:
  - platform: github-actions
    configPath: .github/workflows/ci.yml
container:
  hasDockerfile: true
  hasCompose: false
  hasSwarm: false
infra:
  hasTerraform: false
  tfProviders: []
  hasState: false
  hasKubernetes: false
  hasHelm: false
  hasAnsible: false
  hasKustomize: false
  hasVagrant: false
  hasPulumi: false
  hasCloudFormation: false
  hasPacker: false
  hasCdk: false
  hasSkaffold: false
  hasArgoCD: false
  hasTiltfile: false
  hasHelmfile: false
monitoring:
  hasPrometheus: false
  hasNginx: false
  hasSystemd: false
  hasHaproxy: false
  hasTomcat: false
  hasApache: false
  hasCaddy: false
  hasEnvoy: false
scripts:
  shellScripts: []
  pythonScripts: []
  hasJustfile: false
security:
  hasEnvExample: false
  hasGitignore: true
  hasCodeowners: false
  hasSecurityPolicy: false
  hasDependabot: false
  hasRenovate: false
  hasSecretScanning: false
  hasEditorConfig: false
meta:
  isGitRepo: true
  isMonorepo: false
  hasMakefile: false
  hasReadme: true
  hasEnvFile: false
relevantDomains:
  - ci-cd
  - ci-debugging
  - containerization
devopsFiles:
  - .github/workflows/ci.yml
  - .gitignore
  - Dockerfile
---

# DojOps Project Context

> Managed by DojOps CLI. Run `dojops init` to refresh. The Notes section is yours to edit.

## Overview

**Tech Stack:** node, Docker, github-actions

## Detected Stack

- **Primary Language:** node (also: typescript)
- **CI/CD:** github-actions (`.github/workflows/ci.yml`)
- **Container:** Dockerfile

**DevOps Files:**
- `.github/workflows/ci.yml`
- `.gitignore`
- `Dockerfile`

## Notes

<!-- Add project-specific notes, conventions, or preferences below. -->
<!-- DojOps preserves this section across re-init and updates. -->

## Recent Activity

<!-- activity-start -->
- 2026-03-10T18:42:39Z — Plan applied: PARTIAL
- 2026-03-10T18:41:52Z — Plan applied: PARTIAL (`ansible/playbooks/install-nodejs.yml`)
<!-- activity-end -->
