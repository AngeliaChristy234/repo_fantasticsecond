import { css } from '@emotion/core'
import { styleColors, styleFonts, styleSpacing } from '../abstract'
import { mq } from '../mediaQueries'
import { compUnits, hoverTrans } from '../utils'


const Styles = {
  box: css({
    width: '100%',
    height: compUnits.layoutBox,
    overflow: 'hidden',
    color: styleColors.grayMed,
    border: `1px solid ${styleColors.grayMed}`,

    '& > *': {
      border: `1px solid ${styleColors.grayLight}`
    },

    '& .content': {
      padding: styleSpacing.spacingSmall,
      height: '85%'
    },

    '& .contentSide': {
      padding: styleSpacing.spacingSmall,
      height: '100%'
    },

    ...hoverTrans
  }),

  header: {
    top: css({
      padding: styleSpacing.spacingMini,
      height: '15%',

      '& .logo': {
        width: '20%',
        height: '100%',
        border: `1px solid ${styleColors.grayLight}`
      }
    }),

    side: css({
      height: '100%',
  
      '& > *': {
        border: `1px solid ${styleColors.grayLight}`
      },

      '& .logo': {
        height: '12%',
        border: `1px solid ${styleColors.grayLight}`
      }
    })
  },

  banner: css({
    height: '40%',
    border: `1px solid ${styleColors.grayLight}`,

    '& .title': {
      fontSize: styleFonts.sizeSmall
    },

    '& .sqr': {
      padding: styleSpacing.spacingMini,
      border: `1px solid ${styleColors.grayLight}`,

      '& .miniSqr': {
        marginBottom: styleSpacing.spacingMini,
        height: '40%',
        border: `1px solid ${styleColors.grayLight}`
      }
    }
  }),

  rows: css({
    '& .ant-card': {
      height: '65%',
      overflow: 'hidden'
    }
  }),

  card: css({
    '& .ant-card': {
      height: 'auto',  

      '& h4':{
        color: styleColors.grayMed,
        fontSize: styleFonts.sizeHuge,
        textTransform: 'capitalize'
      },
      
      '& p': {
        marginTop: styleSpacing.spacingMedium
      },

      '& li': {
        listStyle: 'none'
      },

      '& svg': {
        marginRight: styleSpacing.spacingSmall
      },

      [mq[2]]: {
        height: '40rem',

        '& h4':{
          fontSize: styleFonts.sizeMedium,
        }
      }
    }
  }),

  desc: css({
    '& svg': {
      marginTop: styleSpacing.spacingSmall,
      width: 'auto',
      height: '4.5rem'
    },

    '& h5':{
      fontSize: styleFonts.sizeSmall
    },

    '& p': {
      fontSize: styleFonts.sizeMini
    }
  }),

  steps: css({
    '& > *': {
      color: styleColors.grayMed
    }
  })
}



export default Styles