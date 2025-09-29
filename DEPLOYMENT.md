# Ръководство за внедряване на React приложението

## 🚀 Бързи опции за внедряване

### Опция 1: Netlify (Препоръчано - безплатно)
1. Създай акаунт в [netlify.com](https://netlify.com)
2. Свържи своя GitHub/GitLab repository
3. Настройка на build:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
4. Сайтът ще се внедрява автоматично при всеки commit

### Опция 2: Vercel (безплатно)
1. Създай акаунт в [vercel.com](https://vercel.com)
2. Инсталирай Vercel CLI: `npm i -g vercel`
3. Изпълни `vercel` в директорията на проекта
4. Vercel автоматично ще разпознае React/Vite проекта

### Опция 3: GitHub Pages със GitHub Actions
1. Създай `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Setup Node
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run build
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Опция 4: Docker внедряване
1. Създай `Dockerfile`:
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

## 📦 Build процес

### Локално тестване
```bash
# Инсталирай зависимостите
npm install

# Стартирай development server
npm run dev

# Build за продукция
npm run build

# Тествай build локално
npm run preview
```

### Build оптимизации
- **Bundle анализ**: `npm run build -- --analyze`
- **Gzip компресия**: Автоматично включена
- **Code splitting**: Автоматично за async компоненти
- **Tree shaking**: Автоматично премахва неизползван код

## ⚙️ Environment променливи

Създай `.env` файл за production конфигурация:
```
VITE_API_URL=https://your-api.com
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
VITE_NEWSLETTER_ENDPOINT=https://your-newsletter-api.com
```

## 📝 Чеклист преди внедряване

### Необходими актуализации
- [ ] Замени placeholder изображенията
- [ ] Актуализирай контактната информация
- [ ] Добави истински API endpoints за формите
- [ ] Конфигурирай Google Analytics
- [ ] Актуализирай meta tags и SEO данни
- [ ] Добави favicon файлове в `public/`
- [ ] Тествай всички форми и функционалности

### React-специфични проверки
- [ ] Всички компоненти се рендират правилно
- [ ] TypeScript errors са отстранени
- [ ] Hooks се използват правилно
- [ ] State management работи коректно
- [ ] Форми валидират данните

## 📧 Настройка на форми

### Backend API интеграция
Актуализирай `onSubmit` функциите в:
- `src/components/sections/Newsletter.tsx`
- `src/components/sections/Contact.tsx`

Замени placeholder API логиката:
```typescript
// Замени с истински API call
const response = await fetch('/api/newsletter', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

### Алтернативни решения без backend
1. **Netlify Forms**: Добави `netlify` атрибут
2. **Formspree**: Интегрирай с тяхното API
3. **EmailJS**: Client-side имейл изпращане

## 🔧 Настройка на персонализиран домейн

### DNS конфигурация
```
A Record: @ → IP адреса на хостинга
CNAME: www → твоя-домейн.com
```

### Vite конфигурация за production
Актуализирай `vite.config.ts` за персонализиран домейн:
```typescript
export default defineConfig({
  base: '/', // За root домейн
  // base: '/repository-name/' за GitHub Pages
})
```

## 📊 Настройка на анализи

### Google Analytics 4
1. Инсталирай gtag: `npm install gtag`
2. Създай Analytics контекст:
```typescript
// src/hooks/useAnalytics.ts
import { gtag } from 'gtag';

export const useAnalytics = () => {
  const trackEvent = (action: string, category: string) => {
    gtag('event', action, { event_category: category });
  };
  
  return { trackEvent };
};
```

## 🛡️ Performance оптимизация

### Code Splitting
```typescript
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### Image оптимизация
- Използвай WebP формат
- Имплементирай lazy loading
- Добави responsive изображения

## 📱 Тестов чеклист

### React-специфични тестове
- [ ] Всички компоненти се mount-ват без грешки
- [ ] State updates работят правилно
- [ ] Event handlers се извикват коректно
- [ ] Props се предават правилно между компоненти
- [ ] Scroll animations работят (useScrollReveal hook)

### Общи тестове
- [ ] Мобилна отзивчивост
- [ ] Кросбраузърна съвместимост  
- [ ] Достъпност (a11y)
- [ ] SEO оптимизация
- [ ] Скорост на зареждане

## 🔄 CI/CD пайплайн

### GitHub Actions пример
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run build
    - run: npm run lint
    
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run build
    - name: Deploy to production
      run: echo "Deploy to your hosting provider"
```

## 🚨 Troubleshooting

### Често срещани проблеми
1. **TypeScript errors**: Провери type imports
2. **Build failures**: Проверки за неизползвани imports
3. **Router issues**: Увери се, че base path е правилно настроен
4. **API calls**: Провери CORS настройките

### Debug команди
```bash
# Type checking
npx tsc --noEmit

# Bundle анализ
npm run build -- --analyze

# Preview build
npm run preview
```

---

**Готово за production!** React приложението е оптимизирано и готово за внедряване. Следвай чеклиста и избери предпочитания метод за хостинг.