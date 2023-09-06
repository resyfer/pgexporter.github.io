---
layout: post
title:  "pgexporter 0.4.0"
date:   2023-09-06
categories: release announcement
---

This is a feature release.

This release was driven by @resyfer and his GSoC 2023 project.

### Features
* [#104 Code cleanup after GSoC 2023](https://github.com/pgexporter/pgexporterissues/104)
* [#98 Clang Sanitizer Compiler Options](https://github.com/pgexporter/pgexporterissues/98)
* [#96 Instructions for use with Grafana](https://github.com/pgexporter/pgexporterissues/96)
* [#88 More version specific Internal Metrics](https://github.com/pgexporter/pgexporterissues/88)
* [#86 PostgreSQL 16 metrics examples](https://github.com/pgexporter/pgexporterissues/86)
* [#84 PostgreSQL 15 metrics examples](https://github.com/pgexporter/pgexporterissues/84)
* [#82 PostgreSQL 14 metrics examples](https://github.com/pgexporter/pgexporterissues/82)
* [#80 PostgreSQL 13 metrics examples](https://github.com/pgexporter/pgexporterissues/80)
* [#78 PostgreSQL 12 metrics examples](https://github.com/pgexporter/pgexporterissues/78)
* [#76 PostgreSQL 11 metrics examples](https://github.com/pgexporter/pgexporterissues/76)
* [#74 PostgreSQL 10 metrics examples](https://github.com/pgexporter/pgexporterissues/74)
* [#66 YAML to support multiple alternatives for queries with minimum version requirements](https://github.com/pgexporter/pgexporterissues/66)
* [#64 Retrieving Server's Information](https://github.com/pgexporter/pgexporterissues/64)
* [#56 An improvement to pgexporter_append for multiple](https://github.com/pgexporter/pgexporter/issues/56)

### Enhancements
* [#100 Char to unsigned typecast](https://github.com/pgexporter/pgexporter/issues/100)
* [#54 Link to libatomic on Linux](https://github.com/pgexporter/pgexporter/issues/54)
* [#53 Remove size constraint for memory logging](https://github.com/pgexporter/pgexporter/issues/53)
* [#51 Support pgexporter_ext 0.2.x](https://github.com/pgexporter/pgexporter/issues/51)
* [#50 Support trailing comment in configuration](https://github.com/pgexporter/pgexporter/issues/50)

### Bug fixes
* [#102 YAML Memory Leak](https://github.com/pgexporter/pgexporter/issues/102)
* [#94 Pgexporter_pg_settings metrics across servers are not grouped properly](https://github.com/pgexporter/pgexporter/issues/94)
* [#92 Last server name in config can be duplicate](https://github.com/pgexporter/pgexporter/issues/92)
* [#90 Duplicate Server Name](https://github.com/pgexporter/pgexporter/issues/90)
* [#72 Some empty queries break output](https://github.com/pgexporter/pgexporter/issues/72)
* [#71 pgexporter produces incorrect output](https://github.com/pgexporter/pgexporter/issues/71)
* [#69 Query is supposed to run on both primary and replica servers](https://github.com/pgexporter/pgexporter/issues/69)
* [#58 Strncpy output truncate build warning for prometheus.c](https://github.com/pgexporter/pgexporter/issues/58)
* [#52 Guard against invalid user configuration](https://github.com/pgexporter/pgexporter/issues/52)

### Download

* [Source code](https://github.com/pgexporter/pgexporter/releases/download/0.4.0/pgexporter-0.4.0.tar.gz)
* [pgexporter_ext](https://github.com/pgexporter/pgexporter_ext/releases/download/0.2.2/pgexporter_ext-0.2.2.tar.gz)
* [RPM](https://yum.postgresql.org) for Fedora 36/37, RHEL 8.x, RHEL 9.x, Rocky Linux 8.x and Rocky Linux 9.x
