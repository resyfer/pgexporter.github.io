---
outline: deep
---

# Configuration

Assuming `pgexporter` has been installed, it needs some configurations before it can be used.

## PostgreSQL

Ensure PostgreSQL is running:

```sh
$ sudo systemctl status postgresql.service
```

should give you:

```
● postgresql.service - PostgreSQL database server // [!code focus]
     Loaded: loaded (/usr/lib/systemd/system/postgresql.service; enabled; preset: disabled)
    Drop-In: /usr/lib/systemd/system/service.d
             └─10-timeout-abort.conf
     Active: active (running) since Tue 2023-09-05 19:51:27 IST; 26min ago // [!code focus]
    Process: 6820 ExecStartPre=/usr/libexec/postgresql-check-db-dir postgresql (code=exited, status=0/SUCCESS)
   Main PID: 6822 (postmaster)
      Tasks: 7 (limit: 9129)
     Memory: 23.4M
        CPU: 435ms
     CGroup: /system.slice/postgresql.service
             ├─6822 /usr/bin/postmaster -D /var/lib/pgsql/data
             ├─6823 "postgres: logger "
             ├─6824 "postgres: checkpointer "
             ├─6825 "postgres: background writer "
             ├─6827 "postgres: walwriter "
             ├─6828 "postgres: autovacuum launcher "
             └─6829 "postgres: logical replication launcher "

Sep 05 19:51:27 fedora systemd[1]: Starting postgresql.service - PostgreSQL database server...
Sep 05 19:51:27 fedora postmaster[6822]: 2023-09-05 19:51:27.170 IST [6822] LOG:  redirecting log output to logging collector process
Sep 05 19:51:27 fedora postmaster[6822]: 2023-09-05 19:51:27.170 IST [6822] HINT:  Future log output will appear in directory "log".
Sep 05 19:51:27 fedora systemd[1]: Started postgresql.service - PostgreSQL database server.
```

## Add Linux User

Add linux user named `pgexporter`:

```sh
$ sudo su -
$ useradd -ms /bin/bash pgexporter
```

Secure the user with a suitable password, say `secretpassword` after typing:
```sh
$ passwd pgexporter
```

and then exit:
```sh
$ exit
```

## Add User to PostgreSQL

Switch to `postgres` user using:

```sh
$ sudo -i -u postgres
```

and add user `pgexporter` to PostgreSQL:

```sh
$ createuser -P pgexporter
```

with a suitable password, say, again, `secretpassword`.

## pg_monitor

As `postgres` user, enter `psql` like:

```sh
$ psql -d postgres
```

and grant `pgexporter` user the role of `pg_monitor`:

```sql
GRANT pg_monitor TO pgexporter;
```

## pg_hba.conf

As `postgres` user, go into psql like:
```sh
$ sudo -i -u postgres
$ psql
```

and locate the `pg_hba.conf` file using:
<<<<<<< HEAD
```psql
=======
```sql
>>>>>>> 7bc1a03 (Revamp)
SHOW hba_file;
```

Using the acquired path, in `pg_hba.conf` remove (or comment out):
```txt
host    all             all             127.0.0.1/32            trust
host    all             all             ::1/128                 trust
host    replication     all             127.0.0.1/32            trust
host    replication     all             ::1/128                 trust
```

and instead put:
```txt
local   postgres    pgexporter                      scram-sha-256
host    postgres    pgexporter     127.0.0.1/32     scram-sha-256
host    postgres    pgexporter     ::1/128          scram-sha-256
```

This will add a user in your linux system named `pgexporter`.

::: warning
Check the value of `password_encryption` in `postgresql.conf` (usually in a location like `/var/lib/pgsql/data/postgresql.conf`) to setup the correct authentication type above (`scram-sha-256`, `md5`, etc.).
:::

## Server

Once done, restart the PostgreSQL server:

```sh
$ sudo systemctl restart postgresql.service
```

## Verify Access

```sh
$ psql -h localhost -p 5432 -U pgexporter -d postgres
```

and in `psql`:
```
\q
```

If no errors occur in this process, proceed below.

## User vault

A user vault is required for the `pgexporter` account. As `pgexporter` user, create a master key:
```sh
$ pgexporter-admin master-key
```

with the password of the user (`secretpassword`).

Store the same password using:
```sh
$ pgexporter-admin -f pgexporter_users.conf add-user
```

## pgexporter.conf
A `pgexporter.conf` file is required to specify some information to `pgexporter`. As the `pgexporter` user, create a `pgexporter.conf` file with the following contents:

```toml
[pgexporter]
host = *
metrics = 5002

log_type = file
log_level = info
log_path = /tmp/pgexporter.log

unix_socket_dir = /tmp/

[primary]
host = localhost
port = 5432
user = pgexporter
```

<<<<<<< HEAD
<!-- ### Breakdown

Breakdown of this configuration file:

- In the main section `[pgexporter]`:
  - Setup `pgexporter` to listen all network addresses with `host = *`.
  - We enable `pgexporter` to expose Prometheus metrics on port `5002` using `metrics = 5002`.
  - Specify logging information using `log_type` as a `file`, `log_level` as `info` and `log_path` as `/tmp/pgexporter.log`.
  - Specify location of the `unix_socket_dir` as `/tmp`, which used for management operations.
- Then servers are defined as sections:
  - In the `[primary]` server:
    - Specify the host of the server like `host = localhost`.
    - The port where the PostgreSQL server is listening to using `port = 5432`.
    - And the user that you want to access it with using `user = pgexporter`. This user must have the `pg_monitor` role (see [here](#pg-monitor)). -->

A breakdown of this configuration file can be viewed [here](#) for understanding its components.
=======
A breakdown of this configuration file can be viewed [here](../../docs/pgexporter/configuration.md#pgexporter-configuration) for understanding its components.
>>>>>>> 7bc1a03 (Revamp)

## Running pgexporter

As `pgexporter` user, run `pgexporter`:

```sh
$ pgexporter -c pgexporter.conf -u pgexporter_users.conf
```

If this does not give any output or stop on its own, then it `pgexporter` is live and accepting responses. It can be stopped pressing Ctrl+C (^C) in the console where you started it, or by sending the SIGTERM signal to the process using `kill <pid>` (replace `<pid>` with the PID of the process).

## View Metrics

Go to `http://localhost:5002` in a browser, or in a terminal:

```sh
$ curl http://localhost:5002/metrics
```

Here `5002` refers to the port written in `pgexporter.conf` for `metrics`.