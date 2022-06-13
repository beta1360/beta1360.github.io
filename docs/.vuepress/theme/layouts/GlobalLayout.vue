<template>
  <div id="global-layout">
    <component :is="$page.path ? 'Layout' : 'NotFound'" />
    <footer class="siteFooter">&copy; 개발자 이건희</footer>
  </div>
</template>
