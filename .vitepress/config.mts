import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
   title: "pgexporter",
   description: "Documentation website for pgexporter",
   themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
         { text: "Home", link: "/" },
         { text: "About", link: "/about.md" },
         {
            text: "Guide",
            link: "/guide/pgexporter/installation.md",
         },
         { text: "Docs", link: "/docs/pgexporter/pgexporter.md" },
         { text: "News", link: "/news" },
         { text: "Releases", link: "/releases" },
      ],

      footer: {
         message:
            "<span class='vp-doc'><a href='https://pgexporter.github.io/'>Prometheus exporter</a></span> for <span class='vp-doc'><a href='https://www.postgresql.org/'>PostgreSQL</a></span>",
         copyright:
            "© 2023 <span class='vp-doc'><a href='https://www.redhat.com/'>Red Hat</a></span> (<span class='vp-doc'><a href='http://creativecommons.org/licenses/by/4.0/'>CC BY 4.0</a></span>)",
      },

      sidebar: [
         {
            text: "About",
            link: "/about.md",
            items: [
               {
                  text: "pgexporter",
                  link: "/pgexporter.md",
               },
               {
                  text: "pgexporter_ext",
                  link: "/pgexporter_ext.md",
               },
            ],
         },
         {
            text: "Getting Started",
            items: [
               {
                  text: "pgexporter",
                  collapsed: false,
                  items: [
                     {
                        text: "Installation",
                        link: "/guide/pgexporter/installation",
                     },
                     {
                        text: "Configuration",
                        link: "/guide/pgexporter/configuration",
                     },
                     {
                        text: "Metrics",
                        link: "/guide/pgexporter/metrics",
                     },
                     {
                        text: "Shell Completions",
                        link: "/guide/pgexporter/shell_completions",
                     },
                     {
                        text: "Prometheus",
                        link: "/guide/pgexporter/prometheus"
                     },
                     {
                        text: "Grafana",
                        link: "/guide/pgexporter/grafana"
                     }
                  ],
               },
               {
                  text: "pgexporter_ext",
                  collapsed: true,
                  items: [
                     {
                        text: "Installation",
                        link: "/guide/pgexporter_ext/installation.md",
                     },
                  ],
               },
            ],
         },
         {
            text: "Documentation",
            items: [
               {
                  text: "pgexporter",
                  collapsed: false,
                  items: [
                     {
                        text: "Command Line Flags",
                        link: "/docs/pgexporter/command_line_flags.md",
                     },
                     {
                        text: "Metrics",
                        link: "/docs/pgexporter/metrics.md",
                     },
                     {
                        text: "Configuration",
                        link: "/docs/pgexporter/configuration.md",
                     },
                  ],
               },
               {
                  text: "pgexporter-admin",
                  link: "/docs/pgexporter_admin.md",
               },
               {
                  text: "pgexporter-cli",
                  link: "/docs/pgexporter_cli.md",
               },
               {
                  text: "pgexporter_ext",
                  link: "/docs/pgexporter_ext/pgexporter_ext.md",
                  collapsed: true,
                  items: [
                     {
                        text: "Available Functions",
                        link: "/docs/pgexporter_ext/functions.md",
                     },
                  ],
               },
            ],
         },
         {
            text: "Releases",
            link: "/releases",
            items: [
               {
                  text: "pgexporter",
                  collapsed: true,
                  items: [
                     {
                        text: "pgexporter 0.4.0",
                        link: "/releases/pgexporter_0_4_0",
                     },
                     {
                        text: "pgexporter 0.3.2",
                        link: "/releases/pgexporter_0_3_2",
                     },
                     {
                        text: "pgexporter 0.3.1",
                        link: "/releases/pgexporter_0_3_1",
                     },
                     {
                        text: "pgexporter 0.3.0",
                        link: "/releases/pgexporter_0_3_0",
                     },
                     {
                        text: "pgexporter 0.2.3",
                        link: "/releases/pgexporter_0_2_3",
                     },
                     {
                        text: "pgexporter 0.2.2",
                        link: "/releases/pgexporter_0_2_2",
                     },
                     {
                        text: "pgexporter 0.2.1",
                        link: "/releases/pgexporter_0_2_1",
                     },
                     {
                        text: "pgexporter 0.2.0",
                        link: "/releases/pgexporter_0_2_0",
                     },
                     {
                        text: "pgexporter 0.1.0",
                        link: "/releases/pgexporter_0_1_0",
                     },
                  ],
               },
               {
                  text: "pgexporter_ext",
                  collapsed: true,
                  items: [
                     {
                        text: "pgexporter_ext 0.2.2",
                        link: "/releases/pgexporter_ext_0_2_2",
                     },
                     {
                        text: "pgexporter_ext 0.2.1",
                        link: "/releases/pgexporter_ext_0_2_1",
                     },
                     {
                        text: "pgexporter_ext 0.2.0",
                        link: "/releases/pgexporter_ext_0_2_0",
                     },
                     {
                        text: "pgexporter_ext 0.1.2",
                        link: "/releases/pgexporter_ext_0_1_2",
                     },
                     {
                        text: "pgexporter_ext 0.1.1",
                        link: "/releases/pgexporter_ext_0_1_1",
                     },
                     {
                        text: "pgexporter_ext 0.1.0",
                        link: "/releases/pgexporter_ext_0_1_0",
                     },
                  ],
               },
            ],
         },
         {
            text: "GitHub Issues",
            link: "https://github.com/pgexporter/pgexporter/issues",
         },
         {
            text: "GitHub Discussions",
            link: "https://github.com/pgexporter/pgexporter",
         },
         {
            text: "LICENSE",
            link: "https://opensource.org/licenses/BSD-3-Clause",
         },
      ],

      socialLinks: [{ icon: "github", link: "https://github.com/pgexporter" }],
   },
});
