import React from "react";

import "./player.css";

function Vaccine({ attack }) {
  return (
    <div className="Vaccine">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 640 640"
      >
        <defs>
          <path
            id="b1aMnfgvQW"
            d="M270.08 322.35c5.28 1.67 8.2 7.29 6.53 12.57-.6 1.91.61-1.91 0 0-1.67 5.27-7.3 8.2-12.57 6.53-21.32-6.75-75.72-23.96-97.04-30.71-5.28-1.67-8.2-7.3-6.53-12.57.6-1.91-.61 1.91 0 0 1.67-5.27 7.3-8.2 12.57-6.53 21.32 6.75 75.73 23.96 97.04 30.71z"
          ></path>
          <path
            id="d54O87JZ0B"
            d="M336.5 386.88c5.51 0 9.97 4.47 9.97 9.97v153.57c0 5.51-4.46 9.97-9.97 9.97-1.99 0 2 0 0 0-5.5 0-9.96-4.46-9.96-9.97V396.85c0-5.5 4.46-9.97 9.96-9.97 2 0-1.99 0 0 0z"
          ></path>
          <path
            id="beHcZH02v"
            d="M232.75 542.8h201.64v35.17H232.75V542.8z"
          ></path>
          <path
            id="b5Fo2Mjacq"
            d="M165.85 40.85l5.31-2.49 92.16 196.32-5.31 2.49-92.16-196.32z"
          ></path>
          <path
            id="c3q8FrHaw3"
            d="M305.03 177.6c9.09-3.44 19.23 1.15 22.66 10.23l77.04 204c3.43 9.08-1.15 19.23-10.24 22.66l-108.57 41c-9.09 3.43-19.24-1.15-22.67-10.24-16.65-44.08-60.38-159.9-77.03-203.99-3.44-9.08 1.15-19.23 10.23-22.66 25.01-9.44 83.57-31.56 108.58-41z"
          ></path>
          <path
            id="b1yFhzwZ"
            d="M303.73 218.73l30.37-11.37 1.23 3.3-30.37 11.36-1.23-3.29z"
          ></path>
          <path
            id="i2FEpI6oiX"
            d="M208.67 297.67l29.1-14.31 1.55 3.15-29.1 14.32-1.55-3.16z"
          ></path>
          <path
            id="b1T953DMBT"
            d="M318.17 378.76l-34.28-81.07 5.4-2.28 34.27 81.06-5.39 2.29z"
          ></path>
          <path
            id="aobiT8BlJ"
            d="M300.08 255.16l48.06-17.99 1.24 3.3-48.07 17.99-1.23-3.3z"
          ></path>
          <path
            id="kNzomxz2M"
            d="M316.55 302.75l48.07-17.99 1.23 3.3-48.07 17.99-1.23-3.3z"
          ></path>
          <path
            id="izit6fjcP"
            d="M329.68 341.49l48.07-18 1.23 3.3-48.06 17.99-1.24-3.29z"
          ></path>
          <path
            id="bmcddjNLE"
            d="M324.73 269.83l30.37-11.37 1.23 3.29-30.37 11.37-1.23-3.29z"
          ></path>
          <path
            id="b23hRBB7F8"
            d="M338.53 313.25l30.37-11.37 1.24 3.3-30.38 11.36-1.23-3.29z"
          ></path>
          <path
            id="a3Z6NxrGg0"
            d="M236.01 261.73c0 7.68-6.23 13.91-13.91 13.91s-13.91-6.23-13.91-13.91 6.23-13.92 13.91-13.92 13.91 6.24 13.91 13.92z"
          ></path>
          <path
            id="b3c1oiOc3s"
            d="M252.74 299.47c4.07-3.75 10.41-3.49 14.16.58 1.35 1.47-1.36-1.48 0 0a10.01 10.01 0 01-.58 14.15c-16.45 15.15-58.41 53.82-74.86 68.97a10.01 10.01 0 01-14.15-.58c-1.36-1.47 1.36 1.48 0 0a10.01 10.01 0 01.58-14.15c16.44-15.15 58.41-53.82 74.85-68.97z"
          ></path>
        </defs>
        <use fill="#a1b3ae" xlinkHref="#b1aMnfgvQW"></use>
        <use fillOpacity="0" stroke="#bfeabb" xlinkHref="#b1aMnfgvQW"></use>
        <use fill="#2af8c8" xlinkHref="#d54O87JZ0B"></use>
        <use fill="#b6e7d8" xlinkHref="#beHcZH02v"></use>
        <use
          className={attack ? "attack" : ""}
          fill="#fff"
          xlinkHref="#b5Fo2Mjacq"
        ></use>
        <use fill="#4ab499" xlinkHref="#c3q8FrHaw3"></use>
        <use fill="#fff" xlinkHref="#b1yFhzwZ"></use>
        <use fill="#fff" xlinkHref="#i2FEpI6oiX"></use>
        <use fill="#fff" xlinkHref="#b1T953DMBT"></use>
        <use fill="#fff" xlinkHref="#aobiT8BlJ"></use>
        <use fill="#fff" xlinkHref="#kNzomxz2M"></use>
        <use fill="#fff" xlinkHref="#izit6fjcP"></use>
        <use fill="#fff" xlinkHref="#bmcddjNLE"></use>
        <use fill="#fff" xlinkHref="#b23hRBB7F8"></use>
        <use fill="#fff" xlinkHref="#a3Z6NxrGg0"></use>
        <g>
          <use fill="#a1b3ae" xlinkHref="#b3c1oiOc3s"></use>
          <use fillOpacity="0" stroke="#bfeabb" xlinkHref="#b3c1oiOc3s"></use>
        </g>
      </svg>
    </div>
  );
}

export default Vaccine;
