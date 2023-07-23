export function tabs() {
    const tabsContainer = document.querySelector('.replica__tabs-container');
    const tabsList = tabsContainer.querySelector('.replica__tabs-list');
    const tabButtons = tabsList.querySelectorAll('.tab');
    const tabPanels = document.querySelectorAll('.replica__tabs-panels');

    tabsList.setAttribute("role", "tablist");

    tabsList.querySelectorAll("li").forEach((listitem) => {
        listitem.setAttribute("role", "presentation");
    });

    tabButtons.forEach((tab, index) => {
        tab.setAttribute("role", "tab");
        if (index === 0) {
            tab.setAttribute("aria-selected", "true");
          // we'll add something here
        } else {
            tab.setAttribute("tabindex", "-1");
            tabPanels[index].setAttribute("hidden", "");
        }
    });

    tabPanels.forEach((panel) => {
        panel.setAttribute("role", "tabpanel");
        panel.setAttribute("tabindex", "0");
    });

    tabsContainer.addEventListener('click', (event) => {
        const clickedTab = event.target.closest('a');

        if (!clickedTab) return;
        event.preventDefault();

        switchTab(clickedTab);
    })

    tabsContainer.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowLeft":
                moveLeft();
                break;
            case "ArrowRight":
                moveRight();
                break;
            case "Home":
                e.preventDefault();
                switchTab(tabButtons[0]);
                break;
            case "End":
                e.preventDefault();
                switchTab(tabButtons[tabButtons.length - 1]);
                break;
        }
    });

    function moveLeft() {
        const currentTab = document.activeElement;
        if (!currentTab.parentElement.previousElementSibling) {
            switchTab(tabButtons[tabButtons.length - 1]);
        } else {
            switchTab(
                currentTab.parentElement.previousElementSibling.querySelector("a")
            );
        }
    }

    function moveRight() {
        const currentTab = document.activeElement;
        if (!currentTab.parentElement.nextElementSibling) {
            switchTab(tabButtons[0]);
        } else {
            switchTab(currentTab.parentElement.nextElementSibling.querySelector("a"));
        }
    }

    function switchTab(newTab) {
        const activePanelId = newTab.getAttribute("href");
        const activePanel = document.querySelector(activePanelId);

        tabButtons.forEach((button) => {
            button.setAttribute("aria-selected", false);
            button.setAttribute("tabindex", "-1");
        });

        tabPanels.forEach((panel) => {
            panel.hidden = true
        });

        activePanel.hidden = false

        newTab.setAttribute("aria-selected", true);
        newTab.setAttribute("tabindex", "0");
        newTab.focus();
    }
}