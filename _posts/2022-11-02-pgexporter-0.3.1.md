---
layout: post
title:  "pgexporter 0.3.1"
date:   2022-11-02
categories: release announcement
---

This is an enhancement release.

### Enhancements

* [#50](https://github.com/pgexporter/pgexporter/issues/50) Support trailing comment in configuration
* [#51](https://github.com/pgexporter/pgexporter/issues/51) Support pgexporter_ext 0.2.0

### pgexporter_ext

pgexporter_ext 0.2.0 has been released with

* OS information
* CPU information
* Memory information
* Network information
* Load averages

Please, use

```
DROP EXTENSION pgexporter_ext;
CREATE EXTENSION pgexporter_ext;
```

in order to install the new extension.

### Download

* [Source code](https://github.com/pgexporter/pgexporter/releases/download/0.3.1/pgexporter-0.3.1.tar.gz)
* [pgexporter_ext](https://github.com/pgexporter/pgexporter_ext/releases/download/0.2.0/pgexporter_ext-0.2.0.tar.gz)
* [RPM](https://yum.postgresql.org) for Fedora 35/36, RHEL 8.x, RHEL 9.x, Rocky Linux 8.x and Rocky Linux 9.x
