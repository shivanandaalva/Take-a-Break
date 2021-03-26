function setReminder() {
    chrome.browserAction.setBadgeText({text: 'ON'});
      alert("Reminder set Successfully");
      chrome.alarms.create({
        delayInMinutes: parseFloat(event.target.value)
      });
      window.close();
  }
  function cancelReminder() {
    chrome.browserAction.setBadgeText({text: 'OFF'});
    chrome.alarms.clearAll();
    alert("Cancelled Reminder");
    chrome.runtime.reload();
    window.close();
  }
  
  document.getElementById("reminder").addEventListener("click", setReminder);
  document.getElementById("cancel").addEventListener("click", cancelReminder);