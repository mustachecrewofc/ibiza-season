import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import "../styles.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Mustache Gang World Cup 2026" },
      {
        name: "description",
        content:
          "Apps da Lovable já saem prontos para busca, encontráveis no Google e em ferramentas de IA como ChatGPT, Claude e Perplexity. Sem precisar saber SEO.",
      },
      { property: "og:title", content: "Mustache Gang World Cup 2026" },
      { name: "twitter:title", content: "Mustache Gang World Cup 2026" },
      { name: "description", content: "Build and iterate on single-page websites by connecting GitHub repositories and applying content updates." },
      { property: "og:description", content: "Build and iterate on single-page websites by connecting GitHub repositories and applying content updates." },
      { name: "twitter:description", content: "Build and iterate on single-page websites by connecting GitHub repositories and applying content updates." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/64a4d6cf-97a9-436a-8da4-a9a47c1cac42/id-preview-04531350--248185b9-ef74-49a0-b694-2fdb3bfbf0f3.lovable.app-1778861282383.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/64a4d6cf-97a9-436a-8da4-a9a47c1cac42/id-preview-04531350--248185b9-ef74-49a0-b694-2fdb3bfbf0f3.lovable.app-1778861282383.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}

export type RootChildren = { children: ReactNode };