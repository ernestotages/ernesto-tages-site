# Pré-visualização das Meta Tags SEO - Ernesto Tages

Este documento apresenta uma pré-visualização de como as meta tags estratégicas aparecerão quando o site for partilhado nas redes sociais (Facebook, LinkedIn, Twitter, etc.).

---

## 🏠 Home Page

**URL:** `https://ernestotages.com/`

### Browser Tab
```
Liderança Ética e Clareza Decisional | Ernesto Tages
```

### Meta Description (Google Search)
```
Um espaço onde rigor e reflexão se transformam em clareza e energia para a ação ética.
```

### Social Media Preview (Facebook, LinkedIn, WhatsApp)
**Título:** Liderança Ética e Clareza Decisional  
**Descrição:** Rigor, reflexão e integridade ao serviço de líderes que decidem com consciência.  
**Imagem:** [og-image.png] - Composição visual com linhas fluidas magenta representando transformação

---

## 👤 About Page

**URL:** `https://ernestotages.com/about`

### Browser Tab
```
Sobre Ernesto Tages | Mentor de Líderes Éticos
```

### Meta Description (Google Search)
```
Autor e mentor dedicado a formar líderes que decidem com rigor, reflexão e integridade.
```

### Social Media Preview
**Título:** Conhece Ernesto Tages, Mentor de Líderes Éticos  
**Descrição:** Mais de 25 anos a apoiar executivos na construção de clareza decisional e liderança ética.  
**Imagem:** [og-image.png]

---

## 🧭 Services Page

**URL:** `https://ernestotages.com/services`

### Browser Tab
```
Consultoria e Conferências em Liderança Ética | Ernesto Tages
```

### Meta Description (Google Search)
```
Programas individuais e seminários que unem rigor intelectual, gestão emocional e ação ética.
```

### Social Media Preview
**Título:** Serviços de Consultoria e Conferências em Ética e Liderança  
**Descrição:** Apoio estratégico para líderes que enfrentam dilemas complexos e procuram decidir com integridade.  
**Imagem:** [og-image.png]

---

## 📚 Resources Page

**URL:** `https://ernestotages.com/resources`

### Browser Tab
```
Recursos de Reflexão e Liderança Ética | Ernesto Tages
```

### Meta Description (Google Search)
```
Ensaios, artigos e ferramentas para cultivar clareza, consciência e liderança ética.
```

### Social Media Preview
**Título:** Recursos para Líderes Éticos  
**Descrição:** Textos e reflexões que transformam complexidade em clareza e energia para agir.  
**Imagem:** [og-image.png]

---

## ✉️ Contact Page

**URL:** `https://ernestotages.com/contact`

### Browser Tab
```
Contacta Ernesto Tages | Consultoria em Liderança Ética
```

### Meta Description (Google Search)
```
Entra em contacto para explorar programas de decisão ética e liderança consciente.
```

### Social Media Preview
**Título:** Fala com Ernesto Tages  
**Descrição:** Cria um espaço de rigor e reflexão para decisões com integridade e clareza.  
**Imagem:** [og-image.png]

---

## 🎨 Open Graph Image (og:image)

**Dimensões:** 1200 × 630 px  
**Localização:** `/public/og-image.png`  
**Formato:** PNG

**Descrição visual:**
- Fundo branco/cinza claro minimalista
- Linhas fluidas em magenta (#D9307E) representando transformação de complexidade em clareza
- Logo "Ernesto Tages" em fonte serif elegante (Cormorant Garamond)
- Subtítulo "ETHICAL LEADERSHIP CONSULTANCY"
- Design arquitetónico com generoso espaço em branco
- Transmite: rigor intelectual, reflexão profunda, integridade ética

---

## ✅ Implementação Técnica

Todas as páginas utilizam o componente `<SEO>` com react-helmet-async para gestão dinâmica das meta tags:

- ✅ `<title>` - Título da página (aparece no browser tab)
- ✅ `<meta name="description">` - Descrição para motores de busca
- ✅ `<meta property="og:type">` - Tipo de conteúdo (website)
- ✅ `<meta property="og:title">` - Título para redes sociais
- ✅ `<meta property="og:description">` - Descrição para redes sociais
- ✅ `<meta property="og:image">` - Imagem para redes sociais
- ✅ `<meta property="twitter:card">` - Formato de card do Twitter
- ✅ `<meta property="twitter:title">` - Título para Twitter
- ✅ `<meta property="twitter:description">` - Descrição para Twitter
- ✅ `<meta property="twitter:image">` - Imagem para Twitter

---

## 🧪 Como Testar

### Ferramentas de Pré-visualização Online:

1. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Cole o URL do site e clique em "Debug"
   - Verifica como aparecerá no Facebook, LinkedIn, WhatsApp

2. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Cole o URL e clique em "Preview card"
   - Verifica como aparecerá no Twitter/X

3. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/
   - Cole o URL para ver pré-visualização no LinkedIn

4. **Open Graph Check**
   - URL: https://www.opengraph.xyz/
   - Ferramenta universal para verificar todas as meta tags

### Teste Manual:
1. Partilhe o URL numa mensagem privada do WhatsApp ou Telegram
2. A pré-visualização deve mostrar a imagem og-image.png com título e descrição

---

## 📊 Impacto Esperado

**SEO (Motores de Busca):**
- Títulos optimizados com palavras-chave estratégicas
- Descrições que comunicam claramente o posicionamento
- Melhor CTR (Click-Through Rate) nos resultados de pesquisa

**Social Media:**
- Partilhas visualmente atraentes com imagem personalizada
- Mensagem consistente com o posicionamento estratégico
- Maior engagement e profissionalismo nas partilhas

**Branding:**
- Reforço da identidade visual (magenta, tipografia, minimalismo)
- Comunicação coerente do lema: "rigor e reflexão → clareza e ação ética"
- Posicionamento como mentor de líderes éticos

---

## ⚠️ Notas Importantes

1. **Textos preservados:** Todas as descrições foram implementadas **exatamente** como fornecidas pelo assessor de marketing, sem simplificações ou alterações de tom.

2. **Imagem consistente:** A og:image utiliza a mesma paleta de cores (#D9307E magenta) e estilo visual do site.

3. **Cache de redes sociais:** Após publicação, as redes sociais podem demorar algumas horas a actualizar o cache. Use as ferramentas de debug acima para forçar actualização.

4. **URL absoluto:** Após publicação no domínio final, actualizar o `ogImage` para URL absoluto (ex: `https://ernestotages.com/og-image.png`) para garantir que a imagem apareça correctamente.

---

**Status:** ✅ Implementação completa e pronta para publicação
