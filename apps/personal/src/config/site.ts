const environment = process.env.NEXT_PUBLIC_STAGE;

let siteUrl: string;
let noIndex: boolean;
switch (environment) {
  case 'production':
    siteUrl = 'https://rendiriz.com';
    noIndex = false;
    break;
  case 'development':
    siteUrl = 'https://personal.innocentbatman.my.id';
    noIndex = true;
    break;
  default:
    siteUrl = 'http://localhost:14001';
    noIndex = true;
    break;
}

const site = {
  title: `Rendi Riz`,
  description: `Rendi Riz's Portfolio`,
  author: `Rendi Riz`,
  email: `rendirizkir@gmail.com`,
  siteUrl,
  image: `vercel.svg`,
  githubUsername: `rendiriz`,
  twitterUsername: `@rizkirendi`,
  noIndex,
};

export default site;
