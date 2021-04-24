<script context="module">
  export function preload({ params }) {
    const { lang } = params;

    if (lang !== "en") return this.redirect(302, "/");

    return this.fetch(`${lang}.json`)
      .then((r) => r.json())
      .then((content) => {
        return { content, lang };
      });
  }
</script>

<script>
  import Home from "../../components/pages/Home.svelte";

  export let content;
  export let lang;
</script>

<svelte:head>
  <title>{content.title}</title>
  <meta property="title" content="Manifesto" />
  <meta
    property="description"
    content="Our mission — protect rights and interests of all Ukrainian IT specialists."
  />
  <!--  Generic meta tags  -->
  <meta property="og:title" content="Manifesto" />
  <meta property="og:site_name" content="The IT Specialists Guild of Ukraine" />
  <meta property="og:url" content="https://www.itguild.org.ua" />
  <meta
    property="og:description"
    content="Our mission — protect rights and interests of all Ukrainian IT specialists."
  />
  <meta property="og:type" content="article" />
  <meta
    property="og:image"
    content="https://www.itguild.org.ua/images/og-logo.png"
  />
  <!--  Twitter meta tags  -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://www.itguild.org.ua" />
  <meta property="twitter:title" content="Manifesto" />
  <meta
    property="twitter:description"
    content="Our mission — protect rights and interests of all Ukrainian IT specialists."
  />
  <meta
    property="twitter:image"
    content="https://www.itguild.org.ua/images/og-logo.png"
  />
</svelte:head>

<Home {content} {lang} />