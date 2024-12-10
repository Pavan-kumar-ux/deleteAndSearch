import styled from 'styled-components'

export const BgContainer = styled.div`
background-color:#152850;
min-height:100vh;
display:flex;
flex-direction:column;
`
export const ArtistBg = styled.div`
background-image:url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
background-size:cover;
height:400px;
width:100%;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:flex-end;
padding-left:30px;
padding-bottom:30px;
`

export const ArtistName = styled.h1`
color:#ffffff;
margin-bottom:0;
padding-bottom:0;
`
export const ArtistInfo = styled.p`
color:#ffffff;
padding-top:0;
margin-bottom:0;
`
export const PlayListContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 50px;
margin-right: 50px;
`

export const PlayListHeading = styled.h1`
font-family: 'Roboto';
color: #ffffff;
font-size: 32px;
font-weight: bold;`

export const SearchInput = styled.input`
height: 30px;
width: 18%;
padding-left: 15px;
color: #cbd5e1;
border: 1px solid #ffffff;
border-radius: 4px;
background-color: transparent;
outline: none;
cursor: pointer;`

export const MusicList = styled.ul`
padding: 0;
margin-left: 50px;
margin-right: 50px;`

export const EmptyContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;`

export const NoSongsText = styled.p`
font-family: 'Roboto';
color: #ffffff;
font-size: 32px;
font-weight: bold;`
