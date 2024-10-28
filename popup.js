async function run(){
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true }); //query chrome tabs, pulls out active tab
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: getPageContent,
    },  async (results) => {
        const content = results[0].result;
        alert(content);
    }
    );
}

document.getElementById("summarizeButton").addEventListener("click", run);

function getPageContent(){
    return document.body.innerText;
}