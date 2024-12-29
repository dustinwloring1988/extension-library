import type { Prompt, Provider, Model, Starter } from '../types';

export const mockStarters: Starter[] = [
  {
    id: '1',
    name: 'Next.js AI Chat',
    description: 'A modern AI chat application built with Next.js 14, featuring streaming responses and multiple model support.',
    longDescription: `
      Build a production-ready AI chat application with all the essential features:
      • Server-side streaming with Next.js 14
      • Support for multiple AI providers (OpenAI, Anthropic, etc.)
      • Real-time chat interface with optimistic updates
      • Markdown and code syntax highlighting
      • Mobile-responsive design
      • TypeScript for type safety
      • Tailwind CSS for styling
      • Vercel deployment ready
    `,
    features: [
      'Server-side streaming',
      'Multiple AI providers',
      'Real-time chat interface',
      'Markdown support'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    downloads: 2345,
    author: 'bolt-team',
    preview: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-03-15',
    repoUrl: 'https://github.com/bolt-starter-templates/nextjs-ai-chat'
  },
  {
    id: '2',
    name: 'React Native AI Chat',
    description: 'Cross-platform mobile AI chat app with streaming support and a beautiful UI.',
    longDescription: `
      Create a mobile AI chat application with features like:
      • Cross-platform support (iOS & Android)
      • Real-time message streaming
      • Multiple AI model support
      • Beautiful animations and transitions
      • Offline message storage
      • Dark mode support
      • TypeScript for type safety
      • Expo managed workflow
    `,
    features: [
      'Cross-platform',
      'Message streaming',
      'Offline support',
      'Dark mode'
    ],
    technologies: ['React Native', 'TypeScript', 'Expo', 'AsyncStorage'],
    downloads: 1876,
    author: 'bolt-team',
    preview: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-03-15',
    repoUrl: 'https://github.com/bolt-starter-templates/react-native-ai-chat'
  },
  {
    id: '3',
    name: 'Vue.js AI Chat',
    description: 'Modern AI chat application built with Vue 3 Composition API and TypeScript.',
    longDescription: `
      Build a Vue.js powered AI chat application with features like:
      • Vue 3 Composition API
      • Pinia for state management
      • Real-time message streaming
      • Multiple AI provider support
      • Beautiful UI with animations
      • Dark mode support
      • TypeScript for type safety
      • Vite for fast development
    `,
    features: [
      'Vue 3 Composition API',
      'Message streaming',
      'Multiple providers',
      'Dark mode'
    ],
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Pinia'],
    downloads: 1543,
    author: 'bolt-team',
    preview: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-03-15',
    repoUrl: 'https://github.com/bolt-starter-templates/vue-ai-chat'
  },
  {
    id: '4',
    name: 'Electron AI Chat',
    description: 'Desktop AI chat application with native features and cross-platform support.',
    longDescription: `
      Create a desktop AI chat application with features like:
      • Cross-platform desktop support
      • Native system integration
      • Real-time message streaming
      • Multiple AI model support
      • File system access
      • Custom window controls
      • TypeScript for type safety
      • Auto-updates support
    `,
    features: [
      'Cross-platform desktop',
      'Native integration',
      'Message streaming',
      'Auto-updates'
    ],
    technologies: ['Electron', 'TypeScript', 'React', 'SQLite'],
    downloads: 1234,
    author: 'bolt-team',
    preview: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-03-15',
    repoUrl: 'https://github.com/bolt-starter-templates/electron-ai-chat'
  },
  {
    id: '5',
    name: 'Svelte AI Chat',
    description: 'Lightning-fast AI chat application built with SvelteKit and TypeScript.',
    longDescription: `
      Build a Svelte-powered AI chat application with features like:
      • SvelteKit for full-stack development
      • Real-time message streaming
      • Multiple AI provider support
      • Reactive UI updates
      • Server-side rendering
      • TypeScript for type safety
      • Beautiful animations
      • Dark mode support
    `,
    features: [
      'SvelteKit framework',
      'Message streaming',
      'SSR support',
      'Dark mode'
    ],
    technologies: ['Svelte', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    downloads: 987,
    author: 'bolt-team',
    preview: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-03-15',
    repoUrl: 'https://github.com/bolt-starter-templates/svelte-ai-chat'
  },
  {
    id: '6',
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
    createdAt: '2024-03-15',
    repoUrl: 'https://github.com/dustinwloring1988/twitter-clone'
  },
  {
    id: '7',
    name: 'Open Engineer',
    description: 'An open-source engineering platform for collaborative design and simulation.',
    longDescription: `
      Create a powerful engineering platform with features like:
      • CAD model visualization
      • Engineering calculations
      • Collaborative design tools
      • Version control for designs
      • Material property database
      • Simulation capabilities
      • Project management
      • Documentation system
      • Export to common formats
      • API integration support
    `,
    features: [
      'CAD visualization',
      'Engineering tools',
      'Collaboration',
      'Version control'
    ],
    technologies: ['Three.js', 'WebGL', 'Python', 'FastAPI'],
    downloads: 723,
    author: 'dustinwloring1988',
    preview: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-03-15',
    repoUrl: 'https://github.com/dustinwloring1988/open-engineer'
  },
  {
    id: '8',
    name: 'Open Web Sim',
    description: 'Web-based simulation platform for physics and engineering applications.',
    longDescription: `
      Build an advanced web simulation platform featuring:
      • Real-time physics simulation
      • Interactive 3D visualization
      • Custom simulation parameters
      • Data visualization tools
      • Export simulation results
      • Multiple physics engines
      • Customizable scenarios
      • Recording and playback
      • Performance optimization
      • Mobile responsiveness
    `,
    features: [
      'Physics simulation',
      '3D visualization',
      'Data analysis',
      'Custom scenarios'
    ],
    technologies: ['WebGL', 'Three.js', 'TypeScript', 'Web Workers'],
    downloads: 645,
    author: 'dustinwloring1988',
    preview: 'https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-03-15',
    repoUrl: 'https://github.com/dustinwloring1988/open-web-sim'
  }
];

export const mockPrompts: Prompt[] = [
  {
    id: '1',
    name: 'Advanced Code Review',
    description: 'A comprehensive prompt for detailed code reviews with security and performance considerations.',
    longDescription: `
      This advanced code review prompt helps you:
      • Identify security vulnerabilities
      • Spot performance bottlenecks
      • Suggest architectural improvements
      • Check for best practices
      • Ensure code maintainability
    `,
    systemPrompt: 'You are an expert code reviewer with deep knowledge of software architecture, security best practices, and performance optimization...',
    tags: ['code-review', 'security', 'performance'],
    downloads: 1234,
    author: 'bolt-team',
    createdAt: '2024-03-15'
  },
  {
    id: '2',
    name: 'Technical Documentation',
    description: 'Generate clear and comprehensive technical documentation for code and APIs.',
    longDescription: `
      Generate high-quality technical documentation:
      • API documentation
      • Code documentation
      • Architecture diagrams
      • Usage examples
      • Best practices guides
    `,
    systemPrompt: 'You are a technical writer with expertise in creating clear, concise, and comprehensive documentation...',
    tags: ['documentation', 'api', 'technical-writing'],
    downloads: 987,
    author: 'bolt-team',
    createdAt: '2024-03-15'
  }
];

export const mockProviders: Provider[] = [
  {
    id: '1',
    name: 'OpenAI',
    description: 'Access to GPT-4 and other advanced language models.',
    longDescription: `
      Integration with OpenAI's powerful language models:
      • GPT-4 and GPT-3.5 Turbo support
      • Streaming responses
      • Function calling
      • JSON mode
      • Vision capabilities
    `,
    website: 'https://openai.com',
    baseModels: ['gpt-4', 'gpt-3.5-turbo'],
    downloads: 5678,
    configTemplate: {
      apiKey: '',
      organization: ''
    }
  },
  {
    id: '2',
    name: 'Anthropic',
    description: 'Access to Claude and other Anthropic models.',
    longDescription: `
      Integration with Anthropic's Claude models:
      • Claude 3 Opus and Sonnet support
      • Advanced reasoning capabilities
      • Long context windows
      • Structured output
      • Tool use
    `,
    website: 'https://anthropic.com',
    baseModels: ['claude-3-opus', 'claude-3-sonnet'],
    downloads: 3456,
    configTemplate: {
      apiKey: ''
    }
  }
];

export const mockModels: Model[] = [
  {
    id: '1',
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    description: 'Latest GPT-4 model with enhanced capabilities and larger context window.',
    longDescription: `
      GPT-4 Turbo features:
      • 128k context window
      • Enhanced reasoning capabilities
      • Improved coding abilities
      • Better factual accuracy
      • Lower latency
      • Cost-effective pricing
    `,
    parameters: '1.5 trillion',
    contextWindow: 128000,
    downloads: 3456
  },
  {
    id: '2',
    name: 'Claude 3 Opus',
    provider: 'Anthropic',
    description: 'Most capable Claude model for complex tasks.',
    longDescription: `
      Claude 3 Opus capabilities:
      • 200k context window
      • Superior reasoning
      • Advanced math abilities
      • Multimodal understanding
      • High factual accuracy
      • Structured output
    `,
    parameters: '2 trillion',
    contextWindow: 200000,
    downloads: 2345
  }
];