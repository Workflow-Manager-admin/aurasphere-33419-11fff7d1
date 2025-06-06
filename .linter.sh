#!/bin/bash
cd /home/kavia/workspace/code-generation/aurasphere-33419-11fff7d1/aurasphere
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

