import React from "react";

import "./monster.css";

function Virus({ attack }) {
  return (
    <div className="Virus">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 640 640"
      >
        <defs>
          <path
            id="a6kqgEZPol"
            d="M501.77 236.33c0 65.17-52.92 118.09-118.09 118.09-65.18 0-118.09-52.92-118.09-118.09 0-65.18 52.91-118.09 118.09-118.09 65.17 0 118.09 52.91 118.09 118.09z"
          ></path>
          <path
            id="f2QcwEQSuw"
            d="M456.06 340.25l-30.48-12.63 1.87-3.81 1.88-3.81 28.6 16.44 28.6 16.43-30.47-12.62z"
          ></path>
          <path
            id="bL0lCvtaN"
            d="M451.48 254.24l-6.5 11.08h25.98l-6.5-11.08-6.49-11.08-6.49 11.08z"
          ></path>
          <path
            id="d2bCVsRKeI"
            d="M284.79 101.45l79.28 59.17-8.25 9.69-8.26 9.69-71.03-68.86-71.02-68.86 79.28 59.17z"
          ></path>
          <path
            id="pahuW5xuD"
            d="M362.23 208.9c-1.08 4.41 17.31 12.74 41.05 18.58 23.74 5.85 43.9 7.01 44.98 2.6 1.09-4.41-17.31-12.73-41.05-18.58-23.74-5.84-43.89-7-44.98-2.6z"
          ></path>
          <path
            className={attack ? "attack" : ""}
            fill="#9959b3"
            id="b12MJO5Sbn"
            d="M518.41 244.51L485.88 250l-.44-4.22-.43-4.22 32.96-1.28 32.96-1.27-32.52 5.5z"
          ></path>
          <path
            id="a2qWgI3ks3"
            d="M350.61 261.13L375.94 240l2.5 3.43 2.51 3.43-27.84 17.7-27.84 17.69 25.34-21.12z"
          ></path>
          <path
            id="a10Wrx53hu"
            d="M230.38 260.87l98.54-8.77.31 12.72.31 12.73-98.85-3.95-98.85-3.95 98.54-8.78z"
          ></path>
          <path
            id="cqNY2SkwL"
            d="M458.7 230.23c3.34 3.33 17.13-5.05 30.79-18.71s22.04-27.45 18.71-30.79c-3.34-3.33-17.13 5.05-30.79 18.71s-22.04 27.45-18.71 30.79z"
          ></path>
          <path
            id="d6Bxfva4a"
            d="M462.86 125.83L443.93 170l-10.94-6.52-10.93-6.52 29.87-37.66 29.87-37.65-18.94 44.18z"
          ></path>
          <path
            id="ah7qMTOrn"
            d="M373.42 388.04l-.81-63.64 12.68 1.11 12.68 1.11-11.87 62.53-11.88 62.53-.8-63.64z"
          ></path>
          <path
            id="ird23017n"
            d="M207.97 171.06l90.93 38.95-5.75 11.36-5.76 11.35-85.18-50.3-85.17-50.31 90.93 38.95z"
          ></path>
          <path
            id="a1Nfx0Vyct"
            d="M403.41 220a7.28 7.28 0 1014.562-.002 7.28 7.28 0 00-14.562.002z"
          ></path>
          <path
            id="b9kWcE16x"
            d="M383.37 105.53l15.4 45.53-12.49 2.44-12.49 2.45-2.91-47.98L367.97 60l15.4 45.53z"
          ></path>
          <path
            id="bmmQuUoHk"
            d="M281.54 340l42.18-45.77 8.43 9.54 8.43 9.53-50.61 36.24-50.61 36.23L281.54 340z"
          ></path>
          <path
            id="ed80bxi5d"
            d="M470.69 212.72a7.28 7.28 0 1014.562-.002 7.28 7.28 0 00-14.562.002z"
          ></path>
        </defs>
        <use fill="#3c0854" xlinkHref="#a6kqgEZPol"></use>
        <use fill="#9959b3" xlinkHref="#f2QcwEQSuw"></use>
        <use fill="#030203" xlinkHref="#bL0lCvtaN"></use>
        <use fill="#9959b3" xlinkHref="#d2bCVsRKeI"></use>
        <use fill="#582271" xlinkHref="#pahuW5xuD"></use>
        <use xlinkHref="#b12MJO5Sbn"></use>
        <use fill="#9959b3" xlinkHref="#a2qWgI3ks3"></use>
        <use fill="#9959b3" xlinkHref="#a10Wrx53hu"></use>
        <use fill="#582271" xlinkHref="#cqNY2SkwL"></use>
        <use fill="#9959b3" xlinkHref="#d6Bxfva4a"></use>
        <use fill="#9959b3" xlinkHref="#ah7qMTOrn"></use>
        <use fill="#9959b3" xlinkHref="#ird23017n"></use>
        <use fill="#070109" xlinkHref="#a1Nfx0Vyct"></use>
        <use fill="#9959b3" xlinkHref="#b9kWcE16x"></use>
        <use fill="#9959b3" xlinkHref="#bmmQuUoHk"></use>
        <use fill="#070109" xlinkHref="#ed80bxi5d"></use>
      </svg>
    </div>
  );
}

export default Virus;
