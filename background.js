  chrome.alarms.onAlarm.addListener( function () {
        setInterval(increment, 3600000); 
        function increment(){ 
          chrome.browserAction.setBadgeText({text: ''});
          chrome.notifications.create({
            title: 'Take a Break',
            message: 'It is time to stop working and have some fun',
            iconUrl: 'stop_working.png',
            requireInteraction: false,
            type: 'basic'
          });
        }
      });