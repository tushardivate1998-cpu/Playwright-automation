class InventoryPage {
    constructor(page) {
        this.page = page;
        this.addBackpackBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    }

    async addBackpackToCart() {
        await this.addBackpackBtn.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}

module.exports = { InventoryPage };