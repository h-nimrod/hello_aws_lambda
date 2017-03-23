Hello AWS Lambda
=======

local test
-----

```
$ npm install
$ node local.js
    
event = { keys: [ 'uname -a', 'date' ] }
RemainingTimeInMillis:
5678
memoryLimitInMB:
1234
Reading options from event:
 { keys: [ 'uname -a', 'date' ] }
Dumping context:
 { invokeid: 'invokeid',
   memoryLimitInMB: '1234',
   getRemainingTimeInMillis: [Function],
   done: [Function] }
----------------------------------------
uname -a
----------------------------------------

Darwin h-nimrod-iMac.local 16.1.0 Darwin Kernel Version 16.1.0: Thu Oct 13 21:26:57 PDT 2016; root:xnu-3789.21.3~60/RELEASE_X86_64 x86_64

----------------------------------------
date
----------------------------------------

2017年 3月22日 水曜日 21時09分52秒 JST

timeout finised
RemainingTimeInMillis:
5678
```
