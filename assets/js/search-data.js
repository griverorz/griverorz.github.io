// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "news-retooling-politics-is-now-available-in-cambridge-core",
          title: 'Retooling Politics is now available in Cambridge Core.',
          description: "",
          section: "News",},{id: "news-our-article-on-the-prediction-of-corruption-in-procurement-is-now-out-at-the-ijf",
          title: 'Our article on the prediction of corruption in procurement is now out at...',
          description: "",
          section: "News",},{id: "news-i-talked-to-el-universal-about-polling-for-the-2020-u-s-elections",
          title: 'I talked to El Universal about polling for the 2020 U.S. elections',
          description: "",
          section: "News",},{id: "news-the-westat-issue-brief-on-reproducibility-has-been-published",
          title: 'The Westat issue brief on reproducibility has been published.',
          description: "",
          section: "News",},{id: "news-i-have-been-promoted-to-senior-data-science-manager-principal-statistician",
          title: 'I have been promoted to Senior Data Science Manager (Principal Statistician)!',
          description: "",
          section: "News",},{id: "news-i-am-quoted-in-el-país-in-an-article-about-polarization-in-social-media",
          title: 'I am quoted in El País in an article about polarization in social...',
          description: "",
          section: "News",},{id: "news-i-started-as-associate-director-of-data-labs-at-pew-research-center",
          title: 'I started as Associate Director of Data Labs at Pew Research Center',
          description: "",
          section: "News",},{id: "news-new-report-on-use-of-social-media-by-members-of-the-u-s-congress",
          title: 'New report on use of social media by Members of the U.S. Congress...',
          description: "",
          section: "News",},{id: "news-new-report-on-the-behaviors-and-attitudes-of-u-s-twitter-users",
          title: 'New report on the behaviors and attitudes of U.S. Twitter users',
          description: "",
          section: "News",},{id: "news-new-report-on-the-political-behavior-of-u-s-twitter-users",
          title: 'New report on the political behavior of U.S. Twitter users',
          description: "",
          section: "News",},{id: "news-the-ceo-has-published-my-code-for-electoral-estimation-in-catalonia",
          title: 'The CEO has published my code for electoral estimation in Catalonia',
          description: "",
          section: "News",},{id: "news-the-ceo-has-published-my-report-explaining-their-new-electoral-estimation-method",
          title: 'The CEO has published my report explaining their new electoral estimation method',
          description: "",
          section: "News",},{id: "news-our-working-paper-about-polarization-and-trust-has-come-out",
          title: 'Our working paper about polarization and trust has come out',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
