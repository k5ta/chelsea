import {TimelineLite} from 'gsap'

export default {
  enter(s) {
    return new TimelineLite()
      .fromTo(document.getElementsByTagName('header'), 0.5, { autoAlpha: 0 }, { autoAlpha: 1, ease: Expo.easeIn }, 0)
      .fromTo(`.${s.row}`,0.5,{ autoAlpha: 0,  y: -100},{  autoAlpha: 1,  ease: Circ.easeOut,  y: 0},0)
  }
}