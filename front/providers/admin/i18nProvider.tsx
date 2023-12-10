import frenchMessages from "ra-language-french";
import polyglotI18nProvider from "ra-i18n-polyglot";
import {I18nProvider} from "ra-core";

const translatedMessage = {
  ...frenchMessages,
  resources: {
    educations: {
      name: 'Formation |||| Formations',
    },
    experiences: {
      name: 'Expérience |||| Expériences',
    },
    projects: {
      name: 'Projet |||| Projets',
    },
    users: {
      name: 'Utilisateur |||| Utilisateurs',
    }
  },
  ra: {
    ...frenchMessages.ra,
    page: {
      ...frenchMessages.ra.page,
      empty: 'Il n\'a rien ici pour l\'instant :('
    },
  }
};

const i18nProvider: I18nProvider = polyglotI18nProvider(() => translatedMessage, 'fr');

export default i18nProvider;
