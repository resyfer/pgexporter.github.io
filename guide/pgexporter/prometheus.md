# Prometheus

<<<<<<< HEAD
[Prometheus]() can be configured with `pgexporter` as a data source.
=======
[Prometheus](https://prometheus.io/) can be configured with `pgexporter` as a data source.
>>>>>>> 7bc1a03 (Revamp)

An example config file for prometheus, `prometheus.yml`, can be:
```yml
global:
  scrape_interval: 15s

scrape_configs: // [!code focus]
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9009']
  - job_name: 'pgexporter' // [!code focus]
    static_configs: // [!code focus]
      - targets: ['localhost:5002'] // [!code focus]
```