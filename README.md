# To-Do List Application

A responsive and user-friendly To-Do Application built using **React.js and Tailwind CSS**. The application helps users organize their daily activities, manage tasks, track completion progress, and stay productive through a simple and intuitive interface.

## 🚀 Features

### 1. Task Management
- Create new tasks with title, description, date, start time, and end time.
- Edit existing tasks.
- Delete tasks with a confirmation message.
- Mark tasks as completed or pending.
- View task details in an organized layout.

### 2. Search Functionality
- Search tasks using keywords.
- Search by task title and description.
- Display matching search results dynamically.
- View all tasks by clearing the search filter.

### 3. Date Management
- Select the current date or a future date when creating tasks.
- Prevent selection of past dates for new tasks.
- Manage tasks based on their scheduled dates.

### 4. Task Progress
- Track completed and pending tasks.
- View weekly task progress.
- Monitor productivity through progress cards.

### 5. User Interface
- Mobile-first responsive design.
- Clean and modern interface inspired by Figma designs.
- Smooth bottom drawer animation for adding and editing tasks.
- Reusable React components.
- Custom scrollbar styling.

## 🛠️ Technologies Used

| Technology | Purpose |
| React.js | Frontend development |
| JavaScript | Application logic |
| Tailwind CSS | Styling and responsive UI |
| Axios | API communication |
| React Router DOM | Navigation |
| Lucide React | Icons |
| Context API | Global task state management |
| REST API | Backend communication |

## 📂 Project Structure

src/
│
├── api/
│   └── axios.js
│
├── components/
│   ├── Button/
│   ├── form/
│   └── home/
│       ├── DateSelector.jsx
│       ├── FloatingButton.jsx
│       ├── TodayTask.jsx
│       └── WeekCard.jsx
│
├── context/
│   └── TaskContext.jsx
│
├── pages/
│   ├── AddTask/
│   │   └── AddTask.jsx
│   └── Home/
│       ├── Home.jsx
│       └── SearchBar.jsx
│
├── services/
│   └── taskService.js
│
├── App.jsx
├── main.jsx
└── index.css

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

git clone <your-repository-url>


### 2. Navigate to the Project Folder

cd task-management-app


### 3. Install Dependencies

npm install


### 4. Configure API Base URL

Update the Axios configuration in:

`src/api/axios.js`

Set the backend API base URL according to your backend server.

### 5. Start the Development Server

npm run dev


Open the local URL displayed in your terminal to access the application.

## 🔗 API Integration

The application communicates with the backend through REST APIs.

| Method | Endpoint | Description |
| GET | `/tasks` | Fetch all tasks |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task |
| PATCH | `/tasks/:id/toggle` | Toggle task completion |

## 📱 Application Workflow

1. Open the application to view the task dashboard.
2. Click the floating plus button to open the Add Task drawer.
3. Enter task details and select a date and time.
4. Click Create Task to save the task.
5. Use the search bar to find tasks by title or description.
6. Click the edit icon to modify an existing task.
7. Click the delete icon to remove a task.
8. Mark tasks as completed using the checkbox.
9. Monitor completed and pending tasks through the progress section.

## 🎯 Project Objective

The main objective of this project is to develop a simple and efficient task management solution that helps users organize their daily activities, manage schedules, and track their productivity.

The project also demonstrates practical implementation of React components, state management, API integration, CRUD operations, and responsive user interface development.

## 👨‍💻 Developer

Aayush Pandey

Built as a Mern Stack development project.

Frontend link:- https://to-do-list-applicationa.netlify.app/home
Backend link:- https://to-do-list-application-v3ah.onrender.com/
