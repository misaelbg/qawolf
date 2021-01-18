import { CSSProperties } from "react";

type Props = {
  id?: string;
  style?: CSSProperties;
};

export default function WolfBlue({ id, style }: Props): JSX.Element {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      style={style}
    >
      <g id="wolf-tail">
        <path
          d="M13.6372 23.7632C7.36253 14.3024 10.193 7.88441 10.193 7.88441L10.3854 7.71142C14.9108 12.8607 20.882 15.6662 26.2749 15.427C20.7211 20.0185 30.2067 30.9369 30.2067 30.9369C26.9761 31.4845 23.6877 31.0975 20.7447 29.8233C17.8016 28.5491 15.3315 26.443 13.6372 23.7632Z"
          fill="#114B5F"
        />
        <path
          d="M13.6264 23.7703C15.3207 26.4501 17.7908 28.5562 20.7339 29.8304C23.677 31.1046 26.9653 31.4916 30.196 30.944C28.4652 28.8784 26.9935 26.6116 25.8108 24.1896C23.3406 23.9575 20.9757 23.1784 18.8913 21.9102C16.8069 20.642 15.0567 18.9171 13.7704 16.8636C11.9827 14.2767 10.7187 11.3632 10.0448 8.27554C9.56437 9.77023 8.23437 15.6403 13.6264 23.7703Z"
          fill="#0F4254"
        />
      </g>
      <rect
        width="11.5656"
        height="16.631"
        transform="matrix(-1 0 0 1 71.8032 50.516)"
        fill="#0E3C4B"
      />
      <path
        d="M60.2377 57.0909L60.2377 72.1222C60.2395 72.7349 60.4837 73.3221 60.917 73.7554C61.3503 74.1886 61.9374 74.4329 62.5502 74.4347L74.1127 74.4347C74.598 74.4347 75.0711 74.282 75.4648 73.9982C75.8586 73.7144 76.153 73.3139 76.3065 72.8535C76.46 72.393 76.4647 71.896 76.32 71.4327C76.1753 70.9694 75.8885 70.5634 75.5002 70.2722L71.8002 67.4972L71.8002 65.52C64.1689 63.6353 60.2377 60.5597 60.2377 57.0909Z"
        fill="#0E3C4B"
      />
      <rect
        x="18.1932"
        y="50.516"
        width="11.5656"
        height="16.631"
        fill="#0E3C4B"
      />
      <path
        d="M29.7588 57.0909L29.7588 72.1222C29.757 72.7349 29.5127 73.3221 29.0795 73.7554C28.6462 74.1886 28.059 74.4329 27.4463 74.4347L15.8838 74.4347C15.3984 74.4347 14.9254 74.282 14.5316 73.9982C14.1379 73.7144 13.8434 73.3139 13.69 72.8535C13.5365 72.393 13.5318 71.896 13.6765 71.4327C13.8212 70.9694 14.108 70.5634 14.4963 70.2722L18.1963 67.4972L18.1963 65.52C25.8275 63.6353 29.7588 60.5597 29.7588 57.0909Z"
        fill="#0E3C4B"
      />
      <ellipse
        cx="45.97"
        cy="29.327"
        rx="22.4552"
        ry="18.7086"
        fill="#143F4F"
      />
      <path
        d="M33.4539 48.1423H26.5164C24.1808 48.1423 23.6658 48.5408 21.7002 46.0664C21.6004 52.5313 22.2641 58.9854 23.6774 65.2948C25.5621 72.926 28.6377 76.8572 32.1065 76.8572H37.8877C38.4914 76.8649 39.0736 76.6333 39.5069 76.213C39.9403 75.7926 40.1896 75.2177 40.2002 74.6141V54.8886C40.2002 53.6619 39.7129 52.4856 38.8456 51.6182C37.9782 50.7509 34.6805 48.1423 33.4539 48.1423Z"
        fill="#114B5F"
      />
      <path
        d="M57.5119 48.2947L64.4494 48.2947C66.785 48.2947 67.3 48.6932 69.2656 46.2189C69.3654 52.6838 68.7018 59.1379 67.2884 65.4472C65.4037 73.0784 62.3281 77.0097 58.8594 77.0097L53.0781 77.0097C52.4744 77.0174 51.8922 76.7858 51.4589 76.3654C51.0255 75.9451 50.7763 75.3702 50.7656 74.7666L50.7656 55.041C50.7656 53.8144 51.2529 52.638 52.1202 51.7707C52.9876 50.9033 56.2853 48.2947 57.5119 48.2947Z"
        fill="#114B5F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.8119 50.8216C21.7811 50.0747 21.7556 49.3146 21.7356 48.5415C21.7717 54.1796 22.4215 59.797 23.6735 65.2944C25.5582 72.9256 28.6338 76.8569 32.1025 76.8569L35.5713 76.8569C32.1025 76.8569 29.0269 72.9256 27.1422 65.2944C26.2583 61.5675 25.6931 57.7721 25.4529 53.9493C24.0531 53.1454 22.8178 52.0842 21.8119 50.8216ZM69.1972 50.516L71.8032 50.516L71.8032 67.147L71.8002 67.147L71.8002 67.4972L75.5002 70.2722C75.8885 70.5634 76.1753 70.9694 76.32 71.4327C76.4647 71.896 76.46 72.393 76.3065 72.8535C76.153 73.3139 75.8586 73.7144 75.4648 73.9982C75.0711 74.282 74.598 74.4347 74.1127 74.4347L72.6338 74.4347C72.8426 74.0849 72.9539 73.6857 72.9564 73.2784C72.9553 72.9196 72.8712 72.566 72.7107 72.245C72.5503 71.9241 72.3178 71.6446 72.0314 71.4284L68.3315 68.6534L68.3315 67.147L68.3315 64.4909L68.3315 59.9896C68.0504 61.8193 67.7039 63.6396 67.2923 65.4469C65.4077 73.0781 62.332 77.0093 58.8633 77.0093L55.3945 77.0093C58.8633 77.0093 61.9389 73.0781 63.8236 65.4469C64.7076 61.7199 65.2727 57.9245 65.5129 54.1017C66.5519 53.505 67.5003 52.7666 68.3315 51.9093L68.3315 50.516L69.1721 50.516C69.1949 49.917 69.2143 49.3096 69.2302 48.694C69.2263 49.3016 69.2153 49.909 69.1972 50.516ZM18.1932 50.516L21.665 50.516L21.665 64.4909L21.665 67.147L21.665 68.6534L17.965 71.4284C17.6787 71.6446 17.4462 71.9241 17.2857 72.245C17.1253 72.566 17.0412 72.9196 17.04 73.2784C17.0425 73.6857 17.1539 74.0849 17.3626 74.4347L15.8838 74.4347C15.3984 74.4347 14.9254 74.282 14.5316 73.9982C14.1379 73.7144 13.8434 73.3139 13.69 72.8535C13.5365 72.393 13.5318 71.896 13.6765 71.4327C13.8212 70.9694 14.108 70.5634 14.4963 70.2722L18.1963 67.4972L18.1963 67.147L18.1932 67.147L18.1932 50.516Z"
        fill="#245A6C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.9939 51.2546L34.9314 59.2546C36.158 59.2546 37.3344 59.7419 38.2018 60.6093C39.0691 61.4766 39.5564 62.653 39.5564 63.8796V68.5046C39.5564 67.278 39.0691 66.1016 38.2018 65.2343C37.3344 64.3669 36.158 63.8796 34.9314 63.8796H27.9939C25.7011 63.8796 23.1226 62.2146 21.172 59.8131C21.1038 58.288 21.0564 48.712 21.0564 47.0574C23.022 49.5318 25.6583 51.2546 27.9939 51.2546ZM62.6814 63.8796H55.7439C54.5173 63.8796 53.3409 64.3669 52.4735 65.2343C51.6062 66.1016 51.1189 67.278 51.1189 68.5046V63.8796C51.1189 62.653 51.6062 61.4766 52.4735 60.6093C53.3409 59.7419 54.5173 59.2546 55.7439 59.2546L62.6814 51.2546C65.017 51.2546 67.6533 49.5318 69.6177 47.0574C69.6177 48.5374 69.583 57.9712 69.5252 59.3471C69.5218 59.4415 69.5172 59.5326 69.5125 59.6241C69.5093 59.6873 69.5061 59.7507 69.5033 59.8154C67.5515 62.2158 64.9731 63.8796 62.6814 63.8796Z"
        fill="black"
        fillOpacity="0.16"
      />
      <g id="wolf-head" style={{ transformOrigin: "center center" }}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M71.2639 3.52173C71.1905 2.64235 70.0971 2.28217 69.5154 2.94575L57.6522 16.4794H34.6538L26.465 7.13752L22.7906 2.94575C22.2089 2.28217 21.1155 2.64235 21.0421 3.52173L20.3686 11.5883L19.3215 24.1318L15.6634 47.8666C15.555 48.5697 15.8195 49.2694 16.3878 49.6974C19.9736 52.3974 33.6797 62.0386 46.5637 62.0386C59.447 62.0386 72.5449 52.3984 75.9614 49.6978C76.5052 49.268 76.7533 48.5852 76.6477 47.9002L72.9845 24.1318L71.2639 3.52173Z"
          fill="#114B5F"
        />
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="15"
          y="1"
          width="62"
          height="62"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M71.068 1.17456L57.6522 16.4794H46.153H34.6538L26.465 7.13752L21.238 1.17456L20.3686 11.5883L19.3215 24.1318L15.4884 49.0021C15.4884 49.0021 31.5818 62.0386 46.5637 62.0386C61.5455 62.0386 76.8176 49.0021 76.8176 49.0021L72.9845 24.1318L71.068 1.17456Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.1459 50.912V47.0858L28.8955 33.6941H63.3932L71.0593 47.0858V50.912H23.1459Z"
            fill="#2F687A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M62.4043 27.9572C70.0705 33.6965 70.0705 47.0882 70.0705 47.0882L46.4239 34.3782L23.1694 47.0883C23.1694 47.0883 21.1276 33.6966 29.2948 27.9573C35.7034 23.4538 43.3693 29.5517 46.3734 32.3866C49.1931 29.5518 56.3887 23.4536 62.4043 27.9572Z"
            fill="#2F687A"
          />
          <g className="wolf-eye" style={{ transformOrigin: "50%" }}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M57.261 44.8726C53.395 44.8726 50.261 41.7386 50.261 37.8726C50.261 34.0066 53.395 30.8726 57.261 30.8726C61.127 30.8726 64.261 34.0066 64.261 37.8726C64.261 41.7386 61.127 44.8726 57.261 44.8726Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M35.0586 44.8726C31.1926 44.8726 28.0586 41.7386 28.0586 37.8726C28.0586 34.0066 31.1926 30.8726 35.0586 30.8726C38.9246 30.8726 42.0586 34.0066 42.0586 37.8726C42.0586 41.7386 38.9246 44.8726 35.0586 44.8726Z"
              fill="white"
            />
            <path
              d="M57.261 41.8726C59.4701 41.8726 61.261 40.0817 61.261 37.8726C61.261 35.6634 59.4701 33.8726 57.261 33.8726C55.0518 33.8726 53.261 35.6634 53.261 37.8726C53.261 40.0817 55.0518 41.8726 57.261 41.8726Z"
              fill="#114B5F"
              stroke="#CBB088"
              strokeWidth="2"
            />
            <path
              d="M35.0586 41.8726C37.2677 41.8726 39.0586 40.0817 39.0586 37.8726C39.0586 35.6634 37.2677 33.8726 35.0586 33.8726C32.8495 33.8726 31.0586 35.6634 31.0586 37.8726C31.0586 40.0817 32.8495 41.8726 35.0586 41.8726Z"
              fill="#114B5F"
              stroke="#CBB088"
              strokeWidth="2"
            />
            <circle cx="60.0686" cy="37.2489" r="1" fill="white" />
            <circle cx="37.7487" cy="37.2489" r="1" fill="white" />
          </g>
          <rect
            x="23.5629"
            y="37.7"
            width="24.7916"
            height="6.18793"
            rx="3.09397"
            transform="rotate(9.1679 23.5629 37.7)"
            fill="#2F687A"
          />
          <rect
            x="46.0494"
            y="41.2825"
            width="22.909"
            height="6.18793"
            rx="3.09397"
            transform="rotate(-9.04898 46.0494 41.2825)"
            fill="#2F687A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.8973 48.8019L46.1786 42.8213L75.8521 49.0767C75.8521 49.0767 61.3032 78.726 46.2189 78.6568C31.1345 78.5877 15.8973 48.8019 15.8973 48.8019Z"
            fill="#285867"
          />
          <path
            d="M50.3871 45.2292C50.3871 45.5054 50.1632 45.7292 49.8871 45.7292H43.2209C42.9448 45.7292 42.7209 45.5054 42.7209 45.2292V43.4303C42.7209 42.5868 43.4047 41.903 44.2482 41.903H48.8598C49.7033 41.903 50.3871 42.5868 50.3871 43.4303V45.2292Z"
            fill="#383838"
          />
          <rect
            opacity="0.277972"
            x="49.8268"
            y="43.8146"
            width="6.54568"
            height="1.63349"
            rx="0.816743"
            transform="rotate(-180 49.8268 43.8146)"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.7422 18.6529L23.6295 10.4854L22.6937 23.8445L30.7422 18.6529Z"
            fill="#0E3C4B"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M61.5578 18.6529L68.6705 10.4854L69.6064 23.8445L61.5578 18.6529Z"
            fill="#0E3C4B"
          />
          <g opacity="0.6">
            <path
              opacity="0.32373"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.226 19.0508L65.8443 14.8959L66.3203 21.6917L62.226 19.0508Z"
              fill="white"
            />
            <path
              opacity="0.32373"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M63.9586 20.1936L67.1259 16.5565L67.5427 22.5054L63.9586 20.1936Z"
              fill="white"
            />
            <path
              opacity="0.32373"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.6359 21.286L68.4837 18.0158L68.8584 23.3647L65.6359 21.286Z"
              fill="white"
            />
          </g>
          <g opacity="0.6">
            <path
              opacity="0.32373"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.1391 19.0082L26.5208 14.8533L26.0448 21.6492L30.1391 19.0082Z"
              fill="white"
            />
            <path
              opacity="0.32373"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.4065 20.151L25.2392 16.5139L24.8224 22.4629L28.4065 20.151Z"
              fill="white"
            />
            <path
              opacity="0.32373"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.7292 21.2435L23.8814 17.9733L23.5067 23.3221L26.7292 21.2435Z"
              fill="white"
            />
          </g>
        </g>
        <path
          d="M37.8987 46.9225C37.8987 46.9225 41.2994 51.6181 46.6056 51.4795C51.9118 51.3409 55.0628 46.4743 55.0628 46.4743"
          stroke="#383838"
          strokeWidth="0.954545"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.0301 46.4879C38.0301 46.4879 41.9036 52.1308 46.3473 52.1308C50.7909 52.1308 54.8766 46.0534 54.8766 46.0534C54.8766 46.0534 52.8493 49.4947 46.3473 49.4947C39.8453 49.4947 38.0301 46.4879 38.0301 46.4879Z"
          fill="#383838"
        />
        <mask
          id="mask1"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="39"
          y="47"
          width="15"
          height="6"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.1603 47.9055C39.1603 47.9055 40.9083 52.1902 46.6271 52.1902C52.4188 51.8623 53.5343 47.5652 53.5343 47.5652C53.5343 47.5652 49.75 50.3689 46.3357 50.3689C42.9215 50.3689 39.1603 47.9055 39.1603 47.9055Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1)">
          <rect
            x="41.5638"
            y="45.1722"
            width="9.58269"
            height="19.131"
            fill="#F9719F"
          />
          <path
            d="M40.9272 46.8189H52.1525V52.3732C52.1525 52.3732 50.3626 51.4128 46.5557 51.2217C42.7488 51.0307 40.9272 52.3732 40.9272 52.3732V46.8189Z"
            fill="#383838"
          />
        </g>
        <path
          d="M41.5638 51.0437C41.5638 50.4914 42.0116 50.0437 42.5638 50.0437H50.1465C50.6988 50.0437 51.1465 50.4914 51.1465 51.0437V59.848C51.1465 62.0571 49.3557 63.848 47.1465 63.848H45.5638C43.3547 63.848 41.5638 62.0571 41.5638 59.848V51.0437Z"
          fill="#F9719F"
          className="wolf-tongue"
          style={{ transformOrigin: "center center" }}
        />
        <mask
          id="mask2"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="41"
          y="50"
          width="11"
          height="14"
        >
          <path
            d="M41.5638 51.0437C41.5638 50.4914 42.0116 50.0437 42.5638 50.0437H50.1465C50.6988 50.0437 51.1465 50.4914 51.1465 51.0437V59.848C51.1465 62.0571 49.3557 63.848 47.1465 63.848H45.5638C43.3547 63.848 41.5638 62.0571 41.5638 59.848V51.0437Z"
            fill="#F9719F"
          />
        </mask>
        <g
          mask="url(#mask2)"
          className="wolf-tongue"
          style={{ transformOrigin: "center center" }}
        >
          <rect
            opacity="0.14"
            x="42.4301"
            y="51.1693"
            width="3.04218"
            height="9.89596"
            rx="1.52109"
            fill="white"
          />
        </g>
        <path
          d="M51.1465 51.9119C51.1465 52.491 49.0014 51.9119 46.3552 51.9119C43.709 51.9119 41.5638 52.491 41.5638 51.9119C41.5638 48.889 40.563 49.8634 46.3552 49.8634C51.9075 49.8634 51.1465 48.5796 51.1465 51.9119Z"
          fill="#254D61"
          fillOpacity="0.2"
          className="wolf-tongue"
          style={{ transformOrigin: "center center" }}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5167 48.7553C16.0275 48.8532 15.7125 48.2528 16.0709 47.9058L22.8475 41.3462C23.0243 41.175 23.2994 41.158 23.496 41.306L28.9575 45.418C29.3024 45.6777 29.1782 46.2231 28.7548 46.3077L16.5167 48.7553Z"
          fill="#2F687A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M75.712 49.2113C76.1964 49.3231 76.5294 48.7362 76.185 48.3777L69.5242 41.4443C69.3203 41.2321 68.9782 41.241 68.7856 41.4634L64.892 45.9612C64.6455 46.2461 64.7906 46.6909 65.1577 46.7757L75.712 49.2113Z"
          fill="#2F687A"
        />
      </g>
    </svg>
  );
}