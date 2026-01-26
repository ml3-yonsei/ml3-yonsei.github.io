// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-",
          title: "",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-members",
          title: "members",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-apply",
          title: "apply",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/apply/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-jaehyung-joined-yonsei-university-as-an-assistant-professor-in-ai",
          title: 'Jaehyung joined Yonsei University as an assistant professor in AI!',
          description: "",
          section: "News",},{id: "news-cobb-is-accepted-to-emnlp-2024",
          title: 'CoBB is accepted to EMNLP 2024!',
          description: "",
          section: "News",},{id: "news-spa-is-accepted-to-iclr-2025-as-oral-presentation-207-11672-1-77",
          title: 'SPA is accepted to ICLR 2025 as Oral Presentation (207/11672=1.77%)!',
          description: "",
          section: "News",},{id: "news-fermi-is-accepted-to-naacl-2025",
          title: 'Fermi is accepted to NAACL 2025!',
          description: "",
          section: "News",},{id: "news-revise-is-accepted-to-icml-2025",
          title: 'ReVise is accepted to ICML 2025!',
          description: "",
          section: "News",},{id: "news-two-papers-msr-and-pfp-are-accepted-to-acl-2025",
          title: 'Two papers (MSR and PFP) are accepted to ACL 2025!',
          description: "",
          section: "News",},{id: "news-three-papers-cope-prime-and-cleanmol-are-accepted-to-emnlp-2025-including-oral-presentation-357-3548-10-0",
          title: 'Three papers (CoPe, PriME and CLEANMOL) are accepted to EMNLP 2025 including Oral...',
          description: "",
          section: "News",},{id: "news-two-papers-robot-r1-and-dllm-conv-are-accepted-to-neurips-2025-including-spotlight-presentation-207-21575-3-19",
          title: 'Two papers (Robot-R1 and DLLM-Conv) are accepted to NeurIPS 2025 including Spotlight Presentation...',
          description: "",
          section: "News",},{id: "news-jaehyung-will-serve-as-an-area-chair-for-neurips-2025-iclr-2026-arr-2025-oct",
          title: 'Jaehyung will serve as an Area Chair for NeurIPS 2025, ICLR 2026, ARR...',
          description: "",
          section: "News",},{id: "news-the-homepage-of-ml3-yonsei-is-now-live",
          title: 'The homepage of ML3 @ Yonsei is now live!',
          description: "",
          section: "News",},{id: "news-lfu-is-accepted-to-aaai-2026-as-oral-presentation",
          title: 'LfU is accepted to AAAI 2026 as Oral Presentation!',
          description: "",
          section: "News",},{id: "news-five-papers-amis-directer-titok-prior-filtering-and-rpm-are-accepted-to-iclr-2026",
          title: 'Five papers (AMIS, DIRECTER, TITOK, Prior Filtering, and RPM) are accepted to ICLR...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
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
