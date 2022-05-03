import { beforeEach, describe, expect, it, vi } from 'vitest'
import { setup, $fetch, createPage } from '@nuxt/test-utils'
import { mount, flushPromises } from '@vue/test-utils'
import { fileURLToPath } from 'node:url'
import { setActivePinia, createPinia } from 'pinia'
import { usePostStore } from '../../store/posts'

beforeEach(() => {
    vi.clearAllMocks()
    // for pinia
    setActivePinia(createPinia())
})

describe('FetchPosts', async () => {
    await setup({
        rootDir: fileURLToPath(new URL('..', import.meta.url)),
        server: true
    })

    /**
     *  Handling Components
     *  to handle componentns use `$fetch(COMPONENT_NAME)`
     **/
    it('loads posts on button click in FetchPost component', async () => {
        // const wrapper = await mount(FetchPosts)
        // console.log(wrapper);
        const page = await createPage('/')
        const btn = await page.$('#fetch-btn')
        await btn.dispatchEvent('click')
        await flushPromises()
        const loading = await page.$('.loading')
        expect(await loading.isVisible()).toBe(true)
    })
})