import { initSentry } from '@linagora/twake-node-telemetry/sentry';
import { readFileSync } from 'node:fs';
import { URL } from 'node:url';

const { name, version } = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
) as { name: string; version: string };

// Loaded with `node --import` ahead of main.js. Sends nothing without SENTRY_DSN.
initSentry({ service: name, version });
