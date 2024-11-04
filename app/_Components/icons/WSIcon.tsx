import {ComponentPropsWithoutRef} from "react";

export const WSICon=(props: ComponentPropsWithoutRef<"svg"> & {size?:number})=>{
    return (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 200 200"
            fill="currentColor"
            {...props}
        >
            <rect width="200" height="200" fill="black"/>
            <path
                d="M45.2812 57.5781C50.8542 57.7865 55.2292 57.8906 58.4062 57.8906C61.4531 57.8906 64.8125 57.7865 68.4844 57.5781C68.5885 57.9948 68.6406 58.2812 68.6406 58.4375C68.6406 58.724 68.5885 59.0495 68.4844 59.4141C66.2188 59.5182 64.6562 59.8047 63.7969 60.2734C62.9635 60.7161 62.5469 61.3021 62.5469 62.0312C62.5469 62.2396 62.5729 62.487 62.625 62.7734C62.7031 63.0339 67.9896 76.0938 78.4844 101.953H78.875L86.4922 81.6406L79.6172 64.2188C78.5234 61.4062 75.9062 59.8047 71.7656 59.4141C71.6615 58.9453 71.6094 58.6198 71.6094 58.4375C71.6094 58.1771 71.6615 57.8906 71.7656 57.5781C75.4375 57.7865 79.513 57.8906 83.9922 57.8906C88.1068 57.8906 92 57.7865 95.6719 57.5781C95.776 57.9948 95.8281 58.2812 95.8281 58.4375C95.8281 58.724 95.776 59.0495 95.6719 59.4141C92.5208 59.5182 90.4766 59.7656 89.5391 60.1562C88.6276 60.5208 88.1719 61.224 88.1719 62.2656C88.1719 62.2917 88.3542 62.9427 88.7188 64.2188L103.133 101.953H103.523L117.781 63.7109C117.938 63.3203 118.016 62.8125 118.016 62.1875C118.016 61.3542 117.508 60.7552 116.492 60.3906C115.477 60 113.823 59.6745 111.531 59.4141C111.427 58.8411 111.375 58.4896 111.375 58.3594C111.375 58.151 111.427 57.8906 111.531 57.5781C114.734 57.7344 117.794 57.8125 120.711 57.8125C123.549 57.8125 126.349 57.7344 129.109 57.5781C129.214 57.8906 129.266 58.151 129.266 58.3594C129.266 58.776 129.214 59.1276 129.109 59.4141C127.26 59.5964 125.724 59.987 124.5 60.5859C123.302 61.1849 122.365 62.2266 121.688 63.7109L101.844 116.133H100.086L88.3281 86.3672L77.1953 116.133H75.4375L53.9922 64.2188C52.8464 61.4583 49.9427 59.8568 45.2812 59.4141C45.1771 58.9453 45.125 58.6198 45.125 58.4375C45.125 58.1771 45.1771 57.8906 45.2812 57.5781Z"
                fill="white"/>
            <path
                d="M127.547 103.102C126.557 98.3359 124.734 94.638 122.078 92.0078C119.448 89.3776 116.284 88.0625 112.586 88.0625C108.966 88.0625 106.154 88.9219 104.148 90.6406C102.169 92.3594 101.18 94.651 101.18 97.5156C101.18 99.1042 101.323 100.419 101.609 101.461C101.896 102.503 102.482 103.518 103.367 104.508C104.253 105.471 105.542 106.331 107.234 107.086C108.927 107.815 111.141 108.518 113.875 109.195C115.359 109.56 116.648 109.898 117.742 110.211C118.862 110.523 120.086 110.953 121.414 111.5C122.768 112.047 123.927 112.633 124.891 113.258C125.88 113.883 126.857 114.664 127.82 115.602C128.81 116.513 129.604 117.529 130.203 118.648C130.828 119.768 131.323 121.096 131.688 122.633C132.078 124.143 132.273 125.797 132.273 127.594C132.273 129.99 131.831 132.203 130.945 134.234C130.06 136.24 128.901 137.932 127.469 139.312C126.036 140.693 124.383 141.865 122.508 142.828C120.633 143.792 118.732 144.495 116.805 144.938C114.878 145.38 112.964 145.602 111.062 145.602C105.281 145.602 99.1224 144.104 92.5859 141.109C92.7161 138.297 92.7812 136.565 92.7812 135.914C92.7812 131.669 92.4297 127.438 91.7266 123.219C92.013 123.036 92.2995 122.945 92.5859 122.945C92.9505 122.945 93.276 123.036 93.5625 123.219C94.1094 126.578 95.0078 129.547 96.2578 132.125C97.5339 134.703 98.9922 136.747 100.633 138.258C102.273 139.742 103.966 140.862 105.711 141.617C107.482 142.346 109.266 142.711 111.062 142.711C115.151 142.711 118.289 141.656 120.477 139.547C122.69 137.411 123.797 134.599 123.797 131.109C123.797 127.594 122.977 124.951 121.336 123.18C119.721 121.383 116.622 119.924 112.039 118.805C106.31 117.372 101.831 115.263 98.6016 112.477C95.3984 109.664 93.7969 105.953 93.7969 101.344C93.7969 98.9219 94.1875 96.7604 94.9688 94.8594C95.776 92.9323 96.8047 91.3958 98.0547 90.25C99.3307 89.0781 100.815 88.1146 102.508 87.3594C104.201 86.5781 105.867 86.0443 107.508 85.7578C109.174 85.4453 110.867 85.2891 112.586 85.2891C117.742 85.2891 123.107 86.487 128.68 88.8828C128.523 90.4193 128.445 92.0208 128.445 93.6875C128.445 97.5938 128.758 100.732 129.383 103.102C129.044 103.232 128.758 103.297 128.523 103.297C128.263 103.297 127.938 103.232 127.547 103.102Z"
                fill="white"/>
            <path
                d="M123.241 75.8223C123.938 75.8483 124.485 75.8613 124.882 75.8613C125.263 75.8613 125.683 75.8483 126.142 75.8223C126.155 75.8743 126.161 75.9102 126.161 75.9297C126.161 75.9655 126.155 76.0062 126.142 76.0518C125.858 76.0648 125.663 76.1006 125.556 76.1592C125.451 76.2145 125.399 76.2878 125.399 76.3789C125.399 76.4049 125.403 76.4359 125.409 76.4717C125.419 76.5042 126.08 78.1367 127.392 81.3691H127.44L128.393 78.8301L127.533 76.6523C127.396 76.3008 127.069 76.1006 126.552 76.0518C126.539 75.9932 126.532 75.9525 126.532 75.9297C126.532 75.8971 126.539 75.8613 126.552 75.8223C127.011 75.8483 127.52 75.8613 128.08 75.8613C128.594 75.8613 129.081 75.8483 129.54 75.8223C129.553 75.8743 129.56 75.9102 129.56 75.9297C129.56 75.9655 129.553 76.0062 129.54 76.0518C129.146 76.0648 128.891 76.0957 128.773 76.1445C128.66 76.1901 128.603 76.278 128.603 76.4082C128.603 76.4115 128.625 76.4928 128.671 76.6523L130.473 81.3691H130.521L132.304 76.5889C132.323 76.54 132.333 76.4766 132.333 76.3984C132.333 76.2943 132.27 76.2194 132.143 76.1738C132.016 76.125 131.809 76.0843 131.522 76.0518C131.509 75.9801 131.503 75.9362 131.503 75.9199C131.503 75.8939 131.509 75.8613 131.522 75.8223C131.923 75.8418 132.305 75.8516 132.67 75.8516C133.025 75.8516 133.375 75.8418 133.72 75.8223C133.733 75.8613 133.739 75.8939 133.739 75.9199C133.739 75.972 133.733 76.016 133.72 76.0518C133.489 76.0745 133.297 76.1234 133.144 76.1982C132.994 76.2731 132.877 76.4033 132.792 76.5889L130.312 83.1416H130.092L128.622 79.4209L127.23 83.1416H127.011L124.33 76.6523C124.187 76.3073 123.824 76.1071 123.241 76.0518C123.228 75.9932 123.222 75.9525 123.222 75.9297C123.222 75.8971 123.228 75.8613 123.241 75.8223ZM134.071 75.8223C134.8 75.8483 135.37 75.8613 135.78 75.8613C138.573 75.8451 140.119 75.832 140.419 75.8223C140.461 76.1478 140.544 76.457 140.668 76.75C140.792 77.0397 140.95 77.349 141.142 77.6777C141.116 77.7331 141.059 77.777 140.971 77.8096C140.854 77.5882 140.712 77.3913 140.546 77.2188C140.38 77.0462 140.17 76.8835 139.916 76.7305C139.665 76.5775 139.351 76.4521 138.974 76.3545C138.599 76.2568 138.171 76.1917 137.689 76.1592H136.342C136.299 77.5361 136.278 78.5729 136.278 79.2695H137.67C137.764 79.2695 137.852 79.263 137.934 79.25C138.018 79.2337 138.096 79.2077 138.168 79.1719C138.24 79.1328 138.303 79.097 138.358 79.0645C138.417 79.0286 138.476 78.9766 138.534 78.9082C138.593 78.8366 138.642 78.778 138.681 78.7324C138.72 78.6836 138.767 78.6104 138.822 78.5127C138.878 78.415 138.92 78.3385 138.949 78.2832C138.979 78.2279 139.022 78.1416 139.081 78.0244C139.143 77.9072 139.19 77.8193 139.223 77.7607C139.324 77.7998 139.385 77.8421 139.408 77.8877C139.271 78.1286 139.156 78.3955 139.062 78.6885C138.967 78.9814 138.92 79.2256 138.92 79.4209C138.92 79.8831 139.083 80.3926 139.408 80.9492C139.382 81.0013 139.32 81.0452 139.223 81.0811C139.187 81.016 139.136 80.9232 139.071 80.8027C139.009 80.679 138.961 80.5846 138.925 80.5195C138.889 80.4544 138.84 80.3714 138.778 80.2705C138.716 80.1696 138.661 80.0915 138.612 80.0361C138.567 79.9808 138.507 79.9189 138.432 79.8506C138.36 79.7822 138.288 79.7318 138.217 79.6992C138.145 79.6634 138.062 79.6341 137.968 79.6113C137.877 79.5853 137.777 79.5723 137.67 79.5723H136.278C136.278 80.0898 136.296 81.1331 136.332 82.7021H137.89C138.371 82.6696 138.799 82.6045 139.174 82.5068C139.551 82.4092 139.866 82.2839 140.116 82.1309C140.37 81.9779 140.58 81.8151 140.746 81.6426C140.912 81.4701 141.054 81.2731 141.171 81.0518C141.259 81.0843 141.316 81.1266 141.342 81.1787C141.326 81.2113 141.283 81.2894 141.215 81.4131C141.146 81.5368 141.101 81.6214 141.078 81.667C141.055 81.7093 141.016 81.7858 140.961 81.8965C140.909 82.0039 140.87 82.0918 140.844 82.1602C140.818 82.2253 140.787 82.3083 140.751 82.4092C140.718 82.5101 140.691 82.6094 140.668 82.707C140.648 82.8014 140.632 82.8991 140.619 83H136.332C135.45 83 134.693 83.0098 134.062 83.0293C134.049 82.9902 134.042 82.9577 134.042 82.9316C134.042 82.9089 134.049 82.8649 134.062 82.7998C134.211 82.7868 134.332 82.7738 134.423 82.7607C134.517 82.7445 134.631 82.7201 134.765 82.6875C134.901 82.6549 135.006 82.6094 135.077 82.5508C135.149 82.4889 135.186 82.4157 135.189 82.3311C135.229 81.3122 135.248 80.2852 135.248 79.25C135.248 78.1953 135.232 77.2855 135.199 76.5205C135.196 76.4359 135.159 76.3643 135.087 76.3057C135.015 76.2438 134.911 76.1966 134.774 76.1641C134.641 76.1315 134.527 76.1087 134.433 76.0957C134.341 76.0794 134.221 76.0648 134.071 76.0518C134.058 75.9932 134.052 75.9525 134.052 75.9297C134.052 75.9102 134.058 75.8743 134.071 75.8223ZM141.923 75.832C142.47 75.8516 143.039 75.8613 143.632 75.8613C143.912 75.8613 144.179 75.8548 144.433 75.8418C144.687 75.8288 144.817 75.8223 144.823 75.8223C144.999 75.8223 145.16 75.8271 145.307 75.8369C145.456 75.8434 145.624 75.8597 145.81 75.8857C145.998 75.9118 146.166 75.9476 146.312 75.9932C146.459 76.0387 146.605 76.1022 146.752 76.1836C146.902 76.265 147.025 76.361 147.123 76.4717C147.224 76.5824 147.305 76.7191 147.367 76.8818C147.429 77.0446 147.46 77.2269 147.46 77.4287C147.46 78.0244 147.104 78.472 146.391 78.7715V78.8105C146.924 78.9082 147.37 79.1296 147.729 79.4746C148.09 79.8197 148.271 80.2607 148.271 80.7979C148.271 81.0843 148.218 81.3431 148.114 81.5742C148.013 81.8021 147.883 81.9909 147.724 82.1406C147.564 82.2904 147.364 82.4206 147.123 82.5312C146.882 82.6419 146.648 82.7266 146.42 82.7852C146.192 82.8438 145.93 82.891 145.634 82.9268C145.341 82.9593 145.09 82.9805 144.882 82.9902C144.674 82.9967 144.441 83 144.184 83C143.301 83 142.545 83.0098 141.913 83.0293C141.9 82.9902 141.894 82.9577 141.894 82.9316C141.894 82.9089 141.9 82.8649 141.913 82.7998C142.011 82.79 142.089 82.7819 142.147 82.7754C142.206 82.7689 142.286 82.7575 142.387 82.7412C142.491 82.7249 142.574 82.707 142.636 82.6875C142.701 82.6647 142.768 82.637 142.836 82.6045C142.904 82.5719 142.955 82.5329 142.987 82.4873C143.023 82.4417 143.041 82.3896 143.041 82.3311C143.08 81.3122 143.1 80.2852 143.1 79.25C143.1 78.1953 143.083 77.2855 143.051 76.5205C143.048 76.4359 143.01 76.3643 142.938 76.3057C142.87 76.2471 142.766 76.2015 142.626 76.1689C142.486 76.1364 142.374 76.1152 142.289 76.1055C142.204 76.0924 142.082 76.0778 141.923 76.0615C141.91 76.0029 141.903 75.9622 141.903 75.9395C141.903 75.9199 141.91 75.8841 141.923 75.832ZM144.13 79.25V79.6113L144.184 82.668C144.402 82.668 144.595 82.6647 144.765 82.6582C144.934 82.6484 145.119 82.6289 145.321 82.5996C145.523 82.5671 145.699 82.5247 145.849 82.4727C145.998 82.4206 146.148 82.349 146.298 82.2578C146.448 82.1634 146.57 82.0527 146.664 81.9258C146.758 81.7988 146.835 81.6426 146.894 81.457C146.952 81.2682 146.981 81.0566 146.981 80.8223C146.981 80.5944 146.944 80.391 146.869 80.2119C146.794 80.0296 146.688 79.8783 146.552 79.7578C146.418 79.6341 146.254 79.5316 146.059 79.4502C145.867 79.3688 145.657 79.3102 145.429 79.2744C145.204 79.2386 144.958 79.2207 144.691 79.2207C144.506 79.2207 144.319 79.2305 144.13 79.25ZM144.193 76.1689L144.13 78.9521C145.458 78.9521 146.122 78.4443 146.122 77.4287C146.122 76.986 145.984 76.6605 145.707 76.4521C145.434 76.2438 145.069 76.1396 144.613 76.1396C144.512 76.1396 144.372 76.1494 144.193 76.1689Z"
                fill="white"/>
            <path
                d="M54.5625 134.888C54.4388 134.292 54.2109 133.83 53.8789 133.501C53.5501 133.172 53.1546 133.008 52.6924 133.008C52.2399 133.008 51.8883 133.115 51.6377 133.33C51.3903 133.545 51.2666 133.831 51.2666 134.189C51.2666 134.388 51.2845 134.552 51.3203 134.683C51.3561 134.813 51.4294 134.94 51.54 135.063C51.6507 135.184 51.8118 135.291 52.0234 135.386C52.235 135.477 52.5117 135.565 52.8535 135.649C53.0391 135.695 53.2002 135.737 53.3369 135.776C53.4769 135.815 53.6299 135.869 53.7959 135.938C53.9652 136.006 54.11 136.079 54.2305 136.157C54.3542 136.235 54.4762 136.333 54.5967 136.45C54.7204 136.564 54.8197 136.691 54.8945 136.831C54.9727 136.971 55.0345 137.137 55.0801 137.329C55.1289 137.518 55.1533 137.725 55.1533 137.949C55.1533 138.249 55.098 138.525 54.9873 138.779C54.8766 139.03 54.7318 139.242 54.5527 139.414C54.3737 139.587 54.167 139.733 53.9326 139.854C53.6982 139.974 53.4606 140.062 53.2197 140.117C52.9788 140.173 52.7396 140.2 52.502 140.2C51.7793 140.2 51.0094 140.013 50.1924 139.639C50.2087 139.287 50.2168 139.071 50.2168 138.989C50.2168 138.459 50.1729 137.93 50.085 137.402C50.1208 137.38 50.1566 137.368 50.1924 137.368C50.238 137.368 50.2786 137.38 50.3145 137.402C50.3828 137.822 50.4951 138.193 50.6514 138.516C50.8109 138.838 50.9932 139.093 51.1982 139.282C51.4033 139.468 51.6149 139.608 51.833 139.702C52.0544 139.793 52.2773 139.839 52.502 139.839C53.013 139.839 53.4053 139.707 53.6787 139.443C53.9554 139.176 54.0938 138.825 54.0938 138.389C54.0938 137.949 53.9912 137.619 53.7861 137.397C53.5843 137.173 53.1969 136.991 52.624 136.851C51.9079 136.672 51.348 136.408 50.9443 136.06C50.5439 135.708 50.3438 135.244 50.3438 134.668C50.3438 134.365 50.3926 134.095 50.4902 133.857C50.5911 133.617 50.7197 133.424 50.876 133.281C51.0355 133.135 51.221 133.014 51.4326 132.92C51.6442 132.822 51.8525 132.756 52.0576 132.72C52.266 132.681 52.4775 132.661 52.6924 132.661C53.3369 132.661 54.0075 132.811 54.7041 133.11C54.6846 133.302 54.6748 133.503 54.6748 133.711C54.6748 134.199 54.7139 134.591 54.792 134.888C54.7497 134.904 54.7139 134.912 54.6846 134.912C54.652 134.912 54.6113 134.904 54.5625 134.888ZM56.5254 132.822C56.8802 132.835 57.3229 132.845 57.8535 132.852C58.3841 132.858 59.0075 132.861 59.7236 132.861C60.4398 132.861 61.0632 132.858 61.5938 132.852C62.1276 132.845 62.5736 132.835 62.9316 132.822C62.9512 132.962 62.9756 133.097 63.0049 133.228C63.0342 133.354 63.083 133.496 63.1514 133.652L63.2979 133.984L63.6543 134.678C63.6315 134.73 63.5745 134.774 63.4834 134.81C63.3727 134.604 63.2376 134.409 63.0781 134.224C62.9186 134.038 62.7152 133.87 62.4678 133.721C62.2236 133.571 61.9242 133.446 61.5693 133.345C61.2178 133.244 60.793 133.175 60.2949 133.14C60.2786 133.547 60.2656 134.007 60.2559 134.521C60.2493 135.033 60.2461 135.602 60.2461 136.23C60.2461 136.862 60.2493 137.435 60.2559 137.949C60.2656 138.464 60.2786 138.924 60.2949 139.331C60.2982 139.409 60.3291 139.476 60.3877 139.531C60.4463 139.583 60.526 139.627 60.627 139.663C60.7311 139.699 60.8499 139.728 60.9834 139.751C61.1201 139.771 61.2666 139.787 61.4229 139.8C61.4359 139.855 61.4424 139.899 61.4424 139.932C61.4424 139.961 61.4359 139.993 61.4229 140.029C60.876 140.01 60.3096 140 59.7236 140C59.141 140 58.5745 140.01 58.0244 140.029C58.0114 139.993 58.0049 139.961 58.0049 139.932C58.0049 139.899 58.0114 139.855 58.0244 139.8L58.2588 139.775C58.3434 139.766 58.4378 139.753 58.542 139.736C58.6462 139.717 58.7422 139.691 58.8301 139.658C58.9212 139.626 58.9977 139.585 59.0596 139.536C59.1214 139.487 59.1523 139.427 59.1523 139.355V139.331C59.1686 138.735 59.1816 138.18 59.1914 137.666C59.2012 137.152 59.2061 136.673 59.2061 136.23C59.2061 135.791 59.2012 135.316 59.1914 134.805C59.1816 134.29 59.1686 133.735 59.1523 133.14C58.6836 133.166 58.2751 133.229 57.9268 133.33C57.5817 133.428 57.2822 133.551 57.0283 133.701C56.7744 133.848 56.5628 134.017 56.3936 134.209C56.2243 134.398 56.0843 134.598 55.9736 134.81C55.8825 134.774 55.8255 134.73 55.8027 134.678L56.0225 134.263L56.125 134.053C56.1673 133.965 56.2096 133.875 56.252 133.784C56.2943 133.693 56.3333 133.599 56.3691 133.501C56.4082 133.4 56.4408 133.294 56.4668 133.184C56.4928 133.07 56.5124 132.949 56.5254 132.822ZM63.7227 132.822C64.4583 132.848 65.0492 132.861 65.4951 132.861C66.1038 132.861 66.654 132.848 67.1455 132.822C67.1585 132.874 67.165 132.91 67.165 132.93C67.165 132.965 67.1585 133.006 67.1455 133.052C66.7646 133.068 66.4847 133.102 66.3057 133.154C66.1299 133.206 66.042 133.291 66.042 133.408C66.042 133.451 66.0697 133.524 66.125 133.628L67.624 136.318H67.6631L69.3037 133.589C69.3428 133.524 69.3623 133.457 69.3623 133.389C69.3623 133.288 69.2972 133.215 69.167 133.169C69.04 133.12 68.848 133.081 68.5908 133.052C68.5778 132.98 68.5713 132.936 68.5713 132.92C68.5713 132.894 68.5778 132.861 68.5908 132.822C69.0107 132.842 69.3916 132.852 69.7334 132.852C70.1012 132.852 70.4707 132.842 70.8418 132.822C70.8548 132.861 70.8613 132.894 70.8613 132.92C70.8613 132.972 70.8548 133.016 70.8418 133.052C70.6042 133.075 70.404 133.123 70.2412 133.198C70.0785 133.273 69.9385 133.403 69.8213 133.589L67.7949 136.86C67.7949 137.563 67.8112 138.387 67.8438 139.331C67.847 139.416 67.8844 139.489 67.9561 139.551C68.0277 139.609 68.1302 139.655 68.2637 139.688C68.4004 139.72 68.5143 139.744 68.6055 139.761C68.6999 139.774 68.8219 139.787 68.9717 139.8C68.9847 139.839 68.9912 139.883 68.9912 139.932C68.9912 139.958 68.9847 139.99 68.9717 140.029C68.4248 140.01 67.8584 140 67.2725 140C66.6898 140 66.1234 140.01 65.5732 140.029C65.5602 139.99 65.5537 139.958 65.5537 139.932C65.5537 139.876 65.5602 139.832 65.5732 139.8C65.723 139.787 65.8434 139.774 65.9346 139.761C66.029 139.744 66.1429 139.72 66.2764 139.688C66.4131 139.655 66.5173 139.609 66.5889 139.551C66.6605 139.489 66.6979 139.416 66.7012 139.331C66.7337 138.514 66.7549 137.69 66.7646 136.86L64.8555 133.521C64.7285 133.361 64.5723 133.249 64.3867 133.184C64.2012 133.118 63.9798 133.075 63.7227 133.052C63.7096 132.993 63.7031 132.952 63.7031 132.93C63.7031 132.897 63.7096 132.861 63.7227 132.822ZM71.2422 132.822C71.9714 132.848 72.5378 132.861 72.9414 132.861C73.3451 132.861 73.9115 132.848 74.6406 132.822C74.6536 132.874 74.6602 132.91 74.6602 132.93C74.6602 132.952 74.6536 132.993 74.6406 133.052C74.4909 133.065 74.3688 133.079 74.2744 133.096C74.1833 133.109 74.0693 133.132 73.9326 133.164C73.7992 133.197 73.6966 133.244 73.625 133.306C73.5534 133.364 73.516 133.436 73.5127 133.521C73.4704 134.627 73.4492 135.658 73.4492 136.611C73.4492 137.103 73.4671 138.133 73.5029 139.702H75.0117C75.4902 139.67 75.9183 139.6 76.2959 139.492C76.6735 139.385 76.9876 139.248 77.2383 139.082C77.4922 138.913 77.7005 138.739 77.8633 138.56C78.0293 138.377 78.1725 138.174 78.293 137.949C78.3776 137.982 78.4329 138.026 78.459 138.081C78.3255 138.328 78.2214 138.529 78.1465 138.682C78.0749 138.835 77.9951 139.036 77.9072 139.287C77.8226 139.535 77.7673 139.772 77.7412 140H73.5029C72.6208 140 71.8639 140.01 71.2324 140.029C71.2194 139.99 71.2129 139.958 71.2129 139.932C71.2129 139.909 71.2194 139.865 71.2324 139.8C71.3822 139.787 71.5026 139.774 71.5938 139.761C71.6882 139.744 71.8021 139.72 71.9355 139.688C72.0723 139.655 72.1764 139.609 72.248 139.551C72.3197 139.489 72.3571 139.416 72.3604 139.331C72.3994 138.312 72.4189 137.285 72.4189 136.25C72.4189 135.195 72.4027 134.285 72.3701 133.521C72.3669 133.436 72.3294 133.364 72.2578 133.306C72.1862 133.244 72.082 133.197 71.9453 133.164C71.8118 133.132 71.6979 133.109 71.6035 133.096C71.5124 133.079 71.3919 133.065 71.2422 133.052C71.2292 132.993 71.2227 132.952 71.2227 132.93C71.2227 132.897 71.2292 132.861 71.2422 132.822ZM79.0449 132.822C79.7741 132.848 80.3438 132.861 80.7539 132.861C83.5469 132.845 85.0931 132.832 85.3926 132.822C85.4349 133.148 85.5179 133.457 85.6416 133.75C85.7653 134.04 85.9232 134.349 86.1152 134.678C86.0892 134.733 86.0322 134.777 85.9443 134.81C85.8271 134.588 85.6855 134.391 85.5195 134.219C85.3535 134.046 85.1436 133.883 84.8896 133.73C84.639 133.577 84.3249 133.452 83.9473 133.354C83.5729 133.257 83.1449 133.192 82.6631 133.159H81.3154C81.2731 134.536 81.252 135.573 81.252 136.27H82.6436C82.738 136.27 82.8258 136.263 82.9072 136.25C82.9919 136.234 83.07 136.208 83.1416 136.172C83.2132 136.133 83.2767 136.097 83.332 136.064C83.3906 136.029 83.4492 135.977 83.5078 135.908C83.5664 135.837 83.6152 135.778 83.6543 135.732C83.6934 135.684 83.7406 135.61 83.7959 135.513C83.8512 135.415 83.8936 135.339 83.9229 135.283C83.9521 135.228 83.9961 135.142 84.0547 135.024C84.1165 134.907 84.1637 134.819 84.1963 134.761C84.2972 134.8 84.359 134.842 84.3818 134.888C84.2451 135.129 84.1296 135.396 84.0352 135.688C83.9408 135.981 83.8936 136.226 83.8936 136.421C83.8936 136.883 84.0563 137.393 84.3818 137.949C84.3558 138.001 84.2939 138.045 84.1963 138.081C84.1605 138.016 84.11 137.923 84.0449 137.803C83.9831 137.679 83.9342 137.585 83.8984 137.52C83.8626 137.454 83.8138 137.371 83.752 137.271C83.6901 137.17 83.6348 137.091 83.5859 137.036C83.5404 136.981 83.4801 136.919 83.4053 136.851C83.3337 136.782 83.262 136.732 83.1904 136.699C83.1188 136.663 83.0358 136.634 82.9414 136.611C82.8503 136.585 82.751 136.572 82.6436 136.572H81.252C81.252 137.09 81.2699 138.133 81.3057 139.702H82.8633C83.3451 139.67 83.7731 139.604 84.1475 139.507C84.5251 139.409 84.8392 139.284 85.0898 139.131C85.3438 138.978 85.5537 138.815 85.7197 138.643C85.8857 138.47 86.0273 138.273 86.1445 138.052C86.2324 138.084 86.2894 138.127 86.3154 138.179C86.2992 138.211 86.2568 138.289 86.1885 138.413C86.1201 138.537 86.0745 138.621 86.0518 138.667C86.029 138.709 85.9899 138.786 85.9346 138.896C85.8825 139.004 85.8434 139.092 85.8174 139.16C85.7913 139.225 85.7604 139.308 85.7246 139.409C85.6921 139.51 85.6644 139.609 85.6416 139.707C85.6221 139.801 85.6058 139.899 85.5928 140H81.3057C80.4235 140 79.6667 140.01 79.0352 140.029C79.0221 139.99 79.0156 139.958 79.0156 139.932C79.0156 139.909 79.0221 139.865 79.0352 139.8C79.1849 139.787 79.3053 139.774 79.3965 139.761C79.4909 139.744 79.6048 139.72 79.7383 139.688C79.875 139.655 79.9792 139.609 80.0508 139.551C80.1224 139.489 80.1598 139.416 80.1631 139.331C80.2021 138.312 80.2217 137.285 80.2217 136.25C80.2217 135.195 80.2054 134.285 80.1729 133.521C80.1696 133.436 80.1322 133.364 80.0605 133.306C79.9889 133.244 79.8848 133.197 79.748 133.164C79.6146 133.132 79.5007 133.109 79.4062 133.096C79.3151 133.079 79.1947 133.065 79.0449 133.052C79.0319 132.993 79.0254 132.952 79.0254 132.93C79.0254 132.91 79.0319 132.874 79.0449 132.822Z"
                fill="white"/>
        </svg>

    )
}