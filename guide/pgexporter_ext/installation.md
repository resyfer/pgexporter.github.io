---
outline: deep
---

# Installation

Installation can be done in various ways, either by proper installation [using package managers](#using-package-manager), or by [building it from source](#building-from-source) and installing.

## Using package manager

Using a package manager like `dnf` can simplify installation.

### Adding YUM Repo

View [adding YUM repo for pgexporter](../pgexporter/installation.md#adding-yum-repo).

#### Searching for `pgexporter_ext`

```sh
$ dnf search pgexporter_ext
```

You should see a similar output to:
```
Last metadata expiration check: 0:09:38 ago on Sat 07 Oct 2023 01:46:17 AM IST.
===================================== Name Matched: pgexporter_ext =====================================
pgexporter_ext_11.x86_64 : PostgreSQL extension to provide additional Prometheus metrics for pgexporter. // [!code focus]
pgexporter_ext_12.x86_64 : PostgreSQL extension to provide additional Prometheus metrics for pgexporter. // [!code focus]
pgexporter_ext_13.x86_64 : PostgreSQL extension to provide additional Prometheus metrics for pgexporter. // [!code focus]
pgexporter_ext_14.x86_64 : PostgreSQL extension to provide additional Prometheus metrics for pgexporter. // [!code focus]
pgexporter_ext_15.x86_64 : PostgreSQL extension to provide additional Prometheus metrics for pgexporter. // [!code focus]
pgexporter_ext_16.x86_64 : PostgreSQL extension to provide additional Prometheus metrics for pgexporter. // [!code focus]
```

The packages are named like `pgexporter_ext_` followed by the major version of PostgreSQL (eg. `16`, `15`, `14`, etc.). Download the one that corresponds to your PostgreSQL database.

Check your PostgreSQL version using:
```sh
$ psql -V
```

For example, if my PostgreSQL is of v16, then my command would look like:
```sh
$ sudo dnf install pgexporter_ext_16
```

## Building from source

### Dependencies

`pgexporter_ext` requires:

- [gcc 8+](https://gcc.gnu.org/) / [clang 8+](https://clang.llvm.org/) (C17)
- [cmake](https://cmake.org/)
- [make](https://www.gnu.org/software/make/)
- [PostgreSQL](https://www.postgresql.org/)

They can be installed using:

```sh
$ dnf install git gcc cmake make postgresql-devel
```

:::warning NOTE
It **may** happen that later the build fails due to `"postgres.h"` not being found. In that case, uninstall the package `postgresql-devel` and instead install `postgresql-server-devel` using:

```sh
$ dnf remove postgresql-devel
$ dnf install postgresql-server-devel
```

:::

### Building

Building can be done for a [`RELEASE` build](#release-build) if you want to just use `pgexporter_ext` or a [`DEBUG` build](#debug-build) if you want to work on the source code of `pgexporter_ext`.

#### Release Build

```sh
$ git clone https://github.com/pgexporter/pgexporter_ext.git
$ cd pgexporter_ext
$ mkdir build
$ cd build
$ cmake ..
$ make
$ sudo make install
```

#### Debug Build

```sh
$ git clone https://github.com/pgexporter/pgexporter_ext.git
$ cd pgexporter_ext
$ mkdir build
$ cd build
$ cmake -DCMAKE_BUILD_TYPE=Debug ..
$ make
```

An additional optional (but recommended) step would be to install it as well using:

```sh
$ sudo make install
```

## Extension

### Check Installation

Ensure `pgexporter_ext` is installed correctly:

```sh
$ ls `pg_config --pkglibdir`/pgexporter_ext*
```

This should give an output like:
```
/usr/lib64/pgsql/pgexporter_ext.so  /usr/lib64/pgsql/pgexporter_ext.so.0  /usr/lib64/pgsql/pgexporter_ext.so.0.3.0
```

### Find location of `postgresql.conf`

The following command should get you the `postgresql.conf` file's location:

```sh
$ psql -U postgres -d postgres -c 'SHOW config_file'
```

### PostgreSQL Configuration

Open up this `postgresql.conf` file in your editor and edit the line to this:

```
shared_preload_libraries = 'pgexporter'  # (change requires restart)
```

:::tip NOTE
This line may be commented out at first. Uncomment it.
:::

:::warning NOTE
If this line is already uncommented out, and contains values inside the `''`, for eg. `abc_ext`, then add it as comma separated value as shown:

`shared_preload_libraries = 'abc_ext,pgexporter_ext'`
:::

### Load extension

```sh
$ psql -U postgres -d postgres -c 'CREATE EXTENSION pgexporter_ext'
```

Verify it has been added to the list of loaded etensions by checking in this list:
```sh
$ psql -U postgres -d postgres -c '\dx'
```

Test it out:
```sh
$ psql -U postgres -d postgres -c 'SELECT * FROM pgexporter_information_ext()'
```