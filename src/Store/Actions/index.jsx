export const setIsLoaded = (isLoaded) => ({
  type: 'SET_IS_LOADED',
  payload: isLoaded,
});

export const setIsNavbarOpen = (isNavbarOpen) => ({
  type: 'SET_IS_NAVBAR_OPEN',
  payload: isNavbarOpen,
});

export const setShowPreloader = (showPreloader) => ({
  type: 'SET_SHOW_PRELOADER',
  payload: showPreloader,
});

export const setCurrentSlidePos = (pos) => ({
  type: 'SET_CURRENT_SLIDE_POS',
  payload: pos,
});

export const setLastScrollPos = (scrollPos) => ({
  type: 'SET_LAST_SCROLL_POS',
  payload: scrollPos,
});

export const setXOffset = (xOffset) => ({
  type: 'SET_X_OFFSET',
  payload: xOffset,
});

export const setYOffset = (yOffset) => ({
  type: 'SET_Y_OFFSET',
  payload: yOffset,
});

export const setActiveDropdown = (dropdown) => ({
  type: 'SET_ACTIVE_DROPDOWN',
  payload: dropdown,
});

export const setIsNavbarActive = (isActive) => ({
  type: 'SET_IS_NAVBAR_ACTIVE',
  payload: isActive,
});