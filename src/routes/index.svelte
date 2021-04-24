<script context="module">
  export function preload() {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then((content) => {
        return { content };
      });
  }
</script>

<script>
  import Home from "../components/pages/Home.svelte";

  export let content;
</script>

<svelte:head>
  <title>{content.title}</title>
  <meta property="title" content="Маніфест" />
  <meta
    property="description"
    content="Наша мета — представляти та захищати інтереси ІТ фахівців перед державою та бізнесом."
  />
  <!--  Generic meta tags  -->
  <meta property="og:title" content="Маніфест" />
  <meta property="og:site_name" content="Гільдія ІТ Фахівців України" />
  <meta property="og:url" content="https://www.itguild.org.ua" />
  <meta
    property="og:description"
    content="Наша мета — представляти та захищати інтереси ІТ фахівців перед державою та бізнесом."
  />
  <meta property="og:type" content="article" />
  <meta
    property="og:image"
    content="https://www.itguild.org.ua/images/og-logo.png"
  />
  <!--  Twitter meta tags  -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://www.itguild.org.ua" />
  <meta property="twitter:title" content="Маніфест" />
  <meta
    property="twitter:description"
    content="Наша мета — представляти та захищати інтереси ІТ фахівців перед державою та бізнесом."
  />
  <meta
    property="twitter:image"
    content="https://www.itguild.org.ua/images/og-logo.png"
  />
</svelte:head>

<!-- hack do not remove this!! -->
<!-- https://stackoverflow.com/questions/58501974/failing-to-generate-dynamic-routes-with-sapper-export -->
<a href="/en" class="hidden">en</a>

<Home {content} lang="ua" />
