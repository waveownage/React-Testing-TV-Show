import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

const mockEpisodes = [
    {
       id:553946,
       url:"http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
       name:"Chapter One: The Vanishing of Will Byers",
       season:1,
       number:1,
       airtime:"",
       runtime:60,
    },
    {
       id:578663,
       url:"http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
       name:"Chapter Two: The Weirdo on Maple Street",
       season:1,
       number:2,
       airtime:"",
       runtime:60,
    },
]

test("Episodes renders correctly", () => {
    const { queryAllByText, rerender } = render(
      <Episodes error="" episodes={[]} />
    );
  
	let episodeList = queryAllByText(/season/i);
	expect(episodeList).toHaveLength(0);
  
    rerender(<Episodes error="" episodes={mockEpisodes} />);

    episodeList = queryAllByText(/season/i);
    expect(episodeList).toHaveLength(2);
  });