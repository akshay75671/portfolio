const projects = [
  {
    id: 1,
    name: 'Needly E-commerce App',
    description: 'A robust e-commerce mobile application built with React Native, Redux for state management, and Firebase for backend services (Auth, Firestore, Storage). Features include user authentication, product Browse, cart management, secure checkout, and order history.',
    techStack: ['React Native', 'Redux', 'Firebase (Auth)', 'React Navigation', 'Stripe API'],
    image: '/assets/swiftcart-app-screenshot.png', // Main screenshot for list
    gif: '/assets/swiftcart-app-demo.gif', // Short demo video/GIF
    githubLink: 'https://github.com/yourusername/swiftcart-rn',
    liveDemoLink: 'https://expo.dev/@yourusername/swiftcart-app', // Link to Expo Snack/Go if hosted
    features: [
      'User authentication (email/password, Google Sign-In)',
      'Dynamic product listing and filtering',
      'Shopping cart with quantity management',
      'Integrated payment gateway',
      'User profile and order tracking',
      'Push notifications for order updates'
    ],
    challenges: 'Optimizing image loading performance, handling real-time data tracking, integrating complex payment flows securely.'
  },
  {
    id: 2,
    name: 'Health App',
    description: 'A health tracking application designed to help users monitor their daily activities, medication schedules, and vital signs. Built with React Native, utilizing local storage for data persistence and integrating health APIs.',
    techStack: ['React Native', 'AsyncStorage', 'MobX', 'HealthKit (iOS)', 'Google Fit (Android)', 'React Native Charts'],
    image: '/assets/mediconnect-app-screenshot.png',
    gif: '/assets/mediconnect-app-demo.gif',
    githubLink: 'https://github.com/yourusername/mediconnect-rn',
    liveDemoLink: null, // No live demo for this example
    features: [
      'Daily activity logging (steps, distance)',
      'Medication reminders and tracking',
      'Vital signs input (BP, heart rate)',
      'Interactive data visualization charts',
      // 'Offline data access'
    ],
    challenges: 'Ensuring cross-platform compatibility for health data access, managing complex local data structures, designing intuitive data entry forms.'
  },
  {
    id: 3,
    name: 'IIIEM',
    description: 'An interactive guide for import/export education app. It facilitates various import-export related services and additionally offers a comprehensive Import-Export Course to educate users on international trade practices',
    techStack: ['React Native', 'Redux', 'Google Maps API', 'React Native Community Geolocation', 'Video Player'],
    image: '/assets/cityguide-app-screenshot.png',
    gif: '/assets/cityguide-app-demo.gif',
    githubLink: 'https://github.com/yourusername/cityguide-rn',
    liveDemoLink: 'https://www.youtube.com/watch?v=your-demo-video-link', // Link to a YouTube demo
    features: [
      'Location-based for different branch office',
      'Detailed information pages for points of interest',
      'User watch video'
    ],
    challenges: 'Optimizing video player for different type of video urls.'
  },
  // Add more projects following this structure
];

export default projects;