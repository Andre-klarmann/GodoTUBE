import user from "../user-config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSGlobal";
import Menu from "../src/components/menu";
import { StyledTimeline } from "../src/components/timeline";


export default function Home() {
  return (
  <>
  <CSSReset />
    <div style={{
      display:"flex",
      flexDirection: "column",
      flex: 1
    }
  }>
      
      <Menu />
      <Header />
      <Timeline playlists={user.playlists} />
    </div>
    </>
  );
}


const StyledHead = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
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

function Timeline(props) {
  const playlistsNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistsNames.map((playlist) => {
        const videos = props.playlists[playlist];
        return (
          <section>
            <h2>{playlist}</h2>
            <div>
            {videos.map((video) => {
              return (
                <a href={video.url} target="blank">
                  <img src={video.thumb} />
                  <span>{video.title}</span>
                </a>
              )
            })}</div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
