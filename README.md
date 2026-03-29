# Vue StarterKit

A modern, scalable Vue 3 starter template designed for real-world applications.
Built with performance, maintainability, and developer experience in mind.

---

## 🚀 Features

- ⚡ Vue 3 + Vite
- 🧱 Feature-Based Architecture
- 🌍 i18n (Internationalization)
- 🎨 shadcn/ui components (Vue port)
- 🧹 OXC for linting & formatting (super fast)
- 📏 ESLint for code quality
- 🧠 Composable-first design
- 📦 Scalable folder structure

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── pages/        # Page-level components
│   ├── config/       # Global configs (env, constants, etc.)
│   └── router/       # Vue Router setup
│
├── assets/
│   ├── main.css      # Global styles
│   ├── images/       # Static images
│   └── fonts/        # Custom fonts
│
├── features/
│   └── example/
│       ├── components/   # Feature-specific UI components
│       ├── composables/  # Feature logic (hooks)
│       └── stores/       # State management (Pinia or similar)
│
├── shared/
│   ├── components/   # Reusable components (global)
│   ├── composables/  # Shared logic
│   ├── ui/           # shadcn components
│   ├── lib/          # Third-party wrappers / services
│   └── utils/        # Utility functions
│
├── i18n/             # Localization translations
│
└── main.ts           # App entry point
```

---

## 🧠 Architecture Philosophy

### Feature-Based Design

Group code by feature instead of type.

Each feature contains:

- UI (components)
- Logic (composables)
- State (stores)

Benefits:

- Scalable structure
- Better separation of concerns
- Easier refactoring

---

### Shared Layer

`shared/` contains reusable logic across the app:

- UI components (buttons, inputs, etc.)
- Utilities
- API clients
- Shared composables

---

### App Layer

`app/` handles global concerns:

- Routing
- Configuration
- Page-level components

---

## 🌍 i18n

All translations are located in:

```text
src/i18n/
```

Usage example:

```ts
const { t } = useI18n()

t('welcome')
```

---

## 🎨 UI (shadcn)

Reusable UI components live in:

```text
src/shared/ui/
```

These components are:

- Accessible
- Customizable
- Design-system friendly

---

## 🧹 Linting & Formatting

### OXC

```bash
npx oxc lint .
npx oxc format .
```

### ESLint

```bash
npx eslint .
```

---

## 🛠️ Development

### Install dependencies

```bash
npm install
```

### Start dev server

```bash
npm run dev
```

### Build

```bash
npm run build
```

---

## 📌 Conventions

- Use composables for reusable logic
- Keep components UI-focused
- Put business logic inside features
- Avoid cross-feature dependencies
- Use `shared/` only for true reuse

---

## 🧩 Example Feature

```text
features/todo/
├── components/
│   └── TodoItem.vue
├── composables/
│   └── useTodo.ts
└── stores/
    └── todo.store.ts
```

---

## 📄 License

MIT
