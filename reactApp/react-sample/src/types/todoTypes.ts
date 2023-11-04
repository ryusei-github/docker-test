export type Task = {
    task: string;
    completed: boolean;
};

export type TaskInputProps = {
    addTask: (task: string) => void;
};

export interface TaskItemProps {
    task: Task;
    index: number;
    deleteTask: (index: number) => void;
    toggleComplete: (index: number) => void;
}

export type TaskListProps = {
    tasks: Task[];
    deleteTask: (index: number) => void;
    toggleComplete: (index: number) => void;
};

export type TaskSectionProps = {
    tasks: Task[];
    addTask: (task: string) => void;
    deleteTask: (index: number) => void;
    toggleComplete: (index: number) => void;
};

// OpenWeatherMapのデータ形式に基づいて型を定義
export type WeatherData = {
    weather: Weather[];
    main: Main;
    name: string;
};

export type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
};

export type Main = {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
};
