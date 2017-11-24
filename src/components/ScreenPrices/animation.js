import {TimelineLite} from 'gsap'

export default {
  enter(s) {
    return new TimelineLite()
      .fromTo(document.getElementsByTagName('header'), 0.5, { autoAlpha: 0 }, { autoAlpha: 1, ease: Expo.easeIn }, 0)
      .fromTo(`.${s.prices}`, 0.5, { autoAlpha: 0, x: 200 }, { autoAlpha: 1, x: 0 }, 0)
      .fromTo(`.${s.phoneSvg}`, 0.5, { autoAlpha: 0, x: 200 }, { autoAlpha: 1, x: 0 }, 0)
      .fromTo(`.${s.app}`, 0.5, { autoAlpha: 0, y: 300 }, { autoAlpha: 1, y: 0 }, 0.5)
  }
}