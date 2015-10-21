define(
  [ 'language/en',
    'language/es'
  ],
  function (English,Spanish) {
    'use strict';

    return {
      defaultLocale : 'en',
      availableLocales : [
        {
          code: 'en',
          label : 'English',
          source : English
        },
        {
          code: 'es',
          label : 'Español',
          source : Spanish
        }
      ]
    };
  });
