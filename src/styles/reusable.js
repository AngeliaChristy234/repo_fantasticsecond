import { styleSpacing } from './abstract'
import { mq } from './mediaQueries'

export const body = {
  padding: `0 ${styleSpacing.spacingSmall}`,

  '& > *': {
    marginTop: styleSpacing.spacingHuge
  },

  '& h1': {
    textTransform: 'capitalize'
  },

  [mq[2]]: {
    padding: `0 ${styleSpacing.spacingHuge}`
  }
}

export const reuseBtn = {
  small: {
    width: '45rem',
    height: '8rem',

    '& > *': {
      marginTop: '0.5rem'
    }
  },

  big: {
    width: '28rem', 
    height: '7rem',
    fontSize: '2rem',

    '& > *': {
      marginTop: '0.5rem'
    }
  }
}