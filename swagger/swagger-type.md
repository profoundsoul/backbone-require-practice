# Swagger Type And Rule

## Data Type

> 常用的Primitive Date Type 及复杂数据类型：
> + integer
> + number
> + string 
> + boolean
> + object
> + array

#### default

>指定当前属性的默认值，优先使用

#### Enum

> 为数组类型，里面允许指定具体的数值或项，枚举值优先级高于自定义规则

```json
"enum": [
    "clueless",
    "lazy",
    "adventurous",
    "aggressive"
]
```

有此项时，随机从enum中取出一项值

### integer
> 最大值和最小值范围：
> + minimum 最小数值，整数
> + maximum 最大数值，整数

应对MockJS中随机生成数据规则/函数：Random.integer(min?, max?)

```javascript
//正常情况对应最小值和最大值
Random.integer(min?, max?)

//如果只填写minimum
Random.integer(min?)

//如果没有填写范围
Random.integer()
```

### number

> 最大值和最小值范围：
> + minimum 最小数值，整数
> + maximum 最大数值，整数
> + x-digit 小数点位数


应对MockJS中随机生成数据规则/函数:Random.float( min?, max?, dmin?, dmax? )

```javascript
//不填写随机生成浮点型数值
Random.float()

//只填写minimum
Random.float(0)

// minimum 与 maximum
Random.float(60, 100)

// minimum 与 maximum及x-digit为单数值，无逗号分隔。例如：3
Random.float(60, 100, 3)

// Random.float( min, max, x-digit )
// x-digit 是两个数值且以逗号分隔，例如：3,5
Random.float(60, 100, 3, 5)
```

### String

> 允许指定长度范围：
> + minLength
> + maxLength
> + x-range    取值范围字符串或指定转换字符
>   + lower    小写字母
>   + upper    大写字母
>   + number   数值
>   + symbol   特殊字符
>   + 随机字符串，后面长度范围在此处任选字符串

应对MockJS中随机生成数据规则/函数：Random.string( pool?, min?, max? )

```javascript
Random.string()

//只填写minLength或maxLength时，表示随机出来字符串长度。例如：minLength为5
Random.string(5)

//minLength与maxLength
Random.string(7, 10)

//x-range的值为lower项，表示生成小写字母，随机生成5小写字母
Random.string('lower', 5)

//x-range的值为uppper项，表示生成大写字母， 随机生成5小写字母
Random.string('upper', 5)

//x-range的值为number项，表示生成0-10数字，随机生成5数字字符
Random.string('number', 5)

//x-range的值为symbol项，表示生成特殊字符，随机生成5数字字符
Random.string('symbol', 5)

//x-range的值为其它时，表示生成自定义字符集，字符从自定义字符集中取值，允许重复
Random.string('aeiou', 5)

// Random.string( pool, min, max )
// x-range的值为lower项，minLength和maxLength均填写时，随机生成1-3位小写字母
Random.string('lower', 1, 3)

// x-range的值为其它项，minLength和maxLength均填写时，随机生成1-3位指定字符串集内的字符
Random.string('qwertyuiop[]\;', 1, 3)
```

### String与x-format=guid 随机md5码

Random.guid()


### String与x-format=id   随机id

Random.id()

### String与x-format=step   自增长ID

Random.increment( step? )

### String与x-format=title 英文标题

Random.title( min?, max? )

### String与x-format=ctitle 中文标题

Random.ctitle( min?, max? )

### String与x-format=text   备注等大文本

Random.paragraph( min?, max? )

### String与x-format=ctext   备注等大文本

Random.cparagraph( min?, max? )

### String与x-format=cname  中文名字

Random.cname()

### String与x-format=name   英文名字

Random.name( middle? )

### String与x-format=email  邮件

Random.email()

### String与x-format=date   日期

Random.date( format? )

### String与x-format=time   时间

Random.time( format? )

### String与x-format=date-time 日期和时间

Random.datetime( format? )

### String与x-format=url URL

Random.url()

### String与x-format=imageurl 超链接地址

Random.image( size?, background?, foreground?, format?, text? )



