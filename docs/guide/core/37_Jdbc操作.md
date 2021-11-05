## JDBC Template 操作

<p class="show-images"><img src="/images/undraw_operating_system_4lr6.svg" width="40%" /></p>

### 概述

平台会抽取常用功能放至基础类中，平台提供常用稳定的方法，便于开发过程中直接调用。

### JpaJdbcTemplate 接口默认提供方法

| 序号 | 方法                                                                 | 描述 | 是否集成 | 备注 |
| :--: | -------------------------------------------------------------------- | ---- | -------- | ---- |
|  1   | List find(String sql, Class clazz, Map parameters)                   |      | 集成     |      |
|  2   | Object findForObject(String sql, Class clazz, Map parameters)        |      | 集成     |      |
|  3   | Long findForLong(String sql, Map parameters)                         |      | 集成     |      |
|  4   | Map findForMap(String sql, Map parameters)                           |      | 集成     |      |
|  5   | List<Map<String, Object>> findForListMap(String sql, Map parameters) |      | 集成     |      |
|  6   | int executeForObject(String sql, Object bean)                        |      | 集成     |      |
|  7   | int executeForMap(String sql, Map parameters)                        |      | 集成     |      |
|  8   | int[] batchUpdate(String sql, List<Object[]> batch)                  |      | 集成     |      |
|  9   | boolean execute(String sql)                                          |      | 集成     |      |
|  10  | boolean execute(String sql, Object... args)                          |      | 集成     |      |
