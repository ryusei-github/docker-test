import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherData } from "../types/todoTypes";

function WeatherSection() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    // ここにご自身で取得したAPIキーを入力してください
    const API_TOKEN = "取得したAPIキー";

    // 現在の日時を取得
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
    const day = weekdays[now.getDay()];

    useEffect(() => {
        axios
            .get("https://api.openweathermap.org/data/2.5/weather", {
                params: {
                    q: "tokyo",
                    appid: API_TOKEN,
                    units: "metric",
                    lang: "ja",
                },
            })
            .then((response) => {
                setWeatherData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    }, []);

    return (
        <div className="weather-section mb-4">
            {weatherData ? (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            {weatherData.name}の天気は{weatherData.main.temp}°C
                        </h5>
                        <p className="card-text">
                            湿度は{weatherData.main.humidity}%
                        </p>
                        <p className="card-text">
                            今日は{year}年{month}月{date}日{day}曜日
                        </p>
                        <p className="card-text">
                            現在の時刻は{hour}時{minute}分です。
                        </p>
                    </div>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
}

export default WeatherSection;
