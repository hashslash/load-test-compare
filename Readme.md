# Nodejs:
``` css
Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
Requests: 12906 (13%), requests per second: 2585, mean latency: 38.6 ms
Requests: 27191 (27%), requests per second: 2855, mean latency: 35 ms
Requests: 40834 (41%), requests per second: 2731, mean latency: 36.6 ms
Requests: 54454 (54%), requests per second: 2719, mean latency: 36.7 ms
Requests: 67776 (68%), requests per second: 2670, mean latency: 37.5 ms
Requests: 80519 (81%), requests per second: 2545, mean latency: 39.3 ms
Requests: 93793 (94%), requests per second: 2657, mean latency: 37.6 ms

Target URL:          http://localhost:8000
Max requests:        100000
Concurrency level:   100
Agent:               none
INFO
Completed requests:  100000
Total errors:        0
Total time:          37.2570718 s
Requests per second: 2684
Mean latency:        37.2 ms
INFO
Percentage of the requests served within a certain time
  50%      36 ms
  90%      43 ms
  95%      45 ms
  99%      53 ms
 100%      79 ms (longest request)
```

# Nginx

```css
Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
Requests: 13524 (14%), requests per second: 2705, mean latency: 36.9 ms
Requests: 28710 (29%), requests per second: 3039, mean latency: 32.9 ms
Requests: 43568 (44%), requests per second: 2972, mean latency: 33.6 ms
Requests: 58335 (58%), requests per second: 2952, mean latency: 33.9 ms
Requests: 73640 (74%), requests per second: 3065, mean latency: 32.6 ms
Requests: 88921 (89%), requests per second: 3052, mean latency: 32.8 ms
Target URL:          http://localhost:80
Max requests:        100000
Concurrency level:   100
Agent:               none
Completed requests:  100000
Total errors:        0
Total time:          33.677702699 s
Requests per second: 2969
Mean latency:        33.6 ms
Percentage of the requests served within a certain time
  50%      33 ms
  90%      38 ms
  95%      40 ms
  99%      49 ms
 100%      83 ms (longest request)
```
# Expressjs
```css
Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
Requests: 11886 (12%), requests per second: 2380, mean latency: 42 ms
Requests: 25169 (25%), requests per second: 2652, mean latency: 37.7 ms
Requests: 38063 (38%), requests per second: 2582, mean latency: 38.7 ms
Requests: 51557 (52%), requests per second: 2700, mean latency: 37 ms
Requests: 65532 (66%), requests per second: 2797, mean latency: 35.8 ms
Requests: 79530 (80%), requests per second: 2797, mean latency: 35.7 ms
Requests: 92780 (93%), requests per second: 2640, mean latency: 37.5 ms
Target URL:          http://localhost:8000
Max requests:        100000
Concurrency level:   100
Agent:               none
Completed requests:  100000
Total errors:        0
Total time:          38.8592177 s
Requests per second: 2573
Mean latency:        38.8 ms
Percentage of the requests served within a certain time
  50%      36 ms
  90%      45 ms
  95%      51 ms
  99%      76 ms
 100%      181 ms (longest request)
```