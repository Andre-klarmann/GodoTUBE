import React from "react";
import { StyledRegisterVideo } from "./Styles";
import { createClient } from "@supabase/supabase-js";

function UseForm(props) {
	const [values, setValues] = React.useState(props.initialValues);
	return {
		values,
		handleChange: (e) => {
			const value = e.target.value;
			const name = e.target.name;
			setValues({
				...values,
				[name]: value,
			});
		},
		clearForm() {
			setValues({});
		},
	};
}

const supabaseUrl = "https://kjrzkvvspoypfgxewzrg.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqcnprdnZzcG95cGZneGV3enJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTMxNjUsImV4cCI6MTk4Mzk2OTE2NX0.8DNk7T35selbco-AFVNVjdWKuftbKsJAHezjdUoAe_o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function RegisterVideo() {
	const [formVisible, setFormVisible] = React.useState(false);
	const formCadastro = UseForm({
		initialValues: { url: "", title: "" },
	});

	function findImg() {
		if (formCadastro.values.url?.includes("youtube")) {
			return `https://img.youtube.com/vi/${formCadastro.values.url.slice(
				32,
				43
			)}/hqdefault.jpg`;
		}
		if (formCadastro.values.url?.includes("youtu.be")) {
			return `https://img.youtube.com/vi/${formCadastro.values.url.slice(
				17,
				28
			)}/hqdefault.jpg`;
		}
		console.log(formCadastro.values.url);
	}

	return (
		<StyledRegisterVideo>
			<button id="add-video" onClick={() => setFormVisible(true)}>
				+
			</button>
			{formVisible ? (
				<form
					onSubmit={(e) => {
						supabase
							.from("video-table")
							.insert({
								title: formCadastro.values.title,
								url: formCadastro.values.url,
								thumb: `https://img.youtube.com/vi/${formCadastro.values.url.slice(
									32,
									43
								)}/hqdefault.jpg`,
								playlist: "Godo",
							})
							.then((res) => {
								console.log(res);
							})
							.catch((err) => {
								console.log(err);
							});
					}}
				>
					<div>
						<button
							className="close-modal"
							type="button"
							onClick={() => setFormVisible(false)}
						>
							X
						</button>
						<input
							type="text"
							name="title"
							placeholder="Título do vídeo"
							value={formCadastro.values.title}
							onChange={formCadastro.handleChange}
							required
						/>
						<input
							type="URL"
							name="url"
							placeholder="URL do vídeo"
							onChange={formCadastro.handleChange}
						/>
						<button type="submit">Enviar</button>
						{formCadastro.values.url && (
							<img id="image" alt="Imagem do video" src={findImg()} />
						)}
					</div>
				</form>
			) : (
				false
			)}
		</StyledRegisterVideo>
	);
}
