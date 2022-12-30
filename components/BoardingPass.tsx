const BoardingPass = () => {
  let now = Date.now();
  // make a date for June 17, 2022
  let endDate = Date.parse(new Date(2023, 6, 23).toDateString());
  let timeLeft = endDate - now;
  let daysLeft = Math.max(0, Math.ceil(timeLeft / (1000 * 60 * 60 * 24)));

  return (
    <>
      <svg
        viewBox="0 0 837 379"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ filter: 'drop-shadow(0px 4px 4px #84A6B5)' }}
        className="hidden sm:block"
      >
        <rect width="837" height="379" rx="20" fill="white" />

        <g opacity="0.78">
          <rect x="561.526" y="210" width="87.6842" height="6.26316" fill="#CE7C35" />
          <rect x="561.526" y="316.474" width="87.6842" height="6.26316" fill="#CE7C35" />
          <rect x="655.474" y="222.526" width="6.26316" height="87.6842" fill="#CE7C35" />
          <rect x="549" y="222.526" width="6.26316" height="87.6842" fill="#CE7C35" />
          <rect x="555.263" y="216.263" width="6.26316" height="6.26316" fill="#CE7C35" />
          <rect x="649.21" y="216.263" width="6.26316" height="6.26316" fill="#CE7C35" />
          <rect x="649.21" y="310.211" width="6.26316" height="6.26316" fill="#CE7C35" />
          <rect x="555.263" y="310.211" width="6.26316" height="6.26316" fill="#CE7C35" />
          <rect x="661.737" y="222.526" width="6.26316" height="87.6842" fill="#E2A93F" />
          <rect x="655.474" y="216.263" width="6.26316" height="6.26316" fill="#E2A93F" />
          <rect x="649.21" y="210" width="6.26316" height="6.26316" fill="#E2A93F" />
          <rect x="655.474" y="310.211" width="6.26316" height="6.26316" fill="#E2A93F" />
          <rect x="649.21" y="316.474" width="6.26316" height="6.26316" fill="#E2A93F" />
          <rect x="555.263" y="222.526" width="100.211" height="87.6842" fill="#F7D046" />
          <rect x="561.526" y="216.263" width="87.6842" height="100.211" fill="#F7D046" />
          <rect x="624.158" y="285.158" width="25.0526" height="25.0526" fill="#CE7C35" />
          <rect x="630.421" y="291.421" width="12.5263" height="12.5263" fill="#E2A93F" />
          <rect x="636.684" y="297.684" width="6.26316" height="6.26316" fill="#F7D046" />
          <rect x="592.842" y="285.158" width="25.0526" height="25.0526" fill="#CE7C35" />
          <rect x="599.105" y="291.421" width="12.5263" height="12.5263" fill="#E2A93F" />
          <rect x="605.368" y="297.684" width="6.26316" height="6.26316" fill="#F7D046" />
          <rect x="561.526" y="285.158" width="25.0526" height="25.0526" fill="#CE7C35" />
          <rect x="567.789" y="291.421" width="12.5263" height="12.5263" fill="#E2A93F" />
          <rect x="574.053" y="297.684" width="6.26316" height="6.26316" fill="#F7D046" />
          <rect x="624.158" y="253.842" width="25.0526" height="25.0526" fill="#CE7C35" />
          <rect x="630.421" y="260.105" width="12.5263" height="12.5263" fill="#E2A93F" />
          <rect x="636.684" y="266.368" width="6.26316" height="6.26316" fill="#F7D046" />
          <rect x="592.842" y="253.842" width="25.0526" height="25.0526" fill="#CE7C35" />
          <rect x="599.105" y="260.105" width="12.5263" height="12.5263" fill="#E2A93F" />
          <rect x="605.368" y="266.368" width="6.26316" height="6.26316" fill="#F7D046" />
          <rect x="561.526" y="253.842" width="25.0526" height="25.0526" fill="#CE7C35" />
          <rect x="567.789" y="260.105" width="12.5263" height="12.5263" fill="#E2A93F" />
          <rect x="574.053" y="266.368" width="6.26316" height="6.26316" fill="#F7D046" />
          <rect x="624.158" y="222.526" width="25.0526" height="25.0526" fill="#CE7C35" />
          <rect x="630.421" y="228.789" width="12.5263" height="12.5263" fill="#E2A93F" />
          <rect x="636.684" y="235.053" width="6.26316" height="6.26316" fill="#F7D046" />
          <rect x="592.842" y="222.526" width="25.0526" height="25.0526" fill="#CE7C35" />
          <rect x="599.105" y="228.789" width="12.5263" height="12.5263" fill="#E2A93F" />
          <rect x="605.368" y="235.053" width="6.26316" height="6.26316" fill="#F7D046" />
          <rect x="561.526" y="222.526" width="25.0526" height="25.0526" fill="#CE7C35" />
          <rect x="567.789" y="228.789" width="12.5263" height="12.5263" fill="#E2A93F" />
          <rect x="574.053" y="235.053" width="6.26316" height="6.26316" fill="#F7D046" />
          <rect x="580.316" y="272.632" width="50.1053" height="18.7895" fill="#763E30" />
          <rect x="586.579" y="291.421" width="37.5789" height="6.26316" fill="#763E30" />
          <rect x="592.842" y="297.684" width="25.0526" height="6.26316" fill="#763E30" />
          <rect x="586.579" y="278.895" width="37.5789" height="12.5263" fill="#DF809E" />
          <rect x="592.842" y="291.421" width="25.0526" height="6.26316" fill="#DF809E" />
          <rect x="617.895" y="253.842" width="18.7895" height="12.5263" fill="#763E30" />
          <rect x="624.158" y="247.579" width="12.5263" height="6.26316" fill="#763E30" />
          <rect x="574.053" y="253.842" width="18.7895" height="12.5263" fill="#763E30" />
          <rect x="580.316" y="247.579" width="12.5263" height="6.26316" fill="#763E30" />
        </g>

        {/* From */}
        <text fill="#3C2415" fontFamily="Lexend" fontWeight="bold">
          <tspan x="65" y="76" fontSize={24} fontWeight="500">
            From
          </tspan>
          <tspan x="65" y="130" fontSize={44}>
            ANY
          </tspan>
          <tspan x="65" y="149" fontSize={15}>
            (Anywhere in the World)
          </tspan>
        </text>

        {/* To */}
        <text fill="#3C2415" fontFamily="Lexend" fontWeight="bold">
          <tspan x="337" y="76" fontSize={24} fontWeight="500">
            To
          </tspan>
          <tspan x="337" y="130" fontSize={44}>
            WFP
          </tspan>
          <tspan x="337" y="149" fontSize={15}>
            (Waffle Paradise)
          </tspan>
        </text>

        {/* Flight # */}
        <text fill="#3C2415" fontFamily="Lexend">
          <tspan x="589" y="76" fontSize={24} fontWeight="500">
            Boarding in
          </tspan>
          <tspan x="585" y="130" fontSize={44} fontWeight="bold">
            {daysLeft} Days
          </tspan>
        </text>

        {/* Depart */}
        <text fill="#3C2415" fontSize={29} fontWeight="bold" fontFamily="Lexend">
          <tspan x="58" y="230" fontSize={24} fontWeight="500">
            Depart
          </tspan>
          <tspan x="58" y="283">
            5:00pm ET
          </tspan>
          <tspan x="58" y="319">
            June 23, 2023
          </tspan>
        </text>

        {/* Return */}
        <text fill="#3C2415" fontSize={29} fontWeight="bold" fontFamily="Lexend">
          <tspan x="308" y="230" fontSize={24} fontWeight="500">
            Return
          </tspan>
          <tspan x="308" y="283">
            5:00pm ET
          </tspan>
          <tspan x="308" y="319">
            June 25, 2023
          </tspan>
        </text>

        {/* Waffle Air */}
        <text fill="#3C2415" fontSize={42} fontWeight="bold" fontFamily="Lexend">
          <tspan x="656" y="263">
            Waffle
          </tspan>
          <tspan x="656" y="301">
            Air
          </tspan>
        </text>
      </svg>
      <svg
        viewBox="0 0 367 319"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ filter: 'drop-shadow(0px 4px 4px #84A6B5)' }}
        className="w-full sm:hidden"
      >
        <rect width="367" height="319" rx="10" fill="white" />
        <g clip-path="url(#clip0_499_622)">
          <g opacity="0.78">
            <path d="M260.082 227.755H210.135V231.302H260.082V227.755Z" fill="#CE7C35" />
            <path d="M260.082 288.059H210.135V291.606H260.082V288.059Z" fill="#CE7C35" />
            <path d="M267.217 234.85H263.65V284.512H267.217V234.85Z" fill="#CE7C35" />
            <path d="M206.568 234.85H203V284.512H206.568V234.85Z" fill="#CE7C35" />
            <path d="M210.135 231.302H206.568V234.85H210.135V231.302Z" fill="#CE7C35" />
            <path d="M263.649 231.302H260.082V234.85H263.649V231.302Z" fill="#CE7C35" />
            <path d="M263.649 284.512H260.082V288.059H263.649V284.512Z" fill="#CE7C35" />
            <path d="M210.135 284.512H206.568V288.059H210.135V284.512Z" fill="#CE7C35" />
            <path d="M270.785 234.85H267.217V284.512H270.785V234.85Z" fill="#E2A93F" />
            <path d="M267.217 231.302H263.65V234.85H267.217V231.302Z" fill="#E2A93F" />
            <path d="M263.649 227.755H260.082V231.302H263.649V227.755Z" fill="#E2A93F" />
            <path d="M267.217 284.512H263.65V288.059H267.217V284.512Z" fill="#E2A93F" />
            <path d="M263.649 288.059H260.082V291.606H263.649V288.059Z" fill="#E2A93F" />
            <path d="M263.65 234.85H206.568V284.512H263.65V234.85Z" fill="#F7D046" />
            <path d="M260.082 231.302H210.135V288.059H260.082V231.302Z" fill="#F7D046" />
            <path d="M260.082 270.323H245.812V284.512H260.082V270.323Z" fill="#CE7C35" />
            <path d="M256.514 273.87H249.379V280.964H256.514V273.87Z" fill="#E2A93F" />
            <path d="M256.514 277.417H252.947V280.964H256.514V277.417Z" fill="#F7D046" />
            <path d="M242.244 270.323H227.973V284.512H242.244V270.323Z" fill="#CE7C35" />
            <path d="M238.676 273.87H231.541V280.964H238.676V273.87Z" fill="#E2A93F" />
            <path d="M238.676 277.417H235.109V280.964H238.676V277.417Z" fill="#F7D046" />
            <path d="M224.406 270.323H210.135V284.512H224.406V270.323Z" fill="#CE7C35" />
            <path d="M220.838 273.87H213.703V280.964H220.838V273.87Z" fill="#E2A93F" />
            <path d="M220.838 277.417H217.271V280.964H220.838V277.417Z" fill="#F7D046" />
            <path d="M260.082 252.586H245.812V266.775H260.082V252.586Z" fill="#CE7C35" />
            <path d="M256.514 256.133H249.379V263.228H256.514V256.133Z" fill="#E2A93F" />
            <path d="M256.514 259.681H252.947V263.228H256.514V259.681Z" fill="#F7D046" />
            <path d="M242.244 252.586H227.973V266.775H242.244V252.586Z" fill="#CE7C35" />
            <path d="M238.676 256.133H231.541V263.228H238.676V256.133Z" fill="#E2A93F" />
            <path d="M238.676 259.681H235.109V263.228H238.676V259.681Z" fill="#F7D046" />
            <path d="M224.406 252.586H210.135V266.775H224.406V252.586Z" fill="#CE7C35" />
            <path d="M220.838 256.133H213.703V263.228H220.838V256.133Z" fill="#E2A93F" />
            <path d="M220.838 259.681H217.271V263.228H220.838V259.681Z" fill="#F7D046" />
            <path d="M260.082 234.85H245.812V249.039H260.082V234.85Z" fill="#CE7C35" />
            <path d="M256.514 238.397H249.379V245.492H256.514V238.397Z" fill="#E2A93F" />
            <path d="M256.514 241.944H252.947V245.492H256.514V241.944Z" fill="#F7D046" />
            <path d="M242.244 234.85H227.973V249.039H242.244V234.85Z" fill="#CE7C35" />
            <path d="M238.676 238.397H231.541V245.492H238.676V238.397Z" fill="#E2A93F" />
            <path d="M238.676 241.944H235.109V245.492H238.676V241.944Z" fill="#F7D046" />
            <path d="M224.406 234.85H210.135V249.039H224.406V234.85Z" fill="#CE7C35" />
            <path d="M220.838 238.397H213.703V245.492H220.838V238.397Z" fill="#E2A93F" />
            <path d="M220.838 241.944H217.271V245.492H220.838V241.944Z" fill="#F7D046" />
            <path d="M249.379 263.228H220.838V273.87H249.379V263.228Z" fill="#763E30" />
            <path d="M245.811 273.87H224.406V277.417H245.811V273.87Z" fill="#763E30" />
            <path d="M242.244 277.417H227.973V280.964H242.244V277.417Z" fill="#763E30" />
            <path d="M245.811 266.775H224.406V273.87H245.811V266.775Z" fill="#DF809E" />
            <path d="M242.244 273.87H227.973V277.417H242.244V273.87Z" fill="#DF809E" />
            <path d="M252.947 252.586H242.244V259.681H252.947V252.586Z" fill="#763E30" />
            <path d="M252.947 249.039H245.812V252.586H252.947V249.039Z" fill="#763E30" />
            <path d="M227.973 252.586H217.271V259.681H227.973V252.586Z" fill="#763E30" />
            <path d="M227.973 249.039H220.838V252.586H227.973V249.039Z" fill="#763E30" />
          </g>
          <path
            d="M264.512 257.773L259.488 241.122H263.627L266.139 249.875C266.251 250.272 266.346 250.676 266.426 251.089C266.522 251.485 266.593 251.866 266.641 252.23C266.705 252.595 266.753 252.936 266.785 253.253C266.817 253.555 266.849 253.808 266.881 254.014H266.354C266.45 253.428 266.53 252.904 266.593 252.444C266.673 251.985 266.761 251.556 266.857 251.16C266.952 250.748 267.072 250.319 267.215 249.875L269.704 243.286H272.957L275.398 249.875C275.589 250.399 275.748 250.89 275.876 251.35C276.004 251.81 276.099 252.254 276.163 252.682C276.243 253.095 276.307 253.507 276.354 253.919L275.876 253.991C275.908 253.705 275.932 253.444 275.948 253.206C275.964 252.952 275.98 252.714 275.996 252.492C276.028 252.254 276.059 252.008 276.091 251.755C276.123 251.501 276.171 251.223 276.235 250.922C276.299 250.605 276.386 250.248 276.498 249.852L278.986 241.122H283.029L278.005 257.773H274.895L270.924 248.186L271.378 248.234L267.718 257.773H264.512ZM288.933 257.987C287.864 257.987 286.907 257.709 286.062 257.154C285.233 256.584 284.571 255.806 284.076 254.823C283.582 253.824 283.335 252.698 283.335 251.445C283.335 250.161 283.582 249.027 284.076 248.044C284.571 247.061 285.249 246.291 286.11 245.736C286.971 245.165 287.952 244.88 289.052 244.88C289.659 244.88 290.209 244.967 290.703 245.142C291.214 245.316 291.66 245.562 292.043 245.879C292.426 246.18 292.753 246.537 293.024 246.95C293.295 247.346 293.494 247.774 293.622 248.234L292.832 248.139V245.142H296.636V257.773H292.761V254.728L293.622 254.704C293.494 255.148 293.287 255.569 293 255.965C292.713 256.362 292.362 256.71 291.947 257.012C291.533 257.313 291.07 257.551 290.56 257.725C290.049 257.9 289.507 257.987 288.933 257.987ZM289.985 254.776C290.576 254.776 291.086 254.641 291.517 254.371C291.947 254.102 292.282 253.721 292.521 253.229C292.761 252.722 292.88 252.127 292.88 251.445C292.88 250.763 292.761 250.177 292.521 249.685C292.282 249.178 291.947 248.789 291.517 248.52C291.086 248.234 290.576 248.091 289.985 248.091C289.411 248.091 288.909 248.234 288.478 248.52C288.064 248.789 287.737 249.178 287.497 249.685C287.258 250.177 287.139 250.763 287.139 251.445C287.139 252.127 287.258 252.722 287.497 253.229C287.737 253.721 288.064 254.102 288.478 254.371C288.909 254.641 289.411 254.776 289.985 254.776ZM300.804 257.773V244.523C300.804 243.699 300.979 242.953 301.33 242.287C301.697 241.621 302.199 241.098 302.837 240.717C303.491 240.321 304.249 240.122 305.11 240.122C305.716 240.122 306.274 240.21 306.785 240.384C307.295 240.559 307.75 240.804 308.148 241.122L307.048 243.905C306.841 243.794 306.641 243.706 306.45 243.643C306.258 243.58 306.083 243.548 305.923 243.548C305.636 243.548 305.397 243.595 305.206 243.691C305.014 243.786 304.871 243.936 304.775 244.143C304.695 244.333 304.655 244.571 304.655 244.856V257.773H302.742C302.311 257.773 301.928 257.773 301.593 257.773C301.274 257.773 301.011 257.773 300.804 257.773ZM298.962 248.638V245.498H307.263V248.638H298.962ZM310.206 257.773V244.523C310.206 243.699 310.381 242.953 310.732 242.287C311.099 241.621 311.601 241.098 312.239 240.717C312.893 240.321 313.651 240.122 314.512 240.122C315.118 240.122 315.677 240.21 316.187 240.384C316.697 240.559 317.152 240.804 317.551 241.122L316.45 243.905C316.243 243.794 316.043 243.706 315.852 243.643C315.661 243.58 315.485 243.548 315.326 243.548C315.039 243.548 314.799 243.595 314.608 243.691C314.417 243.786 314.273 243.936 314.177 244.143C314.098 244.333 314.058 244.571 314.058 244.856V257.773H312.144C311.713 257.773 311.33 257.773 310.995 257.773C310.676 257.773 310.413 257.773 310.206 257.773ZM308.364 248.638V245.498H316.665V248.638H308.364ZM318.842 257.773V240.17H322.67V257.773H318.842ZM331.907 258.011C330.503 258.011 329.283 257.733 328.246 257.178C327.21 256.607 326.404 255.838 325.83 254.871C325.256 253.888 324.969 252.77 324.969 251.517C324.969 250.549 325.128 249.661 325.447 248.853C325.766 248.044 326.213 247.346 326.787 246.759C327.361 246.157 328.039 245.697 328.82 245.38C329.618 245.047 330.487 244.88 331.428 244.88C332.321 244.88 333.135 245.039 333.868 245.356C334.618 245.673 335.264 246.117 335.806 246.688C336.349 247.259 336.763 247.933 337.05 248.71C337.337 249.487 337.465 250.335 337.433 251.255L337.409 252.278H327.289L326.739 250.137H334.299L333.892 250.589V250.113C333.86 249.717 333.733 249.368 333.51 249.067C333.302 248.749 333.023 248.504 332.672 248.329C332.321 248.155 331.923 248.068 331.476 248.068C330.854 248.068 330.32 248.194 329.873 248.448C329.443 248.686 329.116 249.043 328.892 249.519C328.669 249.978 328.557 250.549 328.557 251.231C328.557 251.929 328.701 252.54 328.988 253.063C329.291 253.57 329.722 253.967 330.28 254.252C330.854 254.538 331.532 254.681 332.313 254.681C332.856 254.681 333.334 254.601 333.749 254.443C334.179 254.284 334.642 254.014 335.136 253.634L336.931 256.155C336.436 256.584 335.91 256.932 335.352 257.202C334.794 257.472 334.219 257.67 333.629 257.797C333.055 257.939 332.481 258.011 331.907 258.011ZM259.368 279.295L265.995 262.644H269.44L276.02 279.295H271.905L268.747 270.85C268.619 270.517 268.491 270.161 268.364 269.78C268.236 269.399 268.109 269.011 267.981 268.614C267.853 268.202 267.726 267.806 267.598 267.425C267.487 267.029 267.391 266.664 267.311 266.331L268.029 266.307C267.933 266.703 267.822 267.092 267.694 267.473C267.582 267.853 267.463 268.234 267.335 268.614C267.223 268.979 267.096 269.352 266.952 269.732C266.809 270.097 266.673 270.478 266.546 270.874L263.388 279.295H259.368ZM262.526 276.107L263.794 273.063H271.498L272.742 276.107H262.526ZM277.918 279.295V266.664H281.745V279.295H277.918ZM279.831 264.166C279.114 264.166 278.548 264 278.133 263.667C277.734 263.318 277.535 262.826 277.535 262.192C277.535 261.621 277.742 261.153 278.157 260.788C278.571 260.424 279.13 260.241 279.831 260.241C280.549 260.241 281.107 260.416 281.506 260.764C281.905 261.098 282.104 261.573 282.104 262.192C282.104 262.778 281.897 263.254 281.482 263.619C281.083 263.984 280.533 264.166 279.831 264.166ZM285.342 279.295V266.664H288.978L289.146 270.779L288.428 269.994C288.62 269.312 288.931 268.702 289.361 268.162C289.808 267.623 290.326 267.195 290.916 266.878C291.506 266.561 292.136 266.402 292.806 266.402C293.093 266.402 293.357 266.426 293.596 266.474C293.851 266.521 294.082 266.577 294.29 266.64L293.237 270.85C293.061 270.739 292.822 270.652 292.519 270.589C292.232 270.509 291.929 270.47 291.61 270.47C291.259 270.47 290.932 270.533 290.629 270.66C290.326 270.771 290.071 270.938 289.864 271.16C289.656 271.382 289.489 271.643 289.361 271.945C289.25 272.246 289.194 272.587 289.194 272.968V279.295H285.342Z"
            fill="#3C2415"
          />
        </g>

        {/* from */}
        <text fill="#3C2415" fontFamily="Lexend" fontWeight="bold">
          <tspan x="29" y="48" fontSize={20} fontWeight="500">
            From
          </tspan>
          <tspan x="29" y="73" fontSize={30}>
            ANY
          </tspan>
          <tspan x="29" y="87" fontSize={11}>
            (Anywhere in the World)
          </tspan>
        </text>

        {/* to */}
        <text fill="#3C2415" fontFamily="Lexend" fontWeight="bold">
          <tspan x="205" y="48" fontSize={20} fontWeight="500">
            To
          </tspan>
          <tspan x="205" y="73" fontSize={30}>
            WFP
          </tspan>
          <tspan x="205" y="87" fontSize={11}>
            (Waffle Paradise)
          </tspan>
        </text>

        {/* depart */}
        <text fill="#3C2415" fontFamily="Lexend" fontWeight="bold">
          <tspan x="29" y="141" fontSize={20} fontWeight="500">
            Depart
          </tspan>
          <tspan x="29" y="168" fontSize={20}>
            5:00pm ET
          </tspan>
          <tspan x="29" y="193" fontSize={20}>
            6/23/2023
          </tspan>
        </text>

        {/* return */}
        <text fill="#3C2415" fontFamily="Lexend" fontWeight="bold">
          <tspan x="205" y="141" fontSize={20} fontWeight="500">
            Return
          </tspan>
          <tspan x="205" y="168" fontSize={20}>
            5:00pm ET
          </tspan>
          <tspan x="205" y="193" fontSize={20}>
            6/25/2023
          </tspan>
        </text>

        {/* flight # */}
        <text fill="#3C2415" fontFamily="Lexend" fontWeight="bold">
          <tspan x="29" y="248" fontSize={20} fontWeight="500">
            Boarding In
          </tspan>
          <tspan x="29" y="278" fontSize={25}>
            {daysLeft} Days
          </tspan>
        </text>
      </svg>
    </>
  );
};

export default BoardingPass;
