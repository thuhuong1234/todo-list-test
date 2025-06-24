<template>
    <footer class="app-footer">
        <div class="footer-content">
            <div class="footer-left">
                <img class="logo" width="50%" src="@/assets/images/icode-logo.png" alt="Logo">
                <span class="footer-text">© 2025 ICode. All rights reserved.</span>
            </div>
            <div class="footer-links">
                <a href="#" class="footer-link">About</a>
                <a href="#" class="footer-link">Privacy</a>
                <a href="#" class="footer-link">Terms</a>
                <a href="#" class="footer-link">Contact</a>
            </div>
        </div>
    </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-footer {
    background-color: #f8f9fa;
    border-top: 1px solid #ddd;
    padding: 20px 40px;

    .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
    }

    .footer-left {
        display: flex;
        align-items: center;
        gap: 10px;

        .footer-logo {
            height: 32px;
        }

        .footer-text {
            font-size: 14px;
            color: #555;
        }
    }

    .footer-links {
        display: flex;
        gap: 20px;

        .footer-link {
            font-size: 14px;
            color: #2f6ab7;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
