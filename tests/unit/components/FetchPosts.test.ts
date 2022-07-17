import { fileURLToPath } from 'node:url'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {render} from '@testing-library/vue'
import FetchPosts from '../../../components/FetchPosts.vue'
import { setActivePinia, createPinia } from 'pinia'




describe('FetchPosts.vue', async () => {
    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia())
    })

    it('Component', async () => {
        const {getByText} = render(FetchPosts)
        const btn = getByText('Fetch Post')
        await btn.click()
        console.log(btn.value);
        expect(btn.innerHTML).toBe('Fetch Post')
    })
})