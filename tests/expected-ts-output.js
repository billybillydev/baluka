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
  children?: MenuChildren[];
}

export interface MenuChildren {
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

export const expectedDirectoryToTs = `export interface MyDirectoryType {
  emptyDirectory: EmptyDirectory;
  emptyObject: EmptyObject;
  mock1: Mock1;
  mock2: Mock2;
  mock3: Mock3;
  mocks: Mocks;
}

export interface Mocks {
  mockThree: MocksMockThree;
  mockOne: MocksMockOne;
  mock_two: MocksMockTwo;
}

export interface MocksMockTwo {
  home: MocksMockTwoHome;
}

export interface MocksMockTwoHome {
  seo: MocksMockTwoHomeSeo;
  content: MocksMockTwoHomeContent;
}

export interface MocksMockTwoHomeContent {
  activities: string[];
}

export interface MocksMockTwoHomeSeo {
  title: string;
}

export interface MocksMockOne {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface MocksMockThree {
  home: MocksMockThreeHome;
  about: MocksMockThreeAbout;
  contact: MocksMockThreeContact;
  services: MocksMockThreeServices;
  notFound: MocksMockThreeNotFound;
  menu: MocksMockThreeMenu[];
  footer: MocksMockThreeFooter;
}

export interface MocksMockThreeFooter {
  copyright: string;
  navigation: MocksMockThreeFooterNavigation[];
  socialNetworks: MocksMockThreeFooterSocialNetworks[];
}

export interface MocksMockThreeFooterSocialNetworks {
  key: string;
  link: string;
  icon: string;
}

export interface MocksMockThreeFooterNavigation {
  key: string;
  link: string;
  text: string;
}

export interface MocksMockThreeMenu {
  key: string;
  link: string;
  text: string;
  children?: MocksMockThreeMenuChildren[];
}

export interface MocksMockThreeMenuChildren {
  key: string;
  link: string;
  text: string;
}

export interface MocksMockThreeNotFound {
  seo: MocksMockThreeNotFoundSeo;
}

export interface MocksMockThreeNotFoundSeo {
  title: string;
}

export interface MocksMockThreeServices {
  seo: MocksMockThreeServicesSeo;
  content: MocksMockThreeServicesContent;
}

export interface MocksMockThreeServicesContent {
  title: string;
  items: string[];
}

export interface MocksMockThreeServicesSeo {
  title: string;
}

export interface MocksMockThreeContact {
  seo: MocksMockThreeContactSeo;
  content: MocksMockThreeContactContent;
}

export interface MocksMockThreeContactContent {
  address: string;
  telephone: string;
  email: string;
  partnership: MocksMockThreeContactContentPartnership;
}

export interface MocksMockThreeContactContentPartnership {
  label: string;
  name: string;
}

export interface MocksMockThreeContactSeo {
  title: string;
}

export interface MocksMockThreeAbout {
  seo: MocksMockThreeAboutSeo;
  content: MocksMockThreeAboutContent;
}

export interface MocksMockThreeAboutContent {
  title: string[];
  presentation: string;
  specialization: string;
  expertise: string;
  sections: MocksMockThreeAboutContentSections[];
}

export interface MocksMockThreeAboutContentSections {
  label: string;
  items: string[];
}

export interface MocksMockThreeAboutSeo {
  title: string;
}

export interface MocksMockThreeHome {
  seo: MocksMockThreeHomeSeo;
  content: MocksMockThreeHomeContent;
}

export interface MocksMockThreeHomeContent {
  activities: string[];
  motto: string[];
  communication: string;
}

export interface MocksMockThreeHomeSeo {
  title: string;
}

export interface Mock3 {
  home: Mock3Home;
  about: Mock3About;
  contact: Mock3Contact;
  services: Mock3Services;
  notFound: Mock3NotFound;
  menu: Mock3Menu[];
  footer: Mock3Footer;
}

export interface Mock3Footer {
  copyright: string;
  navigation: Mock3FooterNavigation[];
  socialNetworks: Mock3FooterSocialNetworks[];
}

export interface Mock3FooterSocialNetworks {
  key: string;
  link: string;
  icon: string;
}

export interface Mock3FooterNavigation {
  key: string;
  link: string;
  text: string;
}

export interface Mock3Menu {
  key: string;
  link: string;
  text: string;
  children?: Mock3MenuChildren[];
}

export interface Mock3MenuChildren {
  key: string;
  link: string;
  text: string;
}

export interface Mock3NotFound {
  seo: Mock3NotFoundSeo;
}

export interface Mock3NotFoundSeo {
  title: string;
}

export interface Mock3Services {
  seo: Mock3ServicesSeo;
  content: Mock3ServicesContent;
}

export interface Mock3ServicesContent {
  title: string;
  items: string[];
}

export interface Mock3ServicesSeo {
  title: string;
}

export interface Mock3Contact {
  seo: Mock3ContactSeo;
  content: Mock3ContactContent;
}

export interface Mock3ContactContent {
  address: string;
  telephone: string;
  email: string;
  partnership: Mock3ContactContentPartnership;
}

export interface Mock3ContactContentPartnership {
  label: string;
  name: string;
}

export interface Mock3ContactSeo {
  title: string;
}

export interface Mock3About {
  seo: Mock3AboutSeo;
  content: Mock3AboutContent;
}

export interface Mock3AboutContent {
  title: string[];
  presentation: string;
  specialization: string;
  expertise: string;
  sections: Mock3AboutContentSections[];
}

export interface Mock3AboutContentSections {
  label: string;
  items: string[];
}

export interface Mock3AboutSeo {
  title: string;
}

export interface Mock3Home {
  seo: Mock3HomeSeo;
  content: Mock3HomeContent;
}

export interface Mock3HomeContent {
  activities: string[];
  motto: string[];
  communication: string;
}

export interface Mock3HomeSeo {
  title: string;
}

export interface Mock2 {
  home: Mock2Home;
}

export interface Mock2Home {
  seo: Mock2HomeSeo;
  content: Mock2HomeContent;
}

export interface Mock2HomeContent {
  activities: string[];
}

export interface Mock2HomeSeo {
  title: string;
}

export interface Mock1 {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface EmptyObject {
}

export interface EmptyDirectory {
}`;

export const expectedDirectoryOverFileToTs = `export interface MyDirectoryOverFileType {
  emptyDirectory: EmptyDirectory;
  emptyObject: EmptyObject;
  mock1: Mock1;
  mock2: Mock2;
  mock3: Mock3;
  mocks: Mocks;
}

export interface Mocks {
  mockThree: MocksMockThree;
  mockOne: MocksMockOne;
  mock_two: MocksMockTwo;
}

export interface MocksMockTwo {
  home: MocksMockTwoHome;
}

export interface MocksMockTwoHome {
  seo: MocksMockTwoHomeSeo;
  content: MocksMockTwoHomeContent;
}

export interface MocksMockTwoHomeContent {
  activities: string[];
}

export interface MocksMockTwoHomeSeo {
  title: string;
}

export interface MocksMockOne {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface MocksMockThree {
  home: MocksMockThreeHome;
  about: MocksMockThreeAbout;
  contact: MocksMockThreeContact;
  services: MocksMockThreeServices;
  notFound: MocksMockThreeNotFound;
  menu: MocksMockThreeMenu[];
  footer: MocksMockThreeFooter;
}

export interface MocksMockThreeFooter {
  copyright: string;
  navigation: MocksMockThreeFooterNavigation[];
  socialNetworks: MocksMockThreeFooterSocialNetworks[];
}

export interface MocksMockThreeFooterSocialNetworks {
  key: string;
  link: string;
  icon: string;
}

export interface MocksMockThreeFooterNavigation {
  key: string;
  link: string;
  text: string;
}

export interface MocksMockThreeMenu {
  key: string;
  link: string;
  text: string;
  children?: MocksMockThreeMenuChildren[];
}

export interface MocksMockThreeMenuChildren {
  key: string;
  link: string;
  text: string;
}

export interface MocksMockThreeNotFound {
  seo: MocksMockThreeNotFoundSeo;
}

export interface MocksMockThreeNotFoundSeo {
  title: string;
}

export interface MocksMockThreeServices {
  seo: MocksMockThreeServicesSeo;
  content: MocksMockThreeServicesContent;
}

export interface MocksMockThreeServicesContent {
  title: string;
  items: string[];
}

export interface MocksMockThreeServicesSeo {
  title: string;
}

export interface MocksMockThreeContact {
  seo: MocksMockThreeContactSeo;
  content: MocksMockThreeContactContent;
}

export interface MocksMockThreeContactContent {
  address: string;
  telephone: string;
  email: string;
  partnership: MocksMockThreeContactContentPartnership;
}

export interface MocksMockThreeContactContentPartnership {
  label: string;
  name: string;
}

export interface MocksMockThreeContactSeo {
  title: string;
}

export interface MocksMockThreeAbout {
  seo: MocksMockThreeAboutSeo;
  content: MocksMockThreeAboutContent;
}

export interface MocksMockThreeAboutContent {
  title: string[];
  presentation: string;
  specialization: string;
  expertise: string;
  sections: MocksMockThreeAboutContentSections[];
}

export interface MocksMockThreeAboutContentSections {
  label: string;
  items: string[];
}

export interface MocksMockThreeAboutSeo {
  title: string;
}

export interface MocksMockThreeHome {
  seo: MocksMockThreeHomeSeo;
  content: MocksMockThreeHomeContent;
}

export interface MocksMockThreeHomeContent {
  activities: string[];
  motto: string[];
  communication: string;
}

export interface MocksMockThreeHomeSeo {
  title: string;
}

export interface Mock3 {
  home: Mock3Home;
  about: Mock3About;
  contact: Mock3Contact;
  services: Mock3Services;
  notFound: Mock3NotFound;
  menu: Mock3Menu[];
  footer: Mock3Footer;
}

export interface Mock3Footer {
  copyright: string;
  navigation: Mock3FooterNavigation[];
  socialNetworks: Mock3FooterSocialNetworks[];
}

export interface Mock3FooterSocialNetworks {
  key: string;
  link: string;
  icon: string;
}

export interface Mock3FooterNavigation {
  key: string;
  link: string;
  text: string;
}

export interface Mock3Menu {
  key: string;
  link: string;
  text: string;
  children?: Mock3MenuChildren[];
}

export interface Mock3MenuChildren {
  key: string;
  link: string;
  text: string;
}

export interface Mock3NotFound {
  seo: Mock3NotFoundSeo;
}

export interface Mock3NotFoundSeo {
  title: string;
}

export interface Mock3Services {
  seo: Mock3ServicesSeo;
  content: Mock3ServicesContent;
}

export interface Mock3ServicesContent {
  title: string;
  items: string[];
}

export interface Mock3ServicesSeo {
  title: string;
}

export interface Mock3Contact {
  seo: Mock3ContactSeo;
  content: Mock3ContactContent;
}

export interface Mock3ContactContent {
  address: string;
  telephone: string;
  email: string;
  partnership: Mock3ContactContentPartnership;
}

export interface Mock3ContactContentPartnership {
  label: string;
  name: string;
}

export interface Mock3ContactSeo {
  title: string;
}

export interface Mock3About {
  seo: Mock3AboutSeo;
  content: Mock3AboutContent;
}

export interface Mock3AboutContent {
  title: string[];
  presentation: string;
  specialization: string;
  expertise: string;
  sections: Mock3AboutContentSections[];
}

export interface Mock3AboutContentSections {
  label: string;
  items: string[];
}

export interface Mock3AboutSeo {
  title: string;
}

export interface Mock3Home {
  seo: Mock3HomeSeo;
  content: Mock3HomeContent;
}

export interface Mock3HomeContent {
  activities: string[];
  motto: string[];
  communication: string;
}

export interface Mock3HomeSeo {
  title: string;
}

export interface Mock2 {
  home: Mock2Home;
}

export interface Mock2Home {
  seo: Mock2HomeSeo;
  content: Mock2HomeContent;
}

export interface Mock2HomeContent {
  activities: string[];
}

export interface Mock2HomeSeo {
  title: string;
}

export interface Mock1 {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface EmptyObject {
}

export interface EmptyDirectory {
}`;