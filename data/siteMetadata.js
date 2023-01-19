const siteMetadata = {
  title: 'Sean Mahoney',
  author: 'Sean Mahoney',
  headerTitle: 'technosheen',
  description: 'Software Developer at Lighthouse Creative Group',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://next-technosheen.vercel.app',
  siteRepo: 'https://github.com/lighthouse-sean/next-technosheen-main',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'sean@lhchq.com',
  github: 'https://github.com/lighthouse-sean',
  twitter: 'https://twitter.com/technosheen_dev',
  facebook: 'https://facebook.com/technosheen_dev',
  linkedin: 'https://www.linkedin.com/in/technosheen/',
  spotify: 'https://open.spotify.com/user/wcnu3a64t7wdaszn1qhifvbqn',
  steam: 'https://steamcommunity.com/id/dlarroder/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
