export interface MyType {
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
}

