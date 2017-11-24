import {TimelineLite} from 'gsap'

export default {
  enter(th) {
    return new TimelineLite()
      .fromTo(document.getElementsByTagName('header'), 0.5, { autoAlpha: 0 }, { autoAlpha: 1, ease: Expo.easeIn }, 0)
      .fromTo(`.${th.s.saleInfo}`,0.5,{  autoAlpha: 0,  y: -200},{  autoAlpha: 1,  ease: Expo.EaseOut,  y: 0},0)
      .fromTo(`.${th.s.followUs}`,0.5,{  autoAlpha: 0,  y: 200},{  autoAlpha: 1,  ease: Expo.EaseOut,  y: 0},0)
      .fromTo(th.$refs.ph1,0.5,{  autoAlpha: 0},{  autoAlpha: 1,  ease: Expo.EaseOut },0.1 + 0.5*Math.random())
      .fromTo(th.$refs.ph2,0.5,{  autoAlpha: 0},{  autoAlpha: 1,  ease: Expo.EaseOut },0.1 + 0.5*Math.random())
      .fromTo(th.$refs.ph3,0.5,{  autoAlpha: 0},{  autoAlpha: 1,  ease: Expo.EaseOut },0.1 + 0.5*Math.random())
      .fromTo(th.$refs.ph4,0.5,{  autoAlpha: 0},{  autoAlpha: 1,  ease: Expo.EaseOut },0.1 + 0.5*Math.random())
      .fromTo(th.$refs.ph5,0.5,{  autoAlpha: 0},{  autoAlpha: 1,  ease: Expo.EaseOut },0.1 + 0.5*Math.random())
      .fromTo(th.$refs.ph6,0.5,{  autoAlpha: 0},{  autoAlpha: 1,  ease: Expo.EaseOut },0.1 + 0.5*Math.random())
      .fromTo(th.$refs.ph7,0.5,{  autoAlpha: 0},{  autoAlpha: 1,  ease: Expo.EaseOut },0.1 + 0.5*Math.random())
    }
}