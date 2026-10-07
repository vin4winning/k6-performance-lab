# 02 - JMeter to k6

This section will map familiar JMeter concepts to k6 and highlight where the execution models differ.

Planned topics:

- Thread Group -> k6 executors and VUs
- CSV Data Set Config -> k6 data handling
- HTTP Request -> `http.get()`, `http.post()`, etc.
- Assertions -> checks and thresholds
- Correlation -> response parsing and extraction
- Timers -> pacing and arrival-rate executors
- Throughput shaping -> open workload executors
- Listeners -> k6 metrics and result outputs
