# meet-side-service

Sidecar service for Meet. It consumes Twake Workplace events from RabbitMQ and applies them where Meet reads them:

- User settings (language, timezone) from common-settings go to Meet's PostgreSQL database.
- Plan entitlements (transcription, recording) go to LinTO Studio. This part is off unless `ENTITLEMENTS_ENABLED=true`.

## Quick start

```sh
npm install
cp .env.example .env  # then edit
npm run dev
npm run test:unit  # npm test also runs the integration tests, which need Docker
```

## Documentation

- [Architecture](docs/architecture.md): what the service does, message flow, design rationale. Entitlements are covered in [their own section](docs/architecture.md#entitlements) and in [ADR 061](https://github.com/linagora/twake-workplace-private/pull/1745).
- [Operations](docs/operations.md): [configuration](docs/operations.md#configuration), database and RabbitMQ permissions, endpoints and metrics, troubleshooting.
- [Development](docs/development.md): project layout, tests, releasing.
- [Running locally](docs/running-locally.md): end-to-end smoke test against Docker PostgreSQL and RabbitMQ.
