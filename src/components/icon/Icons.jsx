import headerLogo from '../../assets/images/logo/logo-white_new2.png'
import footerLogo from '../../assets/images/logo/logo-opacity_new2.png'
import iconWhtClose from '../../assets/images/btn/btn-layer-close.png'
import iconNaver from '../../assets/images/icon/ico-naver.png'
import iconKaKao from '../../assets/images/icon/ico-kakao.png'
import iconPayco from '../../assets/images/icon/ico-payco.png'
import iconSearch from '../../assets/images/icon/ico-search-white.png'
import iconSitemap from '../../assets/images/icon/ico-sitemap-white.png'
import iconSchedule from '../../assets/images/icon/ico-schedule-white.png'
import iconAdmin from '../../assets/images/icon/ico-mymega-white.png'
import iconYoutube from '../../assets/images/icon/ico-youtubeN.png'
import iconInstagram from '../../assets/images/icon/ico-instagramN.png'
import iconFacebook from '../../assets/images/icon/ico-facebookN.png'
import iconTwitter from '../../assets/images/icon/ico-twitterN.png'
import iconHeartToggle from '../../assets/images/icon/ico-heart-toggle-main.png'
import iconMoreGray from '../../assets/images/icon/ico-more-cross-gray.png'
import iconBoxOffice from '../../assets/images/icon/ico-boxoffice-main.png'
import iconTicket from '../../assets/images/icon/ico-quick-reserve-main.png'
import iconAgeLimit12 from '../../assets/images/icon/12_40x40.png'
import iconAgeLimit15 from '../../assets/images/icon/15_40x40.png'
import iconAgeLimit18 from '../../assets/images/icon/18_40x40.png'
import iconAgeLimitAll from '../../assets/images/icon/ALL_40x40.png'
import iconAgeLimitNone from '../../assets/images/icon/none_40x40.png'

const HeaderLogo = ({style}) => {
  return (
    <img style={style} src={headerLogo} alt="" />
  )
}
const FooterLogo = ({style}) => {
  return (
    <img style={style} src={footerLogo} alt="" />
  )
}
const IconWhtClose = ({style}) => {
  return (
    <img style={style} src={iconWhtClose} alt="" />
  )
}
const IconKaKao = ({style}) => {
  return (
    <img style={style} src={iconKaKao} alt="" />
  )
}
const IconNaver = ({style}) => {
  return (
    <img style={style} src={iconNaver} alt="" />
  )
}
const IconPayco = ({style}) => {
  return (
    <img style={style} src={iconPayco} alt="" />
  )
}
const IconSearch = ({style}) => {
  return (
    <img style={style} src={iconSearch} alt="" />
  )
}
const IconSitemap = ({style}) => {
  return (
    <img style={style} src={iconSitemap} alt="" />
  )
}
const IconSchedule = ({style}) => {
  return (
    <img style={style} src={iconSchedule} alt="" />
  )
}
const IconAdmin = ({style}) => {
  return (
    <img style={style} src={iconAdmin} alt="" />
  )
}
const IconYoutubeGray = ({style}) => {
  return (
    <img style={style} src={iconYoutube} alt="" />
  )
}
const IconInstagramGray = ({style}) => {
  return (
    <img style={style} src={iconInstagram} alt="" />
  )
}
const IconFacebookGray = ({style}) => {
  return (
    <img style={style} src={iconFacebook} alt="" />
  )
}
const IconTwitterGray = ({style}) => {
  return (
    <img style={style} src={iconTwitter} alt="" />
  )
}
const IconMoreGray = ({style}) => {
  return (
    <img style={style} src={iconMoreGray} alt="" />
  )
}
const IconBoxOffice = ({style}) => {
  return (
    <img style={style} src={iconBoxOffice} alt="" />
  )
}
const IconTicket = ({style}) => {
  return (
    <img style={style} src={iconTicket} alt="" />
  )
}
const IconAgeLimit12 = ({style}) => {
  return (
    <img style={style} src={iconAgeLimit12} alt="" />
  )
}
const IconAgeLimit15 = ({style}) => {
  return (
    <img style={style} src={iconAgeLimit15} alt="" />
  )
}
const IconAgeLimit18 = ({style}) => {
  return (
    <img style={style} src={iconAgeLimit18} alt="" />
  )
}
const IconAgeLimitAll = ({style}) => {
  return (
    <img style={style} src={iconAgeLimitAll} alt="" />
  )
}
const IconAgeLimitNone = ({style}) => {
  return (
    <img style={style} src={iconAgeLimitNone} alt="" />
  )
}
const IconHeartToggle = ({style,like}) => {
  return (
    <div style={{overflow:'hidden',width:'17px',...style}}>
      <img 
      style={
        like ?
        {width:'200%',maxWidth:'200%',transform:'translateX(-50%)'}
        : 
        {width:'200%',maxWidth:'200%'}
      } 
      src={iconHeartToggle} alt="" />
    </div>
  )
}

export {
  IconWhtClose,
  IconKaKao,
  IconNaver,
  IconPayco,
  HeaderLogo,
  FooterLogo,
  IconSearch,
  IconSitemap,
  IconSchedule,
  IconAdmin,
  IconYoutubeGray,
  IconInstagramGray,
  IconFacebookGray,
  IconTwitterGray,
  IconMoreGray,
  IconBoxOffice,
  IconTicket,
  IconHeartToggle,
  IconAgeLimit12,
  IconAgeLimit15,
  IconAgeLimit18,
  IconAgeLimitAll,
  IconAgeLimitNone,
}