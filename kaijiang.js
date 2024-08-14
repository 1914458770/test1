 function updateTimer() {
     var targetTime = new Date();
     targetTime.setHours(21, 30, 0, 0); // 设置目标时间为每天的21:30
 
     var now = new Date();
     var timeDifference = targetTime - now; // 计算时间差
 
     if (timeDifference < 0) {
         // 如果当前时间已经超过了21:30，则计算到明天21:30的时间差
         targetTime.setDate(targetTime.getDate() + 1);
         timeDifference = targetTime - now;
     }
 
     var hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
     var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
 
     // 格式化时间显示
     hours = hours < 10 ? '0' + hours : hours;
     minutes = minutes < 10 ? '0' + minutes : minutes;
     seconds = seconds < 10 ? '0' + seconds : seconds;
 
     document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;
 
     setTimeout(updateTimer, 1000); // 每秒更新时间
 }
 
 window.onload = updateTimer; // 页面加载完成后开始计时