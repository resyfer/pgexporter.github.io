---
outline: deep
---

# `pgexporter_ext` functions

## pgexporter_get_functions

_Description_: Prints out all the functions available in `pgexporter_ext`.

_Output Format_:
- `fname` _text_: Name of the function.
- `has_input` _boolean_: True (`t`) if the function takes in arguments. False (`f`) otherwise.
- `description` _text_: Description of the function.
- `ftype` _text_ (values: `"gauge"` | `""`): Mentions the type of Prometheus metric its output is of.


::: code-group

```sql [Query]
SELECT * FROM pgexporter_get_functions();
```

```txt [Output]
|        fname             | has_input |             description              | ftype |
+--------------------------+-----------+--------------------------------------+-------+
| pgexporter_version_ext   | f         | pgexporter extension version         | gauge |
| pgexporter_is_supported  | t         | Is the pgexporter function supported |       |
| pgexporter_get_functions | f         | Get the pgexporter functions         |       |
| pgexporter_used_space    | t         | Get the used disk space              | gauge |
| pgexporter_free_space    | t         | Get the free disk space              | gauge |
| pgexporter_total_space   | t         | Get the total disk space             | gauge |
| pgexporter_os_info       | f         | The OS information                   | gauge |
| pgexporter_cpu_info      | f         | The CPU information                  | gauge |
| pgexporter_memory_info   | f         | The memory information               | gauge |
| pgexporter_network_info  | f         | The network information              | gauge |
| pgexporter_load_avg      | f         | The load averages                    | gauge |
(11 rows)
```
:::

## pgexporter_version_ext

_Description_: Provides the enabled version of `pgexporter_ext`:

_Output Format_:
- `pgexporter_version_ext` _text_: Enabled version of `pgexporter_ext`.


::: code-group

```sql [Query]
SELECT * FROM pgexporter_version_ext();
```

```txt [Output]
 pgexporter_version_ext
------------------------
 0.3.0
(1 row)
```

:::

## pgexporter_is_supported

_Description_: Checks if provided function name is one of the `pgexporter_ext`'s functions.

_Input Arguments_:
- `fname` _text_: Name of the function.

_Output Format_:
- `pgexporter_is_supported` _boolean_: True (`t`) if the function is one of the supported functions of `pgexporter_ext`. False (`f`) otherwise.


::: code-group

```sql [Query]
SELECT * FROM pgexporter_is_supported('hello_world');
```

```txt [Output]
 pgexporter_is_supported
-------------------------
 f
(1 row)
```
:::

::: code-group

```sql [Query]
SELECT * FROM pgexporter_is_supported('pgexporter_version_ext');
```

```txt [Output]
 pgexporter_is_supported
-------------------------
 t
(1 row)
```

:::

## pgexporter_used_space

_Description_: Get the used disk space of a directory.

::: code-group
```sql [Query]
SELECT * FROM pgexporter_used_space('/dev');
```

```txt [Output]
 pgexporter_used_space
-----------------------
               1127424
(1 row)
```
:::

## pgexporter_free_space

_Description_: Get the free disk space of a directory.

::: code-group
```sql [Query]
SELECT * FROM pgexporter_free_space('/dev');
```

```txt [Output]
 pgexporter_free_space
-----------------------
               4194304
(1 row)
```
:::

_Input Arguments_:
- `dir_path` _text_: Directory path.


::: code-group

```sql [Query]
SELECT * from pgexporter_free_space('/home');
```

```txt [Output]
 pgexporter_free_space
-----------------------
          285776547840
(1 row)
```

:::

## pgexporter_total_space

_Description_: Get the free disk space of a directory.

_Input Arguments_:
- `dir_path` _text_: Directory path.


::: code-group

```sql [Query]
SELECT * from pgexporter_total_space('/home');
```

```txt [Output]
 pgexporter_free_space
-----------------------
          285776547840
(1 row)
```

:::

## pgexporter_os_info

_Description_: Gives information about the current operating system.

_Output Format_:
- `name` _text_: Name of the Operating System.
- `version` _text_: Version of the kernel.
- `architecture` _text_: CPU architecture of the machine.
- `host_name` _text_: Host name of the machine.
- `domain_name` _text_: Domain name of the machine.
- `process_count` _integer_: Number of active process running on the machine.
- `uptime_seconds` _integer_: Uptime of the OS in seconds.

::: code-group

```sql [Query]
SELECT * FROM pgexporter_os_info();
```

```txt [Output]
|               name               |           version           | architecture | host_name | domain_name | process_count | uptime_seconds |
+----------------------------------+-----------------------------+--------------+-----------+-------------+---------------+----------------+
| Fedora release 38 (Thirty Eight) | Linux 6.4.4-200.fc38.x86_64 | x86_64       | fedora    | (none)      |           357 |           2417 |
(1 row)
```

:::

## pgexporter_cpu_info

_Description_: Gives information about the CPU of the system.

_Output Format_:
- `vendor` _text_: CPU Vendor name.
- `model_name` _text_: CPU Model name.
- `number_of_cores` _integer_: Number of cores the CPU has.
- `clock_speed_hz` _bigint_: Clock speed of the CPU in Hertz.
- `l1dcache_size` _integer_: Size of L1 D-Cache (Data Cache) of the CPU.
- `l1icache_size` _integer_: Size of L1 I-Cache (Instruction Cache) of the CPU.
- `l2cache_size` _integer_: Size of L2 Cache of the CPU.
- `l3cache_size` _integer_: Size of L3 Cache of the CPU.

::: code-group

```sql [Query]
SELECT * FROM pgexporter_cpu_info();
```

```txt [Output]
|    vendor    |                   model_name                   | number_of_cores | clock_speed_hz | l1dcache_size | l1icache_size | l2cache_size | l3cache_size |
+--------------+------------------------------------------------+-----------------+----------------+---------------+---------------+--------------+--------------+
| GenuineIntel | 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz |               4 |      752459008 |            48 |            32 |         1280 |         8192 |
(1 row)
```

:::

## pgexporter_memory_info

_Description_: Gives information about the primary memory, swap space and cache of the system.

_Output Format_:
- `total_memory` _bigint_: Total size of the memory.
- `used_memory` _bigint_: Memory in use currently.
- `free_memory` _bigint_: Free memory left to use.
- `swap_total` _bigint_: Total swap space memory.
- `swap_used` _bigint_: Swap space memory in use currently.
- `swap_free` _bigint_: Free swap space memory left to use.
- `cache_total` _bigint_: Total cache memory.

::: code-group

```sql [Query]
SELECT * FROM pgexporter_memory_info();
```

```txt [Output]
| total_memory | used_memory | free_memory | swap_total | swap_used | swap_free | cache_total|
--------------+-------------+-------------+------------+-----------+-----------+-------------+
|      7834600 |     5267188 |      399432 |   12027896 |         0 |  12008184 |     3807456|
(1 row)
```
:::

## pgexporter_network_info

_Description_: Network statistics.

_Output Format_:
- `interface_name` _text_: Name of the network interface. (eg. `lo`, `docker0`, `enp2s0`, etc.).
- `ip_address` _text_: Private IP of the network interface.
- `tx_bytes` _bigint_: Number of bytes transmitted.
- `tx_packets` _bigint_: Number of packets transmitted.
- `tx_errors` _bigint_: Number of errors during transmission.
- `tx_dropped` _bigint_: Number of packets dropped during transmission.
- `rx_bytes` _bigint_: Number of bytes received.
- `rx_packets` _bigint_: Number of packets received.
- `rx_errors` _bigint_: Number of errors during receiving.
- `rx_dropped` _bigint_: Number of packets dropped during receiving.
- `link_speed_mbps` _integer_: Speed of the link in Mbps

## pgexporter_load_avg

_Description_: Load averages.


::: code-group

```sql [Query]
SELECT * FROM pgexporter_load_avg();
```

```txt [Output]
 load_avg_one_minute | load_avg_five_minutes | load_avg_ten_minutes
---------------------+-----------------------+----------------------
                0.23 |                  0.21 |                 0.15
(1 row)
```
:::