export const expectedJSDocOutput2 = `/**
 * @typedef {object} MyType
 * @property {object} home
 * @property {object} home.seo
 * @property {string} home.seo.title
 * @property {object} home.content
 * @property {string[]} home.content.activities
 */
`;

 export const expectedJSDocOutput3 = `/**
 * @typedef {object} MyType
 * @property {object} home
 * @property {object} home.seo
 * @property {string} home.seo.title
 * @property {object} home.content
 * @property {string[]} home.content.activities
 * @property {string[]} home.content.motto
 * @property {string} home.content.communication
 * @property {object} about
 * @property {object} about.seo
 * @property {string} about.seo.title
 * @property {object} about.content
 * @property {string[]} about.content.title
 * @property {string} about.content.presentation
 * @property {string} about.content.specialization
 * @property {string} about.content.expertise
 * @property {object[]} about.content.sections
 * @property {string} about.content.sections[].label
 * @property {string[]} about.content.sections[].items
 * @property {object} contact
 * @property {object} contact.seo
 * @property {string} contact.seo.title
 * @property {object} contact.content
 * @property {string} contact.content.address
 * @property {string} contact.content.telephone
 * @property {string} contact.content.email
 * @property {object} contact.content.partnership
 * @property {string} contact.content.partnership.label
 * @property {string} contact.content.partnership.name
 * @property {object} services
 * @property {object} services.seo
 * @property {string} services.seo.title
 * @property {object} services.content
 * @property {string} services.content.title
 * @property {string[]} services.content.items
 * @property {object} notFound
 * @property {object} notFound.seo
 * @property {string} notFound.seo.title
 * @property {object[]} menu
 * @property {string} menu[].key
 * @property {string} menu[].link
 * @property {string} menu[].text
 * @property {object[]=} menu[].children
 * @property {string} menu[].children[].key
 * @property {string} menu[].children[].link
 * @property {string} menu[].children[].text
 * @property {object} footer
 * @property {string} footer.copyright
 * @property {object[]} footer.navigation
 * @property {string} footer.navigation[].key
 * @property {string} footer.navigation[].link
 * @property {string} footer.navigation[].text
 * @property {object[]} footer.socialNetworks
 * @property {string} footer.socialNetworks[].key
 * @property {string} footer.socialNetworks[].link
 * @property {string} footer.socialNetworks[].icon
 */
`;

export const expectedDirectoryToJSDoc = `/**
 * @typedef {object} MyType
 * @property {object} emptyDirectory
 * @property {object} emptyObject
 * @property {object} mock1
 * @property {number} mock1.userId
 * @property {number} mock1.id
 * @property {string} mock1.title
 * @property {boolean} mock1.completed
 * @property {object} mock2
 * @property {object} mock2.home
 * @property {object} mock2.home.seo
 * @property {string} mock2.home.seo.title
 * @property {object} mock2.home.content
 * @property {string[]} mock2.home.content.activities
 * @property {object} mock3
 * @property {object} mock3.home
 * @property {object} mock3.home.seo
 * @property {string} mock3.home.seo.title
 * @property {object} mock3.home.content
 * @property {string[]} mock3.home.content.activities
 * @property {string[]} mock3.home.content.motto
 * @property {string} mock3.home.content.communication
 * @property {object} mock3.about
 * @property {object} mock3.about.seo
 * @property {string} mock3.about.seo.title
 * @property {object} mock3.about.content
 * @property {string[]} mock3.about.content.title
 * @property {string} mock3.about.content.presentation
 * @property {string} mock3.about.content.specialization
 * @property {string} mock3.about.content.expertise
 * @property {object[]} mock3.about.content.sections
 * @property {string} mock3.about.content.sections[].label
 * @property {string[]} mock3.about.content.sections[].items
 * @property {object} mock3.contact
 * @property {object} mock3.contact.seo
 * @property {string} mock3.contact.seo.title
 * @property {object} mock3.contact.content
 * @property {string} mock3.contact.content.address
 * @property {string} mock3.contact.content.telephone
 * @property {string} mock3.contact.content.email
 * @property {object} mock3.contact.content.partnership
 * @property {string} mock3.contact.content.partnership.label
 * @property {string} mock3.contact.content.partnership.name
 * @property {object} mock3.services
 * @property {object} mock3.services.seo
 * @property {string} mock3.services.seo.title
 * @property {object} mock3.services.content
 * @property {string} mock3.services.content.title
 * @property {string[]} mock3.services.content.items
 * @property {object} mock3.notFound
 * @property {object} mock3.notFound.seo
 * @property {string} mock3.notFound.seo.title
 * @property {object[]} mock3.menu
 * @property {string} mock3.menu[].key
 * @property {string} mock3.menu[].link
 * @property {string} mock3.menu[].text
 * @property {object[]=} mock3.menu[].children
 * @property {string} mock3.menu[].children[].key
 * @property {string} mock3.menu[].children[].link
 * @property {string} mock3.menu[].children[].text
 * @property {object} mock3.footer
 * @property {string} mock3.footer.copyright
 * @property {object[]} mock3.footer.navigation
 * @property {string} mock3.footer.navigation[].key
 * @property {string} mock3.footer.navigation[].link
 * @property {string} mock3.footer.navigation[].text
 * @property {object[]} mock3.footer.socialNetworks
 * @property {string} mock3.footer.socialNetworks[].key
 * @property {string} mock3.footer.socialNetworks[].link
 * @property {string} mock3.footer.socialNetworks[].icon
 * @property {object} mocks
 * @property {object} mocks.mockThree
 * @property {object} mocks.mockThree.home
 * @property {object} mocks.mockThree.home.seo
 * @property {string} mocks.mockThree.home.seo.title
 * @property {object} mocks.mockThree.home.content
 * @property {string[]} mocks.mockThree.home.content.activities
 * @property {string[]} mocks.mockThree.home.content.motto
 * @property {string} mocks.mockThree.home.content.communication
 * @property {object} mocks.mockThree.about
 * @property {object} mocks.mockThree.about.seo
 * @property {string} mocks.mockThree.about.seo.title
 * @property {object} mocks.mockThree.about.content
 * @property {string[]} mocks.mockThree.about.content.title
 * @property {string} mocks.mockThree.about.content.presentation
 * @property {string} mocks.mockThree.about.content.specialization
 * @property {string} mocks.mockThree.about.content.expertise
 * @property {object[]} mocks.mockThree.about.content.sections
 * @property {string} mocks.mockThree.about.content.sections[].label
 * @property {string[]} mocks.mockThree.about.content.sections[].items
 * @property {object} mocks.mockThree.contact
 * @property {object} mocks.mockThree.contact.seo
 * @property {string} mocks.mockThree.contact.seo.title
 * @property {object} mocks.mockThree.contact.content
 * @property {string} mocks.mockThree.contact.content.address
 * @property {string} mocks.mockThree.contact.content.telephone
 * @property {string} mocks.mockThree.contact.content.email
 * @property {object} mocks.mockThree.contact.content.partnership
 * @property {string} mocks.mockThree.contact.content.partnership.label
 * @property {string} mocks.mockThree.contact.content.partnership.name
 * @property {object} mocks.mockThree.services
 * @property {object} mocks.mockThree.services.seo
 * @property {string} mocks.mockThree.services.seo.title
 * @property {object} mocks.mockThree.services.content
 * @property {string} mocks.mockThree.services.content.title
 * @property {string[]} mocks.mockThree.services.content.items
 * @property {object} mocks.mockThree.notFound
 * @property {object} mocks.mockThree.notFound.seo
 * @property {string} mocks.mockThree.notFound.seo.title
 * @property {object[]} mocks.mockThree.menu
 * @property {string} mocks.mockThree.menu[].key
 * @property {string} mocks.mockThree.menu[].link
 * @property {string} mocks.mockThree.menu[].text
 * @property {object[]=} mocks.mockThree.menu[].children
 * @property {string} mocks.mockThree.menu[].children[].key
 * @property {string} mocks.mockThree.menu[].children[].link
 * @property {string} mocks.mockThree.menu[].children[].text
 * @property {object} mocks.mockThree.footer
 * @property {string} mocks.mockThree.footer.copyright
 * @property {object[]} mocks.mockThree.footer.navigation
 * @property {string} mocks.mockThree.footer.navigation[].key
 * @property {string} mocks.mockThree.footer.navigation[].link
 * @property {string} mocks.mockThree.footer.navigation[].text
 * @property {object[]} mocks.mockThree.footer.socialNetworks
 * @property {string} mocks.mockThree.footer.socialNetworks[].key
 * @property {string} mocks.mockThree.footer.socialNetworks[].link
 * @property {string} mocks.mockThree.footer.socialNetworks[].icon
 * @property {object} mocks.mockOne
 * @property {number} mocks.mockOne.userId
 * @property {number} mocks.mockOne.id
 * @property {string} mocks.mockOne.title
 * @property {boolean} mocks.mockOne.completed
 * @property {object} mocks.mock_two
 * @property {object} mocks.mock_two.home
 * @property {object} mocks.mock_two.home.seo
 * @property {string} mocks.mock_two.home.seo.title
 * @property {object} mocks.mock_two.home.content
 * @property {string[]} mocks.mock_two.home.content.activities
 */`;