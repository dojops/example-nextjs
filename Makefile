.PHONY: help lint-docker

.DEFAULT_GOAL := help

# Variables
DOCKERFILE ?= Dockerfile
HADOLINT_IMAGE ?= hadolint/hadolint:latest
HADOLINT_CMD ?= docker run --rm -i $(HADOLINT_IMAGE)

help: ## Show this help message
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

lint-docker: ## Lint Dockerfile using Hadolint
ifeq (, $(shell which hadolint 2>/dev/null))
	@echo "Using Docker image for Hadolint..."
	@cat $(DOCKERFILE) | $(HADOLINT_CMD)
else
	@echo "Using local Hadolint installation..."
	@hadolint $(DOCKERFILE)
endif