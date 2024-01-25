import { projectType } from "../../pages/projects"
import * as S from "./styles.tsx"

export function Project(props:projectType) {
    return (
            <S.Wrapper>
            <S.ProjectContainer>
                <a href={props.link} target="_blank">
                  <S.ProjectPic>
                      <img src={props.img}/>
                      <a href={props.link} target="_blank">SAIBA MAIS</a>
                  </S.ProjectPic>
                </a>
                <S.ProjectTitle>
                    {props.name}
                </S.ProjectTitle>
                <S.Technologies>
                    {props.html === true ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 41 50" fill="none">
  <g clip-path="url(#clip0_56_65)">
    <path d="M0 3.8526L3.67847 42.3186L20.1841 47.3917L36.7952 42.3186L40.4737 3.8526H0ZM32.4843 16.2826H13.1118L13.5439 21.0836H32.0522L30.6188 35.5059L20.3001 38.1299V38.1591H20.1841L9.78114 35.5059L9.14874 28.1393H14.1763L14.5452 31.842L20.1841 33.2512L25.8441 31.842L26.4765 25.7971H8.88524L7.53611 11.6469H32.9481L32.4843 16.2826Z" fill="url(#paint0_linear_56_65)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_56_65" x1="20.2368" y1="3.8526" x2="20.2368" y2="47.3917" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B641B4"/>
      <stop offset="0.52" stop-color="#611861"/>
      <stop offset="1" stop-color="#350637"/>
    </linearGradient>
    <clipPath id="clip0_56_65">
      <rect width="40.4737" height="49.759" fill="white"/>
    </clipPath>
  </defs>
</svg> : null}
                    {props.css === true ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 42 50" fill="none">
  <g clip-path="url(#clip0_56_61)">
    <path d="M0.624756 3.8526L4.30322 42.3186L20.8616 47.3917L37.42 42.3186L41.0984 3.8526H0.624756ZM33.6256 11.6274L33.1196 16.2243L20.967 21.0156L20.9354 21.0253H32.6875L31.3384 35.2727L20.9881 38.0619L10.5745 35.2241L9.89997 28.0421H15.054L15.3913 31.7643L20.9354 33.0568L26.7008 31.5602L27.0907 25.5736L9.56269 25.525V25.5152L9.54161 25.525L9.16217 21.0253L20.9775 16.4867L21.6626 16.2243H8.70895L8.09763 11.6274H33.6256Z" fill="url(#paint0_linear_56_61)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_56_61" x1="20.8616" y1="3.8526" x2="20.8616" y2="47.3917" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B641B4"/>
      <stop offset="0.52" stop-color="#611861"/>
      <stop offset="1" stop-color="#350637"/>
    </linearGradient>
    <clipPath id="clip0_56_61">
      <rect width="40.4737" height="49.759" fill="white" transform="translate(0.624756)"/>
    </clipPath>
  </defs>
</svg> : null}
                    {props.js === true ? <svg xmlns="http://www.w3.org/2000/svg" width="31" height="48" viewBox="0 0 31 30" fill="none">
  <g clip-path="url(#clip0_151_68)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H31V30H0V0ZM23.6978 25.1495C22.261 25.1495 21.4485 24.4242 20.8241 23.4376L18.4568 24.7686C19.312 26.4037 21.0598 27.6514 23.7652 27.6514C26.532 27.6514 28.5923 26.261 28.5923 23.7229C28.5923 21.3686 27.1949 20.3214 24.7198 19.2943L23.9915 18.9924C22.7417 18.4686 22.2004 18.1262 22.2004 17.2805C22.2004 16.5962 22.7412 16.0724 23.5945 16.0724C24.431 16.0724 24.9697 16.4137 25.4692 17.2805L27.7376 15.871C26.7781 14.2376 25.4466 13.6137 23.5945 13.6137C20.9929 13.6137 19.3282 15.2234 19.3282 17.3376C19.3282 19.6329 20.7247 20.7186 22.8268 21.5852L23.5551 21.8876C24.8837 22.45 25.6759 22.7924 25.6759 23.759C25.6759 24.5658 24.9048 25.1495 23.6978 25.1495ZM12.4084 25.1319C11.4075 25.1319 10.9912 24.4676 10.5336 23.6819L8.16234 25.0712C8.84926 26.4781 10.2 27.6463 12.5324 27.6463C15.1137 27.6463 16.8822 26.3176 16.8822 23.3986V13.7748H13.9692V23.3605C13.9692 24.7695 13.3654 25.1319 12.4084 25.1319Z" fill="url(#paint0_linear_151_68)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_151_68" x1="15.5" y1="0" x2="15.5" y2="30" gradientUnits="userSpaceOnUse">
      <stop offset="0.055" stop-color="#B641B4"/>
      <stop offset="0.49" stop-color="#611864"/>
      <stop offset="1" stop-color="#460848"/>
    </linearGradient>
    <clipPath id="clip0_151_68">
      <rect width="31" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg> : null}
                    {props.react === true ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 46 42" fill="none">
  <path d="M37.5727 13.6106C37.0875 13.4419 36.6023 13.2825 36.1172 13.1325C36.198 12.7856 36.2699 12.4388 36.3418 12.0919C37.4469 6.50473 36.7191 2.01435 34.2664 0.533174C31.9035 -0.882375 28.0492 0.589421 24.15 4.13298C23.7637 4.47984 23.3863 4.84544 23.027 5.21105C22.7844 4.96731 22.5328 4.72358 22.2813 4.48921C18.1934 0.701915 14.0965 -0.89175 11.6438 0.598796C9.28985 2.02372 8.58906 6.25162 9.57734 11.5388C9.67617 12.0638 9.78398 12.5794 9.90977 13.1044C9.33477 13.2731 8.76875 13.4606 8.23867 13.6575C3.44102 15.3918 0 18.1291 0 20.9602C0 23.8851 3.66562 26.8193 8.65195 28.6004C9.05625 28.741 9.46055 28.8817 9.87383 29.0035C9.73906 29.566 9.62227 30.1191 9.51445 30.6909C8.57109 35.8938 9.30781 40.0186 11.6617 41.4341C14.0875 42.8965 18.1664 41.3966 22.1375 37.7687C22.452 37.4781 22.7664 37.1781 23.0809 36.8594C23.4762 37.2625 23.8895 37.6468 24.3027 38.0218C28.148 41.4716 31.9484 42.8684 34.2934 41.4529C36.7191 39.9904 37.5098 35.5563 36.4855 30.1566C36.4047 29.7441 36.3148 29.3223 36.216 28.891C36.5035 28.8067 36.782 28.7129 37.0605 28.6192C42.2445 26.8286 46 23.9319 46 20.9602C46 18.1197 42.4602 15.3636 37.5727 13.6106ZM25.4168 5.65165C28.759 2.61431 31.8766 1.42375 33.2961 2.27683C34.8145 3.18616 35.3984 6.86096 34.4461 11.6888C34.3832 12.0076 34.3203 12.3169 34.2395 12.6263C32.2449 12.1576 30.2234 11.8201 28.193 11.6326C27.025 9.88892 25.7492 8.22026 24.3656 6.65472C24.716 6.30787 25.0574 5.97976 25.4168 5.65165ZM15.0219 25.8256C15.4801 26.6412 15.9473 27.4567 16.4414 28.2536C15.0398 28.0942 13.6473 27.8598 12.2727 27.5505C12.668 26.2006 13.1621 24.8038 13.7371 23.3788C14.1504 24.2038 14.5727 25.0194 15.0219 25.8256ZM12.2996 14.548C13.5934 14.2481 14.968 14.0043 16.3965 13.8168C15.9203 14.5949 15.4531 15.3918 15.0129 16.198C14.5727 16.9948 14.1414 17.8104 13.7371 18.6353C13.1711 17.2385 12.6949 15.8699 12.2996 14.548ZM14.7613 21.0071C15.3543 19.7134 16.0012 18.4478 16.684 17.201C17.3668 15.9542 18.1035 14.7449 18.8762 13.5544C20.2238 13.4512 21.5984 13.395 23 13.395C24.4016 13.395 25.7852 13.4512 27.1238 13.5544C27.8875 14.7355 28.6152 15.9449 29.307 17.1823C29.9988 18.4197 30.6457 19.6853 31.2566 20.9696C30.6547 22.2633 30.0078 23.5382 29.316 24.7944C28.6332 26.0412 27.9055 27.2505 27.1418 28.4504C25.8031 28.5536 24.4105 28.6004 23 28.6004C21.5895 28.6004 20.2238 28.5536 18.9031 28.4692C18.1215 27.2786 17.3848 26.0599 16.693 24.8131C16.0012 23.5663 15.3633 22.3008 14.7613 21.0071ZM30.9871 25.8068C31.4453 24.9819 31.8766 24.1475 32.2988 23.3038C32.8738 24.6631 33.377 26.0412 33.8172 27.4567C32.4246 27.7848 31.0141 28.038 29.5945 28.2067C30.0797 27.4192 30.5379 26.613 30.9871 25.8068ZM32.2809 18.6353C31.8586 17.8104 31.4273 16.9854 30.9781 16.1792C30.5379 15.3824 30.0797 14.5949 29.6035 13.8168C31.05 14.0043 32.4336 14.2574 33.7273 14.5668C33.3141 15.9542 32.8289 17.3042 32.2809 18.6353ZM23.018 8.08902C23.9613 9.15771 24.8508 10.2827 25.6773 11.4451C23.8984 11.3607 22.1105 11.3607 20.3316 11.4451C21.2121 10.2358 22.1195 9.11084 23.018 8.08902ZM12.5961 2.34245C14.1055 1.42375 17.4566 2.73618 20.9875 5.99851C21.2121 6.20475 21.4367 6.42973 21.6703 6.65472C20.2777 8.22026 18.993 9.88892 17.816 11.6326C15.7855 11.8201 13.773 12.1482 11.7785 12.6075C11.6617 12.1294 11.5629 11.642 11.4641 11.1545C10.6195 6.61722 11.1766 3.19553 12.5961 2.34245ZM10.3949 27.0536C10.0176 26.9411 9.64922 26.8193 9.28086 26.688C7.36719 26.0599 5.19297 25.0662 3.6207 23.7632C2.71328 23.107 2.10234 22.0945 1.93164 20.9602C1.93164 19.2447 4.7707 17.051 8.86758 15.5605C9.37969 15.373 9.90078 15.2043 10.4219 15.0449C11.0328 17.0792 11.7695 19.0759 12.623 21.0071C11.7605 22.9664 11.0148 24.9912 10.3949 27.0536ZM20.8707 36.2406C19.3883 37.6562 17.6723 38.7811 15.8035 39.5498C14.8062 40.0467 13.6563 40.0936 12.632 39.6717C11.2035 38.8093 10.6105 35.5001 11.4191 31.0472C11.518 30.5222 11.6258 29.9972 11.7516 29.4816C13.7641 29.9316 15.7945 30.241 17.852 30.4003C19.0379 32.1534 20.3406 33.8314 21.7332 35.4063C21.4457 35.6969 21.1582 35.9782 20.8707 36.2406ZM23.0719 33.9626C22.1555 32.9314 21.2391 31.7878 20.3496 30.5597C21.2121 30.5972 22.1016 30.6159 23 30.6159C23.9254 30.6159 24.8328 30.5972 25.7312 30.5503C24.9047 31.7409 24.0152 32.8752 23.0719 33.9626ZM34.8145 36.775C34.7336 37.9187 34.1945 38.9874 33.332 39.7092C31.9035 40.5717 28.8578 39.4467 25.5695 36.5031C25.1922 36.1656 24.8148 35.8 24.4285 35.4251C25.8031 33.8408 27.0699 32.1627 28.2199 30.4003C30.2773 30.2222 32.3258 29.8941 34.3473 29.416C34.4371 29.8004 34.518 30.1847 34.5898 30.5597C35.0301 32.5846 35.102 34.6939 34.8145 36.775ZM36.4496 26.6974C36.198 26.7818 35.9465 26.8661 35.6859 26.9411C35.057 24.8975 34.2844 22.9007 33.3949 20.9602C34.2574 19.0478 34.9852 17.0792 35.5961 15.0636C36.0633 15.2043 36.5125 15.3543 36.9438 15.5042C41.1305 17.0042 44.0684 19.2353 44.0684 20.9415C44.0684 22.7789 40.9328 25.1506 36.4496 26.6974ZM23 25.2912C25.273 25.2912 27.1148 23.3695 27.1148 20.9977C27.1148 18.626 25.273 16.7042 23 16.7042C20.727 16.7042 18.8852 18.626 18.8852 20.9977C18.8852 23.3695 20.727 25.2912 23 25.2912Z" fill="url(#paint0_linear_56_64)"/>
  <defs>
    <linearGradient id="paint0_linear_56_64" x1="23" y1="0" x2="23" y2="42" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B641B4"/>
      <stop offset="0.52" stop-color="#611861"/>
      <stop offset="1" stop-color="#350637"/>
    </linearGradient>
  </defs>
</svg> : null}
                </S.Technologies>
                <S.ProjectDesc>{props.desc}</S.ProjectDesc>
            </S.ProjectContainer>
            </S.Wrapper>
            
    )
}