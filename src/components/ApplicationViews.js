import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./event/EventList.js"
import { EventForm } from "./event/EventForm.js";
import { GameList } from "./game/GameList.js"
import { GameForm } from "./game/GameForm.js"
import { Profile } from "./auth/Profile.js"
import { GameProvider } from "./game/GameProvider.js"
import { EventProvider } from "./event/EventProvider.js"
import { ProfileProvider } from "./auth/ProfileProvider.js";

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <GameProvider>
                <EventProvider>
                    <Route exact path="/">
                        <GameList />
                    </Route>
                    <Route exact path="/games">
                        <GameList />
                    </Route>
                    <Route exact path="/games/new">
                        <GameForm />
                    </Route>
                    <Route exact path="/games/:gameId(\d+)/edit">
                        <GameForm />
                    </Route>
                    <Route exact path="/events">
                        <EventList />
                    </Route>
                    <Route exact path="/events/new">
                        <EventForm />
                    </Route>
                    <ProfileProvider>
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                    </ProfileProvider>
                </EventProvider>
            </GameProvider>
        </main>
    </>
}
