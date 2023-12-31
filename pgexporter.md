---
outline: deep
---

# pgexporter

pgexporter is a [Prometheus](https://prometheus.io/) exporter for PostgreSQL.

pgexporter is licensed under the [3-Clause BSD license](https://opensource.org/licenses/BSD-3-Clause).

## Why

The goal of the project is to provide the Open Source community with an advanced [Prometheus](https://prometheus.io/) exporter for [PostgreSQL](https://www.postgresql.org/).

## Features

- [Prometheus](https://prometheus.io/) exporter
- Custom metrics
- Remote management
- Transport Layer Security (TLS) v1.2+ support
- Daemon mode
- User vault

## Overview

pgexporter makes use of:

- Process model.
- Shared memory model across processes.
- [libev](http://software.schmorp.de/pkg/libev.html) for fast network interactions.
- [Atomic operations](https://en.cppreference.com/w/c/atomic) are used to keep track of state.
- The [PostgreSQL](https://www.postgresql.org/) native protocol v3 for its communication.

## Further information

- [GitHub](https://github.com/pgexporter/pgexporter)

## Related projects
- [pgagroal](https://agroal.github.io/pgagroal/) - High-performance connection pool for PostgreSQL
- [pgmoneta](https://pgmoneta.github.io/) - Backup / restore solution for PostgreSQL