const clock = document.getElementById('clock');
    const toggleFormat = document.getElementById('toggle-format');
    const fontSizeInput = document.getElementById('font-size');
    const colorSchemeInput = document.getElementById('color-scheme');
    const alarmTimeInput = document.getElementById('alarm-time');
    const setAlarmButton = document.getElementById('set-alarm');
    const clearAlarmButton = document.getElementById('clear-alarm');
    const alarmMessage = document.getElementById('alarm-message');

    let is24HourFormat = JSON.parse(localStorage.getItem('is24HourFormat')) || false;
    let customFontSize = localStorage.getItem('fontSize') || '48';
    let customColorScheme = localStorage.getItem('colorScheme') || '#333333';
    let alarmTime = localStorage.getItem('alarmTime') || null;

    function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      let timeText;

      if (!is24HourFormat) {
        hours = hours % 12 || 12;
        timeText = `${hours}:${minutes}:${seconds} ${ampm}`;
      } else {
        timeText = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
      }

      clock.textContent = timeText;

      if (alarmTime === `${String(now.getHours()).padStart(2, '0')}:${minutes}`) {
        alarmMessage.style.display = 'block';
      } else {
        alarmMessage.style.display = 'none';
      }
    }

    function applyCustomizations() {
      clock.style.fontSize = `${customFontSize}px`;
      clock.style.color = customColorScheme;
    }

    function savePreferences() {
      localStorage.setItem('is24HourFormat', is24HourFormat);
      localStorage.setItem('fontSize', customFontSize);
      localStorage.setItem('colorScheme', customColorScheme);
      localStorage.setItem('alarmTime', alarmTime);
    }

    toggleFormat.checked = is24HourFormat;
    fontSizeInput.value = customFontSize;
    colorSchemeInput.value = customColorScheme;
    alarmTimeInput.value = alarmTime || '';

    toggleFormat.addEventListener('change', () => {
      is24HourFormat = toggleFormat.checked;
      savePreferences();
    });

    fontSizeInput.addEventListener('input', (e) => {
      customFontSize = e.target.value;
      applyCustomizations();
      savePreferences();
    });

    colorSchemeInput.addEventListener('input', (e) => {
      customColorScheme = e.target.value;
      applyCustomizations();
      savePreferences();
    });

    setAlarmButton.addEventListener('click', () => {
      alarmTime = alarmTimeInput.value;
      savePreferences();
    });

    clearAlarmButton.addEventListener('click', () => {
      alarmTime = null;
      alarmTimeInput.value = '';
      savePreferences();
      alarmMessage.style.display = 'none';
    });

    applyCustomizations();
    setInterval(updateClock, 1000);