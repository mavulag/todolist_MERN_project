# `todolist`

Welcome to your new `todolist` project and to the MERN project. By default, creating a new project adds this README and some template files to your project directory. You can edit these template files to customize your project and to include your own code to speed up the development cycle.

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment.

To learn more before you start working with `todolist`, see the following documentation available online:

- [Quick Start](https://)
- [SDK Developer Tools](https://)
- [****** Programming Language Guide](https://)
- [****** Language Quick Reference](https://)

If you want to start working on your project right away, you might want to try the following commands:

```bash
mkdir home/User/path/
cd home/User/path/
code .
```

Inside VSCode open an Integrated Terminal and type the following commands:

```bash
npm create vite@latest
``` 
(Type your desired project name, then choose framework: `React` and Variant: `JavaScript`). Follow prompted instructions

```bash
cd todolist
npm install
npm install axios react-icons
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
npm run dev
```

Once the job completes, your application will be available at Local:`http://localhost:5173/`.

Within the root directory 'todolist', create new directory name it `Server`. 
```bash
cd Server
npm init -y
npm install express mongoose cors nodemon
```
(Open package.json in Server directory then add the following in "scripts"
```bash
"start": "nodemon index.js"
```
)

If you have made changes to your backend, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:3001`.

Use the following curls:
To add tasks type:
``` bash
curl -X POST http://localhost:3001/add -H "Content-Type: application/json" -d '{"task": "New Task"}'
```

To get all tasks type:
``` bash
curl -X GET http://localhost:3001/tasks
```

To update task (done = true):
``` bash
curl -X PUT http://localhost:3001/update/task_id
```

To delete task type:
``` bash 
curl -X DELETE http://localhost:3001/delete/task_id
```
