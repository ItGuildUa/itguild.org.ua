<script context="module">
  export function preload() {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then(({ content, votes }) => {
        return { content, votes };
      });
  }
</script>

<script>
  export let content;
  export let votes;
</script>

<svelte:head>
  <title>{content.title}</title>
</svelte:head>

<div class="hero">
  <div class="pb-8 sm:pb-2 lg:pb-2">
    <div class="pt-4 overflow-hidden sm:pt-12 lg:relative lg:py-4">
      <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div>
          <div>
            <img class="lg:h-72 md:h-auto sm:h-auto w-auto" src="images/logo.png" alt="IT Guild logo" />
          </div>
          <div class="mt-4">
            <div class="mt-3 sm:max-w-xl">
              <p class="mt-3 text-xl text-gray-500">
                Наша мета — представляти та захищати інтереси ІТ фахівців перед
                державою та бізнесом.
              </p>
            </div>
            <div class="mt-6 sm:max-w-lg sm:w-full sm:flex">
              <div class="space-x-2 flex">
                <a href="https://www.patreon.com/itguildukraine" id="patreon"
                  class="flex items-center justify-center rounded-md border border-transparent px-3 py-3 bg-red-600 text-base font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:px-4"
                  target="_blank">
                  Приєднатися
                  <span class="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </span>
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSegBeWsOUHFEAwTgaUetCU6mylzTdHJHY1e0ESYY5EAyaaXRw/viewform" id="google-form"
                   class="flex items-center justify-center rounded-md border border-transparent px-3 py-3 bg-gray-600 text-base font-medium text-white shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:px-4"
                   target="_blank">
                  Заповнити анкету
                  <span class="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="mt-6 sm:max-w-lg sm:w-full sm:flex">
              <div class="space-x-2 flex">
                <a href="https://t.me/itguildukraine" id="tg"
                   class="flex items-center justify-center rounded-md border border-transparent px-3 py-3 bg-red-600 text-base font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:px-4"
                   target="_blank">
                  Телеграм
                  <span class="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="mt-8 flex flex-col">
              {#if votes}
                <div class="text-xl">
                  <span>Підтримай нашу петицію: </span>
                  <a
                    href="https://petition.president.gov.ua/petition/114468"
                    class="ml-2 underline hover:text-blue-600"
                    target="_blank">Стоп Дія Сіті</a
                  >
                </div>
                <div class="mt-2 flex items-center">
                  <span>Наразі підписало:</span>
                  <span class="ml-4 text-3xl font-bold">{votes}</span>
                </div>
              {/if}
            </div>
          </div>
        </div>
      </div>

      <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
        <div class="py-12 hidden lg:block sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="markdown mx-auto px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
  {@html content.html}
</div>
<footer>
  <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
    <div class="mt-8 flex justify-center space-x-6">
      <a href="https://www.facebook.com/itguildua" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Facebook</span>
        <svg
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clip-rule="evenodd"
          />
        </svg>
      </a>

      <a href="https://twitter.com/itguildua" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Twitter</span>
        <svg
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
          />
        </svg>
      </a>

      <a href="https://github.com/ItGuildUa" class="text-gray-400 hover:text-gray-500" target="_blank">
        <span class="sr-only">GitHub</span>
        <svg
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
    <p class="mt-8 text-center text-base text-gray-400">
      © {new Date().getFullYear()} IT Guild Ukraine . All rights reserved.
    </p>
  </div>
</footer>
