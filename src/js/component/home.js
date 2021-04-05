import React, { useState } from "react";

//create your first component
export function Home() {
	const [tareas, setTareas] = useState("");
	const [lista, setLista] = useState([]);

	// const Itemdelete = index => {
	// 	let updatedlista = lista.filter(
	// 		(tareas, tareasIndex) => index != tareasIndex
	// 	);
	// 	setLista(updatedlista);
	// };

	return (
		<div className="App-content">
			<div className="  text-center mt-5">
				<h1>TO DO LIST </h1>
				<input
					className="todoInput "
					type="text"
					autoFocus={true}
					placeholder="Ingrese sus datos"
					onChange={e => setTareas(e.target.value)}
					value={tareas}
					onKeyPress={e => {
						if (e.key == "Enter") {
							setLista(lista.concat(tareas));
							setTareas("");
							console.log({ lista });
						}
					}}
				/>

				<ul className="list-group">
					{!lista
						? "loading..."
						: lista.map((item, index) => {
								return (
									<label
										className="form-control text-success list-group-item list-group-item-action"
										key={index}
										onDoubleClick={() => {
											setLista(
												lista.filter(
													(itemf, indexf) =>
														indexf !== index
												)
											);
										}}>
										{item}
									</label>
								);
						  })}
				</ul>

				<p className="text-muted card pl-1">
					{lista.length} items left
				</p>
			</div>
		</div>
	);
}
