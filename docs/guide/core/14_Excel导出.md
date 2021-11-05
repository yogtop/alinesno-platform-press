## Excel 导出

<p class="show-images"><img src="/images/undraw_in_sync_xwsa.svg" width="40%" /></p>

### 注释介绍

- @Excel 作用到 filed 上面,是对 Excel 一列的一个描述
- @ExcelCollection 表示一个集合,主要针对一对多的导出,比如一个老师对应多个科目,科目就可以用集合表示
- @ExcelEntity 表示一个继续深入导出的实体,但他没有太多的实际意义,只是告诉系统这个对象里面同样有导出的字段
- @ExcelIgnore 和名字一样表示这个字段被忽略跳过这个导导出
- @ExcelTarget 这个是作用于最外层的对象,描述这个对象的 id,以便支持一个对象可以针对不同导出做出不同处理

### @Excel

这个是必须使用的注解,如果需求简单只使用这一个注解也是可以的,涵盖了常用的 Excel 需求,主要分为基础,图片处理,时间处理,合并处理几块,name_id 是上面讲的 id 用法。

| 属性           | 类型     | 默认值           | 功能                                                                                                                   |
| -------------- | -------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------- |
| name           | String   | null             | 列名,支持 name_id                                                                                                      |
| needMerge      | boolean  | fasle            | 是否需要纵向合并单元格(用于含有 list 中,单个的单元格,合并 list 创建的多个 row)                                         |
| orderNum       | String   | "0"              | 列的排序,支持 name_id                                                                                                  |
| replace        | String[] | {}               | 值得替换 导出是{a_id,b_id} 导入反过来                                                                                  |
| savePath       | String   | "upload"         | 导入文件保存路径,如果是图片可以填写,默认是 upload/className/ IconEntity 这个类对应的就是 upload/Icon/                  |
| type           | int      | 1                | 导出类型 1 是文本 2 是图片,3 是函数,10 是数字 默认是文本                                                               |
| width          | double   | 10               | 列宽                                                                                                                   |
| height         | double   | 10               | 列高                                                                                                                   |
| isStatistics   | boolean  | fasle            | 自动统计数据,在追加一行统计,把所有数据都和输出[这个处理会吞没异常,请注意这一点]                                        |
| isHyperlink    | boolean  | false            | 超链接,如果是需要实现接口返回对象                                                                                      |
| isImportField  | boolean  | true             | 校验字段,看看这个字段是不是导入的 Excel 中有,如果没有说明是错误的 Excel,读取失败,支持 name_id                          |
| exportFormat   | String   | ""               | 导出的时间格式,以这个是否为空来判断是否需要格式化日期                                                                  |
| importFormat   | String   | ""               | 导入的时间格式,以这个是否为空来判断是否需要格式化日期                                                                  |
| format         | String   | ""               | 时间格式,相当于同时设置了 exportFormat 和 importFormat                                                                 |
| databaseFormat | String   | "yyyyMMddHHmmss" | 导出时间设置,如果字段是 Date 类型则不需要设置 数据库如果是 string 类型,这个需要设置这个数据库格式,用以转换时间格式输出 |
| numFormat      | String   | ""               | 数字格式化,参数是 Pattern,使用的对象是 DecimalFormat                                                                   |
| imageType      | int      | 1                | 导出类型 1 从 file 读取 2 是从数据库中读取 默认是文件 同样导入也是一样的                                               |
| suffix         | String   | ""               | 文字后缀,如% 90 变成 90%                                                                                               |
| isWrap         | boolean  | true             | 是否换行 即支持\n                                                                                                      |
| mergeRely      | int[]    | {}               | 合并单元格依赖关系,比如第二列合并是基于第一列 则{0}就可以了                                                            |
| mergeVertical  | boolean  | fasle            | 纵向合并内容相同的单元格                                                                                               |
| fixedIndex     | int      | -1               | 对应 excel 的列,忽略名字                                                                                               |
| isColumnHidden | boolean  | false            | 导出隐藏列                                                                                                             |

### 使用示例

对象定义

```java
 public class StudentEntity  {
    private static final long serialVersionUID = 1L;
    /**
     * id
     */
    private String id;
    /**
     * 学生姓名
     */
    @Excel(name = "学生姓名", height = 20, width = 30, isImportField = "true_st")
    private String name;
    /**
     * 学生性别
     */
    @Excel(name = "学生性别", replace = { "男_1", "女_2" }, suffix = "生", isImportField = "true_st")
    private int sex;

    @Excel(name = "出生日期", databaseFormat = "yyyyMMddHHmmss", format = "yyyy-MM-dd", isImportField = "true_st", width = 20)
    private Date birthday;

    @Excel(name = "进校日期", databaseFormat = "yyyyMMddHHmmss", format = "yyyy-MM-dd")
    private Date registrationDate;

 }
```

如果有特殊的需求，可以在控制层重写 exportExcel()方法

```java
@Override
public ResponseBean exportExcel(
    	DatatablesPageBean page ,
    	HttpServletResponse response) throws IOException{}
```

效果如下

<p class="show-images"><img src="/images/exportExcel_example.png" width="100%"/></p>

### 其它

- 略
