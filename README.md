# Kyronode Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prerequisites

Before starting, make sure you have the following tools installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later is recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A text editor or IDE (e.g., [Visual Studio Code](https://code.visualstudio.com/))

## Installation Steps

Follow these steps to set up and run the project:

### Step 1: Clone the Repository

Clone this repository to your local machine. If you have received a `.zip` file, extract it first.

If you have access to the Git repository, use the following command:

```bash
git clone <repository-url>
```

### Step 2: Navigate to the Project Folder

Navigate into the project directory:

```bash
cd kyronode
```

### Step 3: Install Dependencies

Run the following command to install all the required dependencies:

```bash
npm install
```

If you'd like to install dependencies one by one, use the following commands:

Core Dependencies

```bash
npm install next@15.0.4
npm install react@^19.0.0
npm install react-dom@^19.0.0
```

Additional Dependencies

```bash
npm install @phosphor-icons/react@^2.1.7
npm install @tsparticles/all@^3.7.1
npm install @tsparticles/react@^3.0.0
```

Development Dependencies

```bash
npm install --save-dev typescript@^5
npm install --save-dev @types/node@^20
npm install --save-dev @types/react@^19
npm install --save-dev @types/react-dom@^19
npm install --save-dev eslint@^8
npm install --save-dev eslint-config-next@15.0.4
npm install --save-dev tailwindcss@^3.4.1
npm install --save-dev postcss@^8
npm install --save-dev webpack@^5.97.1
```

### Step 4: Start the Development Server

To start the development server, run:

```bash
npm run dev
```

This will start the server on http://localhost:3000. Open this link in your browser to see the application.

### Step 5: Build for Production (Optional)

If you want to build the project for production, run:

```bash
npm run build
```

After the build process, you can start the production server using:

```bash
npm run start
```

## Additional Scripts

Linting the code:

```bash
npm run lint
```

## Project Structure

- src/: Contains all the source code.
- public/: Contains static assets like images and fonts.
- package.json: Lists all the project dependencies and scripts.

## Notes

- If you encounter any issues during setup, ensure that all dependencies are installed correctly by re-running npm install.
- If node_modules is missing, it can be regenerated using the npm install command.
- Ensure .env files (if applicable) are configured properly before starting the application.

## Learn More

For additional information, you can refer to:

- Next.js Documentation
- Learn Next.js

## Contributing

We welcome contributions! If you'd like to improve this project, feel free to fork the repository and submit a pull request.

```vbnet

### **Highlights of This `README.md`**:
1. **Prerequisites**: Lists required tools like Node.js and npm.
2. **Step-by-Step Instructions**: Detailed setup steps, including how to install dependencies one by one or all at once.
3. **Project Structure**: Explains the purpose of key folders.
4. **Additional Notes**: Mentions potential issues (e.g., missing `node_modules`) and how to solve them.
5. **Links to Documentation**: Guides users to Next.js resources for further learning.

This format ensures clarity and professionalism while making the project easy to set up for anyone!
```
