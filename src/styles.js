// ABSTRACTS
export const boxShadows = ({
  point5:'0 6px 10px rgba(0,0,0, 0.05)',
  point8:'0 6px 10px rgba(0,0,0, 0.08)'
})

export const styleColors = ({
  primary:   '#C1A57B',
  secondary:  '#222831',

  white: '#ffffff',
  black: '#000000',
  grayLight: 'rgba(0, 0, 0, 0.16)',
  grayMed: 'rgba(0, 0, 0, 0.45)'
})

export const styleFonts = ({
  primary:    'Baloo Bhaina 2',
  secondary:  'Montserrat',

  sizeDefault:'1.6rem',
  sizeMini:   '1.4rem',
  sizeSmall:  '2rem',
  sizeMedium: '3rem',
  sizeBig:    '5rem',
  sizeHuge:   '6rem',

  weightLight: '100',
  weightDefault: '450',
  weightBold: '600'
})

// COMPONENT STUFF
export const compUnits = ({
  headerPosition: 'fixed',
  headerHeight: '8vh',
  headerWidth: '20vw',
  bannerDefault: '60vh',
  bannerOpacity: '30%',

  imageFit: 'contain',
  iconDefault: '8rem'
})

// UTILS
export const absCenter = ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
})

export const absCenterX = ({
  left: '50%',
  transform: 'translateX(-50%)'
})

export const hoverTrans = ({
  transition: '.5s ease',

  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadows: boxShadows.point5
  }
})

export const hoverScale = ({
  transition: '.5s ease',

  '&:hover': {
    transform: 'translateY(-3px) scale(1.2)'
  }
})

// MEDIA QUERIES
const breakpoints = [20, 37.5, 56.25, 74],
      fontSize    = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0])
      
export const mq = breakpoints.map( bp => `@media (min-width: ${bp}em)`)
export const mqPX = breakpoints.map( bp => bp * fontSize)

export const styleSpacing = ({
  spacingMini: '0.8rem',
  spacingSmall: '2rem',
  spacingMedium: '4rem',
  spacingBig: '8rem',
  spacingHuge: '16rem'
})