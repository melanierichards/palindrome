// Enable user selection of color scheme

  // Check for stored preference
  const themePrefKey = 'theme-pref';

  const getStoredThemePref = function() {
    const storedThemePref = localStorage.getItem(themePrefKey);
    if (storedThemePref) {
      return storedThemePref;
    } else {
      return 'auto';
    }
  };

  // Apply stored preference
  const storedThemePref = getStoredThemePref();
  document.documentElement.setAttribute('data-prefers-theme', storedThemePref);

  // Set new preference
  const setThemePref = function(themeValue) {
    document.documentElement.setAttribute('data-prefers-theme', themeValue);
    localStorage.setItem(themePrefKey, themeValue);
  };

  // Wait until document is parsed
  window.onload = function() {

    // Check radio according to stored pref
    document.getElementById('theme-radio-' + storedThemePref).setAttribute('checked', '');

    // Switch preference
    const themeRadios = document.querySelectorAll('[name=theme]');
    themeRadios.forEach(function(themeRadio) {
      themeRadio.addEventListener("change", function() {
        if (themeRadio.checked) {
          const themeValue = themeRadio.getAttribute('value');
          setThemePref(themeValue);
        }
      });
    });
  };