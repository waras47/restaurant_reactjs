const initialState = {
  isLoaded: true,
  isNavbarOpen: false,
  showPreloader: false,
  currentSlidePos: 0,
  lastScrollPos: 0,
  xOffset: 0,
  yOffset: 0,
  activeDropdown: null,
  isNavbarActive: false,
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_LOADED':
      return { ...state, isLoaded: action.payload };
    case 'SET_IS_NAVBAR_OPEN':
      return { ...state, isNavbarOpen: action.payload };
    case 'SET_SHOW_PRELOADER':
      return { ...state, showPreloader: action.payload };
    case 'SET_CURRENT_SLIDE_POS':
      return { ...state, currentSlidePos: action.payload };
    case 'SET_LAST_SCROLL_POS':
      return { ...state, lastScrollPos: action.payload };
    case 'SET_X_OFFSET':
      return { ...state, xOffset: action.payload };
    case 'SET_Y_OFFSET':
      return { ...state, yOffset: action.payload };
    case 'SET_ACTIVE_DROPDOWN':
      return { ...state, activeDropdown: action.payload };
    case 'SET_IS_NAVBAR_ACTIVE':
        return {...state, isNavbarActive: action.payload };
    default:
      return state;
  }
};

export default navbarReducer;
