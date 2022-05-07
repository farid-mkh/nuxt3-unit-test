# Nuxt unit test

## Tools

> <img src="https://user-images.githubusercontent.com/51482929/166205027-4c7e59ea-1136-445a-8821-e5db42329148.png" width="30px" height="30px"/> vitest

> @nuxt/test-utils

### Testing Tips

1. don't check framework features, it means you just check output of component

   > for example if click a btn then checking a function called!!

2. don't spy on methods, so if we change the name of methods or computeds test should pass

3. follow the users in tests
