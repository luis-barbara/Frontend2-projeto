# Frontend2-Projeto


## 📂 Estrutura do Projeto

```bash
.
├── app
│   ├── (marketing)                # Landing page (SEO)
│   │   ├── layout.tsx
│   │   ├── page.tsx               # Home / Landing
│   │   ├── pricing/page.tsx
│   │   ├── features/page.tsx
│   │   └── docs/page.tsx          # Documentação pública (opcional)
│   │
│   ├── (auth)                     # Autenticação
│   │   ├── layout.tsx
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   └── reset-password/page.tsx
│   │
│   ├── (app)                      # Backoffice (rotas protegidas)
│   │   ├── layout.tsx             # Sidebar + Topbar
│   │   ├── page.tsx               # Dashboard
│   │   └── projects
│   │       ├── page.tsx           # Lista de projetos
│   │       └── [projectId]
│   │           ├── layout.tsx     # Contexto do projeto
│   │           ├── overview/page.tsx
│   │           ├── conversations/page.tsx
│   │           ├── tickets/page.tsx
│   │           ├── analytics/page.tsx
│   │           ├── knowledge-base/page.tsx
│   │           ├── billing/page.tsx
│   │           └── settings/page.tsx
│   │
│   ├── (public)                   # Rotas públicas
│   │   ├── chat/[projectKey]/page.tsx
│   │   └── widget-preview/page.tsx
│   │
│   └── api                        # API Routes
│       ├── auth/[...]/route.ts
│       ├── public/chat/route.ts
│       ├── public/widget-config/route.ts
│       ├── tickets/route.ts
│       ├── tickets/[id]/route.ts
│       ├── conversations/route.ts
│       ├── knowledge/route.ts
│       ├── analytics/route.ts
│       └── billing/route.ts
│
├── components
│   ├── ui
│   ├── layout
│   ├── chat
│   ├── tickets
│   ├── pricing
│   └── forms
│
├── hooks
│   ├── useTickets.ts
│   ├── useConversations.ts
│   └── useKnowledge.ts
│
├── lib
│   ├── db/prisma.ts
│   ├── services
│   │   ├── ticket-service.ts
│   │   ├── conversation-service.ts
│   │   ├── knowledge-service.ts
│   │   └── analytics-service.ts
│   ├── auth.ts
│   ├── billing.ts
│   ├── classifier.ts
│   ├── analytics.ts
│   └── constants.ts
│
├── prisma/schema.prisma
├── types/index.ts
├── public/widget.js
├── middleware.ts
├── tailwind.config.ts
└── README.md
```

