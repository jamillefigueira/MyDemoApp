export class BasePage {
    async arrastaParaCima() {
        await driver
            .action("pointer")
            .move({ duration: 0, x: 601, y: 1948 })
            .down({ button: 0 })
            .move({ duration: 1000, x: 623, y: 847 })
            .up({ button: 0 })
            .perform();
    }
}

