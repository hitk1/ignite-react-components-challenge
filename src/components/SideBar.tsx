import { Button } from "./Button";

import { GenreResponseProps } from "../App";

interface GenreProps {
  handleClick: (id: number) => void
  genres: GenreResponseProps[]
  selectedGenreId: number
}

export function SideBar({ genres, selectedGenreId, handleClick }: GenreProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}