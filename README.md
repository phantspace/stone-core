# Stone/Core

添加一个钩子：

npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
进行提交：

git commit -m "Keep calm and commit"
# `npm test` will run every time you commit
有关更多用例（子目录中的项目、自定义目录、CI 支持等），请参阅文档。
