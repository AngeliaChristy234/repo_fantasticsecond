import { Link } from 'react-scroll'
import { absContent } from '../content/abs.content'

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { boxShadows, styleColors, styleSpacing } from '../styles/abstract'
import { mq } from '../styles/mediaQueries'
import { reuseBtn } from '../styles/reusable'
import { compUnits } from '../styles/utils'

import { LayoutOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const Styles = ({
  Order: css({
    ...reuseBtn.small,
    backgroundColor: styleColors.primary,
    color: styleColors.white,

    '&:hover': {
      color: styleColors.primary,
      borderColor: styleColors.primary,
      boxShadow: boxShadows.point5
    },

    [mq[2]]: {
      ...reuseBtn.big
    }
  }),

  Layout: css({
    ...reuseBtn.small,
    marginTop: styleSpacing.spacingMedium,
    backgroundColor: styleColors.primary,
    color: styleColors.white,

    '&:hover, &:active': {
      color: styleColors.primary,
      borderColor: styleColors.primary
    },

    [mq[2]]: {
      ...reuseBtn.big
    }

  }),

  ScrollBtn: css({
    textTransform: 'lowercase'
  }),

  Whatsapp: css({
    ...reuseBtn.small,
    marginTop: styleSpacing.spacingMedium,
    backgroundColor: compUnits.whatsapp,
    color: styleColors.white,

    '&:hover, &:active': {
      color: compUnits.whatsapp,
      borderColor: compUnits.whatsapp
    },

    [mq[2]]: {
      ...reuseBtn.big
    }
  }),
})

export const OrderBtn = ({ link }) => (
  <Button
    css={Styles.Order}
    onClick={() => window.open(absContent.whatsappLink)}
  >
    Order
  </Button>
)

export const ScrollBtn = ({ name, target, offset }) => (
  <Button css={Styles.ScrollBtn}>
    <Link to={target} smooth = {true} offset={offset} duration={500}>{name}</Link>
  </Button>
)

export const LayoutBtn = () => (
  <Button
    css={Styles.Layout}
    icon={<LayoutOutlined />}
    shape="round"
    onClick={() =>window.open('/layout')}
  >
    Lihat layout
  </Button>
)

export const WhatsappBtn = () => (
  <Button
    css={Styles.Whatsapp}
    icon={<WhatsAppOutlined />}
    shape="round"
    onClick={() => window.open(absContent.whatsappLink)}
  >
    Pesan sekarang
  </Button>
)