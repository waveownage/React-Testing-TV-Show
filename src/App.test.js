import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";
import { fetchShow as mockFetchShow } from './api/fetchShow';

jest.mock('./api/fetchShow.js');

const Show = {
    Data: [
    {
    id: 1,
    image: {medium: "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"},
    language: "English",
    name: "Stranger Things",
    network: null,
    officialSite: "https://www.netflix.com/title/80057281",
    premiered: "2016-07-15",
    rating: {average: 8.7},
    runtime: 60,
    status: "Running",
    summary: "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    type: "Scripted",
    updated: 1586341552,
    url: "http://www.tvmaze.com/shows/2993/stranger-things",
    webChannel: {id: 1, name: "Netflix", country: null},
    weight: 99,
    },
    {
    id: 3,
    image: {medium: "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"},
    language: "English",
    name: "Stranger Things",
    network: null,
    officialSite: "https://www.netflix.com/title/80057281",
    premiered: "2016-07-15",
    rating: {average: 8.7},
    runtime: 60,
    status: "Running",
    summary: "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    type: "Scripted",
    updated: 1586341552,
    url: "http://www.tvmaze.com/shows/2993/stranger-things",
    webChannel: {id: 1, name: "Netflix", country: null},
    weight: 99,
    },
    {
    id: 2,
    image: {medium: "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"},
    language: "English",
    name: "Stranger Things",
    network: null,
    officialSite: "https://www.netflix.com/title/80057281",
    premiered: "2016-07-15",
    rating: {average: 8.7},
    runtime: 60,
    status: "Running",
    summary: "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    type: "Scripted",
    updated: 1586341552,
    url: "http://www.tvmaze.com/shows/2993/stranger-things",
    webChannel: {id: 1, name: "Netflix", country: null},
    weight: 99,
    }
    ]
}


test('renders App without crashing', async () => {
    mockFetchShow.mockResolvedValueOnce(Show);

    const { getByText, getAllByText } = render(<App />);
    
    await wait(() => expect(getByText(/select a season/i)));

    const dropdown = getByText(/select a season/i);
    fireEvent.click(dropdown);
 
    await wait(() => expect(getAllByText(/season/i)).toHaveLength(1)
    )
})

