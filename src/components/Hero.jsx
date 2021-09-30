import { useSpring, animated } from "react-spring";
import React,{ useState, useEffect } from "react";


export default function Hero() {


    let animatedStyle =  useSpring({
        loop: { reverse: true },
        delay: 100,
        from:{y:Math.floor(Math.random() * -10),x:Math.floor(Math.random() * 30)},
        to:{y:Math.floor(Math.random() * 30),x:Math.floor(Math.random() * 30)},
        config: { mass: 10, tension: 300, friction: 100, precision: 0.005 }

    })

    return (
        <svg width="100%" height="741" viewBox="0 0 1169 741" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M794.073 310.871C716.695 265.827 652.74 292.103 630.435 310.871C571.226 338.794 444.168 414.141 409.615 492.143C366.425 589.646 545.271 615.738 640.168 632.904C735.066 650.07 713.167 555.314 924.253 584.152C1135.34 612.991 1098.23 426.226 982.044 421.419C865.855 416.613 890.796 367.175 794.073 310.871Z" fill="#398989" fillOpacity="0.06"/>
        <path d="M322.736 564.268C361.415 624.474 416.506 634.187 439.217 631.518C491.53 638.242 609.405 642.943 662.4 607.953C728.644 564.215 610.838 474.26 549.538 424.435C488.238 374.61 469.327 443.366 329.571 338.429C189.816 233.492 148.23 366.522 229.185 417.303C310.141 468.084 274.387 489.011 322.736 564.268Z" fill="#893976" fillOpacity="0.06"/>
        <path d="M779.598 263.882C733.378 227.873 695.176 248.879 681.853 263.882C646.485 286.205 570.591 346.439 549.952 408.796C524.153 486.742 630.982 507.601 687.667 521.324C744.352 535.047 731.27 459.297 857.358 482.351C983.445 505.406 961.28 356.1 891.877 352.258C822.475 348.415 837.373 308.894 779.598 263.882Z" fill="#893976" fillOpacity="0.06"/>
        <ellipse cx="627" cy="556.5" rx="124" ry="32.5" fill="#893976" fillOpacity="0.26"/>
        <ellipse cx="626" cy="553" rx="61" ry="25" fill="#893976" fillOpacity="0.26"/>
        <path d="M694.018 190.782C639.723 212.805 638.813 256.391 645.145 275.431C646.793 317.222 661.01 413.066 704.694 462.118C759.297 523.434 830.776 441.346 871.003 399.117C911.23 356.888 839.088 330.342 922.097 232.674C1005.11 135.006 864.722 79.5493 826.693 137.732C788.664 195.916 761.886 163.253 694.018 190.782Z" fill="#398984" fillOpacity="0.06"/>
        <path d="M827.494 165.647C750.448 133.068 705.527 176.152 692.697 201.766C652.172 245.619 569.766 356.731 564.345 450.353C557.569 567.379 712.602 556.669 795.845 554.648C879.088 552.626 833.057 452.995 1015.46 438.197C1197.86 423.399 1112.12 225.687 1014.99 246.034C917.862 266.38 923.803 206.372 827.494 165.647Z" fill="#893976" fillOpacity="0.06"/>
        <path d="M452.635 581.599C546.841 603.676 581.287 542.145 586.735 508.62C616.166 447.135 668.775 295.815 643.762 182.415C612.496 40.6648 448.095 87.6482 358.592 108.406C269.088 129.164 351.817 238.435 159.118 296.346C-33.5815 354.258 124.515 572.334 223.016 526.554C321.518 480.774 334.878 554.004 452.635 581.599Z" fill="#397B89" fillOpacity="0.06"/>
        <path d="M599.774 492.426C681.485 503.795 713.28 451.287 718.964 423.611C746.375 371.492 796.515 244.61 777.782 154.042C754.365 40.8314 609.413 90.6061 530.63 113.78C451.847 136.953 521.128 220.114 351.147 280.77C181.165 341.425 313.307 507.883 400.642 463.708C487.976 419.532 497.634 478.214 599.774 492.426Z" fill="#893976" fillOpacity="0.06"/>
        <animated.circle style={animatedStyle} cx="627" cy="369" r="196" fill="#FFD600"/>
        <animated.circle style={animatedStyle} cx="627" cy="369" r="196" fill="url(#paint0_linear)" fillOpacity="0.2"/>
        <animated.circle style={animatedStyle} cx="627" cy="369" r="174" fill="white" fillOpacity="0.22"/>
        <animated.circle style={animatedStyle} cx="627" cy="369" r="174" fill="url(#paint1_radial)" fillOpacity="0.8"/>
        <animated.circle style={animatedStyle} cx="552.5" cy="318.5" r="46.5" fill="white" fillOpacity="0.22"/>
        <animated.circle style={animatedStyle} cx="539.5" cy="405.5" r="30.5" fill="white" fillOpacity="0.22"/>
        <animated.circle style={animatedStyle} cx="670" cy="358" r="23" fill="white" fillOpacity="0.22"/>
        <animated.circle style={animatedStyle} cx="599" cy="363" r="24" fill="white" fillOpacity="0.22"/>
        <animated.circle style={animatedStyle} cx="623" cy="299" r="12" fill="white" fillOpacity="0.22"/>
        <animated.circle style={animatedStyle} cx="621.676" cy="453.676" r="65.9507" transform="rotate(-150.954 621.676 453.676)" fill="white" fillOpacity="0.22"/>
        <animated.circle style={animatedStyle} cx="514.356" cy="323.356" r="32.6208" transform="rotate(-150.954 514.356 323.356)" fill="white" fillOpacity="0.22"/>
        <animated.circle style={animatedStyle} cx="605.833" cy="366.046" r="34.0391" transform="rotate(-150.954 605.833 366.046)" fill="white" fillOpacity="0.22"/>
        <animated.circle style={animatedStyle} cx="627.284" cy="363.284" r="34.0391" transform="rotate(-150.954 627.284 363.284)" fill="white" fillOpacity="0.22"/>
        <animated.circle style={animatedStyle} cx="627.284" cy="363.284" r="34.0391" transform="rotate(-150.954 627.284 363.284)" fill="white" fillOpacity="0.22"/>
        <animated.circle style={animatedStyle} cx="627.284" cy="363.284" r="34.0391" transform="rotate(-150.954 627.284 363.284)" fill="white" fillOpacity="0.22"/>
        <animated.circle style={animatedStyle} cx="664.018" cy="284.018" r="60.8694" transform="rotate(42.78 664.018 284.018)" fill="white" fillOpacity="0.22"/>
        <animated.circle style={animatedStyle} cx="729.454" cy="445.822" r="30.1075" transform="rotate(42.78 729.454 445.822)" fill="white" fillOpacity="0.22"/>
        <animated.circle style={animatedStyle} cx="610.715" cy="274.158" r="42.7012" transform="rotate(-108.174 610.715 274.158)" fill="white" fillOpacity="0.22"/>
        <animated.circle style={animatedStyle} cx="725.233" cy="361.233" r="44.5578" transform="rotate(-108.174 725.233 361.233)" fill="white" fillOpacity="0.22"/>
        <animated.circle style={animatedStyle} cx="532.005" cy="428.875" r="17.0195" transform="rotate(-150.954 532.005 428.875)" fill="white" fillOpacity="0.22"/>
        <path d="M418.789 458.72C415.514 470.483 416.795 489.476 417.846 497.503L394.83 496.833L388.711 456.084C396.97 421.759 414.11 404.734 421.648 400.512C438.071 410.075 422.882 444.018 418.789 458.72Z" fill="#C4C4C4"/>
        <path d="M418.789 458.72C415.514 470.483 416.795 489.476 417.846 497.503L394.83 496.833L388.711 456.084C396.97 421.759 414.11 404.734 421.648 400.512C438.071 410.075 422.882 444.018 418.789 458.72Z" fill="url(#paint2_linear)"/>
        <path d="M397.65 428.011C391.461 450.239 397.296 474.982 400.987 484.576L369.382 475.776C370.064 450.477 374.565 394.614 387.114 373.558C402.799 347.238 414.185 368.621 412.896 373.252L397.65 428.011Z" fill="#C4C4C4"/>
        <path d="M397.65 428.011C391.461 450.239 397.296 474.982 400.987 484.576L369.382 475.776C370.064 450.477 374.565 394.614 387.114 373.558C402.799 347.238 414.185 368.621 412.896 373.252L397.65 428.011Z" fill="url(#paint3_linear)"/>
        <path d="M387.215 354.376C384.795 365.578 378.826 431.252 376.144 462.69L352.99 456.243C349.482 441.96 346.556 404.08 362.918 366.821C379.279 329.563 385.933 343 387.215 354.376Z" fill="#C4C4C4"/>
        <path d="M387.215 354.376C384.795 365.578 378.826 431.252 376.144 462.69L352.99 456.243C349.482 441.96 346.556 404.08 362.918 366.821C379.279 329.563 385.933 343 387.215 354.376Z" fill="url(#paint4_linear)"/>
        <path d="M559.395 595.748C554.934 611.77 529.812 608.509 517.809 604.876C460.498 593.51 379.8 520.795 346.615 485.859C302.937 439.867 340.561 373.193 364.833 345.604C380.512 355.958 375.004 376.878 370.29 386.044C361.586 405.476 359.196 430.815 359.09 441.056C401.183 504.57 444.502 504.214 460.899 496.097C458.91 455.75 462.338 413.419 475.277 420.264C488.215 427.11 494.096 457.064 491.683 468.867C490.123 476.5 507.341 508.045 515.5 522.5C523.5 532.5 564.972 575.719 559.395 595.748Z" fill="#C4C4C4"/>
        <path d="M559.395 595.748C554.934 611.77 529.812 608.509 517.809 604.876C460.498 593.51 379.8 520.795 346.615 485.859C302.937 439.867 340.561 373.193 364.833 345.604C380.512 355.958 375.004 376.878 370.29 386.044C361.586 405.476 359.196 430.815 359.09 441.056C401.183 504.57 444.502 504.214 460.899 496.097C458.91 455.75 462.338 413.419 475.277 420.264C488.215 427.11 494.096 457.064 491.683 468.867C490.123 476.5 507.341 508.045 515.5 522.5C523.5 532.5 564.972 575.719 559.395 595.748Z" fill="url(#paint5_linear)"/>
        <path d="M828.289 297.116C832.06 285.503 831.586 266.472 830.877 258.408L853.844 260.055L858.228 301.026C848.518 334.97 830.671 351.252 822.962 355.15C806.959 344.899 823.575 311.631 828.289 297.116Z" fill="#C4C4C4"/>
        <path d="M828.289 297.116C832.06 285.503 831.586 266.472 830.877 258.408L853.844 260.055L858.228 301.026C848.518 334.97 830.671 351.252 822.962 355.15C806.959 344.899 823.575 311.631 828.289 297.116Z" fill="url(#paint6_linear)"/>
        <path d="M848.105 328.695C855.232 306.75 850.453 281.781 847.172 272.039L878.375 282.173C876.62 307.42 869.751 363.042 856.32 383.546C839.531 409.176 829.063 387.329 830.548 382.757L848.105 328.695Z" fill="#C4C4C4"/>
        <path d="M848.105 328.695C855.232 306.75 850.453 281.781 847.172 272.039L878.375 282.173C876.62 307.42 869.751 363.042 856.32 383.546C839.531 409.176 829.063 387.329 830.548 382.757L848.105 328.695Z" fill="url(#paint7_linear)"/>
        <path d="M855.404 402.707C858.298 391.618 867.05 326.255 871.064 294.96L893.923 302.384C896.822 316.803 898.136 354.773 880.208 391.304C862.28 427.834 856.202 414.127 855.404 402.707Z" fill="#C4C4C4"/>
        <path d="M855.404 402.707C858.298 391.618 867.05 326.255 871.064 294.96L893.923 302.384C896.822 316.803 898.136 354.773 880.208 391.304C862.28 427.834 856.202 414.127 855.404 402.707Z" fill="url(#paint8_linear)"/>
        <path d="M693.626 154.243C698.763 138.424 723.724 142.748 735.563 146.888C792.34 160.677 869.877 236.752 901.549 273.066C943.236 320.87 902.815 385.887 877.394 412.42C862.168 401.411 868.56 380.743 873.659 371.786C883.179 352.741 886.643 327.526 887.184 317.299C847.825 252.055 804.53 250.571 787.803 257.985C788.078 298.38 782.855 340.528 770.219 333.139C757.583 325.75 752.979 295.573 755.891 283.884C758.22 274.532 743.727 242.618 736.189 227.83C724.218 218.003 687.205 174.016 693.626 154.243Z" fill="#C4C4C4"/>
        <path d="M693.626 154.243C698.763 138.424 723.724 142.748 735.563 146.888C792.34 160.677 869.877 236.752 901.549 273.066C943.236 320.87 902.815 385.887 877.394 412.42C862.168 401.411 868.56 380.743 873.659 371.786C883.179 352.741 886.643 327.526 887.184 317.299C847.825 252.055 804.53 250.571 787.803 257.985C788.078 298.38 782.855 340.528 770.219 333.139C757.583 325.75 752.979 295.573 755.891 283.884C758.22 274.532 743.727 242.618 736.189 227.83C724.218 218.003 687.205 174.016 693.626 154.243Z" fill="url(#paint9_linear)"/>
        <animated.circle style={animatedStyle} cx="459.5" cy="236.5" r="16.5" fill="#FFD300"/>
        <animated.circle style={animatedStyle} cx="512" cy="200" r="20" fill="#FFD300"/>
        <circle cx="739.5" cy="532.5" r="22.5" fill="#FFB600"/>
        <ellipse cx="784" cy="491.5" rx="14" ry="13.5" fill="#FFB600"/>
        <circle cx="793.5" cy="547.5" r="7.5" fill="#FFB600"/>
        <circle cx="512" cy="150" r="12" fill="#FFD300"/>
        <circle cx="156.5" cy="240.5" r="21.5" fill="#397B89" fillOpacity="0.06"/>
        <circle cx="1125.5" cy="564.5" r="21.5" fill="#397B89" fillOpacity="0.06"/>
        <circle cx="249" cy="210" r="52" fill="#397B89" fillOpacity="0.06"/>
        <circle cx="1063" cy="254" r="33" fill="#893976" fillOpacity="0.06"/>
        <circle cx="190" cy="582" r="33" fill="#893976" fillOpacity="0.06"/>
        <circle cx="1149.5" cy="279.5" r="19.5" fill="#893976" fillOpacity="0.06"/>
        <circle cx="293.5" cy="522.5" r="19.5" fill="#893976" fillOpacity="0.06"/>
        <defs>
        <linearGradient id="paint0_linear" x1="775.5" y1="505.5" x2="497.5" y2="203" gradientUnits="userSpaceOnUse">
        <stop offset="0.0001" stopColor="#FF2E00"/>
        <stop offset="1" stopColor="#FFD600"/>
        </linearGradient>
        <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(627 361) rotate(90) scale(182)">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="paint2_linear" x1="431" y1="440" x2="386" y2="479" gradientUnits="userSpaceOnUse">
        <stop stopColor="#893976"/>
        <stop offset="1" stopColor="#58275B"/>
        </linearGradient>
        <linearGradient id="paint3_linear" x1="406.5" y1="431" x2="349" y2="461" gradientUnits="userSpaceOnUse">
        <stop stopColor="#893976"/>
        <stop offset="1" stopColor="#58275B"/>
        </linearGradient>
        <linearGradient id="paint4_linear" x1="383.5" y1="369.5" x2="338" y2="446" gradientUnits="userSpaceOnUse">
        <stop stopColor="#893976"/>
        <stop offset="1" stopColor="#58275B"/>
        </linearGradient>
        <linearGradient id="paint5_linear" x1="423.484" y1="578.909" x2="479.549" y2="377.544" gradientUnits="userSpaceOnUse">
        <stop stopColor="#893976"/>
        <stop offset="1" stopColor="#893976"/>
        </linearGradient>
        <linearGradient id="paint6_linear" x1="815.5" y1="320" x2="870" y2="266" gradientUnits="userSpaceOnUse">
        <stop stopColor="#893976"/>
        <stop offset="1" stopColor="#58275B"/>
        </linearGradient>
        <linearGradient id="paint7_linear" x1="854.5" y1="340" x2="890" y2="325.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#893976"/>
        <stop offset="1" stopColor="#58275B"/>
        </linearGradient>
        <linearGradient id="paint8_linear" x1="865.5" y1="364" x2="926.5" y2="325.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#893976"/>
        <stop offset="1" stopColor="#58275B"/>
        </linearGradient>
        <linearGradient id="paint9_linear" x1="828.7" y1="176.836" x2="764.137" y2="375.64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#893976"/>
        <stop offset="1" stopColor="#893976"/>
        </linearGradient>
        </defs>
        </svg>        
    )
}