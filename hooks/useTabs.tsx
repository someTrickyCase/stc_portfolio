import { writeCustomStore } from "@/store/customStore";
import { useState } from "react";

let currentTabIndex = 0;

export default function useTabs() {
    const [tabState, _setTabState] = useState({ title: "about", index: 0 });

    function setTabState(tab: { title: string; index: number }) {
        if (currentTabIndex - tab.index < 0) writeCustomStore("backward");
        if (currentTabIndex - tab.index > 0) writeCustomStore("forward");
        if (currentTabIndex - tab.index === 0) writeCustomStore("");

        currentTabIndex = tab.index;
        _setTabState(tab);
    }

    return { tabState, setTabState };
}
