---
outline: deep
---

# pgexporter 0.4.0

This is a feature release.

This release was driven by [@resyfer](https://github.com/resyfer) and his GSoC 2023 project.

## Features

- [#104](https://github.com/pgexporter/pgexporter/issues/104) Code cleanup after GSoC 2023
- [#98](https://github.com/pgexporter/pgexporter/issues/98) Clang Sanitizer Compiler Options
- [#96](https://github.com/pgexporter/pgexporter/issues/96) Instructions for use with Grafana
- [#88](https://github.com/pgexporter/pgexporter/issues/88) More version specific Internal Metrics
- [#86](https://github.com/pgexporter/pgexporter/issues/86) PostgreSQL 16 metrics examples
- [#84](https://github.com/pgexporter/pgexporter/issues/84) PostgreSQL 15 metrics examples
- [#82](https://github.com/pgexporter/pgexporter/issues/82) PostgreSQL 14 metrics examples
- [#80](https://github.com/pgexporter/pgexporter/issues/80) PostgreSQL 13 metrics examples
- [#78](https://github.com/pgexporter/pgexporter/issues/78) PostgreSQL 12 metrics examples
- [#76](https://github.com/pgexporter/pgexporter/issues/76) PostgreSQL 11 metrics examples
- [#74](https://github.com/pgexporter/pgexporter/issues/74) PostgreSQL 10 metrics examples
- [#66](https://github.com/pgexporter/pgexporter/issues/66) YAML to support multiple alternatives for queries with minimum version requirements
- [#64](https://github.com/pgexporter/pgexporter/issues/64) Retrieving Server's Information
- [#56](https://github.com/pgexporter/pgexporter/issues/56) An improvement to pgexporter_append for multiple

## Enhancements

- [#100](https://github.com/pgexporter/pgexporter/issues/100) Char to unsigned typecast
- [#54](https://github.com/pgexporter/pgexporter/issues/54) Link to libatomic on Linux
- [#53](https://github.com/pgexporter/pgexporter/issues/53) Remove size constraint for memory logging
- [#51](https://github.com/pgexporter/pgexporter/issues/51) Support pgexporter_ext 0.2.x
- [#50](https://github.com/pgexporter/pgexporter/issues/50) Support trailing comment in configuration

## Bug fixes

- [#102](https://github.com/pgexporter/pgexporter/issues/102) YAML Memory Leak
- [#94](https://github.com/pgexporter/pgexporter/issues/94) Pgexporter_pg_settings metrics across servers are not grouped properly
- [#92](https://github.com/pgexporter/pgexporter/issues/92) Last server name in config can be duplicate
- [#90](https://github.com/pgexporter/pgexporter/issues/90) Duplicate Server Name
- [#72](https://github.com/pgexporter/pgexporter/issues/72) Some empty queries break output
- [#71](https://github.com/pgexporter/pgexporter/issues/71) pgexporter produces incorrect output
- [#69](https://github.com/pgexporter/pgexporter/issues/69) Query is supposed to run on both primary and replica servers
- [#58](https://github.com/pgexporter/pgexporter/issues/58) Strncpy output truncate build warning for prometheus.c
- [#52](https://github.com/pgexporter/pgexporter/issues/52) Guard against invalid user configuration

## Download

- [Source Code](https://github.com/pgexporter/pgexporter/releases/download/0.4.0/pgexporter-0.4.0.tar.gz)
- [RPM](https://yum.postgresql.org/) for Fedora 37/38, RHEL 8.x, RHEL 9.x, Rocky Linux 8.x and Rocky Linux 9.x