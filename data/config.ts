import setupImage from "@/assets/setup.png";
import type { SidebarNavigation } from "@/lib/docs/types";
import type {
    ContentConfig,
    HeaderFeatures,
    LocaleConfig,
    NavItem,
    SiteConfig,
    SocialObjects,
    TableOfContentsConfig,
} from "@/lib/types";

// ---------------------------------------------------------------------------
// System-wide configuration
// ---------------------------------------------------------------------------
export const LOCALE: LocaleConfig = {
    lang: "en",
};

export const CONTENT: ContentConfig = {
    systems: [
        {
            id: "docs",
            dir: "content/docs",
            defaultDocRedirect: "/docs/general/tutorial",
            route: "/docs",
        },
    ],
};

export const SITE: SiteConfig = {
    website: "https://docs.laravelmail.com",
    author: "Stefan",
    authorUrl: "https://laravelmail.com",
    repo: "https://github.com/laravelmail/docs.laravelmail.com",
    title: "Laravel mail documentation",
    description:
        "Comprehensive documentation for Laravel Mail Platform and Neuron AI integration",
    image: setupImage,
    imageAlt: "Laravel Mail Platform - Modern email marketing system",
    twitterHandle: "@laravelmail",
};

// ---------------------------------------------------------------------------
// Header-specific configuration
// ---------------------------------------------------------------------------
export const HEADER_FEATURES: HeaderFeatures = {
    enableGitHubButton: true,
    starCountThreshold: 0,
    enableLayoutWidthToggle: true,
};

export const HEADER_NAV_ITEMS: NavItem[] = [
    { href: "/docs", label: "Docs" },
];

export const HEADER_SOCIAL_LINKS: SocialObjects[] = [
    {
        name: "github",
        href: "https://github.com/laravelmail/",
        linkTitle: `Checkout our GitHub profile`,
        active: true,
    },
];

// ---------------------------------------------------------------------------
// Header-specific configuration
// ---------------------------------------------------------------------------
export const FOOTER_SOCIAL_LINKS: SocialObjects[] = [
    {
        name: "github",
        href: "https://github.com/laravelmail/",
        linkTitle: `Checkout our GitHub profile`,
        active: true,
    },
];

// ---------------------------------------------------------------------------
// Sidebar navigation structure for docs content
// ---------------------------------------------------------------------------
export const SIDEBAR_NAVIGATION: SidebarNavigation = {
    docs: {
        defaultTab: {
            label: "Overview",
            icon: "📚",
        },
        groups: [
            {
                id: "general",
                label: "General",
                icon: "📖",
                tab: true,
                entries: [
                    { slug: "general" },
                    { slug: "general/tutorial" },
                    { slug: "general/configuration" },
                    { slug: "general/deployment" },
                ],
            },
            {
                id: "features",
                label: "Features",
                icon: "🚀",
                tab: true,
                entries: [
                    { slug: "features/campaigns" },
                    { slug: "features/subscribers" },
                    { slug: "features/messages" },
                    { slug: "features/workflows" },
                    { slug: "features/temporal-workflows" },
                    { slug: "features/designer" },
                    { slug: "features/template" },
                    { slug: "features/tags" },
                    { slug: "features/workspaces" },
                    { slug: "features/intelligence" },
                    { slug: "features/anything-llm" },
                    { slug: "features/whatsapp" },
                    { slug: "features/ebay" },
                    { slug: "features/google-merchant" },
                    { slug: "features/instagram" },
                    { slug: "features/email-services" },
                    { slug: "features/postfix" },
                    { slug: "features/exim" },
                    { slug: "features/sendmail" },
                ],
            },
            {
                id: "neuron",
                label: "Neuron AI",
                icon: "🧠",
                tab: true,
                groups: [
                    {
                        id: "the-basics",
                        label: "The Basics",
                        entries: [
                            { slug: "neuron/the-basics/getting-started" },
                            { slug: "neuron/the-basics/structured-output" },
                            { slug: "neuron/the-basics/tools" },
                            { slug: "neuron/the-basics/streaming" },
                            { slug: "neuron/the-basics/chat-history-and-memory" },
                            { slug: "neuron/the-basics/attachments-documents-and-images" },
                            { slug: "neuron/the-basics/mcp-connector" },
                            { slug: "neuron/the-basics/observability" },
                            { slug: "neuron/the-basics/error-handling" },
                            { slug: "neuron/the-basics/evaluation" },
                        ],
                    },
                    {
                        id: "workflow",
                        label: "Workflow",
                        entries: [
                            { slug: "neuron/workflow/getting-started" },
                            { slug: "neuron/workflow/single-step-workflow" },
                            { slug: "neuron/workflow/multi-step-workflow" },
                            { slug: "neuron/workflow/loops-and-branches" },
                            { slug: "neuron/workflow/managing-the-state" },
                            { slug: "neuron/workflow/persistence" },
                            { slug: "neuron/workflow/human-in-the-loop" },
                            { slug: "neuron/workflow/streaming" },
                            { slug: "neuron/workflow/examples" },
                        ],
                    },
                    {
                        id: "rag",
                        label: "RAG",
                        entries: [
                            { slug: "neuron/rag/rag" },
                            { slug: "neuron/rag/data-loader" },
                            { slug: "neuron/rag/embeddings-provider" },
                            { slug: "neuron/rag/vector-store" },
                            { slug: "neuron/rag/retrieval" },
                            { slug: "neuron/rag/pre-post-processor" },
                        ],
                    },
                    {
                        id: "integration",
                        label: "Integration",
                        entries: [
                            { slug: "neuron/integration/overview" },
                        ],
                    },
                ],
            },
        ],
    },
};

// ---------------------------------------------------------------------------
// Right-side table of contents configuration
// ---------------------------------------------------------------------------
export const TABLE_OF_CONTENTS: TableOfContentsConfig = {
    enableExtra: true,
};

