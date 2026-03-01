# API-DEMIC CONVENTIONS

---

## NAMING

| Thing | Convention | Example |
|---|---|---|
| Files & Folders | kebab-case | `user-profile.tsx`, `api-client.ts` |
| Components | PascalCase | `UserProfile.tsx`, `RequestPanel.tsx` |
| Hooks | camelCase + use | `useWebSocket.ts`, `useCollection.ts` |
| Types & Interfaces | PascalCase | `type UserProfile`, `interface ApiRequest` |
| Enums | PascalCase | `enum RequestMethod` |
| Enum Values | SCREAMING_SNAKE | `GET`, `POST`, `DELETE` |
| Global Variables | SCREAMING_SNAKE | `MAX_RETRIES`, `API_BASE_URL` |
| Constants | SCREAMING_SNAKE | `DEFAULT_TIMEOUT` |
| Server Actions | camelCase | `createCollection.ts`, `deleteRequest.ts` |
| API Routes | kebab-case | `/api/user-profile`, `/api/api-keys` |
| Webhooks | kebab-case | `/api/webhooks/stripe-events` |
| Zod Schemas | camelCase + Schema | `userSchema`, `requestSchema` |
| Zustand Stores | camelCase + Store | `collectionStore`, `requestStore` |
| Markdown Files | SCREAMING_SNAKE | `CLEANING.md`, `CHANGELOG.md` |

---

## STRUCTURE

```
src/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (marketing)/
│   │   └── page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   └── dashboard/
│   ├── api/
│   │   ├── auth/
│   │   ├── collections/
│   │   ├── requests/
│   │   └── webhooks/
│   └── layout.tsx
│
├── components/
│   ├── ui/
│   ├── shared/
│   └── features/
│       ├── collections/
│       ├── requests/
│       ├── ai/
│       └── collaboration/
│
├── lib/
│   ├── auth.ts
│   ├── db.ts
│   └── utils.ts
│
├── hooks/
├── stores/
├── types/
├── actions/
└── config/
```

- Route groups `(auth)` `(marketing)` `(dashboard)` keep layouts isolated
- Every feature owns its components inside `features/`
- Server actions live in `actions/` never inside components
- All third party config lives in `lib/`
- Zustand stores live in `stores/`
- All global types live in `types/`

---

## CODE STYLE

### Imports Order
1. React / Next.js
2. Third party packages
3. Internal `@/components`
4. Internal `@/lib`
5. Internal `@/types`
6. Relative imports

### Component Structure Order
1. Types/interfaces for that component
2. Component function
3. Hooks
4. Derived state
5. Handlers
6. Return JSX

### TypeScript
- No `any` ever
- All props explicitly typed
- All server action return types explicitly typed
- Use `type` for objects, `interface` for extendable shapes

### Functions
- Arrow functions for components and callbacks
- Named exports for components
- Default export only at page level

### Server Actions
- Always validate with zod before anything else
- Always return `{ success, data, error }` shape

### Environment Variables
- All in `config/env.ts` validated with zod at startup
- Never access `process.env` directly outside of `config/env.ts`

### Never
- No `any`
- No barrel `index.ts` re-exports
- No inline styles
- No hardcoded strings, use constants
- No commented out code committed
- No `console.log` committed

---

## GIT

### Branch Names
- `feat/feature-name`
- `fix/bug-name`
- `chore/task-name`
- `refactor/what-you-refactored`

### Commit Messages
- `feat: add collection sharing`
- `fix: websocket reconnect on tab focus`
- `chore: clean up hero section`
- `refactor: move auth logic to lib/auth`
- `style: fix button alignment on mobile`

### Rules
- One thing per commit
- Present tense, lowercase
- No period at end
- Branch off `main`, PR back to `main`