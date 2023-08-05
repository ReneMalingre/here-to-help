import infopulseImage from '../../assets/images/portfolio/admin-dashboard.png';
import techChroniclesImage from '../../assets/images/portfolio/tech-chronicles.png';
import weatherDashboardImage from '../../assets/images/portfolio/weather-hub.png';
import inkflowImage from '../../assets/images/portfolio/inkflow.png';
import whiskersImage from '../../assets/images/portfolio/whiskers-of-zen.png';
import xeroIntegrationImage from '../../assets/images/portfolio/xero-integration.png';

const projectData = [
  {
    title: 'InfoPulse',
    description: [
      `InfoPulse is a web application that allows health professionals to create and share information factsheets 
      with their clients. It is designed to be a simple and easy to use platform for sharing information to clients, with a focus on privacy and security.
      It utilises Markdown as the format to allow for easy creation of content, and to allow for the incorporation of images. It is under active development
      to be used in a real-life clinical setting.`,
    ],
    technology: [
      'Node.js',
      'Express',
      'MySQL',
      'Tailwind CSS',
      'Handlebars',
      'bcrypt',
      'express-session',
      'dompurify',
      'Markdown',
      'marked',
    ],
    link: 'https://adelaideeye.care',
    githubLink: 'https://github.com/NatalieCampbellGit/InfoPulse',
    screenshot: infopulseImage,
    markerComment: `100% - well done on this project. Your group's project was fantastic`,
    aspectRatio: 1.71,
  },
  {
    title: 'Tech Chronicles',
    description: `A tech blog built using the MVC paradigm. It allows registered users to create, update and delete posts, and to attach comments to any posts on the site.
    It was built to explore the MVC paradigm, and to gain experience with the Handlebars templating engine and session storage authorisation.`,
    technology: ['Node.js', 'Express', 'MySQL', 'Handlebars', 'Bootstrap'],
    link: 'https://shielded-earth-15516.herokuapp.com/',
    githubLink: 'https://github.com/ReneMalingre/tech-chronicles',
    screenshot: techChroniclesImage,
    markerComment: `100% - outstanding and deserves the highest praise. Your dedication, proficiency, and attention to detail are evident throughout the entire project`,
    aspectRatio: 1.278,
  },
  {
    title: 'City Weather Hub',
    description: `This web application displays the current weather and a five-day forecast of a user-selected city. It allows the user to search for a city 
      in a chosen country, and if it is found the city is saved to a list of recent searches. The user can then click on an item in a selected list to display the weather for that city. Cities can be favourited, 
      which are listed separately. Selectable lists are: Search History, Favourites, Australian Capital Cities, New Zealand Cities and World Cities.`,
    technology: ['Bootstrap', 'jQuery', 'OpenWeatherMap API', 'Day.js'],
    link: 'https://renemalingre.github.io/renes-city-weather-hub/',
    githubLink: 'https://github.com/ReneMalingre/renes-city-weather-hub',
    screenshot: weatherDashboardImage,
    markerComment:
      '100% - Amazing job on this homework assignment! This is by far the most impressive submission I have seen for this module',
    aspectRatio: 2.077,
  },
  {
    title: 'InkFlow',
    description: `A progressive web application for editing text in the browser. 
    It is a single page, progressive web application (PWA). It can be installed on your device and used offline. 
    It uses the CodeMirror library for editing, and Webpack to bundle the application, using service workers in the browser. 
    It takes advantage of the IndexedDB API to store files and data locally.`,
    technology: [
      'Node.js',
      'Express',
      'Webpack',
      'CodeMirror',
      'IndexedDB',
      'Service Workers',
    ],
    link: 'https://hidden-cove-03428-aa99c97b4203.herokuapp.com/',
    githubLink: 'https://github.com/ReneMalingre/inkflow',
    screenshot: inkflowImage,
    markerComment: `100% - Congratulations on an outstanding homework assignment and great job addressing previous grader's comment`,
    aspectRatio: 1.613,
  },
  {
    title: 'Whiskers of Zen',
    description: `Whiskers of Zen was a group project. The concept is that it is designed to whisk the user away from their daily stress and immerse them in a world of cute, 
      cuddly companions. The
      app demonstrates the use of public APIs to retrieve data and images of dogs and cats, and the use of local storage to save user selections. It uses CSS frameworks to
      style the pages, and the group project taught cooperative programming practices and team use of GitHub.`,
    technology: [
      'CSS Frameworks',
      'local storage',
      'APIs',
      'Classes',
      'Agile',
      'GitHub',
    ],
    link: 'https://renemalingre.github.io/Whiskers-of-Zen',
    githubLink: 'https://github.com/ReneMalingre/Whiskers-of-Zen',
    screenshot: whiskersImage,
    markerComment:
      '97.5% - Really awesome work on this project! A great unique idea with so many features that went above and beyond what was required, exceptional work.',
    aspectRatio: 1.358,
  },
  {
    title: 'AEC Books',
    description: `This is a private .NET application that makes extensive use of Xero's API to make bookkeeping significantly quicker and easier for my small business. 
    It allows me to create, update, delete, view attachments, pay supplier invoices and credits and create ABA files, all without using the painfully slow Xero web interface.
    It allows me to query the Payroll API for current staff information and leave balances, and create leave requests. 
    It automatically creates and posts manual journals of daily sales, customer payments, loan payments/amortisation, and stock levels using information exported from a point-of-sale system allowing
    more timely and accurate reconciliations.`,
    technology: [
      'VB.Net',
      'Xero OAuth2 API',
      'WinForms',
      'Access Database',
      'Newtonsoft JSON',
    ],
    link: '',
    githubLink: '',
    screenshot: xeroIntegrationImage,
    markerComment: '',
    aspectRatio: 1.678,
  },
];

export default projectData;
