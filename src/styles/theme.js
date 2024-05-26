const lightDarkSwitch = document.getElementById('switch');
let lightDarkMode = 0;


lightDarkSwitch.addEventListener("click", ()=> {
  if (lightDarkMode === 0) {
    lightDarkSwitch.classList.add("on");
    lightDarkSwitch.classList.remove("off");
    lightDarkMode = 1;
  } else {
    lightDarkSwitch.classList.add("off");
    lightDarkSwitch.classList.remove("on");
    lightDarkMode = 0;
  }
  }
)


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

  if (isDark) {
    // If values are swapped, restore the initial values
    root.style.setProperty('--lightdark-mode-bg', lightmodeBgValue);
    root.style.setProperty('--lightdark-mode-text', lightmodeTextValue);
    lightDarkSwitch.forEach(function(item) {
      item.style.left = '2px';
    });
  } else {
    // If values are not swapped, set the swapped values
    root.style.setProperty('--lightdark-mode-bg', darkmodeBgValue);
    root.style.setProperty('--lightdark-mode-text', darkmodeTextValue);
    lightDarkSwitch.forEach(function(item) {
      item.style.right = '2px';
    });
  }

  isDark = !isDark; // Toggle the swap status
  localStorage.setItem('isDark', isDark);
};


