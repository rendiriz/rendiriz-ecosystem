const isProduction = process.env.ENVIRONMENT === 'production';

const site = {
  title: `Rendi Riz`,
  description: `Kamu perlu undangan digital? Yuk, Kitabikin. Gratis!`,
  keywords: `undangan digital, undangan online, undangan pernikahan, undangan gratis, website undangan, contoh undangan online, cara membuat undangan digital, online invitation, wedding invitation`,
  author: `Rendi Riz`,
  siteUrl: isProduction ? `https://rendiriz.com` : `http://localhost:14001`,
  image: `vercel.svg`,
  twitterUsername: `@rizkirendi`,
};

export default site;
