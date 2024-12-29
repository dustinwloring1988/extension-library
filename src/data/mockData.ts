import type { Prompt, Provider, Model, Starter, Feature } from '../types';

export const mockStarters: Starter[] = [
  {
    id: '1',
    name: 'DEMO Twitter Clone',
    description: 'DEMO A modern Twitter clone with real-time updates, user authentication, and social features.',
    longDescription: `
      Build a full-featured Twitter clone with:
      • Real-time tweet updates
      • User authentication and profiles
      • Follow/unfollow functionality
      • Like and retweet features
      • Responsive design
      • Image upload support
      • Rich text editor
      • Infinite scroll
      • Search functionality
      • Notifications system
    `,
    features: [
      'Demo User authentication',
      'Social features',
      'Media support'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    downloads: 856,
    author: 'dustinwloring1988',
    preview: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-12-29',
    repoUrl: 'https://github.com/dustinwloring1988/twitter-clone'
  },
  {
    id: '2',
    name: 'DEMO Basic template',
    description: 'DEMO A basic template for getting started. Made with React, ShadCN and lucide icons.',
    longDescription: `
      Build powerful browser extensions with:
      • Modern extension architecture
      • Cross-browser compatibility
    `,
    features: [
      'Cross-browser support',
      'Modern architecture',
      'Extension APIs',
      'Security features'
    ],
    technologies: ['TypeScript', 'React', 'Browser APIs'],
    downloads: 0,
    author: 'dustinwloring1988',
    preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-12-29',
    repoUrl: 'https://github.com/dustinwloring1988/extension-library'
  },
  {
    id: '3',
    name: 'DEMO Web Blog Template',
    description: 'DEMO A modern, feature-rich blog template built with Next.js and Tailwind CSS',
    longDescription: `A professional blog template that includes:
    • SEO optimization with meta tags and schema markup
    • Responsive design for all devices
    • Search functionality
    • Table of contents for blog posts
    • Author profiles
    • Rich media support
    • Syntax highlighting for code snippets
    • Comment system integration
    • Dark/light mode support
    • Performance optimized`,
    features: [
      'SEO optimized with meta tags and schema markup',
      'Search functionality and table of contents',
      'Author profiles and commenting system',
      'Dark/light mode and syntax highlighting'
    ],
    technologies: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'TypeScript'
    ],
    downloads: 0,
    author: 'dustinwloring1988',
    preview: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    createdAt: new Date().toISOString(),
    repoUrl: 'https://github.com/bolt-starter-templates/blog-template'
  }
  /*
  {
    id: '2',
    name: 'Restaurant Starter',
    description: 'A complete restaurant website template with menu management, reservations, and online ordering.',
    longDescription: `
      Launch your restaurant website with features like:
      • Digital menu management
      • Table reservations
      • Online ordering system
      • Photo gallery
      • Customer reviews
      • Contact forms
      • Mobile responsive design
      • SEO optimization
      • Social media integration
      • Analytics dashboard
    `,
    features: [
      'Menu management',
      'Reservations',
      'Online ordering',
      'Mobile responsive'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    downloads: 723,
    author: 'dustinwloring1988',
    preview: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-12-29',
    repoUrl: 'https://github.com/bolt-starter-templates/restaurant-starter-template'
  },
  {
    id: '3',
    name: 'Basic Starter',
    description: 'A minimal, modern starter template with essential features and best practices.',
    longDescription: `
      Start your project with a solid foundation:
      • Modern tech stack
      • Authentication ready
      • Database integration
      • API routes setup
      • Testing configuration
      • CI/CD pipeline
      • Documentation
      • Code quality tools
      • Performance optimized
      • Security best practices
    `,
    features: [
      'Modern stack',
      'Authentication',
      'API ready',
      'Testing setup'
    ],
    technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
    downloads: 945,
    author: 'dustinwloring1988',
    preview: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-12-29',
    repoUrl: 'https://github.com/bolt-starter-templates/starter-template'
  },
  {
    id: '4',
    name: 'Chatty',
    description: 'A real-time chat application template with modern features and scalable architecture.',
    longDescription: `
      Build a chat application with:
      • Real-time messaging
      • Group chats
      • Direct messages
      • File sharing
      • User presence
      • Message history
      • Push notifications
      • Emoji support
      • Message search
      • Mobile responsive
    `,
    features: [
      'Real-time chat',
      'Group messaging',
      'File sharing',
      'Push notifications'
    ],
    technologies: ['React', 'Socket.IO', 'Express', 'MongoDB'],
    downloads: 634,
    author: 'dustinwloring1988',
    preview: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-12-29',
    repoUrl: 'https://github.com/bolt-starter-templates/chatty'
  },
  {
    id: '5',
    name: 'Todo App',
    description: 'A feature-rich todo application template with task management and organization features.',
    longDescription: `
      Create a powerful todo app with:
      • Task categories
      • Due dates
      • Priority levels
      • Subtasks
      • Tags
      • Search & filter
      • Task sharing
      • Progress tracking
      • Reminders
      • Data export
    `,
    features: [
      'Task management',
      'Categories',
      'Due dates',
      'Progress tracking'
    ],
    technologies: ['Vue.js', 'Vuex', 'Firebase', 'TailwindCSS'],
    downloads: 523,
    author: 'dustinwloring1988',
    preview: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-12-29',
    repoUrl: 'https://github.com/bolt-starter-templates/todo-template'
  },
  {
    id: '6',
    name: 'Social Starter',
    description: 'A social network starter template with modern features and scalable architecture.',
    longDescription: `
      Launch your social platform with:
      • User profiles
      • News feed
      • Friend connections
      • Post sharing
      • Comments & likes
      • Direct messaging
      • Notifications
      • Media uploads
      • Activity tracking
      • Privacy controls
    `,
    features: [
      'User profiles',
      'News feed',
      'Direct messaging',
      'Media sharing'
    ],
    technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL'],
    downloads: 678,
    author: 'dustinwloring1988',
    preview: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-12-29',
    repoUrl: 'https://github.com/bolt-starter-templates/social-starter'
  }
  */
];

export const mockPrompts: Prompt[] = [
  {
    id: '2',
    name: 'Default',
    description: 'A standard system prompt for general development tasks and coding assistance.',
    longDescription: `A versatile system prompt designed for general software development tasks:
      • Code generation and modification
      • Bug fixing and debugging
      • Best practices implementation
      • Code review and optimization
      • Documentation writing
      • Testing strategies
      • Performance optimization
      • Security considerations
      • Architecture design
      • Development workflows`,
    systemPrompt: 'default_prompt',
    tags: ['development', 'general', 'best-practices'],
    downloads: 856,
    author: 'bolt.diy',
    createdAt: '2024-12-29'
  },
  {
    id: '1',
    name: 'Optimized',
    description: 'A system prompt for Bolt with optimized development workflows and best practices.',
    longDescription: `You are Bolt, an expert AI assistant and exceptional senior software developer with vast knowledge across multiple programming languages, frameworks, and best practices.

<system_constraints>
  - Operating in WebContainer, an in-browser Node.js runtime
  - Limited Python support: standard library only, no pip
  - No C/C++ compiler, native binaries, or Git
  - Prefer Node.js scripts over shell scripts
  - Use Vite for web servers
  - Databases: prefer libsql, sqlite, or non-native solutions
  - When for react dont forget to write vite config and index.html to the project

  Available shell commands: cat, cp, ls, mkdir, mv, rm, rmdir, touch, hostname, ps, pwd, uptime, env, node, python3, code, jq, curl, head, sort, tail, clear, which, export, chmod, scho, kill, ln, xxd, alias, getconf, loadenv, wasm, xdg-open, command, exit, source
</system_constraints>`,
    systemPrompt: 'optimized_prompt',
    tags: ['development', 'workflow', 'best-practices'],
    downloads: 1234,
    author: 'thecodacus',
    createdAt: '2024-12-29'
  }
];

export const mockProviders: Provider[] = [
  {
    id: '1',
    name: 'Ollama',
    description: 'Run large language models locally with a simple API.',
    longDescription: `
      Run powerful language models on your own hardware:
      • Easy model management
      • Simple REST API
      • Multiple model support
      • Custom model creation
      • Low latency responses
      • No data sharing
      • Full local control
      • Cross-platform support
    `,
    website: 'https://ollama.ai',
    baseModels: ['ANY'],
    downloads: 1234,
    configTemplate: {
      baseUrl: 'http://localhost:11434'
    },
    author: 'bolt.diy',
    createdAt: '2024-12-28'
  },
  {
    id: '2',
    name: 'LM Studio',
    description: 'Run and manage AI models locally with a user-friendly interface.',
    longDescription: `
      Local AI model management made easy:
      • Intuitive GUI interface
      • Wide model compatibility
      • Performance optimization
      • Model fine-tuning
      • Easy deployment
      • Resource management
      • API integration
      • Secure local execution
    `,
    website: 'https://lmstudio.ai',
    baseModels: ['ANY'],
    downloads: 987,
    configTemplate: {
      baseUrl: 'http://localhost:1234'
    },
    author: 'bolt.diy',
    createdAt: '2024-12-28'
  },
  {
    id: '3',
    name: 'OpenAI Like',
    description: 'Access state-of-the-art language models through OpenAI\'s API.',
    longDescription: `
      Industry-leading AI models and capabilities:
      • Wide model compatibility
      • Performance optimization
      • Model fine-tuning
      • Easy deployment
    `,
    website: 'https://sdk.vercel.ai/docs/introduction',
    baseModels: ['ANY'],
    downloads: 2456,
    configTemplate: {
      apiKey: 'YOUR_API_KEY',
      baseUrl: 'http://localhost:8000'
    },
    author: 'bolt.diy',
    createdAt: '2024-12-28'
  },
  {
    id: '4',
    name: 'OpenRouter',
    description: 'Access multiple AI models through a unified API gateway.',
    longDescription: `
      Unified access to multiple AI providers:
      • Single API for multiple models
      • Cost optimization
      • Load balancing
      • Usage analytics
      • Flexible deployment
      • Enterprise support
    `,
    website: 'https://openrouter.ai',
    baseModels: ['ANY'],
    downloads: 876,
    configTemplate: {
      apiKey: 'YOUR_API_KEY'
    },
    author: 'bolt.diy',
    createdAt: '2024-12-28'
  },
  {
    id: '5',
    name: 'Deepseek',
    description: 'Advanced language models specialized in technical and scientific tasks.',
    longDescription: `
      High-performance AI models for specialized tasks:
      • Technical documentation
      • Scientific research
      • Code generation
      • Data analysis
      • Technical writing
      • Research assistance
    `,
    website: 'https://deepseek.ai',
    baseModels: ['ANY'],
    downloads: 654,
    configTemplate: {
      apiKey: 'YOUR_API_KEY'
    },
    author: 'bolt.diy',
    createdAt: '2024-12-28'
  },
  {
    id: '6',
    name: 'Cohere',
    description: 'Enterprise-ready language models with customization capabilities.',
    longDescription: `
      Enterprise AI solutions:
      • Custom model training
      • Multilingual support
      • Enterprise security
      • API integration
      • Analytics dashboard
      • Team collaboration
    `,
    website: 'https://cohere.ai',
    baseModels: ['ANY'],
    downloads: 789,
    configTemplate: {
      apiKey: 'YOUR_API_KEY'
    },
    author: 'bolt.diy',
    createdAt: '2024-12-28'
  },
  {
    id: '7',
    name: 'xAI',
    description: 'Next-generation AI models with advanced reasoning capabilities.',
    longDescription: `
      Cutting-edge AI technology:
      • Advanced reasoning
      • Complex problem solving
      • Natural conversation
      • Context understanding
      • Knowledge integration
    `,
    website: 'https://x.ai',
    baseModels: ['ANY'],
    downloads: 543,
    configTemplate: {
      apiKey: 'YOUR_API_KEY'
    },
    author: 'bolt.diy',
    createdAt: '2024-12-28'
  },
  {
    id: '8',
    name: 'Together',
    description: 'Collaborative AI platform with shared resources and model hosting.',
    longDescription: `
      Community-driven AI platform:
      • Model sharing
      • Collaborative training
      • Resource pooling
      • Community support
      • Easy deployment
      • Cost sharing
    `,
    website: 'https://together.ai',
    baseModels: ['ANY'],
    downloads: 678,
    configTemplate: {
      apiKey: 'YOUR_API_KEY'
    },
    author: 'bolt.diy',
    createdAt: '2024-12-28'
  },
  {
    id: '9',
    name: 'Groq',
    description: 'High-performance AI inference with ultra-low latency.',
    longDescription: `
      Lightning-fast AI processing:
      • Ultra-low latency
      • High throughput
      • Scalable infrastructure
      • Enterprise support
      • Performance monitoring
      • Custom optimization
    `,
    website: 'https://groq.com',
    baseModels: ['ANY'],
    downloads: 432,
    configTemplate: {
      apiKey: 'YOUR_API_KEY'
    },
    author: 'bolt.diy',
    createdAt: '2024-12-28'
  },
  {
    id: '10',
    name: 'Perplexity',
    description: 'AI models optimized for natural language understanding and generation.',
    longDescription: `
      Advanced language understanding:
      • Contextual awareness
      • Natural responses
      • Knowledge integration
      • Real-time updates
      • Accurate citations
      • Research capabilities
    `,
    website: 'https://perplexity.ai',
    baseModels: ['ANY'],
    downloads: 567,
    configTemplate: {
      apiKey: 'YOUR_API_KEY'
    },
    author: 'bolt.diy',
    createdAt: '2024-12-28'
  },
  {
    id: '11',
    name: 'HuggingFace',
    description: 'Open-source AI platform with thousands of models and datasets.',
    longDescription: `
      Comprehensive AI ecosystem:
      • Vast model library
      • Open-source community
      • Model hosting
      • Training infrastructure
      • Dataset management
      • Research tools
    `,
    website: 'https://huggingface.co',
    baseModels: ['ANY'],
    downloads: 1543,
    configTemplate: {
      apiKey: 'YOUR_API_KEY'
    },
    author: 'bolt.diy',
    createdAt: '2024-12-28'
  }
];

export const mockFeatures: Feature[] = [
  {
    id: '1',
    name: 'Debug Features',
    description: 'Enable advanced debugging tools and logging system for development and troubleshooting.',
    longDescription: `
      Comprehensive debugging and logging toolkit:
      • Debug Menu Features:
        - Inspect runtime states
        - Test edge cases
        - Monitor performance
        - View system logs
        - Debug configurations
      
      • Logging System Features:
        - Detailed event tracking
        - Error monitoring
        - Performance metrics
        - System diagnostics
        - Debug information
      
      When enabled, this feature adds two new tabs to Settings:
      • Debug Tab: For runtime inspection and testing tools
      • Log Tab: For comprehensive logging and monitoring
      
      To enable this feature:
      1. Open Settings
      2. Navigate to Features section
      3. Toggle "Debug Features" option
    `,
    type: 'debug',
    downloads: 434
  },
  {
    id: '2',
    name: 'Auto Select Code Template',
    description: 'Let Bolt select the best starter template for your project.',
    longDescription: `
      Smart template selection system:
      • Project requirement analysis
      • Best-fit template matching
      • Technology stack optimization
      • Feature set evaluation
      • Customization suggestions
      • Framework compatibility check
      
      To enable this feature:
      1. Open Settings
      2. Navigate to Features section
      3. Toggle "Auto Select Code Template" option
    `,
    type: 'template',
    downloads: 324
  },
  {
    id: '3',
    name: 'Use Context Optimization',
    description: 'Redact file contents from chat and puts the latest file contents on the system prompt.',
    longDescription: `
      Context optimization features:
      • Automatic file content redaction
      • System prompt updates
      • Context management
      • Memory optimization
      • Real-time sync
      • Privacy protection
      
      To enable this feature:
      1. Open Settings
      2. Navigate to Features section
      3. Toggle "Use Context Optimization" option
    `,
    type: 'context',
    downloads: 412
  }
];
