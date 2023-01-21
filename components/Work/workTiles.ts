export type WorkTile = {
  title: string
  description: string
  image: {
    src: string
    width: number
    height: number
  }
}

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: '/static/images/digitalasset.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I helped build and animate',
    title: 'Bakkt',
    image: {
      src: '/static/images/bakkt.webp',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I maintain the`,
    title: 'Alexa Developer Blog',
    image: {
      src: '/static/images/alexa-dev.webp',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I built`,
    title: 'Elastic Decemberfest',
    image: {
      src: '/static/images/decemberfest.webp',
      width: 600,
      height: 717,
    },
  },
]
