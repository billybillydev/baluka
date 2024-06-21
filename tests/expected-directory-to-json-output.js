export const expectedDirectoryToJsonOutput = {
  emptyDirectory: {},
  emptyObject: {},
  mock1: {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  mock2: {
    home: {
      seo: { title: "Test" },
      content: { activities: ["a", "b"] },
    },
  },
  mock3: {
    home: {
      seo: {
        title: "Home SEO Title",
      },
      content: {
        activities: ["Activity 1", "Activity 2"],
        motto: ["Motto 1", "Motto 2"],
        communication: "Sample Communication",
      },
    },
    about: {
      seo: {
        title: "About SEO Title",
      },
      content: {
        title: ["About Title 1", "About Title 2"],
        presentation: "About Presentation",
        specialization: "Specialization",
        expertise: "Expertise",
        sections: [
          {
            label: "Section 1",
            items: ["Item 1", "Item 2"],
          },
        ],
      },
    },
    contact: {
      seo: {
        title: "Contact SEO Title",
      },
      content: {
        address: "123 Main St",
        telephone: "123-456-7890",
        email: "contact@example.com",
        partnership: {
          label: "Partnership Label",
          name: "Partner Name",
        },
      },
    },
    services: {
      seo: {
        title: "Services SEO Title",
      },
      content: {
        title: "Services Title",
        items: ["Service 1", "Service 2"],
      },
    },
    notFound: {
      seo: {
        title: "404 Not Found",
      },
    },
    menu: [
      {
        key: "home",
        link: "/home",
        text: "Home",
        children: [
          {
            key: "subHome1",
            link: "/home/sub1",
            text: "Sub Home 1",
          },
        ],
      },
      {
        key: "about",
        link: "/about",
        text: "About",
      },
    ],
    footer: {
      copyright: "© 2024 Your Company",
      navigation: [
        {
          key: "privacy",
          link: "/privacy",
          text: "Privacy Policy",
        },
        {
          key: "terms",
          link: "/terms",
          text: "Terms of Service",
        },
      ],
      socialNetworks: [
        {
          key: "twitter",
          link: "https://twitter.com/yourcompany",
          icon: "twitter-icon",
        },
        {
          key: "facebook",
          link: "https://facebook.com/yourcompany",
          icon: "facebook-icon",
        },
      ],
    },
  },
  mocks: {
    mockThree: {
      home: {
        seo: {
          title: "Home SEO Title",
        },
        content: {
          activities: ["Activity 1", "Activity 2"],
          motto: ["Motto 1", "Motto 2"],
          communication: "Sample Communication",
        },
      },
      about: {
        seo: {
          title: "About SEO Title",
        },
        content: {
          title: ["About Title 1", "About Title 2"],
          presentation: "About Presentation",
          specialization: "Specialization",
          expertise: "Expertise",
          sections: [
            {
              label: "Section 1",
              items: ["Item 1", "Item 2"],
            },
          ],
        },
      },
      contact: {
        seo: {
          title: "Contact SEO Title",
        },
        content: {
          address: "123 Main St",
          telephone: "123-456-7890",
          email: "contact@example.com",
          partnership: {
            label: "Partnership Label",
            name: "Partner Name",
          },
        },
      },
      services: {
        seo: {
          title: "Services SEO Title",
        },
        content: {
          title: "Services Title",
          items: ["Service 1", "Service 2"],
        },
      },
      notFound: {
        seo: {
          title: "404 Not Found",
        },
      },
      menu: [
        {
          key: "home",
          link: "/home",
          text: "Home",
          children: [
            {
              key: "subHome1",
              link: "/home/sub1",
              text: "Sub Home 1",
            },
          ],
        },
        {
          key: "about",
          link: "/about",
          text: "About",
        },
      ],
      footer: {
        copyright: "© 2024 Your Company",
        navigation: [
          {
            key: "privacy",
            link: "/privacy",
            text: "Privacy Policy",
          },
          {
            key: "terms",
            link: "/terms",
            text: "Terms of Service",
          },
        ],
        socialNetworks: [
          {
            key: "twitter",
            link: "https://twitter.com/yourcompany",
            icon: "twitter-icon",
          },
          {
            key: "facebook",
            link: "https://facebook.com/yourcompany",
            icon: "facebook-icon",
          },
        ],
      },
    },
    mockOne: {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    mock_two: {
      home: {
        seo: { title: "Test" },
        content: { activities: ["a", "b"] },
      },
    },
  },
};
