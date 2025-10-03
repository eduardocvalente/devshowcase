export const projects = [
  {
    id: 1,
    title: "Gateway de Pagamento - DNL Comércio",
    description: "Plataforma de gateway de pagamento desenvolvida durante minha experiência na DNL Comércio, utilizando .NET Core e microsserviços para processamento seguro de transações financeiras.",
    technologies: [".NET Core", "C#", "PostgreSQL", "SQL Server", "Redis", "Docker", "xUnit", "Swagger"],
    category: "Backend",
    featured: true,
    github: "https://github.com/eduardocvalente",
    demo: null,
    company: "DNL Comércio E Serviços LTDA",
    period: "Out/2024 - Fev/2025",
    image: "/projects/gateway-payment.jpg",
    highlights: [
      "Desenvolvimento em arquitetura de microsserviços",
      "APIs RESTful com .NET Core e Minimal APIs",
      "Otimização de consultas SQL para PostgreSQL e SQL Server", 
      "Testes unitários e integração com xUnit, Moq e FluentAssertions",
      "Aplicação de SOLID, Clean Code e Design Patterns"
    ]
  },
  {
    id: 2,
    title: "Plataforma LOCAVIBE - Sistema de Locações",
    description: "Desenvolvimento full-stack da plataforma de locações LOCAVIBE, atuando na criação de telas responsivas e melhorias no backend para maior performance e escalabilidade.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "TypeScript", "Sass", "Tailwind CSS"],
    category: "Full-stack",
    featured: true,
    github: "https://github.com/eduardocvalente",
    demo: null,
    company: "LOCAVIBE LOCAÇÕES LTDA",
    period: "Mar/2025 - Jul/2025",
    image: "/projects/locavibe.jpg",
    highlights: [
      "Domínio sobre Garbage Collector do Node.js para alta performance",
      "Desenvolvimento de APIs RESTful com Node.js e Express",
      "Otimização de consultas MongoDB para escalabilidade",
      "Interface responsiva com React e Sass (SCSS)",
      "Implementação de comunicação assíncrona baseada em eventos"
    ]
  },
  {
    id: 3,
    title: "Sistema ERP - Inforsystem",
    description: "Desenvolvimento e manutenção de software ERP com foco em .NET/C#, incluindo otimização de banco de dados e implementação de soluções em nuvem.",
    technologies: [".NET Core", "C#", "Firebird", "SQL", "Git", "Azure", "MVC"],
    category: "Full-stack",
    featured: true,
    company: "Inforsystem Tecnologia e Participações Ltda",
    period: "Out/2023 - Set/2024",
    github: "https://github.com/eduardocvalente",
    demo: null,
    image: "/projects/erp-system.jpg",
    highlights: [
      "Criação e otimização de consultas SQL para bancos relacionais",
      "Testes unitários e validação de software",
      "Gerenciamento com GitFlow para controle de branches",
      "Desenvolvimento de soluções escaláveis em nuvem",
      "Aplicação de Padrões de Projeto e Arquitetura MVC"
    ]
  },
  {
    id: 4,
    title: "API de E-commerce com Java Spring Boot",
    description: "Projeto pessoal de uma API completa para e-commerce, desenvolvida com Java Spring Boot, demonstrando conhecimentos em arquitetura enterprise e boas práticas.",
    technologies: ["Java", "Spring Boot", "Spring Security", "Hibernate/JPA", "PostgreSQL", "Maven", "JUnit"],
    category: "Backend",
    featured: false,
    github: "https://github.com/eduardocvalente",
    demo: null,
    isPersonal: true,
    image: "/projects/ecommerce-api.jpg",
    highlights: [
      "Autenticação e autorização com Spring Security e JWT",
      "Relacionamentos complexos com Hibernate/JPA",
      "Validação de dados com Bean Validation",
      "Documentação completa com Swagger/OpenAPI",
      "Testes unitários com JUnit e Mockito"
    ]
  },
  {
    id: 5,
    title: "Sistema de Controle Financeiro",
    description: "Aplicação pessoal para controle de finanças pessoais, desenvolvida com .NET Core no backend e React no frontend, aplicando conhecimentos de contabilidade.",
    technologies: [".NET Core", "Entity Framework", "React", "TypeScript", "PostgreSQL", "Chart.js"],
    category: "Full-stack",
    featured: false,
    github: "https://github.com/eduardocvalente",
    demo: null,
    isPersonal: true,
    image: "/projects/financial-control.jpg",
    highlights: [
      "Integração de conhecimentos de Ciências Contábeis com programação",
      "Dashboard com gráficos interativos usando Chart.js",
      "Relatórios financeiros automatizados",
      "Categorização inteligente de gastos",
      "Interface responsiva com React e TypeScript"
    ]
  },
  {
    id: 6,
    title: "Microserviços com Spring Cloud",
    description: "Projeto de estudo implementando arquitetura de microsserviços com Spring Cloud, explorando service discovery, circuit breaker e distributed tracing.",
    technologies: ["Java", "Spring Boot", "Spring Cloud", "Docker", "RabbitMQ", "PostgreSQL", "Eureka"],
    category: "Backend",
    featured: false,
    github: "https://github.com/eduardocvalente",
    demo: null,
    isPersonal: true,
    image: "/projects/microservices.jpg",
    highlights: [
      "Service Discovery com Eureka Server",
      "Circuit Breaker pattern com Hystrix",
      "Message Broker com RabbitMQ",
      "Distributed Tracing com Spring Cloud Sleuth",
      "Containerização com Docker"
    ]
  },
  {
    id: 7,
    title: "Portfolio Profissional",
    description: "Este próprio portfólio desenvolvido com React, TypeScript e Tailwind CSS, demonstrando habilidades modernas de frontend e design responsivo.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Sass"],
    category: "Frontend",
    featured: false,
    github: "https://github.com/eduardocvalente",
    demo: "https://eduardocvalente.github.io/devshowcase",
    isPersonal: true,
    image: "/projects/portfolio.jpg",
    highlights: [
      "Design responsivo com Tailwind CSS",
      "Componentes reutilizáveis em TypeScript",
      "Integração de dados dinâmicos",
      "Performance otimizada com Vite",
      "Deploy automatizado no GitHub Pages"
    ]
  },
  {
    id: 8,
    title: "Sistema de Auditoria Digital",
    description: "Projeto conceitual baseado no MBA em Auditoria Digital, focando na automação de processos contábeis e análise de dados financeiros.",
    technologies: ["Python", "Pandas", "SQLAlchemy", "Flask", "PostgreSQL", "Excel"],
    category: "Backend",
    featured: false,
    github: "https://github.com/eduardocvalente",
    demo: null,
    isPersonal: true,
    image: "/projects/audit-system.jpg",
    highlights: [
      "Automação de processos contábeis",
      "Análise de dados financeiros com Pandas",
      "Integração com planilhas Excel",
      "Relatórios de auditoria automatizados",
      "Aplicação de conhecimentos do MBA em Auditoria Digital"
    ]
  }
];

export const projectCategories = [
  "Todos",
  "Backend", 
  "Full-stack",
  "Frontend",
  "Java",
  ".NET",
  "Node.js",
  "Profissional",
  "Pessoal"
];

export const techStack = {
  java: {
    name: "Java",
    color: "bg-red-100 text-red-800",
    icon: "☕"
  },
  springboot: {
    name: "Spring Boot", 
    color: "bg-green-100 text-green-800",
    icon: "🍃"
  },
  dotnet: {
    name: ".NET Core",
    color: "bg-purple-100 text-purple-800", 
    icon: "🔷"
  },
  nodejs: {
    name: "Node.js",
    color: "bg-green-100 text-green-800",
    icon: "🟢"
  },
  react: {
    name: "React",
    color: "bg-blue-100 text-blue-800",
    icon: "⚛️"
  },
  typescript: {
    name: "TypeScript",
    color: "bg-blue-100 text-blue-800",
    icon: "📘"
  },
  docker: {
    name: "Docker",
    color: "bg-cyan-100 text-cyan-800",
    icon: "🐳"
  },
  postgresql: {
    name: "PostgreSQL",
    color: "bg-indigo-100 text-indigo-800",
    icon: "🐘"
  }
};