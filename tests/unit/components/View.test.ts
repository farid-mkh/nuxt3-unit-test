import { fileURLToPath } from 'node:url'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {render} from '@testing-library/vue'
import View from '../../../components/View.vue'



describe('View.vue', async () => {
    it('Component', async () => {
        const id = 'view-id'
        const text = 'hello world'
        const newVariable2 = {default:text};
        const newVariable = {
            props:{element:'span', id, ariaLabel:id, isDisabled:false},
            slots:newVariable2
        };
        const {getByText} = render(View,newVariable)
        const span = getByText(text) as HTMLElement
        console.log(span.id);
        
        expect(span.id).toBe(id)
    })
})