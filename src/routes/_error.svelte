<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="h-screen w-screen flex items-center">
  <div
    class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700"
  >
    <div class="max-w-md">
      <div class="text-5xl font-dark font-bold">{status}</div>
      <p class="text-2xl md:text-3xl font-light leading-normal mb-2">
        {error.message}
      </p>
      <p class="mb-8">
        Але не хвилюйся, ти можеш знайти багато іншого на нашій домашній сторінці.
      </p>

      <a
        href="/"
        class="w-full rounded-md border border-transparent px-3 py-3 bg-gray-600 text-base font-medium text-white shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:px-4"
        >Назад</a
      >
    </div>
  </div>
</div>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
