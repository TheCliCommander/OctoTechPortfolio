<!-- src/components/Navbar.vue -->

<template>
    <header>
        <button class="nav-toggle" @click="toggleNav" aria-label="Toggle Navigation">
            <span class="hamburger">
            <span class="hamburger_line"></span>
            <span class="hamburger_line"></span>
            <span class="hamburger_line"></span>
            </span>
        </button>
    <nav v-show="isNavOpen" class="nav">
          <ul>
              <li v-fore="link in links" :key="link.text">
                <a :href="link.href">{{ link.text }}</a>
              </li>
          </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            isNavOpen: false,
            links: [
                { href: '#home', text: 'Home'},
                { href: '#about', text: 'About'},
                { href: '#portfolio', text: 'Portfolio'},
                { href: '#resume', text: 'Contact'},
                { href: '#services', text: 'Services'},
                { href: '#contact', text: 'Resume'},
                { href: '#blog', text: 'Blog'},
                { href: '#gitgub', text: 'GitHub'}
                
            ]
        };
    },
    methods: {
        toggleNav() {
            this.isNavOpen = !this.isNavOpen;
        }
    }
}
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 900;
    width: 100%;
    background-color: transparent;
}

.nav-toggle {
    background: rgba(10, 10, 10, 0.445);
    box-shadow: 0 0 10px rgba(63, 2, 101, 0.1);
    border-radius: 10px;
    box-sizing: border-box;
    border: 1px solid blueviolet;
    cursor: pointer;
    padding: 10px;
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: space-around;
    width: 30px;
    height: 60px;
    z-index: 800;
    font-family: 'Prompt', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
}

.hamburger-line {
    display: block;
    width: 100%;
    height: 3px;
    background-color: blueviolet;
    transition: all 0.3s ease;
    border-radius: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
}
</style>

