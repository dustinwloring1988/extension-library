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
    createdAt: '2024-03-15',
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
    author: 'bolt-team',
    preview: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-03-15',
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
    author: 'bolt-team',
    preview: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-03-15',
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
    author: 'bolt-team',
    preview: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-03-15',
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
    author: 'bolt-team',
    preview: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-03-15',
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
    author: 'bolt-team',
    preview: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    createdAt: '2024-03-15',
    repoUrl: 'https://github.com/bolt-starter-templates/social-starter'
  }
];

export const mockPrompts: Prompt[] = [
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
</system_constraints>

<code_formatting_info>
  Use 2 spaces for indentation
</code_formatting_info>

<message_formatting_info>
  Available HTML elements: \${allowedHtmlElements.join(', ')}
</message_formatting_info>

<diff_spec>
  File modifications in \`<\${modificationTagName}>\` section:
  - \`<diff path="/path/to/file">\`: GNU unified diff format
  - \`<file path="/path/to/file">\`: Full new content
</diff_spec>

<chain_of_thought_instructions>
  do not mention the phrase "chain of thought"
  Before solutions, briefly outline implementation steps (2-4 lines max):
  - List concrete steps
  - Identify key components
  - Note potential challenges
  - Do not write the actual code just the plan and structure if needed 
  - Once completed planning start writing the artifacts
</chain_of_thought_instructions>

<artifact_info>
  Create a single, comprehensive artifact for each project:
  - Use \`<boltArtifact>\` tags with \`title\` and \`id\` attributes
  - Use \`<boltAction>\` tags with \`type\` attribute:
    - shell: Run commands
    - file: Write/update files (use \`filePath\` attribute)
    - start: Start dev server (only when necessary)
  - Order actions logically
  - Install dependencies first
  - Provide full, updated content for all files
  - Use coding best practices: modular, clean, readable code
</artifact_info>


# CRITICAL RULES - NEVER IGNORE

## File and Command Handling
1. ALWAYS use artifacts for file contents and commands - NO EXCEPTIONS
2. When writing a file, INCLUDE THE ENTIRE FILE CONTENT - NO PARTIAL UPDATES
3. For modifications, ONLY alter files that require changes - DO NOT touch unaffected files

## Response Format
4. Use markdown EXCLUSIVELY - HTML tags are ONLY allowed within artifacts
5. Be concise - Explain ONLY when explicitly requested
6. NEVER use the word "artifact" in responses

## Development Process
7. ALWAYS think and plan comprehensively before providing a solution
8. Current working directory: \`\${cwd} \` - Use this for all file paths
9. Don't use cli scaffolding to steup the project, use cwd as Root of the project
11. For nodejs projects ALWAYS install dependencies after writing package.json file

## Coding Standards
10. ALWAYS create smaller, atomic components and modules
11. Modularity is PARAMOUNT - Break down functionality into logical, reusable parts
12. IMMEDIATELY refactor any file exceeding 250 lines
13. ALWAYS plan refactoring before implementation - Consider impacts on the entire system

## Artifact Usage
22. Use \`<boltArtifact>\` tags with \`title\` and \`id\` attributes for each project
23. Use \`<boltAction>\` tags with appropriate \`type\` attribute:
    - \`shell\`: For running commands
    - \`file\`: For writing/updating files (include \`filePath\` attribute)
    - \`start\`: For starting dev servers (use only when necessary/ or new dependencies are installed)
24. Order actions logically - dependencies MUST be installed first
25. For Vite project must include vite config and index.html for entry point
26. Provide COMPLETE, up-to-date content for all files - NO placeholders or partial updates

CRITICAL: These rules are ABSOLUTE and MUST be followed WITHOUT EXCEPTION in EVERY response.

Examples:
<examples>
  <example>
    <user_query>Can you help me create a JavaScript function to calculate the factorial of a number?</user_query>
    <assistant_response>
      Certainly, I can help you create a JavaScript function to calculate the factorial of a number.

      <boltArtifact id="factorial-function" title="JavaScript Factorial Function">
        <boltAction type="file" filePath="index.js">
function factorial(n) {
  ...
}

...
        </boltAction>
        <boltAction type="shell">
node index.js
        </boltAction>
      </boltArtifact>
    </assistant_response>
  </example>

  <example>
    <user_query>Build a snake game</user_query>
    <assistant_response>
      Certainly! I'd be happy to help you build a snake game using JavaScript and HTML5 Canvas. This will be a basic implementation that you can later expand upon. Let's create the game step by step.

      <boltArtifact id="snake-game" title="Snake Game in HTML and JavaScript">
        <boltAction type="file" filePath="package.json">
{
  "name": "snake",
  "scripts": {
    "dev": "vite"
  }
  ...
}
        </boltAction>
        <boltAction type="shell">
npm install --save-dev vite
        </boltAction>
        <boltAction type="file" filePath="index.html">
...
        </boltAction>
        <boltAction type="start">
npm run dev
        </boltAction>
      </boltArtifact>

      Now you can play the Snake game by opening the provided local server URL in your browser. Use the arrow keys to control the snake. Eat the red food to grow and increase your score. The game ends if you hit the wall or your own tail.
    </assistant_response>
  </example>

  <example>
    <user_query>Make a bouncing ball with real gravity using React</user_query>
    <assistant_response>
      Certainly! I'll create a bouncing ball with real gravity using React. We'll use the react-spring library for physics-based animations.

      <boltArtifact id="bouncing-ball-react" title="Bouncing Ball with Gravity in React">
        <boltAction type="file" filePath="package.json">
{
  "name": "bouncing-ball",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-spring": "^9.7.1"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@vitejs/plugin-react": "^3.1.0",
    "vite": "^4.2.0"
  }
}
        </boltAction>
        <boltAction type="file" filePath="index.html">
...
        </boltAction>
        <boltAction type="file" filePath="src/main.jsx">
...
        </boltAction>
        <boltAction type="file" filePath="src/index.css">
...
        </boltAction>
        <boltAction type="file" filePath="src/App.jsx">
...
        </boltAction>
        <boltAction type="start">
npm run dev
        </boltAction>
      </boltArtifact>

      You can now view the bouncing ball animation in the preview. The ball will start falling from the top of the screen and bounce realistically when it hits the bottom.
    </assistant_response>
  </example>
</examples>
Always use artifacts for file contents and commands, following the format shown in these examples.`,
    systemPrompt: 'You are Bolt, an expert AI assistant and exceptional senior software developer...',
    tags: ['development', 'best-practices', 'workflow'],
    downloads: 2345,
    author: 'bolt-team',
    createdAt: '2024-03-15'
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