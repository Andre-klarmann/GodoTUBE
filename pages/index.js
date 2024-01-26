import user from "../user-config.json";
import React from "react";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/timeline";
import { createClient } from "@supabase/supabase-js";


export default function Home() {
	const [valorDoFiltro, setValorDoFiltro] = React.useState("");
	const [playlists, setPlaylists] = React.useState([]);
	const [titlepl, settitlepl] = React.useState(user.playlist);
	React.useEffect(() => {
		supabase
			.from("video-table")
			.select("*")
			.then((dados) => {
				const novaPlaylist = { ...playlists };

				dados.data.forEach((video) => {
					if (!novaPlaylist[video.playlist]) {
						novaPlaylist[video.playlist] = [];
					}
					novaPlaylist[video.playlist].push(video);
				});
				setPlaylists(novaPlaylist);
			});
	}, []);

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					flex: 1,
				}}
			>
				<Menu
					valorDoFiltro={valorDoFiltro}
					setValorDoFiltro={setValorDoFiltro}
				/>
				<Header />
				<Timeline playlists={playlists} valorDoFiltro={valorDoFiltro} />
			</div>
		</>
	);
}

const StyledHead = styled.div`
	background-color: ${({ theme }) => theme.backgroundLevel1};
	img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	.user-info {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 16px 32px;
		gap: 16px;
	}
`;

function Header() {
	return (
		<StyledHead>
			{/* <img src='banner'/> */}
			<section className="user-info">
				<img src={`https://github.com/${user.gitimg}`} />
				<div>
					<h2>{user.name}</h2>
					<p>{user.job}</p>
				</div>
			</section>
		</StyledHead>
	);
}

function Timeline({ valorDoFiltro, ...props }) {
	const playlistsNames = Object.keys(props.playlists);

	return (
		<StyledTimeline>
			{playlistsNames.map((playlist) => {
				const videos = props.playlists[playlist];

				return (
					<section key={playlist}>
						<h2>{playlist}</h2>
						<div>
							{videos
								.filter((video) => {
									const titleNormalized = video.title.toLowerCase();
									const searchValueNormalized = valorDoFiltro.toLowerCase();
									return titleNormalized.includes(searchValueNormalized);
								})
								.map((video) => {
									return (
										<a key={video.title} href={video.url} target="_blank">
											<img src={video.thumb} />
											<span>{video.title}</span>
										</a>
									);
								})}
						</div>
					</section>
				);
			})}
		</StyledTimeline>
	);
}
