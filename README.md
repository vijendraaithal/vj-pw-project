# Node.js Project Setup

## Steps
1. **Create a project folder:**
```sh
mkdir ~/Documents/workspace/playwright-e2e-tests
cd ~/Documents/workspace/playwright-e2e-tests
```

2. **Open in VS Code:**
```sh
code .
```

3. **Initialize Node.js project:**
```sh
npm init
```
   - Complete the wizard. Ensure `package.json` is created.

4. **Create a sample file:**
```ts
// file name: hello.js
console.log('Hello World!')
```

5. **Run the code:**
```sh
node hello.js
# Output: Hello World!
```

# Playwright Installation

## Steps
1. **Check if Node.js is installed:**
```sh
node -v
```
- Returns a valid node version (e.g. `v22.16.0`). If not, install Node.js first.

2. **Navigate to your project directory:**
```sh
cd /path/to/your/project
```

3. **Initialize Playwright:**
```sh
npm init playwright@latest
```
- When prompted:
  - Select `TypeScript` as the language
  - Choose to install **all browsers**

4. **Verify Playwright installation:**
```sh
npx playwright --version
```