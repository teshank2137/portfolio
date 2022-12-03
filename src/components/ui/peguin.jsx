import React, { useEffect, useRef } from "react";

export const Penguin = (props) => {
  const penguin = useRef();
  const happyEyes = [useRef(), useRef()];
  const blushes = [useRef(), useRef()];

  const hover = (state) => {
    blushes.forEach((blush) => {
      blush.current.style.opacity = state === "enter" ? "1" : "0";
    });

    happyEyes.forEach((eye) => {
      eye.current.style.opacity = state === "enter" ? "1" : "0";
    });

    [document.getElementById("eye"), document.getElementById("eye_2")].forEach(
      (eye) => {
        eye.style.opacity = state !== "enter" ? "1" : "0";
      }
    );
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const rekt = document?.getElementById("penguin")?.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;
      let moveX = 0;
      let moveY = 0;
      let intentsity = 0.01;
      moveX = (mouseX - anchorX) * intentsity;
      moveY = (mouseY - anchorY) * intentsity;
      [
        document.getElementById("eye"),
        document.getElementById("eye_2"),
      ].forEach((eye) => {
        eye.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
      });
    });
    blushes.forEach((blush) => {
      blush.current.style.opacity = "0";
      blush.current.style.transition = "all 0.15s ease";
    });

    happyEyes.forEach((eye) => {
      eye.current.style.opacity = "0";
      eye.current.style.transition = "all 0.15s ease";
    });
    [document.getElementById("eye"), document.getElementById("eye_2")].forEach(
      (eye) => {
        eye.style.transition = "opacity 0.15s ease";
      }
    );
  }, []);
  return (
    <div
      id="penguin"
      style={{ width: "70px", cursor: "pointer" }}
      ref={penguin}
      onMouseEnter={() => {
        hover("enter");
      }}
      onMouseLeave={() => {
        hover("leave");
      }}
    >
      <svg
        viewBox="0 0 234 268"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        style={{ pointerEvents: "none" }}
      >
        <g id="body">
          <g id="Group">
            <path
              id="Vector"
              d="M229.46 183.244c-11.466-36.356-26.638-58.857-36.144-70.413-5.233-32.226-11.243-63.437-12.573-67.245C171.475 19.047 146.221 0 116.515 0c-31.106 0-57.33 20.88-65.43 49.388-.901 3.164-6.461 32.594-11.44 63.53-9.517 11.583-24.64 34.062-36.08 70.326-14.401 45.68 18.863 24.862 28.22 5.146 2.362 26.65 16.995 49.751 38.222 63.638 13.371 8.744 29.34 13.844 46.508 13.844 17.171 0 33.138-5.1 46.503-13.844 21.23-13.89 35.866-36.991 38.227-63.638 9.355 19.716 42.619 40.532 28.215-5.146zm-112.947 67.754c-38.712 0-70.21-31.496-70.21-70.21 0-25.178 16.562-119.42 19.126-127.468C70.48 37.487 85.396 30.045 99.62 36.862c10.707 5.136 16.892 19.22 16.892 19.22s4.473-13.74 14.893-18.598c15.948-7.44 32.775 3.613 36.558 19.188 2.091 8.611 18.758 98.612 18.758 124.114-.002 38.717-31.495 70.213-70.209 70.213z"
              fill="#353A42"
            />
            <path
              id="Vector_2"
              d="M70.005 252.572c-7.551.576-14.24 4.178-13.823 14.996h120.661c.414-10.818-6.269-14.42-13.825-14.996-13.365 8.746-29.335 13.849-46.503 13.849a84.625 84.625 0 01-46.51-13.849z"
              fill="#FF802A"
            />
            <path
              id="Vector_3"
              d="M131.406 37.486c-10.42 4.857-14.893 18.598-14.893 18.598S110.328 42 99.621 36.864c-14.225-6.818-29.138.622-34.192 16.46-2.564 8.047-19.126 102.289-19.126 127.467 0 38.711 31.496 70.209 70.21 70.209 38.711 0 70.207-31.495 70.207-70.209 0-25.506-16.665-115.504-18.758-124.114-3.781-15.578-20.605-26.63-36.556-19.191zm-13.033 42.251c10.423 0 14.393 12.322 14.393 12.322l-14.393 10.425-14.393-10.425s3.97-12.322 14.393-12.322zM80.985 65.91c1.209-5.077 6.304-8.208 11.385-7 5.08 1.207 8.211 6.307 7 11.386-1.204 5.074-6.302 8.208-11.38 7a9.449 9.449 0 01-7.005-11.386zm64.054 11.385c-5.074 1.21-10.174-1.925-11.38-6.999-1.215-5.079 1.92-10.18 6.999-11.386 5.076-1.208 10.174 1.923 11.385 7 1.209 5.081-1.925 10.176-7.004 11.385z"
              fill="#fff"
            />
            <path
              id="Vector_4"
              d="M132.766 92.059s-3.973-12.322-14.393-12.322c-10.423 0-14.393 12.322-14.393 12.322l14.393 10.425 14.393-10.425z"
              fill="#FF802A"
            />
            <path
              id="Vector_5"
              d="M141.826 63.632c-2.569.42-4.313 2.778-4.043 5.336.66-.87 1.698-1.528 3.183-1.777 2.813-.46 5.017.963 6.209 2.924a4.842 4.842 0 00.257-2.458 4.883 4.883 0 00-5.606-4.025z"
              fill="#fff"
            />
            <path
              id="Vector_6"
              d="M92.062 67.191c1.487.25 2.52.906 3.178 1.777.278-2.555-1.469-4.914-4.038-5.336a4.877 4.877 0 00-5.604 4.022c-.143.857-.021 1.696.255 2.458 1.195-1.958 3.396-3.38 6.209-2.92z"
              fill="#fff"
            />
          </g>
        </g>
        <path id="Rectangle 6" fill="#fff" d="M79 58H155V79H79z" />
        <path
          id="happy-eye"
          d="M83.514 71.584c2.333-4.167 7-10 13 0"
          stroke="#353A42"
          strokeWidth={10}
          strokeLinecap="round"
          ref={happyEyes[0]}
        />
        <path
          id="happy-eye_2"
          d="M136.514 71.105c2.333-4.166 7-10 13 0"
          stroke="#353A42"
          strokeWidth={10}
          strokeLinecap="round"
          ref={happyEyes[1]}
        />
        <circle id="eye" cx={142.514} cy={72.5837} r={10} fill="#353A42" />
        <circle id="eye_2" cx={91} cy={73} r={10} fill="#353A42" />
        <g
          id="blush"
          style={{
            mixBlendMode: "darken",
          }}
          filter="url(#filter0_d_22_211)"
          ref={blushes[0]}
        >
          <ellipse cx={144.514} cy={81.5837} rx={11} ry={4} fill="#FDB0D1" />
        </g>
        <g
          id="blush_2"
          style={{
            mixBlendMode: "darken",
          }}
          filter="url(#filter1_d_22_211)"
          ref={blushes[1]}
        >
          <ellipse cx={90.514} cy={81.5837} rx={11} ry={4} fill="#FDB0D1" />
        </g>
        <defs>
          <filter
            id="filter0_d_22_211"
            x={129.514}
            y={74.5837}
            width={30}
            height={16}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={1} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.992157 0 0 0 0 0.690196 0 0 0 0 0.819608 0 0 0 1 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_22_211"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_22_211"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_22_211"
            x={75.514}
            y={74.5837}
            width={30}
            height={16}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={1} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.992157 0 0 0 0 0.690196 0 0 0 0 0.819608 0 0 0 1 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_22_211"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_22_211"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
