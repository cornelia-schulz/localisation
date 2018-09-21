import React, { Component } from 'react';
import { I18n, Trans } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <I18n ns="strings">
        {
          (t, { i18n }) => (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{t('title')}</h1>
                <button onClick={() => i18n.changeLanguage('de')}>{t("languages.de")}</button>
                <button onClick={() => i18n.changeLanguage('en')}>{t("languages.en")}</button>
              </header>
              <p className="App-intro">
                <Trans i18nKey="description.part1">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </Trans>
              </p>
              <p>{t('description.part2')}</p>
            </div>
          )
        }
      </I18n>
    );
  }
}

export default App;
