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
  },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-retooling-politics-is-now-available-in-cambridge-core",
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
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
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
