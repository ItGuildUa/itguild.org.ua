<script>
    import coc from "../content/coc.md";

    coc.html = coc.html.replace(/^\t{3}/gm, '');
</script>
<svelte:head>
    <title>Code of conduct</title>
</svelte:head>
<div class="markdown mx-auto px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
    {@html coc.html}
</div>
