- Create project using

  - npm init -y

- COnfigure Typescript

  - npm install -S -D typescript
    ts-node
    @types/node
    @tsconfig/node22
  - add the extends from the npm to tsconfig.json and add extra options.

- Configure Jest

  - add test configs
  - npm install -S -D jest
    ts-jest
    @types/jest
  - npx ts-jest config:init
  - and then edit few as per needs

- Configure EsLint

  - Install VSCode extension
  - npm init @eslint/config@latest
  - config as per the questions
  - npm i -S -D eslint-plugin-jest

- Configure Prettier

  - npm i -S -D eslint-plugin-prettier eslint-config-prettier
  - npm i -S -D --save-exact prettier
  - Add eslintPluginPrettierRecommended plugin in eslint config and place at the last to turn off the rules.
  - Then Configure default formatter in VSCode.

- GitHub Actions Workflow

  - Workflows
    - Jobs
      - steps
  - Trigger Events
    -- Code push
    -- pull requests
    -- etc
  - Run Actions - Individual tasks that can be executed as part of the workflow.
    -- from marketplace
    -- from custom javascript
    -- from Docker
    -- etc
  - Installation
    -- Install GitHub Actions extension and sign in.
    -- Create a folder .github/workflows/ and create your yml file.
    -- Create a pull request template checklist

- Git
  -- git init
  -- git add .
  -- git commit -m "Initial commit"
  -- Create a repo in Github (Make sure you dont check the README file option)
  -- git remote add origin <url>
  -- git branch -M main
  -- git push -u origin main
