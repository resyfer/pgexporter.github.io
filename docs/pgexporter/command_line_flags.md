# `pgexporter` Command Line Flags

Usage:
```
pgexporter [options] -c <config-file> -u <users-file>
pgexporter -?
pgexporter -V
```

Compulsory Flags:
- [`-c` or `--config` `<config-file>`](#config-file): Specify the [`pgexporter.conf`](#config-file) file path.
- [`-u` or `--users` `<users-file>`](#users-file): Specify the [`pgexporter_users.conf`](#users-file) file path.

Options:
- [`-A` or `--admins` `<admins-file>`](#admins-file): Set the path for Admins' file.
- [`-Y` or `--yaml` `<yaml-file>`](#yaml-file) or [`-Y` or `--yaml` `<yaml-dir>`](#yaml-directory): Set the path to the custom YAML metrics file or set the path for the directory containing multiple custom YAML metrics files.
- [`-d` or `--daemon`](#run-as-a-daemon): Run `pgexporter` as a daemon.
- [`-C` or `--collectors` `name,[name...]`](#enable-only-specific-collectors): Enable only specific collectors.
- [`-?` or `--help`](#help): Display help text.
- [`-v` or `--version`](#version): Display version information.

:::tip NOTE
The notation standard used for describing usage can be found [here](http://docopt.org).
:::

## Information Flags

### Help

Usage:
```sh
$ pgexporter -?
# or
$ pgexporter --help
```

Output:
```
pgexporter 0.5.0
  Prometheus exporter for PostgreSQL

USAGE:
  pgexporter [options] -c <config-file> -u <users-file>
  pgexporter -?
  pgexporter -V

COMPULSORY FLAGS:
  -c, --config <config-file>          Set the path to the pgexporter.conf file
  -u, --users <users-file>            Set the path to the pgexporter_users.conf file

META OPTIONS:
  -?, --help                          Display help
  -V, --version                       Display version information

OPTIONS:
  -A, --admins <admins-file>          Set the path to the pgexporter_admins.conf file
  -Y, --yaml <yaml-file>              Set the path to YAML file
             <yaml-dir>               Set the path to YAML directory
  -d, --daemon                        Run as a daemon
  -C, --collectors name,[name...]     Enable only specific collectors

pgexporter: https://pgexporter.github.io/
Report bugs: https://github.com/pgexporter/pgexporter/issues
```

### Version

Usage:
```sh
$ pgexporter --version
# or
$ pgexporter -V
```

Output:
```
pgexporter 0.4.1
```

## Compulsory Flags

### Config File

Usage:
```sh
$ pgexporter -c /path/to/pgexporter.conf #-u <users-file> [options]
```

### Users File

Usage:
```sh
$ pgexporter -u /path/to/pgexporter_users.conf #-c <config-file> [options]
```

## Options

### Admin's File

:::code-group
```sh [Usage]
$ pgexporter --admins <admins-file> # -c <config-file> -u <users-file> [options]
# or
$ pgexporter -A <admins-file> # -c <config-file> [options] -u <users-file>
```
:::

### Custom Metrics' YAML

#### YAML File
If custom metrics are defined in a _single `YAML` file_ with path `/path/to/yaml/file`:
```sh
$ pgexporter -Y /path/to/yaml/file # -c <config-file> -u <users-file> [options]
# or
$ pgexporter --yaml /path/to/yaml/file # -c <config-file> -u <users-file> [options]
```

#### YAML Directory
If custom metrics are defined in _multiple_ `YAML` files inside a _single directory_ with path `/path/to/yaml/dir`:
```sh
$ pgexporter -Y /path/to/yaml/dir # -c <config-file> -u <users-file> [options]
# or
$ pgexporter --yaml /path/to/yaml/dir # -c <config-file> -u <users-file> [options]
```

### Run As A Daemon
If `pgexporter` needs to be run as a background process ([daemon](https://en.wikipedia.org/wiki/Daemon_(computing))):
```sh
$ pgexporter -d # -c <config-file> -u <users-file> [options]
```

### Enable Only Specific Collectors
If you need only specific collectors (from within both [internal](./metrics.md#internal-metrics) and [custom metrics](./metrics.md#custom-metrics)):

```sh
$ pgexporter -C name,[name...] # -c <config-file> -u <users-file> [options]
```

where the argument is` is a _comma-separated list_ of one or more collector names.

This will disabled all other configured collectors except [general metrics](./metrics.md#internal-metrics).