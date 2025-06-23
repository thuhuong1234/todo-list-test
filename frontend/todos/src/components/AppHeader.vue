<template>
    <header>
        <div class="app-header">
            <div class="app-menu">
                <img class="menu-btn" width="40px" src="@/assets/images/menu.svg" alt="Menu">
                <div class="app-logo">
                    <img class="logo" width="50%" src="@/assets/images/icode-logo.png" alt="Logo">
                </div>
            </div>
            <div class="app-account">
                <img class="account" width="40px" height="40px" src="@/assets/images/default-avatar.jpeg" alt="Account">
            </div>
        </div>
    </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 40px;
    background-color: white;

    .app-menu {
        display: flex;
        gap: 50px;
    }

    .app-account {
        border: 1px solid white;
        border-radius: 50%;
        width: 40px;
        height: 40px;

        .account {
            border-radius: 50%;
        }
    }
}
</style>