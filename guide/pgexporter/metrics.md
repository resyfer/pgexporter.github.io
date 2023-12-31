---
outline: deep
---

# Metrics

The main task of `pgexporter` is to gather metrics from your database and format it according to [Prometheus metrics standards](https://prometheus.io/docs/concepts/metric_types/). `pgexporter` provides some [pre-defined metrics](#internal-metrics) that are necessary/useful, and also provides the capability of providing [custom metrics](#custom-metrics) to the user.


## Internal Metrics

`pgexporter` defines a lot of metrics out of the box. All of the internal metrics that are exported can be viewed [here](../../docs/pgexporter/metrics.md#internal-metrics). By default, all of them are enabled, and will be reflected in the output. However, if you need only specific metrics, you can enable only them as shown [here](../../docs/pgexporter/command_line_flags.md#enable-only-specific-collectors) (and thus, disable other metrics).

## Custom Metrics

_See [Custom Metrics](../../../docs/pgexporter/metrics.md#custom-metrics)_.