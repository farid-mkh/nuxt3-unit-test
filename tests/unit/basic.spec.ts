import { fileURLToPath } from 'node:url'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { setup, $fetch, isDev, createPage } from '@nuxt/test-utils'


// it will run before each test
beforeEach(() => {
    vi.clearAllMocks()
})

describe('app.vue', async () => {
    await setup({
        rootDir: fileURLToPath(new URL('..', import.meta.url)),
        server: true
    })
    // simple example
    it('Check input visibility', async () => {
        // const wrapper = await $fetch('/')
        const page = await createPage('/')
        const body = await page.isVisible('input')
        expect(body).toBe(true)
    })

    // it('Check input value', async () => {
    //     const page = await createPage('/')
    //     const inputValue = await page.$eval('input[data-testid="first-input"]', el => el.value)
    //     console.log(inputValue);
    // })

    it('Check button', async () => {
        const page = await createPage('/')
        await page.click('#counter')
        const span = await page.$('span')
        const innerSpan = Number(await span.innerText())

        expect(innerSpan).toBe(1)
    })

})