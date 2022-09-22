import React from "react"

import Header from "./components/Header"
import Content from "./components/Content"
import Image from "./components/Image"
import Card from "./components/Card"

function App() {
    return (
        <div style={{margin: '20px'}}>
            <Header/>
            <Content/>
            <Image/>
            <div style={{display: 'flex', marginTop: '50px'}}>
                <Card image="https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png" title="Apple" cost="2" />
                <Card image="https://i.pinimg.com/736x/05/79/5a/05795a16b647118ffb6629390e995adb.jpg" title="Orange" cost="3" />
                <Card image="https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg" title="Kiwi" cost="7" />
                <Card image="data:image/jpeg;base64,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" title="Pineapple" cost="10" />
                <Card image="https://www.simplyrecipes.com/thmb/_zP3bxkOFCm0DulHWkMlWRloaTo=/1800x1200/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2005__11__pomegranate-horiz-a-1800-aabd491ecf0c4c1981406b571220cbfb.jpg" title="Pomegranate" cost="8" />
                <Card image="data:image/jpeg;base64,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" title="Coconut" cost="11" />
            </div>
        </div>
    )
}

export default App