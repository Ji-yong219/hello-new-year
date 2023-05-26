import { SITE_DESC, SITE_NAME } from './constant'
import RabbitImg from '../assets/images/main.png'

const setMetaTags = (
  title = SITE_NAME,
  description = SITE_DESC,
  imageUrl = RabbitImg
) => {
  //set title
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute('content', `${title}`)
  document.getElementsByTagName('title')[0].innerHTML = title

  //set description
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute('content', description)

  //set images
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute('content', imageUrl)

  //set url
  document
    .querySelector('meta[property="og:url"]')
    .setAttribute('content', window.location.href)
}

export default setMetaTags
