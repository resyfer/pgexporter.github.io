---
layout: post
title:  "pgexporter 0.1.0"
date:   2021-09-15
categories: release announcement
---

Initial release of pgexporter.

This release focused on [Prometheus](https://prometheus.io/) metrics for

* `pg_database`
* `pg_replication_slots`
* `pg_settings`

as a Proof-of-Concept.

Please, submit [feature requests](https://github.com/pgexporter/pgexporter/issues) or [pull requests](https://github.com/pgexporter/pgexporter/pulls) for your needs.

### Features

* [Prometheus](https://prometheus.io/) exporter
* Remote management
* Transport Layer Security (TLS) v1.2+ support
* Daemon mode
* User vault

### Download

* [Source code](https://github.com/pgexporter/pgexporter/releases/download/0.1.0/pgexporter-0.1.0.tar.gz)
* [RPM](https://yum.postgresql.org) for Fedora 33/34, RHEL 8.x and CentOS 8.x
