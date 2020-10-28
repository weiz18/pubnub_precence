# MyApp

Step to reproduce 

1. Click on Init to initilize pubnub 
2. Click Join A, check console log to see that precence is logged - should be something like `incoming presence - xxx`  
3. Click Join B, check console log to see that precence is logged - should be something like `incoming presence - xxx` 
4. Click Leave B, Check console log, Sometime Join A is triggered and sometime Leave A action is triggered 

The expected outcome would be 
1. The presenece event is only triggerd for that specific channel when unsubscribe occurs 

Thanks
