import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { setup, $fetch, isDev, createPage } from '@nuxt/test-utils'

describe('example', async () => {
    await setup({
        rootDir: fileURLToPath(new URL('..', import.meta.url)),
        browser: false
    })

    it('Check input visibility', async () => {
        // const wrapper = await $fetch('/')
        const page = await createPage('/')
        const body = await page.isVisible('input')
        expect(body).toBe(true)
    })

    it('Check input value', async () => {
        // const wrapper = await $fetch('/')
        const page = await createPage('/')
        const inputValue = await page.$eval('input[data-testid="first-input"]', el => el.value)
        // console.log(inputValue);

        // expect(inputValue).toBe(true)
    })

    it('Check button', async () => {
        // const wrapper = await $fetch('/')
        const page = await createPage('/')
        const btn = await page.click('#counter')
        const span = await page.$('span')
        const innerSpan = Number(await span.innerText())

        expect(innerSpan).toBe(1)
    })

    if (isDev()) {
        it('[dev] ensure vite client script is added', async () => {
            expect(await $fetch('/')).toMatch('/_nuxt/@vite/client"')
        })
    }
})