# Taskify

Taskify is a task management web app built with React. It serves as a platform for users to efficiently manage their tasks, providing features such as user registration, task creation, and detailed task tracking. Users can log in to access their personalized profiles, where they can view and manage tasks they've created.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Installation

1. Start by installing all required packages. Open the terminal from the client folder and execute the command `npm install`.
2. Launch the server by running `node server.js` in the terminal opened from the server folder.
3. Finally, initiate the app with the command `npm run dev` in the client folder terminal. The app will be accessible at [localhost:5173](http://localhost:5173).

## Usage

Upon registration, users gain access to a comprehensive task list, enabling them to create, edit, and view details for each task. Tasks can be personalized with information such as due dates, priorities, and descriptions. Users are only able to edit and delete tasks they've created.

## Folder Structure

- **client:**
  - `node_modules`: Contains project dependencies.
  - `public`: Hosts resources like images and the main `index.html` file, where fonts and scripts are imported.
  - `src`:
    - `components`: Individual components organized in separate folders, each with its corresponding CSS module.
    - `hooks`: Custom hooks, including those for form management, local storage, and token passing.
    - `services`: Files responsible for communication with the server.
    - `contexts`: Context files facilitating data accessibility.
    - `utils`: Utility functions, currently including a date formatting function.

## Dependencies

- [React Hook Form](https://react-hook-form.com/): Used for efficient form handling.
- [Yup](https://github.com/jquense/yup): Employs Yup for frontend form validation.
- [React Router Dom](https://reactrouter.com/): Manages client-side routing for a seamless user experience.

## Development

To initiate the app in a development environment:

- Run `npm run dev` in the client folder terminal.
- Execute `node server.js` in the server folder terminal.

## Contributing

We welcome contributions from the community! To contribute to Taskify, follow these guidelines:

1. [Report Issues](https://github.com/your-username/taskify/issues): Report any bugs or suggest new features.
2. [Pull Requests](https://github.com/your-username/taskify/pulls): Fork the repository, create a new branch, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

- A hardcoded test user is available on the server for testing purposes: Email - peter@abv.bg, Password - 123456.

Thank you for choosing Taskify!
