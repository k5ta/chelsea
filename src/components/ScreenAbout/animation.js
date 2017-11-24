import {TimelineLite} from 'gsap'

export default {
  enter(s) {
    return new TimelineLite()
      .fromTo(document.getElementsByTagName('header'), 0.5, { autoAlpha: 0 }, { autoAlpha: 1, ease: Expo.easeIn }, 0)
      .fromTo(`.${s.info}`,0.5,{  autoAlpha: 0,  x: 200},{  autoAlpha: 1,  ease: Expo.EaseOut,  x: 0},0)
      .fromTo(`.${s.vid}`,0.5,{  autoAlpha: 0,  y: 200},{  autoAlpha: 1,  ease: Expo.EaseOut,  y: 0},0)
      .fromTo(`.${s.section2} .${s.buttonGetBarbered}`,0.5,{  autoAlpha: 0,  y: -200},{  autoAlpha: 1,  ease: Expo.EaseOut,  y: 0},0)
  }
}