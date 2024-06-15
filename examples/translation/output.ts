export interface TranslationSchema {
  pages: Pages;
  menu: Menu;
}

export interface Menu {
  main: MenuMain[];
  footer: MenuFooter[];
}

export interface MenuFooter {
  key: string;
  link: string;
  text: string;
}

export interface MenuMain {
  key: string;
  link: string;
  text: string;
}

export interface Pages {
  home: PagesHome;
  about: PagesAbout;
  services: PagesServices;
  contact: PagesContact;
}

export interface PagesContact {
  seo: PagesContactSeo;
  content: PagesContactContent;
}

export interface PagesContactContent {
  header: string;
  body: string;
}

export interface PagesContactSeo {
  title: string;
  description: string;
}

export interface PagesServices {
  seo: PagesServicesSeo;
  content: PagesServicesContent;
}

export interface PagesServicesContent {
  header: string;
  body: string;
}

export interface PagesServicesSeo {
  title: string;
  description: string;
}

export interface PagesAbout {
  seo: PagesAboutSeo;
  content: PagesAboutContent;
}

export interface PagesAboutContent {
  header: string;
  body: string;
}

export interface PagesAboutSeo {
  title: string;
  description: string;
}

export interface PagesHome {
  seo: PagesHomeSeo;
  content: PagesHomeContent;
}

export interface PagesHomeContent {
  header: string;
  body: string;
}

export interface PagesHomeSeo {
  title: string;
  description: string;
}

