
# Convenção de Commits

Este documento define o padrão de commits a ser seguido neste projeto para manter a organização e rastreabilidade das mudanças.

## Estrutura Geral do Commit

Cada commit deve seguir a estrutura:

```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

### 1. Tipos de Commits

- **feat**: Introdução de uma nova funcionalidade.
- **fix**: Correção de bugs.
- **chore**: Tarefas de manutenção (ex: atualizações de dependências).
- **docs**: Alterações na documentação.
- **style**: Alterações de estilo e formatação.
- **refactor**: Refatoração de código sem mudança funcional.
- **test**: Adição ou alteração de testes.
- **perf**: Melhoria de performance.
- **build**: Mudanças no sistema de build.
- **ci**: Alterações em pipelines de CI/CD.

### 2. Escopo (Opcional)

- **auth:** Relacionado à autenticação e autorização.
- **ui:** Alterações na interface do usuário.
- **api:** Mudanças na interface de programação de aplicativos.
- **db:** Modificações relacionadas ao banco de dados.
- **build:** Alterações no sistema de build, como configurações de compilação.
- **config:** Mudanças em arquivos de configuração.
- **test:** Alterações ou adições a testes.
- **docs:** Atualizações na documentação.
- **ci:** Modificações em arquivos de integração contínua ou pipelines.
- **style:** Mudanças que afetam apenas o estilo do código, sem alterar a lógica.
- **refactor:** Refatorações de código que não adicionam novos recursos ou corrigem bugs.
- **chore:** Tarefas gerais de manutenção e gerenciamento.

### 3. Descrição

A descrição deve ser curta e direta, no estilo imperativo (como se estivesse completando a frase "este commit irá...").

### 4. Corpo (Opcional)

Use o corpo do commit para fornecer mais detalhes, se necessário. Pode incluir:
- O que foi mudado e por quê.
- Desafios encontrados durante a implementação.

### 5. Rodapé (Opcional)

O rodapé é usado para informações adicionais, como:
- Referências a issues: `Resolves #123`.
- Breaking changes: `BREAKING CHANGE: descrição`.

### Exemplo de Commit

```
feat(api): add authentication middleware

- Implement middleware to handle JWT verification
- Refactor route handling to accommodate new auth layer

BREAKING CHANGE: Routes now require a valid JWT token
```

## Boas Práticas

- Mantenha as descrições curtas e objetivas.
- Use o corpo do commit para explicar o contexto, quando necessário.
- Sempre associe commits a uma issue ou tarefa quando possível.
