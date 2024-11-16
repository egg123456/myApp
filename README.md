## database design

### person
field | desc
------|------
id | -
name | -
phone | -
addr | -


### ceremonyBooks
field | desc
------|------
id | -
name | -
gregorianCalendar | -
lunarCalendar | -
belongTo | person id join by ,


### ceremony
field | desc
------|------
id | -
name | -
addr | -
relationShip | -
belongTo | ceremonyBooks id

---

### func
field | desc
------|------
id | -
name | -
entry | -

---

## ProjectProcess
### plan
field | desc
------|------
id | int // planId
name | eventName
submitTest | datetime
publishTime | datetime
planType | string default demand
eventIds | zenTao-id // multiple zenTao-id compose eventId
remark | char(100)

### event
field | desc
------|------
id | int // eventId
name | eventName
belongToVersion | string
submitTest | datetime
publishTime | datetime
eventType | string default demand
childEventIds | zenTao-id // multiple zenTao-id compose eventId


### eventTime
field | desc
------|------
id | AUTO_INCREMENT
belongToEvent | int // eventId
beginTime | datetime
endTime | datetime
timeType | char(20) default dev

### program design
1. 权限控制
/views/* 路由的页面不鉴权
/api/* 接口鉴权


--------
## festival and holiday
field | desc
------|-----
id | auto increment key
year | current year
startTime | dateTime
endTime | dateTime
type | holiday
name | festival name
remark | varchar 255

--------
## algorithm
field | desc
------|-------
id | auto increment key
titleDesc | string
inputDesc | string
outputDesc | string
useCase | json string
titleAnalysis | string
code



