# Localisation with React and react-i18next

# Create app
create-react-app localisation

# Add react-i18next
$ yarn add i18next i18next-browser-languagedetector i18next-xhr-backend

# i18n.js
Create i18n.js file to configure storage of language files and initialise i18next

# strings.json
Language files should be stored as json inside the public folder in a folder called locales

# index.json
Include i18n in index.js

# components
Update components with text to use {t("stringname")}