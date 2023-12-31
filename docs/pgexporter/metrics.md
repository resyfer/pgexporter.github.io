---
outline: deep
---

# `pgexporter` Metrics

The main task of `pgexporter` is to gather metrics from your database and format it according to [Prometheus metrics standards](https://prometheus.io/docs/concepts/metric_types/). `pgexporter` provides some [pre-defined metrics](#internal-metrics) that are necessary/useful, and also provides the capability of providing [custom metrics](#custom-metrics) to the user.

## Internal Metrics

`pgexporter` defines a lot of metrics out of the box. By default, all of them are enabled, and will be reflected in the output. However, if you need only specific metrics, you can enable only them as shown [here](./command_line_flags.md#enable-only-specific-collectors) (and thus, disable other metrics).

Listing them (for a wider view, visit [here](https://github.com/pgexporter/pgexporter.github.io/blob/main/guide/pgexporter/metrics.md)):

<table>
  <tr>
    <td>Category</td>
    <td>Name</td>
    <td>Support</td>
    <td>Type</td>
    <td>Labels</td>
    <td>Collector</td>
    <td>Sort</td>
    <td>Server</td>
    <td>Description</td>
  </tr>
  <tr>
    <td rowspan="6">General</td>
    <td>pgexporter_state</td>
    <td rowspan="6">v10-16</td>
    <td>counter</td>
    <td></td>
    <td><i>N/A</i></td>
    <td><i>N/A</i></td>
    <td><i>N/A</i></td>
    <td>State of pgexporter.</td>
  </tr>
  <tr>
    <td>pgexporter_version</td>
    <td>counter</td>
    <td>pgexporter_version</td>
    <td><i>N/A</i></td>
    <td><i>N/A</i></td>
    <td><i>N/A</i></td>
    <td>Version of pgexporter.</td>
  </tr>
  <tr>
    <td>pgexporter_postgresql_active</td>
    <td>gauge</td>
    <td>server</td>
    <td><i>N/A</i></td>
    <td>name</td>
    <td>both</td>
    <td>Status of PostgreSQL servers.</td>
  </tr>
  <tr>
    <td>pgexporter_postgresql_version</td>
    <td>counter</td>
    <td>server, version</td>
    <td><i>N/A</i></td>
    <td>name</td>
    <td>both</td>
    <td>PostgreSQL Versions on servers.</td>
  </tr>
  <tr>
    <td>pgexporter_uptime</td>
    <td>counter</td>
    <td>server</td>
    <td><i>N/A</i></td>
    <td>name</td>
    <td>both</td>
    <td>The PostgreSQL uptime in seconds.</td>
  </tr>
  <tr>
    <td>pgexporter_postgresql_primary</td>
    <td>gauge</td>
    <td>server</td>
    <td>primary</td>
    <td>name</td>
    <td>both</td>
    <td>Is the PostgreSQL instance the primary</td>
  </tr>
  <tr>
    <td>pg_settings</td>
    <td>pgexporter_pg_settings_<i>name_of_setting</i></td>
    <td>v10-16</td>
    <td>gauge</td>
    <td>server</td>
    <td>settings</td>
    <td>name</td>
    <td>both</td>
    <td>Settings.</td>
  </tr>
  <tr>
    <td>pg_database</td>
    <td>pgexporter_pg_database_size</td>
    <td>v10-16</td>
    <td>gauge</td>
    <td>server, database</td>
    <td>db</td>
    <td>data</td>
    <td>both</td>
    <td>Size of the database</td>
  </tr>
  <tr>
    <td>pg_locks</td>
    <td>pgexporter_pg_locks_count</td>
    <td>v10-16</td>
    <td>gauge</td>
    <td>server, database, mode</td>
    <td>locks</td>
    <td>data</td>
    <td>both</td>
    <td>Lock count of a database</td>
  </tr>
  <tr>
    <td rowspan="2">pg_replication_slots</td>
    <td>pgexporter_pg_replication_slots_active</td>
    <td rowspan="2">v10-16</td>
    <td>gauge</td>
    <td rowspan="2">server, slot_name, slot_type, database</td>
    <td rowspan="2">replication</td>
    <td rowspan="2">data</td>
    <td rowspan="2">both</td>
    <td>Is the replication active</td>
  </tr>
  <tr>
    <td>pgexporter_pg_replication_slots_temporary</td>
    <td>gauge</td>
    <td>Is the replication temporary</td>
  </tr>
  <tr>
    <td rowspan="10">pg_stat_bgwriter</td>
    <td>pgexporter_pg_stat_bgwriter_buffers_alloc</td>
    <td rowspan="10">v10-16</td>
    <td>gauge</td>
    <td rowspan="10">server, database, mode</td>
    <td rowspan="10">stat_bgwriter</td>
    <td rowspan="10">name</td>
    <td rowspan="10">both</td>
    <td>buffers_alloc</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_bgwriter_buffers_backend</td>
    <td>gauge</td>
    <td>buffers_backend</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_bgwriter_buffers_backend_fsync</td>
    <td>gauge</td>
    <td>buffers_backend_fsync</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_bgwriter_buffers_checkpoint</td>
    <td>gauge</td>
    <td>buffers_checkpoint</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_bgwriter_buffers_clean</td>
    <td>gauge</td>
    <td>buffers_clean</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_bgwriter_checkpoint_sync_time</td>
    <td>counter</td>
    <td>checkpoint_sync_time</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_bgwriter_checkpoint_write_time</td>
    <td>counter</td>
    <td>checkpoint_write_time</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_bgwriter_checkpoints_req</td>
    <td>counter</td>
    <td>checkpoints_req</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_bgwriter_checkpoints_timed</td>
    <td>counter</td>
    <td>checkpoints_timed</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_bgwriter_maxwritten_clean</td>
    <td>counter</td>
    <td>maxwritten_clean</td>
  </tr>
  <tr>
    <td>pg_process_idle_seconds</td>
    <td>pgexporter_pg_process_idle_seconds</td>
    <td>v10-16</td>
    <td>histogram</td>
    <td>server, application_name</td>
    <td>idle_procs</td>
    <td>name</td>
    <td>both</td>
    <td>Histogram of idle processes</td>
  </tr>
  <tr>
    <td>pg_available_extensions</td>
    <td>pgexporter_pg_available_extensions</td>
    <td>v10-16</td>
    <td>gauge</td>
    <td>server</td>
    <td>available_extensions</td>
    <td>name</td>
    <td>both</td>
    <td>Number of available extensions for installation.</td>
  </tr>
  <tr>
    <td>pg_extension</td>
    <td>pgexporter_pg_installed_extensions</td>
    <td>v10-16</td>
    <td>gauge</td>
    <td>server, extensions</td>
    <td>installed_extensions</td>
    <td>name</td>
    <td>both</td>
    <td>Number of installed extensions.</td>
  </tr>
  <tr>
    <td>pg_file_settings</td>
    <td>pgexporter_pg_file_settings</td>
    <td>v10-16</td>
    <td>gauge</td>
    <td>server, sourcefile, applied</td>
    <td>file_settings</td>
    <td>data</td>
    <td>both</td>
    <td>Settings that are applied.</td>
  </tr>
  <tr>
    <td>pg_indexes</td>
    <td>pgexporter_pg_indexes</td>
    <td>v10-16</td>
    <td>gauge</td>
    <td>server, schemaname, tablename</td>
    <td>indexes</td>
    <td>data</td>
    <td>both</td>
    <td>Indexes for each schemaname for each tablename.</td>
  </tr>
  <tr>
    <td>pg_matviews</td>
    <td>pgexporter_pg_matviews</td>
    <td>v10-16</td>
    <td>gauge</td>
    <td>server</td>
    <td>matviews</td>
    <td>name</td>
    <td>both</td>
    <td>Number of applied Materialized views.</td>
  </tr>
  <tr>
    <td>pg_rules</td>
    <td>pgexporter_pg_rules</td>
    <td>v10-16</td>
    <td>gauge</td>
    <td>server, tablename</td>
    <td>rules</td>
    <td>data</td>
    <td>both</td>
    <td>Number of rules in table.</td>
  </tr>
  <tr>
    <td>pg_shadow</td>
    <td>pgexporter_pg_shadow</td>
    <td>v10-16</td>
    <td>gauge</td>
    <td>server, tablename</td>
    <td>auth_type</td>
    <td>data</td>
    <td>both</td>
    <td>Number of users with authentication type.</td>
  </tr>
  <tr>
    <td>pg_usr_evt_trigger</td>
    <td>pgexporter_pg_usr_evt_trigger</td>
    <td>v10-16</td>
    <td>gauge</td>
    <td>server</td>
    <td>usr_evt_trigger</td>
    <td>name</td>
    <td>both</td>
    <td>Number of user defined event triggers.</td>
  </tr>
  <tr>
    <td rowspan="2">pg_db_conn</td>
    <td>pgexporter_pg_db_conn</td>
    <td rowspan="2">v10-16</td>
    <td>gauge</td>
    <td>server, database</td>
    <td rowspan="2">connections</td>
    <td>name</td>
    <td>both</td>
    <td>Number of database connections.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_db_conn_ssl</td>
    <td>gauge</td>
    <td>server, database</td>
    <td>data</td>
    <td>both</td>
    <td>Number of DB connections with SSL.</td>
  </tr>
  <tr>
    <td rowspan="8">pg_statio_all_tables</td>
    <td>pgexporter_pg_statio_all_tables_heap_blks_read</td>
    <td rowspan="8">v10-16</td>
    <td>counter</td>
    <td rowspan="8">server</td>
    <td rowspan="8">statio_all_tables</td>
    <td rowspan="8">name</td>
    <td rowspan="8">both</td>
    <td>Number of disk blocks read in postgres db.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_statio_all_tables_heap_blks_hit</td>
    <td>counter</td>
    <td>Number of buffer hits read in postgres db.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_statio_all_tables_idx_blks_read</td>
    <td>counter</td>
    <td>Number of disk blocks reads from all indexes in postgres db.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_statio_all_tables_idx_blks_hit</td>
    <td>counter</td>
    <td>Number of buffer hits read from all indexes in postgres db.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_statio_all_tables_toast_blks_read</td>
    <td>counter</td>
    <td>Number of disk blocks reads from postgres db's TOAST tables.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_statio_all_tables_toast_blks_hit</td>
    <td>counter</td>
    <td>Number of buffer hits read from postgres db's TOAST tables.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_statio_all_tables_tidx_blks_read</td>
    <td>counter</td>
    <td>Number of disk blocks reads from postgres db's TOAST table indexes.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_statio_all_tables_tidx_blks_hit</td>
    <td>counter</td>
    <td>Number of buffer hits read from postgres db's TOAST table indexes.</td>
  </tr>
  <tr>
    <td rowspan="2">pg_statio_all_sequences</td>
    <td>pgexporter_pg_statio_all_sequences_blks_read</td>
    <td rowspan="2">v10-16</td>
    <td>counter</td>
    <td rowspan="2">server</td>
    <td rowspan="2">statio_all_sequences</td>
    <td rowspan="2">name</td>
    <td rowspan="2">both</td>
    <td>Number of disk blocks read from sequences in postgres db.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_statio_all_sequences_blks_hit</td>
    <td>counter</td>
    <td>Number of buffer hits read from sequences in postgres db.</td>
  </tr>
  <tr>
    <td rowspan="3">pg_stat_user_functions</td>
    <td>pgexporter_pg_stat_user_functions_calls</td>
    <td rowspan="3">v10-16</td>
    <td>counter</td>
    <td rowspan="3">server, funcname</td>
    <td rowspan="3">stat_user_functions</td>
    <td rowspan="3">data</td>
    <td rowspan="3">both</td>
    <td>Number of times function is called.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_user_functions_self_time</td>
    <td>counter</td>
    <td>Total time spent in milliseconds on the function itself.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_user_functions_total_time</td>
    <td>counter</td>
    <td>Total time spent in milliseconds by the function and any other functions called by it.</td>
  </tr>
  <tr>
    <td>pg_stat_statements_calls</td>
    <td>pgexporter_pg_stat_statements_calls</td>
    <td>v10-16</td>
    <td>counter</td>
    <td>server, query</td>
    <td>stat_statements_calls</td>
    <td>data</td>
    <td>both</td>
    <td>Number of times the SQL query is executed.</td>
  </tr>
  <tr>
    <td>pg_stat_statements_rows</td>
    <td>pgexporter_pg_stat_statements_rows</td>
    <td>v10-16</td>
    <td>counter</td>
    <td>server, query</td>
    <td>stat_statements_rows</td>
    <td>data</td>
    <td>both</td>
    <td>Number of rows the SQL query affects.</td>
  </tr>
  <tr>
    <td>pg_stat_replication</td>
    <td>pgexporter_pg_stat_replication</td>
    <td>v10-16</td>
    <td>gauge</td>
    <td>server, application_name</td>
    <td>stat_replication</td>
    <td>data</td>
    <td>both</td>
    <td>Number of streaming WAL connections per application.</td>
  </tr>
  <tr>
    <td rowspan="4">pg_stat_archiver</td>
    <td>pgexporter_pg_stat_archiver_archived_count</td>
    <td rowspan="4">v10-16</td>
    <td>counter</td>
    <td rowspan="4">server</td>
    <td rowspan="4">stat_archiver</td>
    <td rowspan="4">data</td>
    <td rowspan="4">both</td>
    <td>Number of successful archived WAL files.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_archiver_success_time_elapsed_ms</td>
    <td>counter</td>
    <td>Milliseconds since successful archived WAL file.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_archiver_archived_count</td>
    <td>counter</td>
    <td>Number of failed archival operation on WAL files.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_archiver_archived_count</td>
    <td>counter</td>
    <td>Milliseconds since last failed archival operation on WAL files.</td>
  </tr>
  <tr>
    <td>pg_wal_last_received</td>
    <td>pgexporter_pg_wal_last_received</td>
    <td>v11-16</td>
    <td>counter</td>
    <td>server, sender</td>
    <td>wal_last_received</td>
    <td>name</td>
    <td>replica</td>
    <td>Time since last message received from WAL sender.</td>
  </tr>
  <tr>
    <td>pg_gss_auth</td>
    <td>pgexporter_pg_gss_auth</td>
    <td rowspan="2">v12-16</td>
    <td>gauge</td>
    <td>server</td>
    <td>gssapi</td>
    <td>name</td>
    <td>both</td>
    <td>Number of GSSAPI authenticated DB connections.</td>
  </tr>
  <tr>
    <td>pg_encrypted_conn</td>
    <td>pgexporter_pg_encrypted_conn</td>
    <td>gauge</td>
    <td>server</td>
    <td>encryted_conns</td>
    <td>name</td>
    <td>both</td>
    <td>Number of encrypted DB connections.</td>
  </tr>
  <tr>
    <td>pg_shmem_allocations</td>
    <td>pgexporter_pg_shmem_allocations_size</td>
    <td rowspan="4">v13-16</td>
    <td>histogram</td>
    <td>server</td>
    <td>shmem_size</td>
    <td>name</td>
    <td>both</td>
    <td>Histogram of shared memory sizes.</td>
  </tr>
  <tr>
    <td>pg_stat_statements_total_exec_time</td>
    <td>pgexporter_pg_stat_statements_total_exec_time</td>
    <td>gauge</td>
    <td>server, query</td>
    <td>stat_statements_total_exec_time</td>
    <td>name</td>
    <td>both</td>
    <td>Milliseconds taken by the sql query to execute.</td>
  </tr>
  <tr>
    <td>pg_stat_statements_plans</td>
    <td>pgexporter_pg_stat_statements_plans</td>
    <td>counter</td>
    <td>server, query</td>
    <td>stat_statements_plans</td>
    <td>data</td>
    <td>both</td>
    <td>Number of times the sql query is planned.</td>
  </tr>
  <tr>
    <td>pg_stat_statements_wal_bytes</td>
    <td>pgexporter_pg_stat_statements_wal_bytes</td>
    <td>counter</td>
    <td>server, query</td>
    <td>stat_statements_wal_bytes</td>
    <td>data</td>
    <td>both</td>
    <td>Bytes occupied in WAL.</td>
  </tr>
  <tr>
    <td rowspan="4">pg_mem_ctx</td>
    <td>pgexporter_pg_mem_ctx_contexts</td>
    <td rowspan="4">v14-16</td>
    <td>gauge</td>
    <td rowspan="4">server, parent</td>
    <td rowspan="4">mem_ctx</td>
    <td rowspan="4">name</td>
    <td rowspan="4">both</td>
    <td>Number of memory contexts per parent.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_mem_ctx_free_bytes</td>
    <td>gauge</td>
    <td>Free bytes per memory context.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_mem_ctx_used_bytes</td>
    <td>gauge</td>
    <td>Used bytes per memory context.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_mem_ctx_total_bytes</td>
    <td>gauge</td>
    <td>Total bytes per memory context.</td>
  </tr>
  <tr>
    <td rowspan="8">pg_stat_wal</td>
    <td>pgexporter_pg_stat_wal_wal_records</td>
    <td rowspan="8">v14-16</td>
    <td>counter</td>
    <td rowspan="8">server</td>
    <td rowspan="8">stat_wal</td>
    <td rowspan="8">name</td>
    <td rowspan="8">both</td>
    <td>Number of WAL records generated.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_wal_wal_fpi</td>
    <td>counter</td>
    <td>Number of WAL full page images generated.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_wal_wal_bytes</td>
    <td>counter</td>
    <td>Total bytes of generated WAL.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_wal_wal_buffers_full</td>
    <td>counter</td>
    <td>Number of disk writes due to WAL buffers being full.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_wal_wal_write</td>
    <td>counter</td>
    <td>Number of times WAL files were written to disk.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_wal_wal_sync</td>
    <td>counter</td>
    <td>Number of times WAL files were synced to disk.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_wal_wal_write_time</td>
    <td>counter</td>
    <td>Time taken for WAL files to be written to disk.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_wal_wal_sync_time</td>
    <td>counter</td>
    <td>Time taken for WAL files to be synced to disk.</td>
  </tr>
  <tr>
    <td rowspan="24">pg_stat_database</td>
    <td>pgexporter_pg_stat_database_blk_read_time</td>
    <td rowspan="16">v10-16</td>
    <td>counter</td>
    <td rowspan="24">server, database</td>
    <td rowspan="24">stat_db</td>
    <td rowspan="24">name</td>
    <td rowspan="24">both</td>
    <td>pg_stat_database_blk_read_time</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_blk_write_time</td>
    <td>counter</td>
    <td>pg_stat_database_blk_write_time</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_blks_hit</td>
    <td>counter</td>
    <td>pg_stat_database_blks_hit</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_blks_read</td>
    <td>counter</td>
    <td>pg_stat_database_blks_read</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_deadlocks</td>
    <td>counter</td>
    <td>pg_stat_database_deadlocks</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_temp_files</td>
    <td>gauge</td>
    <td>pg_stat_database_temp_files</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_temp_bytes</td>
    <td>gauge</td>
    <td>pg_stat_database_temp_bytes</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_tup_returned</td>
    <td>counter</td>
    <td>pg_stat_database_tup_returned</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_tup_fetched</td>
    <td>counter</td>
    <td>pg_stat_database_tup_fetched</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_tup_inserted</td>
    <td>counter</td>
    <td>pg_stat_database_tup_inserted</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_tup_updated</td>
    <td>counter</td>
    <td>pg_stat_database_tup_updated</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_tup_deleted</td>
    <td>counter</td>
    <td>pg_stat_database_tup_deleted</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_xact_commit</td>
    <td>counter</td>
    <td>pg_stat_database_xact_commit</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_xact_rollback</td>
    <td>counter</td>
    <td>pg_stat_database_xact_rollback</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_conflicts</td>
    <td>counter</td>
    <td>pg_stat_database_conflicts</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_numbackends</td>
    <td>gauge</td>
    <td>pg_stat_database_numbackends</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_checksum_failures</td>
    <td>v12-16</td>
    <td>gauge</td>
    <td>pg_stat_database_checksum_failures</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_session_time</td>
    <td rowspan="7">v14-16</td>
    <td>gauge</td>
    <td>pg_stat_database_session_time</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_active_time</td>
    <td>gauge</td>
    <td>pg_stat_database_active_time</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_idle_in_transaction_time</td>
    <td>gauge</td>
    <td>pg_stat_database_idle_in_transaction_time</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_sessions</td>
    <td>gauge</td>
    <td>pg_stat_database_sessions</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_sessions_abandoned</td>
    <td>gauge</td>
    <td>pg_stat_database_sessions_abandoned</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_sessions_fatal</td>
    <td>gauge</td>
    <td>pg_stat_database_sessions_fatal</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_sessions_killed</td>
    <td>gauge</td>
    <td>pg_stat_database_sessions_killed</td>
  </tr>
  <tr>
    <td>pg_wal_prefetch_reset</td>
    <td>pgexporter_pg_wal_prefetch_reset</td>
    <td>v15-16</td>
    <td>counter</td>
    <td>server</td>
    <td>wal_prefetch_reset</td>
    <td>name</td>
    <td>both</td>
    <td>Seconds from last WAL prefetch stats reset.</td>
  </tr>
  <tr>
    <td>pg_gssapi_credentials_delegated</td>
    <td>pgexporter_pg_gssapi_credentials_delegated</td>
    <td>v16</td>
    <td>gauge</td>
    <td>server</td>
    <td>gssapi_creds_delegated</td>
    <td>name</td>
    <td>both</td>
    <td>Number of DB connections with delegated GSSAPI credentials.</td>
  </tr>
  <tr>
    <td rowspan="14">pg_stat_io</td>
    <td>pgexporter_pg_stat_io_reads</td>
    <td rowspan="14">v16</td>
    <td>counter</td>
    <td rowspan="14">server, backend_type</td>
    <td rowspan="14">stat_io</td>
    <td rowspan="14">name</td>
    <td rowspan="14">both</td>
    <td>Number of read operations.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_io_read_time</td>
    <td>counter</td>
    <td>Total time spent on read operations in milliseconds.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_io_writes</td>
    <td>counter</td>
    <td>Number of write operations.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_io_write_time</td>
    <td>counter</td>
    <td>Total time spent on write operations in milliseconds.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_io_writebacks</td>
    <td>counter</td>
    <td>Number of writeback to permanent storage requests sent to kernel.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_io_writeback_time</td>
    <td>counter</td>
    <td>Total time spent on writeback operations in milliseconds.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_io_extends</td>
    <td>counter</td>
    <td>Number of relation extend operations.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_io_extend_time</td>
    <td>counter</td>
    <td>Total time spent on relation extend operations in milliseconds.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_io_op_bytes</td>
    <td>gauge</td>
    <td>Bytes per unit of I/O read, written or extended.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_io_hits</td>
    <td>counter</td>
    <td>The number of times a desired block was found in shared buffer.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_io_evictions</td>
    <td>counter</td>
    <td>The number of times a block has been written out from shared or local buffer in order to make it available for another use.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_io_reuses</td>
    <td>counter</td>
    <td>The number of times an existing buffer in a size-limited ring buffer outside of shared buffers was reused as part of an I/O operation.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_io_fsyncs</td>
    <td>counter</td>
    <td>Number of fsync calls.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_io_fsync_time</td>
    <td>counter</td>
    <td>Total time spent on fsync operations in milliseconds.</td>
  </tr>
  <tr>
    <td rowspan="6">pg_stat_database_conflicts</td>
    <td>pgexporter_pg_stat_database_conflicts_confl_tablespace</td>
    <td rowspan="6">v16</td>
    <td>counter</td>
    <td rowspan="6">server, database</td>
    <td rowspan="6">stat_conflicts</td>
    <td rowspan="6">data</td>
    <td rowspan="6">both</td>
    <td>pg_stat_database_conflicts_confl_tablespace</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_conflicts_confl_lock</td>
    <td>counter</td>
    <td>pg_stat_database_conflicts_confl_lock</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_conflicts_confl_snapshot</td>
    <td>counter</td>
    <td>pg_stat_database_conflicts_confl_snapshot</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_conflicts_confl_bufferpin</td>
    <td>counter</td>
    <td>pg_stat_database_conflicts_confl_bufferpin</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_conflicts_confl_dead</td>
    <td>counter</td>
    <td>pg_stat_database_conflicts_confl_dead</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_database_conflicts_confl_active_logicalslot</td>
    <td>counter</td>
    <td>pg_stat_database_conflicts_confl_active_logicalslot</td>
  </tr>
  <tr>
    <td rowspan="6">pg_stat_all_indexes</td>
    <td>pgexporter_pg_stat_all_indexes_idx_scans</td>
    <td rowspan="3">v10-16</td>
    <td>counter</td>
    <td rowspan="6">server, relname</td>
    <td rowspan="6">stat_all_indexes</td>
    <td rowspan="6">data</td>
    <td rowspan="6">both</td>
    <td>Number of index scans on the table's indexes.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_all_indexes_idx_tup_reads</td>
    <td>counter</td>
    <td>Number of index entries returned by scans on the table's indexes.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_all_indexes_idx_tup_fetchs</td>
    <td>counter</td>
    <td>Number of rows fetched by simple index scans on the table's indexes.</td>
  </tr>
  <tr>
    <td>pgexporter_pg_stat_all_indexes_time_elapsed_ms</td>
    <td>v16</td>
    <td>counter</td>
    <td>Milliseconds since last scan of an index in the table.</td>
  </tr>
</table>

## Custom Metrics

Custom metrics are either defined in a single `YAML` file, or inside multiple `YAML` files inside a **single** directory.

:::tip NOTE
Examples of custom `YAML` files can be found [here](https://github.com/pgexporter/pgexporter/tree/main/contrib/yaml).
:::

The overall schema for the custom metrics are:
```
YAML = {
  version : number,
  metrics : Metric[]
};

Metric = {
  queries : Query[],
  tag : string,
  collector : string,
  sort : "name" (default) | "data",
  server : "both" (default) | "primary" | "replica",
};

Query = {
  query : string,
  columns : Column[],
  version ?: number
};

Column = Label | Counter | Gauge;

Label = {
  name: string,
  type: "label"
};

Counter = {
  name ?: string,
  type: "counter",
  description: string
};

Gauge = {
  name ?: string,
  type: "gauge",
  description: string
};
```

Custom metrics have to be defined in `yaml` files. There may be a single file or multiple of them (within a **single** directory).

::: tip
Some examples of user-defined metrics can be found [here](https://github.com/pgexporter/pgexporter/tree/main/contrib/yaml) and can be used as a reference while going through this guide.
:::

The structure of these custom `yaml` files can be approached in a top-down manner as follows.

### Top Level
At the top-most level of the `yaml` file, there are two keys `version` and `metrics`:

```yml
version: ...
metrics: ...
```

- `version` specifies a default minimum PostgreSQL support version for the queries (more on this [below](#queries)).
- `metrics` is a list of user defined metrics.

### Metrics

The `metrics` key is a list of metrics and has the following structure:

```yml
...
metrics:

  - queries: ...
    tag: ...
    collector: ...
    sort: ...
    server: ...

  - queries: ...
    tag: ...
    collector: ...
    sort: ...
    server: ...

  - queries: ...
    tag: ...
    collector: ...
    sort: ...
    server: ...
  ...
```

- `queries` are a list of query alternatives (more on this [below](#queries)).
- `tag`: This specifies the tag of the metics (more on this [below](#columns)).
- `collector`: This specifies a `collector` name for the metric. This allows you to disable a collector by using the `-C` flag (see [here](#) for details).
- `sort` (*optional*): This specifies how the output of each metric will be sorted. Currently there are two supported values:
  - `name` (*default*): This will sort the output according to server's name.
  - `data`: This will sort the output according to the data of the first column of the SQL query that will be run on the server (more on this [below](#queries)).
- `server` (*optional*): This specifies on which type of server the metric should query. There are three possible values to this:
  - `primary`: This means that this metric is only for primary servers.
  - `replica`: This means that this metric is only for replica servers.
  - `both` (*default*): This means that this metric is for both types of servers.

### Queries

Each `queries` key is an object of the following structure:
```yml
- queries:
  - query: ...
    columns: ...
    version: ...
  - query: ...
    columns: ...
    version: ...
    ...
```

- `query`: Query String for the query alternative (explained [below](#query-selection-based-on-server-version)).
- `version` (*optional*): Minimum PostgreSQL version required to run the query (explained [below](#query-selection-based-on-server-version)). If this value is not provided, then the default is taken from the top level `version`.
- `columns`: List of columns (explained [below](#columns))

There are multiple queries for each metrics. They exist because not all queries are supported across all versions of PostgreSQL. The solution is to provide a query, as well as the minimum version of PostgreSQL it will run on.

Thus `queries` contains multiple entries, each containing a `query` and a minimum PostgreSQL `version` required to run it.

#### Query Selection Based On Server Version

Depending on the version of the server, a suitable query is picked. It is picked according to the following rule:

If your server has a version `v`, then it will select the query with the maximum value of `version` that it can find which is also **less than or equal to** `v`.

For example:

::: code-group

```txt [Query Entries]
|Server mininum supported PostgreSQL version|Query|
|-------------------------------------------|-----|
|                  10                       |  Q1 |
|                  12                       |  Q2 |
|                  14                       |  Q3 |
|                  16                       |  Q4 |
|                  18                       |  Q5 |
|                  20                       |  Q6 |
|                  22                       |  Q7 |
```

```txt [Output for different servers]
Server is v9: Not Supported (No query is sent)
Server is v10: Q1 sent
Server is v11: Q1 sent
Server is v12: Q2 sent
Server is v13: Q2 sent
Server is v14: Q3 sent
Server is v15: Q3 sent
Server is v16: Q4 sent
Server is v17: Q4 sent
Server is v18: Q5 sent
Server is v19: Q5 sent
Server is v21: Q6 sent
Server is v25: Q7 sent
```
:::

### Columns

Labels, Gauges, Counters and Histograms are the types of Prometheus metrics currently supported by pgexporter. Histogram metric type is a bit different from the rest:

#### Labels, Gauges and Counters

For labels, gauges and counters, `columns` contains a list of columns, which can be either one of the following:

```yml
- name: ...
  type: label
```

or,

```yml
- name: ...
  type: gauge
  description: ...
```

or,

```yml
- name: ...
  type: counter
  description: ...
```

Gauges or Counters do not strictly need names. It will, by default, take the name from the `tag` of the metric like `pgexporter_tag`. However, any `name`s provided will be appended to the `tag` like: `pgexporter_tag_name`, and hence names should be provided when dealing with multiple metrics derived from a single query.

:::warning NOTE
Names are required for distinction when the same metric has more than one counter/gauge as if not provided, all of these will have the same metric name.
:::

#### Histograms

### How to Use Custom Metrics

Suppose the user defines their metrics in `custom.yml`, having the path `/location/to/custom.yml`. To run `pgepxorter` with the metrics defined in this file:

```sh
$ pgexporter -c pgexporter.conf -u pgexporter_users.conf -Y /location/to/custom.yml
```

or, if all the custom `yaml` files are kept in a directory having path `/location/to/custom/dir`, `pgexporter` is run as:

```sh
$ pgexporter -c pgexporter.conf -u pgexporter_users.conf -Y /location/to/custom/dir
```

Examples can be refered from [here](https://github.com/pgexporter/pgexporter/tree/main/contrib/yaml).