<template>
  <header class="bg-primary">
    <nav class="navbar navbar-expand-lg navbar-dark container">
      <RouterLink to="/" class="navbar-brand fw-bold">Sample Corp.</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink
              to="/"
              class="nav-link"
              :class="{ active: isActiveRoute('/') }"
            >ホーム</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/service"
              class="nav-link"
              :class="{ active: isActiveRoute('/service') }"
            >サービス</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/contact"
              class="nav-link"
              :class="{ active: isActiveRoute('/contact') }"
            >お問い合わせ</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/news"
              class="nav-link"
              :class="{ active: isActiveRoute('/news') }"
            >お知らせ</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const isActiveRoute = (path) => {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>
