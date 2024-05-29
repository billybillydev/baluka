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