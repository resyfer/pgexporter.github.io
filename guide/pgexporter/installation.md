---
outline: deep
---

# Installation

## Dependencies

`pgexporter` requires the following dependencies:
- [gcc 8+](https://gcc.gnu.org/) / [clang 8+](https://clang.llvm.org/) (C17)
- [cmake](https://cmake.org/)
- [make](https://www.gnu.org/software/make/)
- [libev](http://software.schmorp.de/pkg/libev.html)
- [OpenSSL](http://www.openssl.org/)
- [rst2man](https://docutils.sourceforge.io/)
- [libatomic](https://linuxsoft.cern.ch/cern/centos/7/updates/x86_64/repoview/libatomic.html)
- [libyaml](https://pyyaml.org/wiki/LibYAML)
<!-- - [systemd](https://www.freedesktop.org/wiki/Software/systemd/) -->

These can be obtained using:
```sh
$ dnf install git gcc cmake make libev libev-devel openssl openssl-devel systemd systemd-devel python3-docutils libatomic libyaml libyaml-devel
```

### PostgreSQL

PostgreSQL 10+ is required to work with `pgexporter`, and it can be installed by following [these instructions](https://www.postgresql.org/download/).

Confirm using:
```sh
$ psql --version
```

## Install pgexporter

Installation can be done in various ways, either by proper installation [using package managers](#using-package-manager), or by [building it from source](#building-from-source) and installing it.

### Using package manager

Using a package manager like `dnf` or `yum` can simplify installation.

#### Adding YUM Repo

YUM Repository link (and install command) can be found in the first line of the [installation commands for PostgreSQL](https://www.postgresql.org/download/linux/redhat/). Select the PostgreSQL version, distro and the architecture.

_**For example**_, for PostgreSQL 16 for x86_64 Fedora 39:

:::code-group

```txt [Install Instructions]
# Install the repository RPM:
sudo dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/F-39-x86_64/pgdg-fedora-repo-latest.noarch.rpm // [!code focus]

# Install PostgreSQL:
sudo dnf install -y postgresql16-server

# Optionally initialize the database and enable automatic start:
sudo /usr/pgsql-16/bin/postgresql-16-setup initdb
sudo systemctl enable postgresql-16
sudo systemctl start postgresql-16
```

```txt [YUM Repo URL/Install Command]
sudo dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/F-39-x86_64/pgdg-fedora-repo-latest.noarch.rpm
```

:::


#### Searching for `pgexporter`

```sh
$ dnf search pgexporter
```

You should see a similar output to:
```
Last metadata expiration check: 18:22:18 ago on Sun 24 Sep 2023 10:27:21 AM IST.
===================================== Name Exactly Matched: pgexporter ===================================== // [!code focus]
pgexporter.x86_64 : Prometheus exporter for PostgreSQL  // [!code focus]
==================================== Name & Summary Matched: pgexporter ====================================
pgexporter-debuginfo.x86_64 : Debug information for package pgexporter
pgexporter-debugsource.x86_64 : Debug sources for package pgexporter
pgexporter_ext_11.x86_64 : PostgreSQL extension to provide additional Prometheus metrics for pgexporter.
pgexporter_ext_12.x86_64 : PostgreSQL extension to provide additional Prometheus metrics for pgexporter.
pgexporter_ext_13.x86_64 : PostgreSQL extension to provide additional Prometheus metrics for pgexporter.
pgexporter_ext_14.x86_64 : PostgreSQL extension to provide additional Prometheus metrics for pgexporter.
pgexporter_ext_15.x86_64 : PostgreSQL extension to provide additional Prometheus metrics for pgexporter.
pgexporter_ext_16.x86_64 : PostgreSQL extension to provide additional Prometheus metrics for pgexporter.
```

### Building From Source

### Clone

Clone the repository:

```sh
$ git clone https://github.com/pgexporter/pgexporter.git
$ cd pgexporter
```

Then, follow the respective instructions if you want a [Release build](#release-build) (for production use) or a [Debug build](#debug-build) (for development use).

### Release Build

```sh
$ mkdir build
$ cd build
$ cmake -DCMAKE_INSTALL_PREFIX=/usr/local ..
$ make
$ sudo make install
```

### Debug Build

```sh
$ mkdir build
$ cd build
$ cmake -DCMAKE_BUILD_TYPE=Debug ..
$ make
$ sudo make install # Optional but recommended step for testing
```

## Check Installation

Make sure that pgexporter is installed and in your `PATH` by using `pgexporter --help`. For:

```sh
$ pgexporter --help
```

you should see:

```
pgexporter 0.4.0 // [!code focus]
  Prometheus exporter for PostgreSQL // [!code focus]

Usage:
  pgexporter [ -c CONFIG_FILE ] [ -u USERS_FILE ] [ -d ]

Options:
  -c, --config CONFIG_FILE                    Set the path to the pgexporter.conf file
  -u, --users USERS_FILE                      Set the path to the pgexporter_users.conf file
  -A, --admins ADMINS_FILE                    Set the path to the pgexporter_admins.conf file
  -Y, --yaml METRICS_FILE_DIR                 Set the path to YAML file/directory
  -d, --daemon                                Run as a daemon
  -C, --collectors NAME_1,NAME_2,...,NAME_N   Enable only specific collectors
  -V, --version                               Display version information
  -?, --help                                  Display help

pgexporter: https://pgexporter.github.io/
Report bugs: https://github.com/pgexporter/pgexporter/issues
```