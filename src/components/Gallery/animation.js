import {TimelineLite} from 'gsap'

export default {
  enter(s) {
    return new TimelineLite()
      .fromTo(document.getElementsByTagName('header'), 0.5, { autoAlpha: 0 }, { autoAlpha: 1, ease: Expo.easeIn }, 0)
      .fromTo(`.${s.gallery}`,0.5,{ autoAlpha: 0 },{  autoAlpha: 1 },0)
  }
}