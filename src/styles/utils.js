import { boxShadows } from './abstract'

export const compUnits = {
  headerPosition: 'fixed',
  headerHeight: '8vh',
  headerWidth: '20vw',
  bannerDefault: '60vh',
  bannerOpacity: '30%',
  layoutBox: '35vh',

  imageFit: 'contain',
  iconDefault: '8rem',

  whatsapp: '#25d366'
}

export const absCenter = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)' 
}

export const absCenterX = {
  left: '50%',
  transform: 'translateX(-50%)' 
}

export const hoverTrans = {
  transition: '.5s ease',

  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadows: boxShadows.point8
  },

  '&:active': {
    transform: 'translateY(3px)',
    boxShadows: 'none'
  }
}

export const hoverScale = {
  transition: '.5s ease',

  '&:hover': {
    transform: 'translateY(-3px) scale(1.2)'
  }
}