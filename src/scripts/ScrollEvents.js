import coordinates from 'element-coordinates';

export function progress( initialElement, scrollPosition ) {

    let scrolled = 0

    if (initialElement) {

      const startingScroll = whenPassedElTopOrFalse(initialElement, scrollPosition) || scrollPosition
      const targetOffset = document.documentElement.scrollHeight - startingScroll;
      const viewportOffset = targetOffset - document.documentElement.clientHeight;

      scrolled = ((scrollPosition - startingScroll) / viewportOffset ) * 100;
    }

    return scrolled
  }
  export function whenPassedElTopOrFalse( element, scrollPosition, offset = 0 ) {
    // defaults to false, scroll never passes target
    let targetScroll = scrollPosition + 1

    // if there's element, get target top
    if (element)
      targetScroll  = new coordinates(element).borderBox.top;
    
    // if scroll passes target top, return target top, if not: false
    return scrollPosition >= targetScroll + offset ? targetScroll : false;
  }
  export function markerId( sections, scrollPosition ) {
    let sectionId = null;

    sections.forEach( section => {
      if ( whenPassedElTopOrFalse(section, scrollPosition, -100) ) {
        sectionId = section.id || section.dataset.id
      }
    })

    return sectionId;
  }