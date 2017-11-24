function scrollToTop() {
  const scrollDuration = 500, tick = 10
  let scrollStep = -window.scrollY / (scrollDuration / tick)
  let scrollInterval = setInterval(function() {
    if (window.scrollY != 0 ) {
      window.scrollBy( 0, scrollStep );
    }
    else clearInterval(scrollInterval); 
  }, tick);
}

export default scrollToTop