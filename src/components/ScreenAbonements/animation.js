import {TimelineLite} from 'gsap'

export default {
  enter(obj) {
    return new TimelineLite()
      .fromTo(document.getElementsByTagName('header'), 0.5, { autoAlpha: 0 }, { autoAlpha: 1, ease: Expo.easeIn }, 0)
      .fromTo(obj.$refs.first, 0.5, { autoAlpha: 0, y: -100}, { autoAlpha: 1, ease: Circ.easeOut, y: 0 }, 0)
      .fromTo(obj.$refs.second, 0.5, { autoAlpha: 0, y: -100}, { autoAlpha: 1, ease: Circ.easeOut, y: 0 }, 0.25)
      .fromTo(obj.$refs.third, 0.5, { autoAlpha: 0, y: -100}, { autoAlpha: 1, ease: Circ.easeOut, y: 0 }, 0.5)
      .fromTo(`.${obj.s.shop}`, 1, { autoAlpha: 0, y: 100}, { autoAlpha: 1, ease: Circ.easeOut, y: 0 }, 0)
  }
}