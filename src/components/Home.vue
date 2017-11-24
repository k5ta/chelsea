<script>

import ScreensNav from '@/components/ScreensNav'
import MediaQueryUp from '@/components/MediaQueryUp'
import MediaQueryDown from '@/components/MediaQueryDown'
import screensSchema from '@/screensSchema'
import Footer from '@/components/Footer'
import Contacts from '@/components/Contacts'
import ScrollListener from '@/components/ScrollListener'
import Header from '@/components/Header'

export default {
  render() {
    const standaloneScreens = screensSchema.home.screens.map(screen => {
      const Component = screen.component
      const data = {props: screen.standaloneProps}
      return (
        <Component {...data} />
      )
    })
    return (
      <main>
        <Header></Header>
        <MediaQueryUp name="lg">
          <ScreensNav scope="home" />
          <ScrollListener scope="home">
            <router-view />
            { this.$route.hash === '#contacts'? <Contacts></Contacts> : null }
            { this.$route.hash === '#footer' ? <Footer></Footer> : null }
          </ScrollListener>
        </MediaQueryUp>
        <MediaQueryDown name="md">
          { this.$route.hash === '#contacts'? <Contacts></Contacts> : null }
          {standaloneScreens}
          <Footer></Footer>
        </MediaQueryDown>
      </main>
    )
  }
}
</script>