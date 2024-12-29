import type { Prompt, Provider, Model, Starter } from '../types';

export const mockStarters: Starter[] = [
  {
    id: '1',
    name: 'Twitter Clone',
    description: 'A modern Twitter clone with real-time updates, user authentication, and social features.',
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
      'Real-time updates',
      'User authentication',
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
    description: 'A comprehensive system prompt for Bolt AI with optimized development workflows and best practices.',
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
    baseModels: ['Llama 2', 'Mistral', 'CodeLlama', 'Gemma'],
    downloads: 1234,
    configTemplate: {
      baseUrl: 'http://localhost:11434'
    }
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
    baseModels: ['Mixtral', 'Llama', 'Neural', 'Stable'],
    downloads: 987,
    configTemplate: {
      baseUrl: 'http://localhost:1234'
    }
  },
  {
    id: '3',
    name: 'OpenAI',
    description: 'Access state-of-the-art language models through OpenAI\'s API.',
    longDescription: `
      Industry-leading AI models and capabilities:
      • GPT-4 and GPT-3.5 Turbo
      • Advanced reasoning
      • Code generation
      • Natural language processing
      • Context-aware responses
      • API integration
      • Fine-tuning options
      • Enterprise-grade reliability
    `,
    website: 'https://openai.com',
    baseModels: ['GPT-4', 'GPT-3.5 Turbo'],
    downloads: 2456,
    configTemplate: {
      apiKey: 'YOUR_API_KEY',
      organization: 'YOUR_ORG_ID' // Optional
    }
  }
];

export const mockModels: Model[] = [
  {
    id: '1',
    name: 'Open Router',
    provider: 'Open Router',
    description: 'Access to premium AI models through a unified API (API key required).',
    longDescription: `
      Premium AI models available:
      • GPT-4 Turbo
      • Claude 3 Opus
      • Claude 3 Sonnet
      • Mistral Large
      • Anthropic Claude 2
      • GPT-4 Vision
      • Google PaLM
      • Meta Llama 2
      • Unified API access
      • Pay-as-you-go pricing
    `,
    parameters: 'Various (model dependent)',
    contextWindow: 128000,
    downloads: 1543
  }
];