interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator', 'Developer', 'Designer'],
  tenantName: 'Business',
  applicationName: 'Smart Videos',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user information',
    'Manage business details',
    'Manage video player configurations',
    'Manage click interactions',
    'Manage actions',
    'Manage designs',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/8606ec1c-0af0-490b-9987-c130595b815f',
};
