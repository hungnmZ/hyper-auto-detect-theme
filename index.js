const lightTheme = {
  cursorColor: "#526eff",
  cursorAccentColor: "#005cc5",
  foregroundColor: "#383a42",
  backgroundColor: "#fafafa",
  selectionColor: "#586069",
  borderColor: "transparent",
  colors: {
    black: "#383a42",
    red: "#e45649",
    green: "#50a14f",
    yellow: "#c18401",
    blue: "#4078f2",
    magenta: "#a626a4",
    cyan: "#0184bc",
    white: "#a0a1a7",
    lightBlack: "#696c77",
    lightRed: "#e45649",
    lightGreen: "#50a14f",
    lightYellow: "#c18401",
    lightBlue: "#4078f2",
    lightMagenta: "#a626a4",
    lightCyan: "#0184bc",
    lightWhite: "#fafafa",
  },
  css: `
  .header_header {
    top: 0;
    right: 0;
    left: 0;
  }
  .header_shape,
  .header_appTitle {
    color: #383a42;
  }
  .splitpane_divider {
    background-color: rgba(0, 0, 0, .12) !important;
  }
  ${
    process.platform === "darwin"
      ? `
    .tabs_list {
      margin-left: 0 !important;
      padding-left: 76px;
    }
    .tabs_list::before {
      content: "";
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      bottom: 0;
      width: 76px;
      background-color: rgba(50, 50, 50, .09) !important;
      border-bottom: 1px solid rgba(0, 0, 0, .12);
    }`
      : ""
  }
  .tab_tab {
    color: rgba(0, 0, 0, .3) !important;
    background-color: rgba(50, 50, 50, .09) !important;
    border-color: rgba(0, 0, 0, .12) !important;
  }
  .tab_tab.tab_active {
    font-weight: 500;
    background-color: transparent !important;
  }
  .tab_tab.tab_active::before {
    border-bottom-color: transparent;
  }
  .tab_tab::after {
    content: "";
    position: absolute;
    pointer-events: none;
    z-index: 2;
    top: 0px;
    left: -1px;
    bottom: 0;
    width: 2px;
    border-radius: 0;
    background-color: #475fd7;
    opacity: 0;
    transition: opacity .16s;
  }
  .tab_tab.tab_active::after {
    opacity: 1;
    transition-duration: .32s;
  }
  .tabs_title, .tab_icon, .tab_tab.tab_active {
    color: rgba(0, 0, 0, .57) !important;
  }
  .tab_tab.tab_hasActivity {
    color: #4078f2 !important;
  }
`,
  termCSS: `
  x-row a {
    color: #0184bc;
  }
  .cursor-node {
    mix-blend-mode: multiply;
  }
  .cursor-node[focus="false"] {
    opacity: 0 !important;
  }
`,
};

const darkTheme = {
  cursorColor: "#abb2bf",
  cursorAccentColor: "#586069",
  foregroundColor: "#abb2bf",
  backgroundColor: "#282c34",
  selectionColor: "#d1d5da",
  borderColor: "#282c34",
  colors: {
    black: "#282c34",
    red: "#e06c75",
    green: "#98c379",
    yellow: "#d19a66",
    blue: "#56b6c2",
    magenta: "#c678dd",
    cyan: "#56b6c2",
    white: "#d0d0d0",
    lightBlack: "#808080",
    lightRed: "#e06c75",
    lightGreen: "#98c379",
    lightYellow: "#d19a66",
    lightBlue: "#56b6c2",
    lightMagenta: "#c678dd",
    lightCyan: "#56b6c2",
    lightWhite: "#fafbfc",
    colorCubes: "#ffffff",
    grayscale: "#abb2bf",
  },
  termCSS: `
  .cursor-node {
    mix-blend-mode: difference;
    border-left-width: 2px;
  }
`,
  css: `
  .header_header {
    top: 0;
    right: 0;
    left: 0;
  }
  .tabs_list {
    background-color: #21252b !important;
    border-bottom-color: #181a1f !important;
  }
  .tab_tab {
    font-weight: 500;
    color: rgba(157, 165, 180, 0.6);
    border-width: 0 0 0 1px;
    border-image: linear-gradient(#21252b, #181a1f 1em) 0 0 0 1 stretch;
    border-style: solid;
  }
  .tab_tab:first-of-type {
    border-width: 0;
  }
  .tab_tab:hover {
    color: rgba(157, 165, 180, 0.6);
    transition: none;
  }
  .tab_tab::after {
    content: "";
    position: absolute;
    pointer-events: none;
    top: 0;
    bottom: -1px;
    left: 0;
    width: 2px;
    height: inherit;
    background: #528bff;
    opacity: 0;
    transition: opacity .16s;
    z-index: 1;
  }
  .tabs_title,
  .tab_tab.tab_active {
    font-weight: 500;
    color: #d7dae0;
  }
  .tab_tab.tab_active {
    background-color: #282c34;
  }
  .tab_tab.tab_active,
  .tab_tab.tab_active + .tab_tab {
    border-image: linear-gradient(transparent, transparent) 0 0 0 1 stretch;
  }
  .tab_tab.tab_active::before {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0;
    left: -1px;
    bottom: -1px;
    right: 0;
    height: inherit;
    background-image: linear-gradient(rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0));
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
    border: 1px solid #181a1f;
    border-bottom-color: #282c34;
    border-top: 0;
  }
  .tab_tab.tab_active:last-of-type::before {
    border-right-width: 0;
  }
  .tab_tab.tab_active::after {
    opacity: 1;
    transition-duration: .32s;
  }
  .tab_icon {
    display: block;
    background: rgba(157, 165, 180, 0.6);
    -webkit-mask-image: url('${__dirname}/close.svg');
    mask-image: url('${__dirname}/close.svg');
    -webkit-mask-size: 7px;
    mask-size: 7px;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position-y: center;
    mask-position-y: center;
    -webkit-mask-position-x: 8px;
    mask-position-x: 8px;
    width: 26px;
    height: 100%;
    top: 0;
    right: 0;
    transform: scale(0);
    transition: transform .08s;
    opacity: 1;
    border-radius: 0;
    z-index: 2;
  }
  .tab_icon:hover {
    background: rgba(157, 165, 180, 0.6);
    opacity: .7;
  }
  .tab_tab.tab_active .tab_icon {
    background: #d7dae0;
  }
  .tab_tab.tab_active .tab_icon:hover {
    background: #d7dae0;
  }
  .tab_tab:hover .tab_icon {
    transform: scale(1);
    transition-duration: .16s;
  }
  .tab_icon svg {
    display: none;
  }
  .tab_icon::after {
    display: none;
  }
`,
};

function toggleTheme() {
  window.store.dispatch({
    type: "THEME_SWITCHER_UPDATE_THEME",
    config: config.getConfig(),
  });
}

exports.middleware = () => (next) => (action) => {
  if (action.type === "CONFIG_LOAD") {
    const lightMediaQueryList = window.matchMedia(
      "(prefers-color-scheme: light)",
    );
    lightMediaQueryList.addEventListener("change", toggleTheme);

    const darkMediaQueryList = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );
    darkMediaQueryList.addEventListener("change", toggleTheme);

    setTimeout(() => toggleTheme(), 0);
  }

  next(action);
};

exports.reduceUI = (state, { type, config }) => {
  if (type != "THEME_SWITCHER_UPDATE_THEME") {
    return state;
  }

  const theme = require("@electron/remote").nativeTheme.shouldUseDarkColors
    ? darkTheme
    : lightTheme;

  return state
    .set("cursorColor", theme.cursorColor)
    .set("cursorAccentColor", theme.cursorAccentColor)
    .set("foregroundColor", theme.foregroundColor)
    .set("backgroundColor", theme.backgroundColor)
    .set("selectionColor", theme.selectionColor)
    .set("borderColor", theme.borderColor)
    .set("colors", theme.colors)
    .set("css", `${config.css || ""} ${theme.css}`);
};
