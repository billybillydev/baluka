export const expectedTsOutput2 = `export interface MyType {
  home: Home;
}

export interface Home {
  seo: HomeSeo;
  content: HomeContent;
}

export interface HomeContent {
  activities: string[];
}

export interface HomeSeo {
  title: string;
}`;

export const expectedTsOutput3 = `export interface IExample {
  home: Home;
  about: About;
  contact: Contact;
  services: Services;
  notFound: NotFound;
  menu: Menu[];
  footer: Footer;
}

export interface Footer {
  copyright: string;
  navigation: FooterNavigation[];
  socialNetworks: FooterSocialNetworks[];
}

export interface FooterSocialNetworks {
  key: string;
  link: string;
  icon: string;
}

export interface FooterNavigation {
  key: string;
  link: string;
  text: string;
}

export interface Menu {
  key: string;
  link: string;
  text: string;
}

export interface NotFound {
  seo: NotFoundSeo;
}

export interface NotFoundSeo {
  title: string;
}

export interface Services {
  seo: ServicesSeo;
  content: ServicesContent;
}

export interface ServicesContent {
  title: string;
  items: string[];
}

export interface ServicesSeo {
  title: string;
}

export interface Contact {
  seo: ContactSeo;
  content: ContactContent;
}

export interface ContactContent {
  address: string;
  telephone: string;
  email: string;
  partnership: ContactContentPartnership;
}

export interface ContactContentPartnership {
  label: string;
  name: string;
}

export interface ContactSeo {
  title: string;
}

export interface About {
  seo: AboutSeo;
  content: AboutContent;
}

export interface AboutContent {
  title: string[];
  presentation: string;
  specialization: string;
  expertise: string;
  sections: AboutContentSections[];
}

export interface AboutContentSections {
  label: string;
  items: string[];
}

export interface AboutSeo {
  title: string;
}

export interface Home {
  seo: HomeSeo;
  content: HomeContent;
}

export interface HomeContent {
  activities: string[];
  motto: string[];
  communication: string;
}

export interface HomeSeo {
  title: string;
}
`;