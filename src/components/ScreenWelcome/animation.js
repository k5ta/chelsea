import {TimelineLite} from 'gsap'

export default {
  enter(s) {
    return new TimelineLite()
      .fromTo(document.getElementsByTagName('header'), 0.5, { autoAlpha: 0 }, { autoAlpha: 1, ease: Expo.easeIn }, 0)
      .fromTo(`.${s.content}`, 0.5, { autoAlpha: 0, y: -150 }, { autoAlpha: 1, ease: Circ.easeOut, y: 0 }, 0)
      .fromTo(`.${s.button}`, 0.5, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, ease: Circ.easeOut, y: 0, }, 0)
      .fromTo(`.${s.apps}`, 0.5, { autoAlpha: 0 }, { autoAlpha: 1, ease: Expo.easeIn }, 0)
  }
}