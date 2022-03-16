---
layout: post
title:  "pgexporter 0.2.1"
date:   2022-03-16
categories: release announcement
---

This is an enhancement and bug fix release of pgexporter.

### Enhancements

* [#13](https://github.com/pgexporter/pgexporter/issues/13) Support Unix Domain Socket as a PostgreSQL connection
* [#17](https://github.com/pgexporter/pgexporter/issues/17) version support
* [#18](https://github.com/pgexporter/pgexporter/issues/18) uptime support
* [#19](https://github.com/pgexporter/pgexporter/issues/19) primary support

### Bug fixes

* [#15](https://github.com/pgexporter/pgexporter/issues/15) Fix memory leak in pgexporter_connect
* [#16](https://github.com/pgexporter/pgexporter/issues/16) Add a query guard for inactive servers

### Download

* [Source code](https://github.com/pgexporter/pgexporter/releases/download/0.2.1/pgexporter-0.2.1.tar.gz)
* [RPM](https://yum.postgresql.org) for Fedora 33/34, RHEL 8.x and CentOS 8.x
