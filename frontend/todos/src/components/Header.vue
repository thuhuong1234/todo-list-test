<template>
    <header>
        <div class="app-header">
            <div class="app-menu">
                <img class="menu-btn" width="40px" src="@/assets/images/menu.svg" alt="Menu">
                <div class="app-logo">
                    <img class="logo" width="50%" src="@/assets/images/icode-logo.png" alt="Logo">
                </div>
            </div>
            <div class="app-options">
                <button class="btn-icon"> <img class="app-icon" width="20px" height="20px"
                        src="@/assets/images/32-circle-arrow-left-3.svg" alt="Refresh"></button>
                <button class="btn-icon"> <img class="app-icon" width="20px" height="20px"
                        src="@/assets/images/32-mail-3.svg" alt="Mail"> </button>
                <button class="btn-icon"> <img class="app-icon" width="20px" height="20px"
                        src="@/assets/images/32-cogwheel-3.svg" alt="Setting"> </button>
                <img class="avatar-account" width="40px" height="40px" src="@/assets/images/default-avatar.jpeg"
                    alt="Avatar Account">
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
        gap: 55px;
    }

    .app-options {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;

        .btn-icon {
            padding: 10px;
            border-radius: 10px;
            border: 1px solid #2F6AB7;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: background-color 0.2s;
            background-color: transparent;

            .app-icon {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        .btn-icon:hover {
            background-color: #f0f0f0;
        }

        .avatar-account {
            border-radius: 10px;
        }
    }
}
</style>