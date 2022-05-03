import { beforeEach, describe, expect, it, vi } from 'vitest'
import { setup, $fetch, url, createPage } from '@nuxt/test-utils'
import flushPromises from 'flush-promises'
import { fileURLToPath } from 'node:url'
import { usePostStore } from '../../../store/posts'
import { setActivePinia, createPinia } from 'pinia'


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

    it('test fetch posts', async () => {
        const postStore = usePostStore()
        await postStore.getPosts()
        expect(postStore.posts.length).toBeGreaterThan(0)
    })
})