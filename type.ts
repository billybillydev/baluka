interface IMenu {
    home: IHome;
    about: IAbout;
    contact: IContact;
    services: IServices;
    pricing: IPricing;
}

interface IPricing {
      link: string;
      text: string;
}

interface IServices {
      link: string;
      text: string;
}

interface IContact {
      link: string;
      text: string;
}

interface IAbout {
      link: string;
      text: string;
}

interface IHome {
      link: string;
      text: string;
}

interface IContent {
      activities: string[];
      motto: string[];
      communication: string;
}

interface ISeo {
      title: string;
}

interface IExample {
  home: IHome;
  about: IAbout;
  menu: IMenu;
}
