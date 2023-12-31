---
outline: deep
---

# `pgexporter-admin`

`pgexporter-admin` exists to manage list of admins/users allowed to access `pgexporter`. It is the administration utility of `pgexporter`.

Usage:
```
pgexporter-admin -f <user-file> [options] <command>
pgexporter-admin -?
pgexporter-admin -V
```

:::tip NOTE
The notation standard used for describing usage can be found [here](http://docopt.org).
:::

## Meta Options

### Help

Usage
```sh
$ pgexporter-admin -?
# or
$ pgexporter-admin --help
```

Output:
```
pgexporter-admin 0.4.1
  Administration utility for pgexporter

USAGE:
  pgexporter-admin -f <user-file> [options] [command]
  pgexporter-admin -?
  pgexporter-admin -V

OPTIONS:
  -f, --file <user-file>    Set the path to a user file
  -U, --user <username>     Set the user name
  -P, --password <password> Set the password for the user
  -g, --generate            Generate a password
  -l, --length              Password length
  -V, --version             Display version information
  -?, --help                Display help

Commands:
  master-key              Create or update the master key
  add-user                Add a user
  update-user             Update a user
  remove-user             Remove a user
  list-users              List all users

pgexporter: https://pgexporter.github.io/
Report bugs: https://github.com/pgexporter/pgexporter/issues
```

### Version

Usage:
```sh
$ pgexporter-admin -V
# or
$ pgexporter-admin --version
```

Output:
```
pgexporter-admin 0.4.1
```

## Commands:

### `master-key`

_Description_: Set master key.

:::code-group
```sh [Usage]
$ pgexporter-admin add-user # -f <users-file> [options]
# or
$ pgexporter-admin add-user # -f <users-file> [options]
```
:::

### `add-users`

_Description_: Add a user.

:::code-group
```sh [Usage]
$ pgexporter-admin add-user # -f <users-file> [options]
# or
$ pgexporter-admin add-user # -f <users-file> [options]
```
:::

### `update-user`

_Description_: Update password of a user.

:::code-group
```sh [Usage]
$ pgexporter-admin update-user # -f <users-file> [options]
# or
$ pgexporter-admin update-user # -f <users-file> [options]
```
:::

### `remove-user`

_Description_: Remove a user.

:::code-group
```sh [Usage]
$ pgexporter-admin remove-user # -f <users-file> [options]
# or
$ pgexporter-admin remove-user # -f <users-file> [options]
```
:::

### `list-users`

_Description_: Provides list of users configured for `pgexporter`.

:::code-group
```sh [Usage]
$ pgexporter-admin list-users # -f <users-file> [options]
# or
$ pgexporter-admin list-users # -f <users-file> [options]
```

```txt [Output]
pgexporter
```
:::