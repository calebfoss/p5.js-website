export type IconKind =
  | "arrow"
  | "arrow-lg"
  | "code-brackets"
  | "refresh"
  | "play"
  | "stop"
  | "chevron-down"
  | "chevron-up"
  | "chevron-right"
  | "globe"
  | "settings"
  | "search"
  | "search-submit"
  | "option-selected"
  | "option-unselected"
  | "asterisk-thick"
  | "close"
  | "close-lg"
  | "download"
  | "heart"
  | "hamburger";

interface IconProps {
  kind: IconKind;
  className?: string;
}
/**
 * Renders an icon
 */
export const Icon = (props: IconProps) => {
  switch (props.kind) {
    case "arrow":
      return (
        <svg
          width="21"
          height="11"
          viewBox="0 0 21 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className={props.className}
        >
          <path
            d="M15.353 0.146446L20.7065 5.5L15.353 10.8536C15.1577 11.0488 14.8411 11.0488 14.6459 10.8536C14.4506 10.6583 14.4506 10.3417 14.6459 10.1464L18.7923 6L4.99951 6C4.72337 6 4.49951 5.77614 4.49951 5.5C4.49951 5.22386 4.72337 5 4.99951 5L18.7923 5L14.6459 0.853553C14.4506 0.658291 14.4506 0.341708 14.6459 0.146446C14.8411 -0.0488155 15.1577 -0.0488155 15.353 0.146446Z"
            fill="currentColor"
          />
        </svg>
      );
    case "arrow-lg":
      return (
        <svg
          width="61"
          height="32"
          viewBox="0 0 61 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            d="M45 31L60 16L45 0.999999"
            stroke="currentColor"
            stroke-linecap="round"
          />
          <path
            d="M15 15.5C14.7239 15.5 14.5 15.7239 14.5 16C14.5 16.2761 14.7239 16.5 15 16.5L15 15.5ZM60 15.5L15 15.5L15 16.5L60 16.5L60 15.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "chevron-down":
      return (
        <svg
          width="22"
          height="12"
          viewBox="0 0 22 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 11.707L21.3536 1.35348C21.5488 1.15822 21.5488 0.841633 21.3536 0.646371C21.1583 0.451109 20.8417 0.451109 20.6464 0.646371L11 10.2928L1.35355 0.646371C1.15829 0.451109 0.841709 0.451109 0.646447 0.646371C0.451184 0.841633 0.451184 1.15822 0.646447 1.35348L11 11.707Z"
            fill="currentColor"
          />
        </svg>
      );
    case "chevron-right":
      return (
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.70703 6L1.35348 0.646446C1.15822 0.451185 0.841633 0.451185 0.646371 0.646446C0.451108 0.841708 0.451108 1.15829 0.646371 1.35355L5.29282 6L0.646371 10.6464C0.451109 10.8417 0.451109 11.1583 0.646371 11.3536C0.841633 11.5488 1.15822 11.5488 1.35348 11.3536L6.70703 6Z"
            fill="currentColor"
          />
        </svg>
      );
    case "chevron-down":
      return (
        <svg
          width="22"
          height="12"
          viewBox="0 0 22 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 11.707L21.3536 1.35348C21.5488 1.15822 21.5488 0.841633 21.3536 0.646371C21.1583 0.451109 20.8417 0.451109 20.6464 0.646371L11 10.2928L1.35355 0.646371C1.15829 0.451109 0.841709 0.451109 0.646447 0.646371C0.451184 0.841633 0.451184 1.15822 0.646447 1.35348L11 11.707Z"
            fill="currentColor"
          />
        </svg>
      );
    case "code-brackets":
      return (
        <svg
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className={props.className}
        >
          <path
            d="M13.9764 0.718843C14.0606 0.455859 13.9105 0.193701 13.641 0.133296C13.3716 0.0728911 13.0848 0.237114 13.0006 0.500098L7.87626 16.5001C7.79204 16.7631 7.94219 17.0252 8.21165 17.0856C8.4811 17.146 8.76782 16.9818 8.85205 16.7188L13.9764 0.718843Z"
            fill="currentColor"
          />
          <path
            d="M21.707 8.49999L16.3535 3.14644C16.1582 2.95118 15.8416 2.95118 15.6464 3.14644C15.4511 3.3417 15.4511 3.65828 15.6464 3.85355L20.2928 8.49999L15.6464 13.1464C15.4511 13.3417 15.4511 13.6583 15.6464 13.8535C15.8416 14.0488 16.1582 14.0488 16.3535 13.8535L21.707 8.49999Z"
            fill="currentColor"
          />
          <path
            d="M0.292969 8.49999L5.64652 13.8535C5.84178 14.0488 6.15837 14.0488 6.35363 13.8535C6.54889 13.6583 6.54889 13.3417 6.35363 13.1464L1.70718 8.49999L6.35363 3.85355C6.54889 3.65828 6.54889 3.3417 6.35363 3.14644C6.15837 2.95118 5.84178 2.95118 5.64652 3.14644L0.292969 8.49999Z"
            fill="currentColor"
          />
        </svg>
      );
    case "refresh":
      return (
        <svg
          width="18"
          height="24"
          viewBox="0 0 18 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            d="M14.3597 0.745963L15.9691 6.75275L9.96235 8.36232C9.69562 8.43379 9.42145 8.2755 9.34998 8.00877C9.2785 7.74204 9.43679 7.46787 9.70353 7.39639L14.0814 6.22329C12.7385 5.02054 10.9658 4.28984 9.02153 4.28986C4.83114 4.28989 1.43412 7.68694 1.43408 11.8774C1.43408 12.1535 1.21022 12.3774 0.934077 12.3774C0.657935 12.3774 0.43408 12.1535 0.434082 11.8774C0.434122 7.13467 4.27885 3.2899 9.02154 3.28986C11.1249 3.28984 13.0522 4.04653 14.545 5.30172L13.3937 1.00477C13.3223 0.738039 13.4806 0.463872 13.7473 0.392404C14.014 0.320936 14.2882 0.47923 14.3597 0.745963Z"
            fill="currentColor"
          />
          <path
            d="M3.3684 18.4804L4.52046 22.7801C4.59193 23.0468 4.43363 23.321 4.1669 23.3924C3.90017 23.4639 3.626 23.3056 3.55453 23.0389L1.94508 17.0321L7.95183 15.4225C8.21856 15.3511 8.49274 15.5093 8.56421 15.7761C8.63568 16.0428 8.47739 16.317 8.21066 16.3885L3.83466 17.5611C5.17757 18.7638 6.95034 19.4945 8.8946 19.4945C13.085 19.4945 16.482 16.0974 16.4821 11.907C16.4821 11.6308 16.7059 11.407 16.9821 11.407C17.2582 11.407 17.4821 11.6308 17.4821 11.907C17.482 16.6497 13.6373 20.4945 8.8946 20.4945C6.79 20.4945 4.86161 19.7369 3.3684 18.4804Z"
            fill="currentColor"
          />
        </svg>
      );
    case "play":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            d="M15.5 8L0.5 15.5L0.499999 0.500001L15.5 8Z"
            fill="currentColor"
          />
        </svg>
      );
    case "stop":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <rect x="0.5" y="0.5" width="15" height="15" fill="currentColor" />
        </svg>
      );
    case "globe":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM18.9863 10.5H15.9468C15.8456 13.5376 14.8288 15.7593 13.6281 17.2459C13.107 17.8911 12.5512 18.3979 12.021 18.7722C15.8616 17.891 18.7644 14.5525 18.9863 10.5ZM15.9468 9.5C15.8457 6.46232 14.8289 4.24052 13.6281 2.75393C13.1071 2.10886 12.5514 1.60221 12.0214 1.2279C15.8618 2.10925 18.7644 5.44765 18.9863 9.5H15.9468ZM14.9462 9.5H10.5V1.52488C10.6892 1.5964 10.9139 1.70476 11.1655 1.86004C11.6907 2.18428 12.2877 2.68582 12.8502 3.38226C13.9091 4.69323 14.846 6.69515 14.9462 9.5ZM9.5 10.5H5.05378C5.154 13.3049 6.09094 15.3068 7.1498 16.6177C7.71232 17.3142 8.30927 17.8157 8.83455 18.14C9.08609 18.2952 9.31079 18.4036 9.5 18.4751V10.5ZM5.05378 9.5H9.5V1.52506C9.31079 1.59658 9.08609 1.70494 8.83455 1.86022C8.30927 2.18446 7.71232 2.68599 7.1498 3.38244C6.09097 4.69338 5.15404 6.69524 5.05378 9.5ZM4.05319 9.5H1.01365C1.23556 5.44751 4.13842 2.10903 7.97897 1.22782C7.44881 1.60215 6.893 2.10888 6.37186 2.7541C5.17117 4.24067 4.15438 6.46241 4.05319 9.5ZM4.05318 10.5H1.01365C1.23555 14.5524 4.13823 17.8908 7.9786 18.7721C7.44856 18.3978 6.89288 17.8911 6.37186 17.2461C5.17115 15.7595 4.15434 13.5377 4.05318 10.5ZM14.9462 10.5H10.5V18.4749C10.6892 18.4034 10.9139 18.2951 11.1655 18.1398C11.6907 17.8155 12.2877 17.314 12.8502 16.6176C13.909 15.3066 14.846 13.3048 14.9462 10.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "option-unselected":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
            fill="currentColor"
          />
        </svg>
      );
    case "option-selected":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
            fill="currentColor"
          />
        </svg>
      );
    case "chevron-up":
      return (
        <svg
          width="22"
          height="12"
          viewBox="0 0 22 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 0.292969L0.646447 10.6465C0.451184 10.8418 0.451184 11.1584 0.646447 11.3536C0.84171 11.5489 1.15829 11.5489 1.35355 11.3536L11 1.70718L20.6464 11.3536C20.8417 11.5489 21.1583 11.5489 21.3536 11.3536C21.5488 11.1584 21.5488 10.8418 21.3536 10.6465L11 0.292969Z"
            fill="currentColor"
          />
        </svg>
      );
    case "settings":
      return (
        <svg
          width="22"
          height="19"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.03544 4C4.27806 5.69615 5.73676 7 7.5 7C9.26324 7 10.7219 5.69615 10.9646 4L21 4C21.2761 4 21.5 3.77614 21.5 3.5C21.5 3.22386 21.2761 3 21 3L10.9646 3C10.7219 1.30385 9.26324 0 7.5 0C5.73676 0 4.27806 1.30385 4.03544 3H1C0.723858 3 0.5 3.22386 0.5 3.5C0.5 3.77614 0.723858 4 1 4H4.03544ZM7.5 6C8.88071 6 10 4.88071 10 3.5C10 2.11929 8.88071 1 7.5 1C6.11929 1 5 2.11929 5 3.5C5 4.88071 6.11929 6 7.5 6Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.5 9C16.2632 9 17.7219 10.3039 17.9646 12H21C21.2761 12 21.5 12.2239 21.5 12.5C21.5 12.7761 21.2761 13 21 13H17.9646C17.7219 14.6961 16.2632 16 14.5 16C12.7363 16 11.2774 14.6955 11.0353 12.9988C11.0236 12.9996 11.0119 13 11 13H1C0.723858 13 0.5 12.7761 0.5 12.5C0.5 12.2239 0.723858 12 1 12H11C11.0119 12 11.0236 12.0004 11.0353 12.0012C11.2774 10.3045 12.7363 9 14.5 9ZM12 12.5C12 11.1193 13.1193 10 14.5 10C15.8807 10 17 11.1193 17 12.5C17 13.8807 15.8807 15 14.5 15C13.1193 15 12 13.8807 12 12.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.2694 14.0196C11.8619 15.2526 10.0182 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 10.0402 15.2363 11.902 13.9792 13.3151L19.957 19.2929C20.1522 19.4882 20.1522 19.8048 19.957 20C19.7617 20.1953 19.4451 20.1953 19.2499 20L13.2694 14.0196ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
            fill="currentColor"
          />
        </svg>
      );
    case "search-submit":
      return (
        <svg
          width="21"
          height="11"
          viewBox="0 0 21 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            d="M15.3535 0.146446L20.707 5.5L15.3535 10.8536C15.1582 11.0488 14.8416 11.0488 14.6464 10.8536C14.4511 10.6583 14.4511 10.3417 14.6464 10.1464L18.7928 6L5 6C4.72386 6 4.5 5.77614 4.5 5.5C4.5 5.22386 4.72386 5 5 5L18.7928 5L14.6464 0.853553C14.4511 0.658291 14.4511 0.341708 14.6464 0.146446C14.8416 -0.0488155 15.1582 -0.0488155 15.3535 0.146446Z"
            fill="currentColor"
          />
        </svg>
      );
    case "heart":
      return (
        <svg
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.0001 3.52023C10.6805 3.04625 10.239 2.49888 9.68051 2.00157C8.77907 1.19894 7.54072 0.5 6 0.5C2.95137 0.5 0.5 3.0274 0.5 6.12C0.499991 9.04007 2.65061 11.7635 4.91921 13.7649C6.0688 14.7791 7.28089 15.6365 8.33517 16.2736C9.37198 16.9001 10.2966 17.3381 10.8726 17.4835C10.9137 17.4944 10.9565 17.5001 11.0001 17.5001C11.0437 17.5001 11.0865 17.4944 11.1276 17.4835C11.7036 17.3381 12.6282 16.9001 13.6651 16.2736C14.7193 15.6365 15.9314 14.7791 17.081 13.7649C19.3496 11.7635 21.5002 9.04007 21.5002 6.12C21.5002 3.0274 19.0489 0.5 16.0002 0.5C14.4595 0.5 13.2212 1.19894 12.3197 2.00157C11.7612 2.49888 11.3197 3.04625 11.0001 3.52023ZM10.5528 4.72361C10.3254 4.26879 9.80165 3.44839 9.01552 2.74843C8.2323 2.05106 7.22066 1.5 6 1.5C3.52588 1.5 1.5 3.5572 1.5 6.12C1.49999 8.57993 3.34938 11.0465 5.58078 13.0151C6.68119 13.9859 7.8441 14.8085 8.85233 15.4177C9.7844 15.9809 10.5505 16.3412 11.0001 16.4807C11.4497 16.3412 12.2158 15.9809 13.1479 15.4177C14.1561 14.8085 15.319 13.9859 16.4195 13.0151C18.6508 11.0465 20.5002 8.57993 20.5002 6.12C20.5002 3.5572 18.4743 1.5 16.0002 1.5C14.7796 1.5 13.7679 2.05106 12.9847 2.74843C12.1986 3.44839 11.6749 4.26879 11.4474 4.72361C11.3843 4.84999 11.2748 4.93792 11.1498 4.97711C11.0501 5.00853 10.9458 5.00701 10.8504 4.97711C10.7255 4.93792 10.616 4.84999 10.5528 4.72361Z"
            fill="currentColor"
          />
        </svg>
      );
    case "asterisk-thick":
      return (
        <svg
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            fill="currentColor"
            d="M16.909,10.259l8.533-2.576l1.676,5.156l-8.498,2.899l5.275,7.48
        l-4.447,3.225l-5.553-7.348L8.487,26.25l-4.318-3.289l5.275-7.223L0.88,12.647l1.678-5.16l8.598,2.771V1.364h5.754V10.259z"
          />
        </svg>
      );
    case "close":
      return (
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.70707 0.221642C1.51181 0.0263798 1.19522 0.0263798 0.999962 0.221642C0.8047 0.416904 0.8047 0.733487 0.999962 0.928749L8.07121 8L1.00033 15.0709C0.805068 15.2661 0.805067 15.5827 1.00033 15.778C1.19559 15.9733 1.51217 15.9733 1.70744 15.778L8.77832 8.70711L15.8492 15.778C16.0445 15.9733 16.361 15.9733 16.5563 15.778C16.7516 15.5827 16.7516 15.2661 16.5563 15.0709L9.48543 8L16.5567 0.928749C16.7519 0.733487 16.7519 0.416904 16.5567 0.221642C16.3614 0.0263798 16.0448 0.0263798 15.8496 0.221642L8.77832 7.29289L1.70707 0.221642Z"
            fill="currentColor"
          />
        </svg>
      );
    case "close-lg":
      return (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.31207 0.607871C1.11681 0.412609 0.819562 0.42983 0.648156 0.646335C0.476749 0.86284 0.496088 1.19664 0.69135 1.39191L16.2994 16.9999L0.691347 32.608C0.496085 32.8032 0.476746 33.137 0.648152 33.3535C0.819558 33.57 1.1168 33.5873 1.31206 33.392L17.0017 17.7023L32.6913 33.3918C32.8865 33.5871 33.1838 33.5699 33.3552 33.3534C33.5266 33.1369 33.5073 32.8031 33.312 32.6078L17.7041 16.9999L33.312 1.39205C33.5073 1.19679 33.5266 0.862985 33.3552 0.64648C33.1838 0.429975 32.8865 0.412754 32.6913 0.608017L17.0017 16.2976L1.31207 0.607871Z"
            fill="currentColor"
          />
        </svg>
      );
    case "download":
      return (
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            d="M11.5 0.5L11.5 10.7928L15.6464 6.64637C15.8417 6.45111 16.1583 6.45111 16.3536 6.64637C16.5488 6.84163 16.5488 7.15822 16.3536 7.35348L11 12.707L5.64645 7.35348C5.45118 7.15822 5.45118 6.84163 5.64645 6.64637C5.84171 6.45111 6.15829 6.45111 6.35355 6.64637L10.5 10.7928V0.5C10.5 0.223858 10.7239 0 11 0C11.2761 0 11.5 0.223858 11.5 0.5Z"
            fill="currentColor"
          />
          <path
            d="M1 3C0.723858 3 0.5 3.22386 0.5 3.5V15.5C0.5 15.7761 0.723858 16 1 16H21C21.2761 16 21.5 15.7761 21.5 15.5V3.5C21.5 3.22386 21.2761 3 21 3H17C16.7239 3 16.5 3.22386 16.5 3.5C16.5 3.77614 16.7239 4 17 4H20.5V15H1.5V4H5C5.27614 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.27614 3 5 3H1Z"
            fill="currentColor"
          />
        </svg>
      );
    case "hamburger":
      return (
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0.441176C0 0.197521 0.213198 0 0.47619 0H19.5238C19.7868 0 20 0.197521 20 0.441176C20 0.684832 19.7868 0.882353 19.5238 0.882353H0.47619C0.213198 0.882353 0 0.684832 0 0.441176ZM0 7.49989C0 7.25624 0.213198 7.05872 0.47619 7.05872H19.5238C19.7868 7.05872 20 7.25624 20 7.49989C20 7.74355 19.7868 7.94107 19.5238 7.94107H0.47619C0.213198 7.94107 0 7.74355 0 7.49989ZM0.47619 14.1174C0.213198 14.1174 0 14.315 0 14.5586C0 14.8023 0.213198 14.9998 0.47619 14.9998H19.5238C19.7868 14.9998 20 14.8023 20 14.5586C20 14.315 19.7868 14.1174 19.5238 14.1174H0.47619Z"
            fill="currentColor"
          />
        </svg>
      );
    case "refresh":
      return (
        <svg
          width="18"
          height="24"
          viewBox="0 0 18 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3597 0.745963L15.9691 6.75275L9.96235 8.36232C9.69562 8.43379 9.42145 8.2755 9.34998 8.00877C9.2785 7.74204 9.43679 7.46787 9.70353 7.39639L14.0814 6.22329C12.7385 5.02054 10.9658 4.28984 9.02153 4.28986C4.83114 4.28989 1.43412 7.68694 1.43408 11.8774C1.43408 12.1535 1.21022 12.3774 0.934077 12.3774C0.657935 12.3774 0.43408 12.1535 0.434082 11.8774C0.434122 7.13467 4.27885 3.2899 9.02154 3.28986C11.1249 3.28984 13.0522 4.04653 14.545 5.30172L13.3937 1.00477C13.3223 0.738039 13.4806 0.463872 13.7473 0.392404C14.014 0.320936 14.2882 0.47923 14.3597 0.745963Z"
            fill="currentColor"
          />
          <path
            d="M3.3684 18.4804L4.52046 22.7801C4.59193 23.0468 4.43363 23.321 4.1669 23.3924C3.90017 23.4639 3.626 23.3056 3.55453 23.0389L1.94508 17.0321L7.95183 15.4225C8.21856 15.3511 8.49274 15.5093 8.56421 15.7761C8.63568 16.0428 8.47739 16.317 8.21066 16.3885L3.83466 17.5611C5.17757 18.7638 6.95034 19.4945 8.8946 19.4945C13.085 19.4945 16.482 16.0974 16.4821 11.907C16.4821 11.6308 16.7059 11.407 16.9821 11.407C17.2582 11.407 17.4821 11.6308 17.4821 11.907C17.482 16.6497 13.6373 20.4945 8.8946 20.4945C6.79 20.4945 4.86161 19.7369 3.3684 18.4804Z"
            fill="currentColor"
          />
        </svg>
      );
    case "play":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 8L0.5 15.5L0.499999 0.500001L15.5 8Z"
            fill="currentColor"
          />
        </svg>
      );
    case "stop":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="15" height="15" fill="currentColor" />
        </svg>
      );
    case "globe":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM18.9863 10.5H15.9468C15.8456 13.5376 14.8288 15.7593 13.6281 17.2459C13.107 17.8911 12.5512 18.3979 12.021 18.7722C15.8616 17.891 18.7644 14.5525 18.9863 10.5ZM15.9468 9.5C15.8457 6.46232 14.8289 4.24052 13.6281 2.75393C13.1071 2.10886 12.5514 1.60221 12.0214 1.2279C15.8618 2.10925 18.7644 5.44765 18.9863 9.5H15.9468ZM14.9462 9.5H10.5V1.52488C10.6892 1.5964 10.9139 1.70476 11.1655 1.86004C11.6907 2.18428 12.2877 2.68582 12.8502 3.38226C13.9091 4.69323 14.846 6.69515 14.9462 9.5ZM9.5 10.5H5.05378C5.154 13.3049 6.09094 15.3068 7.1498 16.6177C7.71232 17.3142 8.30927 17.8157 8.83455 18.14C9.08609 18.2952 9.31079 18.4036 9.5 18.4751V10.5ZM5.05378 9.5H9.5V1.52506C9.31079 1.59658 9.08609 1.70494 8.83455 1.86022C8.30927 2.18446 7.71232 2.68599 7.1498 3.38244C6.09097 4.69338 5.15404 6.69524 5.05378 9.5ZM4.05319 9.5H1.01365C1.23556 5.44751 4.13842 2.10903 7.97897 1.22782C7.44881 1.60215 6.893 2.10888 6.37186 2.7541C5.17117 4.24067 4.15438 6.46241 4.05319 9.5ZM4.05318 10.5H1.01365C1.23555 14.5524 4.13823 17.8908 7.9786 18.7721C7.44856 18.3978 6.89288 17.8911 6.37186 17.2461C5.17115 15.7595 4.15434 13.5377 4.05318 10.5ZM14.9462 10.5H10.5V18.4749C10.6892 18.4034 10.9139 18.2951 11.1655 18.1398C11.6907 17.8155 12.2877 17.314 12.8502 16.6176C13.909 15.3066 14.846 13.3048 14.9462 10.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "option-unselected":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
            fill="currentColor"
          />
        </svg>
      );
    case "option-selected":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
            fill="currentColor"
          />
        </svg>
      );
    case "chevron-up":
      return (
        <svg
          width="22"
          height="12"
          viewBox="0 0 22 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 0.292969L0.646447 10.6465C0.451184 10.8418 0.451184 11.1584 0.646447 11.3536C0.84171 11.5489 1.15829 11.5489 1.35355 11.3536L11 1.70718L20.6464 11.3536C20.8417 11.5489 21.1583 11.5489 21.3536 11.3536C21.5488 11.1584 21.5488 10.8418 21.3536 10.6465L11 0.292969Z"
            fill="currentColor"
          />
        </svg>
      );
    case "settings":
      return (
        <svg
          width="22"
          height="19"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.03544 4C4.27806 5.69615 5.73676 7 7.5 7C9.26324 7 10.7219 5.69615 10.9646 4L21 4C21.2761 4 21.5 3.77614 21.5 3.5C21.5 3.22386 21.2761 3 21 3L10.9646 3C10.7219 1.30385 9.26324 0 7.5 0C5.73676 0 4.27806 1.30385 4.03544 3H1C0.723858 3 0.5 3.22386 0.5 3.5C0.5 3.77614 0.723858 4 1 4H4.03544ZM7.5 6C8.88071 6 10 4.88071 10 3.5C10 2.11929 8.88071 1 7.5 1C6.11929 1 5 2.11929 5 3.5C5 4.88071 6.11929 6 7.5 6Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.5 9C16.2632 9 17.7219 10.3039 17.9646 12H21C21.2761 12 21.5 12.2239 21.5 12.5C21.5 12.7761 21.2761 13 21 13H17.9646C17.7219 14.6961 16.2632 16 14.5 16C12.7363 16 11.2774 14.6955 11.0353 12.9988C11.0236 12.9996 11.0119 13 11 13H1C0.723858 13 0.5 12.7761 0.5 12.5C0.5 12.2239 0.723858 12 1 12H11C11.0119 12 11.0236 12.0004 11.0353 12.0012C11.2774 10.3045 12.7363 9 14.5 9ZM12 12.5C12 11.1193 13.1193 10 14.5 10C15.8807 10 17 11.1193 17 12.5C17 13.8807 15.8807 15 14.5 15C13.1193 15 12 13.8807 12 12.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.2694 14.0196C11.8619 15.2526 10.0182 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 10.0402 15.2363 11.902 13.9792 13.3151L19.957 19.2929C20.1522 19.4882 20.1522 19.8048 19.957 20C19.7617 20.1953 19.4451 20.1953 19.2499 20L13.2694 14.0196ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
            fill="currentColor"
          />
        </svg>
      );
    case "search-submit":
      return (
        <svg
          width="21"
          height="11"
          viewBox="0 0 21 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3535 0.146446L20.707 5.5L15.3535 10.8536C15.1582 11.0488 14.8416 11.0488 14.6464 10.8536C14.4511 10.6583 14.4511 10.3417 14.6464 10.1464L18.7928 6L5 6C4.72386 6 4.5 5.77614 4.5 5.5C4.5 5.22386 4.72386 5 5 5L18.7928 5L14.6464 0.853553C14.4511 0.658291 14.4511 0.341708 14.6464 0.146446C14.8416 -0.0488155 15.1582 -0.0488155 15.3535 0.146446Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return assertNever(props.kind);
  }
};

/** Ensure that we don't miss implementing an icon */
export function assertNever(value: never, noThrow?: boolean): never {
  if (noThrow) {
    return value;
  }
  throw new Error(`Missing icon: ${value}`);
}
