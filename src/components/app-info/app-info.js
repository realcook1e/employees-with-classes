import "./app-info.css";

function AppInfo({ employeesTotal, employeesIncreased }) {
	return (
		<div className="app-info">
			<h1>Учет сотрудников в компании</h1>
			<h2>Общее число сотрудников: {employeesTotal}</h2>
			<h2>Премию получат: {employeesIncreased}</h2>
		</div>
	);
}

export default AppInfo;
