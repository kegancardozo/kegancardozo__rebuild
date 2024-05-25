
var isDark = JSON.parse(localStorage.getItem('isDark'));

if (isDark ==null) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Dark mode preference detected
    isDark = true;
  } else {
    // Light mode preference detected or unable to detect
    isDark = false;
  }
  
}

if (isDark == true) {
  isDark = false;
  lightdarkMode()
}

function lightdarkMode() {
  // Get the initial values and swapped values of the CSS variables
  const lightmodeBgValue = '#fff';
  const lightmodeTextValue = '#111';
  const darkmodeBgValue = getComputedStyle(root).getPropertyValue('--lightdark-mode-text').trim();
  const darkmodeTextValue = getComputedStyle(root).getPropertyValue('--lightdark-mode-bg').trim();
  const sunSvgs = document.querySelectorAll('.sun');
  const moonSvgs = document.querySelectorAll('.moon');

  if (isDark) {
    // If values are swapped, restore the initial values
    root.style.setProperty('--lightdark-mode-bg', lightmodeBgValue);
    root.style.setProperty('--lightdark-mode-text', lightmodeTextValue);
    moonSvgs.forEach(function(moon) {
      moon.style.opacity = '0';
    });
    sunSvgs.forEach(function(sun) {
      sun.style.opacity = '1';
    });
  } else {
    // If values are not swapped, set the swapped values
    root.style.setProperty('--lightdark-mode-bg', darkmodeBgValue);
    root.style.setProperty('--lightdark-mode-text', darkmodeTextValue);
    moonSvgs.forEach(function(moon) {
      moon.style.opacity = '1';
    });
    sunSvgs.forEach(function(sun) {
      sun.style.opacity = '0';
    });
  }

  isDark = !isDark; // Toggle the swap status
  localStorage.setItem('isDark', isDark);
};


