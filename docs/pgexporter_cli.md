# `pgexporter-cli`

`pgexporter-cli` exists to control `pgexporter`, especially when `pgexporter` is [running as a daemon](./command_line_flags.md#run-as-a-daemon).

Usage:
```
pgexporter-cli -c <config-file> [options] [command]
pgexporter-cli -h <host> -p <port> [options] [command]
pgexporter-cli -?
pgexporter-cli -V
```

Commands:
- [`is-alive`](#): Check if `pgexporter` is alive.
- [`stop`](#): Stop `pgexporter`.
- [`status`](#): Status of `pgexporter`.
- [`details`](#): Alias for `status`.
- [`reload`](#): Reload the configuration.
- [`reset`](#): Reset the Prometheus statistics.

:::tip NOTE
The notation standard used for describing usage can be found [here](http://docopt.org).
:::

## Meta Options

### Help

:::code-group

```sh [Usage]
$ pgexporter-cli --help
```

```txt [Sample Output]
pgexporter-cli 0.5.0
  Command line utility for pgexporter

USAGE:
  pgexporter-cli -c <config-file> [options] <command>
  pgexporter-cli -h <host> -p <port> [options] <command>
  pgexporter-cli -?
  pgexporter-cli -V

OPTIONS:
  -c, --config <config-file>  Set the path to the pgexporter.conf file [default: /etc/pgexporter/pgexporter.conf]
  -h, --host <host>           Set the host name
  -p, --port <port>           Set the port number
  -U, --user <username>       Set the user name
  -P, --password <password>   Set the password
  -L, --logfile <file>        Set the log file
  -v, --verbose               Output text string of result
  -?, --help                  Display help
  -V, --version               Display version information

COMMANDS:
  is-alive                    Is pgexporter alive
  stop                        Stop pgexporter
  status                      Status of pgexporter
  details                     Alias for `status`
  reload                      Reload the configuration
  reset                       Reset the Prometheus statistics

pgexporter: https://pgexporter.github.io/
Report bugs: https://github.com/pgexporter/pgexporter/issues
```

:::

### Version

:::code-group

```sh [Usage]
$ pgexporter-cli --version
# or
$ pgexporter-cli -V
```

```txt [Sample Output]
pgexporter-cli 0.4.0
```
:::

## Commands

### `is-alive`

_Description_: Checks if `pgexporter` is successfully running.

:::tip NOTE
It needs [`verbose`](#) flag to output anything.
:::

:::code-group

```sh [Usage]
$ pgexporter-cli is-alive # -c <config-file> [options] --verbose
# or
$ pgexporter-cli is-alive # -h <host> -p port [options] --verbose
```

```txt [Output 1]
pgexporter is running.
```
```txt [Output 2]
pgexporter is not running.
```
:::

### `stop`

_Description_: Stop `pgexporter`.

:::code-group

```sh [Usage]
$ pgexporter-cli stop # -c <config-file> [options]
# or
$ pgexporter-cli stop # -h <host> -p port [options]
```

:::

### `status`

_Description_: Provides status of the servers `pgexporter` is listening to for metrics.


:::code-group
```sh [Usage]
$ pgexporter-cli status # -c <config-file> [options]
# or
$ pgexporter-cli status # -h <host> -p port [options]
```

```txt [Sample Output]
Number of servers: 8
Server           : own
  Active         : Yes
Server           : v10
  Active         : No
Server           : v11
  Active         : No
Server           : v12
  Active         : No
Server           : v13
  Active         : Yes
Server           : v14
  Active         : No
Server           : v15
  Active         : Yes
Server           : v16beta2
  Active         : No
```
:::

### `details`

_Description_: See [status](#status).

:::code-group
```sh [Usage]
$ pgexporter-cli details # -c <config-file> [options]
# or
$ pgexporter-cli details # -h <host> -p port [options]
```

```txt [Sample Output]
Number of servers: 8
Server           : own
  Active         : Yes
Server           : v10
  Active         : No
Server           : v11
  Active         : No
Server           : v12
  Active         : No
Server           : v13
  Active         : Yes
Server           : v14
  Active         : No
Server           : v15
  Active         : Yes
Server           : v16beta2
  Active         : No
```
:::


### `reload`

_Description_: Reload the configuration of `pgexporter` (in case of changes).

:::code-group
```sh [Usage]
$ pgexporter-cli reload # -c <config-file> [options]
```
:::

:::warning
`reload` can only be done in local connections.
:::

<!-- ### `reset`

:::warning TODO
section TODO
::: -->

## Options

### Config File

_Description_:

Specify the [`pgexporter.conf` file](./configuration.md).

:::code-group
```sh [Usage]
$ pgexporter-cli -c <path-of-config-file> # [options] [command]
# or
$ pgexporter-cli --config <path-of-config-file> # [options] [command]
```

```sh [Example Usage]
# Assuming path to config is ./pgexporter.conf
$ pgexporter-cli -c ./pgexporter.conf # [options] [command]
```
:::

### Host

_Description_:

Specify the **host** of `pgexporter`.

:::code-group
```sh [Usage]
$ pgexporter-cli -h <host> # -p <port> [options] [command]
# or
$ pgexporter-cli --host <host> # -p <port> [options] [command]
```

```sh [Example Usage]
# Assuming host is localhost
$ pgexporter-cli -h localhost # -p <port> [options] [command]
# or
# Assuming host is 127.0.0.1
$ pgexporter-cli -h 127.0.0.1 # -p <port> [options] [command]
```
:::

### Port

_Description_:

Speicfy the **port** of `pgexporter`.

:::code-group
```sh [Usage]
$ pgexporter-cli -p <port> # -h <host> [options] [command]
# or
$ pgexporter-cli --port <port> # -h <host> [options] [command]
```

```sh [Example Usage]
# Assuming port is 8080
$ pgexporter-cli -p 8080 # -h <host> [options] [command]
```
:::

:::warning NOTE
The `port` mentioned here is the port at which [**management** is open](./configuration.md).
:::

### Username

_Description_:

Username of the user trying to interact with `pgexporter`.

:::code-group
```sh [Usage]
$ pgexporter-cli -U <username> # -P <password> [options] [command]
# or
$ pgexporter-cli --user <username> # -P <password> [options] [command]
```

```sh [Example Usage]
$ pgexporter-cli -U pgexporter # -P <password> [options] [command]
```
:::

:::warning NOTE
If you do not provide your credentials in the arguments, you will be prompted to provide them later.
:::

:::tip NOTE
Steps for registering a username and password to access `pgexporter` through `pgexporter-cli` can be [viewed here](#).
:::

### Password

_Description_:

Password of the user trying to interact with `pgexporter`.

:::code-group
```sh [Usage]
$ pgexporter-cli -P <password> # -U <username> [options] [command]
# or
$ pgexporter-cli --password <password> # --user <username> [options] [command]
```
```sh [Example Usage]
$ pgexporter-cli -P pgexporter # -U pgexporter [options] [command]
```
:::

:::warning NOTE
If you do not provide your credentials in the arguments, you will be prompted to provide them later.
:::

:::tip NOTE
Steps for registering a username and password to access `pgexporter` through `pgexporter-cli` can be [viewed here](#).
:::

### Log File

_Description_:

Specify the log file for `pgexporter_config`.

:::code-group
```sh [Usage]
$ pgexporter-cli -L <path-to-log-file> # -U <username> [options] [command]
# or
$ pgexporter-cli --logfile <path-to-log-file> # -U <username> [options] [command]
```
```sh [Example Usage]
# Assuming wanting a logfile ./log.out
$ pgexporter-cli -L ./log.out # -U <username> [options] [command]
```
:::

### Verbose

_Description_:

Outputs more verbose information.

:::code-group
```sh [Usage]
$ pgexporter-cli -v  # [options] [command]
# or
$ pgexporter-cli --verbose # [options] [command]
```
:::