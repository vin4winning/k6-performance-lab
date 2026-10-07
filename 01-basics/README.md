# 01 - k6 Basics

This section starts with the simplest k6 test and maps the concepts to JMeter.

## Exercise 1: Simple GET

**API:** DummyJSON

**Endpoint:** `GET https://dummyjson.com/products/1`

### JMeter mental model

| JMeter | k6 |
|---|---|
| Thread Group | `options` + execution model |
| Number of Threads | `vus` |
| Duration | `duration` |
| HTTP Request sampler | `http.get()` |
| Listener / response data | k6 metrics + console output |

### Run

```bash
k6 run 01-basics/01-simple-get.js
```

Start with just **1 VU for 30 seconds**. The objective is learning the execution model, not generating load against a public API.

Next exercises will add checks, thresholds, parameterization, and then workload models such as constant-arrival-rate.
