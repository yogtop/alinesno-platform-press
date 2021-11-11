## ContiPerf 压力测试

#### 介绍

可以指定在线程数量和执行次数，通过限制最大时间和平均执行时间来进行效率测试，一个简单的例子如下：

```java
public class ContiPerfTest {

    @Rule
    public ContiPerfRule i = new ContiPerfRule();

    @Test
    @PerfTest(invocations = 1000, threads = 40)
    @Required(max = 1200, average = 250, totalTime = 60000)
    public void test1() throws Exception {
        Thread.sleep(200);
    }
}
```

使用@Rule 注释激活 ContiPerf，通过@Test 指定测试方法，@PerfTest 指定调用次数和线程数量，@Required 指定性能要求（每次执行的最长时间，平均时间，总时间等）。
也可以通过对类指定@PerfTest 和@Required，表示类中方法的默认设置，如下：

```java
@PerfTest(invocations = 1000, threads = 40)
@Required(max = 1200, average = 250, totalTime = 60000)
public class ContiPerfTest {

	@Rule
	public ContiPerfRule i = new ContiPerfRule();

	@Test
	public void test1() throws Exception {
		Thread.sleep(200);
	}
}
```

#### 主要参数介绍

1）PerfTest 参数

| 参数                         | 描述                                                   |
| ---------------------------- | ------------------------------------------------------ |
| @PerfTest(invocations = 300) | 执行 300 次，和线程数量无关，默认值为 1，表示执行 1 次 |
| @PerfTest(threads=30)        | 并发执行 30 个线程，默认值为 1 个线程                  |
| @PerfTest(duration = 20000)  | 重复地执行测试至少执行 20s                             |

2）Required 参数

| 参数                                     | 描述                                              |
| ---------------------------------------- | ------------------------------------------------- |
| @Required(throughput = 20)               | 要求每秒至少执行 20 个测试                        |
| @Required(average = 50)                  | 要求平均执行时间不超过 50ms                       |
| @Required(median = 45)                   | 要求所有执行的 50%不超过 45ms                     |
| @Required(max = 2000)                    | 要求没有测试超过 2s                               |
| @Required(totalTime = 5000)              | 要求总的执行时间不超过 5s                         |
| @Required(percentile90 = 3000)           | 要求 90%的测试不超过 3s                           |
| @Required(percentile95 = 5000)           | 要求 95%的测试不超过 5s                           |
| @Required(percentile99 = 10000)          | 要求 99%的测试不超过 10s                          |
| @Required(percentiles = "66:200,96:500") | 要求 66%的测试不超过 200ms，96%的测试不超过 500ms |

3. 测试结果展示

<p style="text-align:center"><img src="/images/contiperf_01.png" width="80%" /></p>
