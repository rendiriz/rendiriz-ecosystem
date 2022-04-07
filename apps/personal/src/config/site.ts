const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === 'production';

const site = {
  title: `Rendi Riz`,
  description: `Rendi Riz's Portfolio`,
  author: `Rendi Riz`,
  siteUrl: isProduction
    ? `https://rendiriz.com`
    : `https://personal.innocentbatman.my.id`,
  image: `vercel.svg`,
  twitterUsername: `@rizkirendi`,
};

export default site;
